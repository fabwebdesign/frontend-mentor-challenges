import React from "react";
import QRCodeStyled from "./qr-code.styled";
import QRCode from "react-qr-code";

export const QRCodeComponent = () => {
  return (
    <QRCodeStyled>
      <div className="qr-code__card">
        <div className="qr-code__wrapper">
          <QRCode
            bgColor="#fff"
            fgColor="#2B7DFA"
            value="https://www.frontendmentor.io/home"
            size={160}
          />
        </div>
        <div className="qr-code__content">
          <h1 className="qr-code__title">
            Improve your front-end skills by building projects
          </h1>
          <p className="qr-code__text">
            Scan the QR code to vist Frontend Mentor and take your coding skills
            to the next level
          </p>
        </div>
      </div>
    </QRCodeStyled>
  );
};
