import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { dateState } from "../atoms/date";
import { todoAtomFamily } from "../atoms/todo";
import { BsCheckSquareFill } from "react-icons/bs";
import { markState } from "../atoms/mark";

export default function TodoItem({ todo }) {
  const date = useRecoilValue(dateState);
  const [todoList, setTodoList] = useRecoilState(todoAtomFamily(date));
  const [markList, setMarkList] = useRecoilState(markState);

  const { id, text, done } = todo;

  const onToggle = () =>
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );

  const onRemove = () => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
    if (todoList.length === 1) {
      setMarkList([markList.filter((mark) => mark !== date)]);
    }
  };
  console.log(todoList);
  return (
    <Container>
      <TodoText onClick={onToggle} done={done}>
        <BsCheckSquareFill className="check" />
        <span>{text}</span>
      </TodoText>
      <RemoveBtn onClick={onRemove}>
        <AiOutlineClose className="remove" />
      </RemoveBtn>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  align-items: center;
  height: 35px;
  border-bottom: 1px solid #fbdabd;
  padding: 10px 0;
`;

const TodoText = styled.p`
  display: flex;
  align-items: center;
  height: 25px;
  cursor: pointer;
  user-select: none;
  margin: 0 5px;
  .check {
    color: #ddd;
    margin-right: 5px;
  }
  ${({ done }) =>
    done &&
    css`
      .check {
        color: #c9dec2;
      }
    `}
`;

const RemoveBtn = styled.button`
  width: 35px;
  height: 25px;
  border: none;
  background: none;
  color: #ddd;
  line-height: 35px;
  &:hover {
    color: #000;
    cursor: pointer;
  }
  .remove {
    padding: 8px;
    font-size: 2em;
  }
`;
