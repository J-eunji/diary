import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { todoAtomFamily, undoneCountFamily } from "../atoms/todo";
import { dateState } from "../atoms/date";

export default function Header({ name }) {
  const date = useRecoilValue(dateState);
  const count = useRecoilValue(undoneCountFamily(date));
  const todoList = useRecoilValue(todoAtomFamily(date));
  return (
    <Container>
      <h2>{name}</h2>
      {todoList.length !== 1 ? (
        count === 0 ? (
          <p>할 일 모두 완료!</p>
        ) : (
          <p>할 일: {count}개</p>
        )
      ) : (
        <p>아직 할 일을 작성하지 않았습니다.</p>
      )}
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
