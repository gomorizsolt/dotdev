import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: rgb(23, 29, 41);
  color: #fff;

  & > img {
    max-height: 75px;
    max-width: 75px;
    margin-right: 10px;
  }

  & > p {
    font-size: 2em;
    font-weight: bold;
  }
`;

export const SvgContainer = styled.div`
  width: 700px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #E1E4E8;
  padding: 10px 5px 10px 20px;
  margin: 20px;
`;
