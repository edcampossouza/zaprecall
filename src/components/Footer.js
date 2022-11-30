import styled from "styled-components";

export default function Footer({ done, total }) {
  return (
    <FooterStyle>
      {done}/{total} CONCLUÍDOS
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
`;
