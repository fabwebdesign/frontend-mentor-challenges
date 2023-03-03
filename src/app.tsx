import React from "react";
import { Route, Routes } from "react-router-dom";
import { QRCodePage } from "./challenges";
import { Home } from "./pages";
import GlobalStyle from "./theme/globalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges/qr-code-component" element={<QRCodePage />} />
      </Routes>
    </>
  );
};
