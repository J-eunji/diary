import styled from "styled-components";

export default function CheckList() {
  return (
    <Container>
      <input type={"text"} />
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid #000;
`;
