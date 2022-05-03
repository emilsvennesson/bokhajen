import { Routes, Route } from 'react-router-dom';
import Article from './pages/Article';
import AuthTest from './pages/AuthTest';
import Home from './pages/home/Home';
import InvalidPage from './pages/InvalidPage';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="authtest" element={<AuthTest />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<InvalidPage />} />
    </Routes>
  );
}
