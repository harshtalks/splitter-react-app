import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  body{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    background: ${({ theme }) => theme.colors.LightGrayishCyan};
    font-family: 'Space Mono', monospace;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p{
    margin:0;
  }
  html{
    font-size: ${({ theme }) => theme.typography.fontSize}
  }
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;
export const TipBar = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.3em;
  font-size: ${({ theme }) => theme.typography.fontSize};
  color: ${({ theme }) => theme.colors.VeryDarkCyan};

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;
