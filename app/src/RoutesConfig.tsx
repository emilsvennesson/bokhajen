import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Article from './pages/Article';
import AuthTest from './pages/AuthTest';
import CreateAd from './pages/CreateAd';
import Home from './pages/Home';
import Login from './pages/login/Login';

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="authtest" element={<AuthTest />} />
      <Route path="ad" element={<CreateAd />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
