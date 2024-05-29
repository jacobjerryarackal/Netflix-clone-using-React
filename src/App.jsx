import React from "react";
import HomePage from "./Pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import Player from "./Pages/Player/Player";
import Comments from "./Pages/Comments/Comments";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/comment" element={<Comments />} />
      </Routes>
    </>
  );
};

export default App;
