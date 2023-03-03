import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layout";

export const Home = () => {
  return (
    <MainLayout>
      <nav>
        <ul>
          <li>
            <Link to="/challenges/qr-code-component">QR Code Component</Link>
          </li>
        </ul>
      </nav>
    </MainLayout>
  );
};
