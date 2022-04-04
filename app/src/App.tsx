import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;