import React, { useState, useRef, useEffect } from "react";
import "../stylesheet/chatbot.css"; // Đảm bảo rằng bạn đã có file CSS này

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi there! How may I help you?" }
    ]);
    const [inputText, setInputText] = useState("");
    const chatboxRef = useRef(null);
    const inputRef = useRef(null);

    //const API_KEY = "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"; // Thay thế bằng API Key của bạn
    const API_KEY = "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"; // Thay thế bằng API Key của bạn

    const toggleChatbot = () => {
        console.log("Toggling chatbot"); 
        setIsOpen(!isOpen)
    };

    const createChatMessage = (message, sender) => {
        return { sender, text: message };
    };

    const handleSendMessage = () => {
        const userMessage = inputText.trim();
        if (!userMessage) return;

        setMessages([...messages, createChatMessage(userMessage, "user")]);
        setInputText("");

        const thinkingMessage = createChatMessage("Thinking...", "bot");
        setMessages((prevMessages) => [...prevMessages, thinkingMessage]);

        generateResponse(userMessage);
    };

    const generateResponse = async (userMessage) => {
        const API_URL = "https://api.openai.com/v1/chat/completions";

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: userMessage }]
                })
            });
            const data = await response.json();

            if (data.choices && data.choices.length > 0) {
                const botMessage = data.choices[0].message.content;
                setMessages((prevMessages) => [
                    ...prevMessages.slice(0, -1),
                    createChatMessage(botMessage, "bot")
                ]);
            }
        } catch (error) {
            setMessages((prevMessages) => [
                ...prevMessages.slice(0, -1),
                createChatMessage("Oops! Something went wrong. Please try again later.", "bot")
            ]);
        } finally {
            if (chatboxRef.current) {
                chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
            }
        }
    };

    const handleInputResize = () => {
        if (inputRef.current) {
            inputRef.current.style.height = "auto";
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        handleInputResize();
    }, [inputText]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("show-chatbot");
        } else {
            document.body.classList.remove("show-chatbot");
        }
    }, [isOpen]);
    

    return (
        <div>
            <button className="chatbot-toggler" onClick={toggleChatbot}>
                <span className="material-symbols-outlined">mode_comment</span>
                <span className="material-symbols-outlined">close</span>
            </button>
            {isOpen && (
                <div className="chatbot">
                    <header>
                        <h2>Chatbot</h2>
                        <span className="close-btn material-symbols-outlined" onClick={toggleChatbot}>
                            close
                        </span>
                    </header>
                    <ul className="chatbox" ref={chatboxRef}>
                        {messages.map((message, index) => (
                            <li key={index} className={`chat ${message.sender === "bot" ? "incoming" : "outgoing"}`}>
                                <span className="material-symbols-outlined">
                                    {message.sender === "bot" ? "smart_toy" : "person"}
                                </span>
                                <p>{message.text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="chat-input">
                        <textarea
                            placeholder="Enter a message..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage();
                                }
                            }}
                            ref={inputRef}
                            required
                        ></textarea>
                        <span id="send-btn" className="material-symbols-outlined" onClick={handleSendMessage}>
                            send
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
