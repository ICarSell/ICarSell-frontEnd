import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 45px 59px;
  p {
    color: white;
  }
  img {
    cursor: pointer;
  }

  @media (max-width: 426px) {
    flex-direction: column;
    gap: 60px;
  }
`;
