import styled from "styled-components";

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.White};
  height: 400px;
  max-width: 800px;
  width: 90vw;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  margin: 2rem auto;
  display: flex;
  font-size: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
    margin-bottom: 0;
    align-items: center;
  }

  @media (max-width: 500px) {
    width: 100vw;
    font-size: 20px;
    border-radius: 0;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
  }
`;

export const BillingComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-height: 100%;
  padding: 1rem;
  justify-content: space-between;
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 20px;
    min-height: 40vh;
  }
`;

export const DisplayComponent = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  width: 40%;
  max-height: 90%;
  background: ${({ theme }) => theme.colors.VeryDarkCyan};
  border-radius: 15px;
  padding: 1em;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 80%;
    margin: 24px auto;
    min-height: 40vh;
  }
`;

export const Bill = styled.div`
  p {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.DarkGrayishCyan2};
  }

  .input {
    width: 100%;
    background: ${({ theme }) => theme.colors.LightGrayishCyan2};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 4px;
    border-radius: 8px;
    margin: 4px 0;
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.VeryDarkCyan};
    text-align: end;
    font-weight: bold;
    position: relative;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SelectTip = styled.div`
  p {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.DarkGrayishCyan2};
  }

  .tip {
    margin: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .tip_value {
      background-color: ${({ theme }) => theme.colors.VeryDarkCyan};
      outline: none;
      border: none;
      color: ${({ theme }) => theme.colors.White};
      padding: 10px 0;
      border-radius: 5px;
      margin: 5px 4px;
      cursor: pointer;
      transition: background 0.1s ease;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const People = styled.div`
  p {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.DarkGrayishCyan2};
  }

  .input {
    width: 100%;
    background: ${({ theme }) => theme.colors.LightGrayishCyan2};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 4px;
    border-radius: 8px;
    margin: 4px 0;
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.VeryDarkCyan};
    text-align: end;
    font-weight: bold;
    position: relative;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Reset = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.strongCyan};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.VeryDarkCyan};
  padding: 10px 0;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.1s ease;

  &:hover,
  &:focus {
    background: hsl(172, 67%, 50%);
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  p {
    color: white;
    position: relative;

    &::after {
      content: "/ Person";
      position: absolute;
      font-size: 15px;
      color: ${({ theme }) => theme.colors.DarkGrayishCyan2};
      bottom: -18px;
      left: 0;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.strongCyan};
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: white;
    position: relative;

    &::after {
      content: "/ Person";
      position: absolute;
      font-size: 15px;
      color: ${({ theme }) => theme.colors.DarkGrayishCyan2};
      bottom: -18px;
      left: 0;
    }
  }
  h2 {
    color: ${({ theme }) => theme.colors.strongCyan};
  }
`;

export const CustomTip = styled.div`
  position: absolute;
  width: 300px;
  height: fit-content;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  padding: 1rem;
  .inputAmount {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 18px;

    button {
      background: ${({ theme }) => theme.colors.strongCyan};
      outline: none;
      border: none;
      padding: 10px;
      font-weight: bold;
      width: 200px;
      border-radius: 10px;
      cursor: pointer;
    }

    input {
      outline: none;
      border: none;
      padding: 10px;
      background: ${({ theme }) => theme.colors.VeryDarkCyan};
      color: white;
      font-weight: bold;
      border-radius: 10px;
      &::placeholder {
        color: white;
        font-weight: normal;
      }
    }
  }
`;
