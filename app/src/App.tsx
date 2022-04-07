import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Cards from './components/Cards';
import Article from './pages/Article';
import { mainTheme } from './theme';

import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/700.css';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
