import Homepage from "../pages/Homepage";
import Favorites from "../pages/Favorites";
import Header from "../components/Header";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import type { ReactElement } from "react";

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
