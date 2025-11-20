import type React from "react";
import { ReactElement, ReactNode, createContext, useState } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Mina } from "./components/Mina";
import { Navigation } from "./components/navigation/Navigation";
import { Projektit } from "./components/Projektit";
import { Some } from "./components/Some";
import logo from "./components/logo/pnlogo11.png";
import NavigationNew from "./components/navigation/NavigationNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Context: React.Context<any> = createContext(undefined);

const App: React.FC = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();
  const paths = ["", "about", "projects"];

  return (
    <div>
      <div id="wrapper">
        <div id="header">
          <h2>
            <img src={logo} alt="No logo" />
          </h2>
        </div>
        <NavigationNew pathName={paths} />
        <Routes>
          <Route path="portfolio">
            <Route index element={<Main />} />
            <Route path="about" element={<Mina />} />
            <Route path="projects" element={<Projektit />} />
          </Route>
        </Routes>
        <div id="footer">
          <p>© Petri Nykänen {currentYear}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
