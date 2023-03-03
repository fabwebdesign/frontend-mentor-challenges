import React from "react";
import { Helmet } from "react-helmet";
import { QRCodeComponent } from "./qr-code.component";

export const QRCodePage = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <QRCodeComponent />
    </>
  );
};
