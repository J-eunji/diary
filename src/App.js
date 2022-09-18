import { useRecoilValue } from "recoil";
import styled, { css, createGlobalStyle } from "styled-components";
import CalendarBox from "./components/CalendarBox";
import TodoBlock from "./components/TodoBlock";
import Memo from "./components/Memo";
import TodoHeader from "./components/TodoHeader";
import { classState, dateState } from "./atoms/date";
import TodoInput from "./components/TodoInput";

function App() {
  const className = useRecoilValue(classState);
  const date = useRecoilValue(dateState);
  return (
    <Container>
      <GlobalStyle />
      <Box>
        <Left>
          <CalendarBox />
        </Left>
        {className.map((name) => (
          <Right key={name} date={date === name}>
            <TodoHeader name={name} />
            <TodoBlock />
            <TodoInput date={date} />
            <Memo />
          </Right>
        ))}
      </Box>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fffefd;
`;

const Box = styled.div`
  width: 1200px;
  height: 700px;
  display: flex;
  position: relative;
`;

const Left = styled.div`
  width: 600px;
  height: 700px;
`;

const Right = styled.div`
  width: 600px;
  height: 700px;
  z-index: 1;
  border-radius: 10px;
  background-color: #fef5ed;
  padding: 25px;
  position: absolute;
  top: 0;
  right: 0;
  ${({ date }) =>
    date &&
    css`
      z-index: 2;
    `};
`;

export default App;
