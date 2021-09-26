import styled from "styled-components";

const bgColor = "#fff2e0";
const width = "100%";

export const Box = styled.div`
  padding: 80px 60px;
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-decoration: underline;
`;

export const InputText = styled.input`
  padding: 1em;
  margin: 8px 10px;
  color: black;
  background: ${bgColor};
  border: none;
  border-radius: 3px;
  width: ${width};
  display: inline-block;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  padding: 1em;
  margin: 8px 10px;
  color: black;
  background: ${bgColor};
  border: none;
  border-radius: 3px;
  width: ${width};
  display: inline-block;
  box-sizing: border-box;
`;
export const InputNumber = styled.input`
  padding: 1em;
  margin: 8px 10px;
  color: black;
  background: ${bgColor};
  border: none;
  border-radius: 3px;
  width: ${width};
  display: inline-block;
  box-sizing: border-box;
`;

export const Label = styled.label`
  padding: 0.5em;
`;

export const Button = styled.button`
  background: ${bgColor};
  color: black;
  font-size: 1em;
  margin: 1em 10px;
  padding: 0.25em 1em;
  border: 2px solid ${bgColor};
  border-radius: 3px;
  position: absolute;
  left: 0;
  bottom: -50px;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  width: 80%;
  position: relative;
  margin: 0 auto;
`;

export const ErrorMessage = styled.div`
  background-color: orange;
  width: 100%;
  height: 20px;
  margin-left: 10px;
`;
