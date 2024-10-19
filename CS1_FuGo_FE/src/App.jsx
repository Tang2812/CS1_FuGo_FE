import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';

import Layout from './Layout.jsx';
import HomePage from './components/Homepage/Homepage.jsx';
import News from './components/News/News.jsx';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import DetailNews from './components/News/DetailNews/DetailNews.jsx';
import Search from './components/Search/Search.jsx';

const NotFound = () => {
  return (
    <div className="page-not-found" role="alert" >
      404. NOT FOUND
    </div>
  )
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<News />} />
          <Route path="detail-news" element={<DetailNews />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
