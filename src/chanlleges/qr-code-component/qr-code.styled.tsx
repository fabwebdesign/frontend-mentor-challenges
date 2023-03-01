import styled, { css } from "styled-components";

export default styled.div`
  ${() => {
    return css`
      font-family: "Outfit", sans-serif;
      background-color: hsl(212, 45%, 89%);
      height: 100vh;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1.6rem;
      .qr-code__card {
        width: 100%;
        max-width: 32rem;
        padding: 1.6rem 1.6rem 3.2rem 1.6rem;
        border-radius: 1.6rem;
        background-color: hsl(0, 0%, 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .qr-code__wrapper {
        width: 100%;
        background-color: #2b7dfa;
        border-radius: 0.8rem;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .qr-code__content {
        max-width: 30rem;
        width: 100%;
        margin: 0 auto;
        padding: 0 1.4rem;
      }
      .qr-code__title {
        color: hsl(218, 44%, 22%);
        line-height: 2.4rem;
        font-size: 2rem;
        font-weight: 700;
        margin: 1.6rem 0;
      }
      .qr-code__text {
        color: hsl(220, 15%, 55%);
        line-height: 2.4rem;
        font-size: 1.5rem;
        font-weight: 400;
      }
    `;
  }}
`;
