import styled, { css } from "styled-components";

export default styled.div`
  ${() => {
  return css`
      background-color: #3F3D56;
      height: 100vh;
      > div:first-child {
        max-width: 80rem;
        width: 100%;
        margin: 0 auto;
        padding: 12rem 1.6rem;
        > svg {
          display: block;
          margin: 0 auto;
          margin-bottom: 3.2rem;
        }
      }
      h1 {
        color: #fff;
        max-width: 40rem;
        width: 100%;
        margin: 0 auto 3.2rem;
        text-align: center;
        font-size: 2.4rem;
      }
      ul {
        list-style: none;
        max-width: 40rem;
        width: 100%;
        margin: 0 auto;
          li {
          margin-bottom: 0.8rem;
        }
      }
      a {
        color: #fafafa;
        text-decoration: none;
        display: flex;
        align-items: center;
          > div:first-child {
            margin-right: 1rem;
          }
        &:hover {
          text-decoration: underline;
        }
      }
    `;
  }}
`;
