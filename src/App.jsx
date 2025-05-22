import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Faviourite from './pages/Faviourite';

function App() {
  const studentsdetails = [
    { id: 1, name: "Bharath" },
    { id: 2, name: "Praveen" },
    { id: 3, name: "Kumar" },
    { id: 4, name: "Ramya" },
    { id: 5, name: "Monica" }
  ];

  const [favorites, setFavorites] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              students={studentsdetails}
              favorites={favorites}
              setFavorites={setFavorites}
              disabledButtons={disabledButtons}
              setDisabledButtons={setDisabledButtons}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Faviourite
              favorites={favorites}
              setFavorites={setFavorites}
              disabledButtons={disabledButtons}
              setDisabledButtons={setDisabledButtons}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
