import { Routes, Route } from 'react-router-dom';
import Article from './pages/Article';
import BookDetailView from './pages/bookdetailview/BookDetailView';
import Home from './pages/home/Home';
import InvalidPage from './pages/InvalidPage';
import Login from './pages/login/Login';
import SellingPage from './pages/SellingPage/SellingPage';
import SignUp from './pages/signup/SignUp';
import RequireAuth from './RequireAuth';

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="books/:uid" element={<BookDetailView />} />
      <Route
        path="login"
        element={
          <RequireAuth loggedIn={false}>
            <Login />
          </RequireAuth>
        }
      />
      <Route
        path="signup"
        element={
          <RequireAuth loggedIn={false}>
            <SignUp />
          </RequireAuth>
        }
      />

      <Route
        path="sell"
        element={
          <RequireAuth>
            <SellingPage />
          </RequireAuth>
        }
      />

      <Route path="*" element={<InvalidPage />} />
    </Routes>
  );
}
