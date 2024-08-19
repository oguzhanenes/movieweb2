// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import { GlobalProvider } from './context/GlobalState';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} /> {/* Film ID'si ile yönlendirme */}
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
