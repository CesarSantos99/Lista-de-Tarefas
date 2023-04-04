import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Container = styled.div`
  background: #1E90FF;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;

  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color:#0000CD;
  }
`;

export const Input = styled.input`
  padding: 10px 26px;
  width: 224px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #0000CD;

  &::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #0000CD;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  width: 112px;
  height: 50px;
  background: #0000CD;
  border-radius: 10px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fbfbfb;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  width: 354px;
  min-height: 50px;
  background: ${(props) => (props.checked ? "#0000CD" : "#FFFFFF")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};

    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }

  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
  }
`;