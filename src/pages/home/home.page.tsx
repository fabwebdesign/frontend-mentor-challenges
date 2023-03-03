import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layout";
import styled, { css } from "styled-components";
import HomeStyled from "./home.styled";

const ArrowStyled = styled.div`
  ${() => {
    return css`
      background-color: #fff;
      height: 3.2rem;
      width: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    `;
  }}
`;

const Arrow = ({ className }: { className?: string }) => {
  return (
    <ArrowStyled className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
      >
        <path
          fill="#3F3D56"
          fill-rule="evenodd"
          d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708Z"
          clip-rule="evenodd"
        />
      </svg>
    </ArrowStyled>
  );
};

export const Home = () => {
  return (
    <MainLayout>
      <HomeStyled>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="none"
          >
            <rect width="200" height="200" fill="#fff" rx="50" />
            <path
              fill="#67BECE"
              d="M170.428 102.801a4.63 4.63 0 0 1-1.873-.396L129.288 84.82a4.581 4.581 0 0 1 0-8.356l39.267-17.523a4.586 4.586 0 0 1 6.045 2.311 4.592 4.592 0 0 1-2.318 6.045l-29.917 13.351 29.923 13.4a4.577 4.577 0 0 1 2.612 5.13 4.579 4.579 0 0 1-4.472 3.623Z"
            />
            <path
              fill="#3F54A3"
              d="M116.912 166.594c-43.17 0-80.914-29.143-91.764-70.874a4.573 4.573 0 0 1 8.85-2.306 85.657 85.657 0 0 0 82.914 64.031 4.574 4.574 0 1 1 0 9.149Z"
            />
            <path
              fill="#67BECE"
              d="M101.152 128.608a4.574 4.574 0 0 1-4.575-4.575V37.075a4.574 4.574 0 0 1 9.15 0v86.958a4.576 4.576 0 0 1-4.575 4.575Z"
            />
          </svg>
          <nav>
            <ul role="list">
              <li>
                <Link to="/challenges/qr-code-component">
                  <Arrow className="arrow" />
                  QR Code Component
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </HomeStyled>
    </MainLayout>
  );
};
