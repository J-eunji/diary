import { useState } from "react";
import styled from "styled-components";

export default function Memo() {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  return (
    <Container>
      <input type={"text"} onChange={(e) => onChange(e)} value={value} />
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid #000;
`;
