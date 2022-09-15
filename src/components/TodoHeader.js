import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { undoneCountFamily } from "../atoms/todo";
import { dateState } from "../atoms/date";

export default function Header({ name }) {
  const date = useRecoilValue(dateState);
  const count = useRecoilValue(undoneCountFamily(date));

  return (
    <Container>
      <h2>{name}</h2>
      <p>할 일: {count}개</p>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 0 30px;
  h2 {
    font-size: 1.5em;
    margin-bottom: 5px;
  }
`;
