import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(24, 24, 24);
  background: linear-gradient(
    324deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(48, 48, 48, 1) 100%
  );
`;

export const Content = styled.div`
  width: 65%;
`;

export const CSVRender = styled.div`
  display: flex;
  flex-direction: column;
`;
