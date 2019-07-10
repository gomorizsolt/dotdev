import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: rgb(23, 29, 41);
  color: #fff;

  & > img {
    max-height: 75px;
    max-width: 75px;
    margin: 20px 15px 20px 40px;
  }

  & > p {
    font-size: 1.5em;
    font-weight: bold;
  }
`;
