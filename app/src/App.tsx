import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Book } from 'cremona/dist/Book';
import CremonaClient from 'cremona';
import { useEffect, useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Article from './pages/Article';
import { mainTheme } from './theme';

import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/700.css';
import BookDetailView from './pages/bookdetailview/BookDetailView';

function App() {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const getBook = async () => {
      const client = new CremonaClient();
      const ding = await client.search('TMV210');
      setBook(ding[0]);
    };

    getBook();
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <NavigationBar />
        <Routes>
          {book ? (
            <Route path="/" element={<BookDetailView newBook={book} />} />
          ) : null}

          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
