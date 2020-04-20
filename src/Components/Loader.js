import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  color: ${({ theme: { theme } }) => theme.loader};
  justify-content: center;
  margin-top: 20px;
`;

export default () => (
  <Container>
    <div>
      <i className="fas fa-spinner fa-2x fa-spin" />
    </div>
  </Container>
);
