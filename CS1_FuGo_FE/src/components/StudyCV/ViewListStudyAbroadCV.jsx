import React, { useState } from 'react'

const ViewListSudyAbroadCV = () => {
  const [showModal, setShowModal] = useState(false);
  const Modal = ({ showModal, setShowModal }) => {
    if (!showModal) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-50">
                <h2 className="text-2xl font-semibold mb-4">Nhập lời nhắn</h2>
                <textarea
                    className="w-full p-2 border rounded-md mb-4"
                    rows="4"
                    placeholder="Viết lời nhắn của bạn ở đây..."
                ></textarea>
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                        onClick={() => setShowModal(false)}
                    >
                        Đóng
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                        onClick={() => alert('Lời nhắn đã được gửi!')}
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
};
  return (
    <div className="p-8">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => setShowModal(true)}
                >
                    Mở Modal
                </button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
  )
}

export default ViewListSudyAbroadCV