import { todoAtomFamily } from "../atoms/todo";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { dateState } from "../atoms/date";

export default function TodoBlock() {
  const date = useRecoilValue(dateState);
  const todoList = useRecoilValue(todoAtomFamily(date));
  return (
    <Container>
      <TodoBox>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodoBox>
      <TodoInput date={date} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  height: 350px;
  border-radius: 10px;
  background-color: #fffefd;
  padding: 10px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const TodoBox = styled.div`
  flex: 1;
`;
