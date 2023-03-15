// // import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState('');
  const [season, setSeason] = useState('');

  function handleImgChange(e) {
    setImgUrl(e);
    console.log(e);
    navigate('/form');
  }

  function handleSeasonChange(e) {
    setSeason(e);
    console.log(e);
    navigate('/form');
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            sendformToParent={(e) => {
              handleImgChange(e);
            }}
          />
        }
      />
      <Route path="/result" element={<Result img={imgUrl} season={season} />} />
      <Route
        path="/form"
        element={
          <Form
            img={imgUrl}
            sendSeason={(e) => {
              handleSeasonChange(e);
            }}
          />
        }
      />
    </Routes>
  );
}

export default App;
