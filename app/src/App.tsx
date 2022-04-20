import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Article from './pages/Article';
import { mainTheme } from './theme';
import { FBAuthProvider } from './hooks/FBAuthProvider';

import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/700.css';
import AuthTest from './pages/AuthTest';
import CreateAd from './pages/CreateAd';

function App() {
  return (
    <FBAuthProvider>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="authtest" element={<AuthTest />} />
            <Route path="ad" element={<CreateAd />} />
          </Routes>
        </div>
      </ThemeProvider>
    </FBAuthProvider>
  );
}

export default App;
