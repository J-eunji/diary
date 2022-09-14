import { useRecoilValue } from "recoil";
import styled, { css, createGlobalStyle } from "styled-components";
import CalendarBox from "./components/CalendarBox";
import CheckList from "./components/CheckList";
import Memo from "./components/Memo";
import Header from "./components/Header";
import { classState, dateState } from "./atoms/date";

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
            <Header name={name} />
            <CheckList />
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
  a {
    color: #000;
  }

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Box = styled.div`
  width: 1200px;
  height: 700px;
  background-color: #ddd;
  display: flex;
  position: relative;
`;

const Left = styled.div`
  width: 600px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Right = styled.div`
  width: 600px;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f1f2f4;
  z-index: 1;
  ${({ date }) =>
    date &&
    css`
      z-index: 2;
    `}
`;

export default App;
