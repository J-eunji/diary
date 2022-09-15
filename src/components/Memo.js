import { useState } from "react";
import styled from "styled-components";

export default function Memo() {
  const [value, setValue] = useState("");
  const [modify, setModify] = useState(false);
  const [btnName, setbtnName] = useState("확인");
  const onChange = (e) => setValue(e.target.value);
  const onClick = () => {
    setModify(!modify);
    setbtnName(btnName === "확인" ? "수정" : "확인");
  };
  return (
    <Container>
      <h3>메모</h3>
      <InputBox>
        <textarea
          type={"text"}
          onChange={(e) => onChange(e)}
          value={value}
          placeholder="메모할 내용을 작성하세요."
          readOnly={modify}
        />
      </InputBox>
      <BtnMemo onClick={() => onClick()}>{btnName}</BtnMemo>
    </Container>
  );
}

const Container = styled.div`
  width: 550px;
  height: 200px;
  position: relative;
`;

const InputBox = styled.div`
  width: 550px;
  height: 130px;
  border-radius: 10px;
  background-color: #fffefd;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 10px 0;
  textarea {
    width: 530px;
    height: 105px;
    border: none;
    resize: none;
    &:focus {
      outline: 0px;
    }
  }
`;

const BtnMemo = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 30px;
  border: none;
  background-color: #e6f0e3;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #c9dec2;
  }
`;
