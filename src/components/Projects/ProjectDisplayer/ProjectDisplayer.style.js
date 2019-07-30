import { css } from "styled-components";

export const projectDisplayerStyle = css`
  text-align: left;
  margin-bottom: 1.2em;

  .repository_link {
    /* font-size: 0.8em; */
    /* font-style: italic; */
    /* font-weight: 200; */
    /* margin: 0.6em 0 0; */
    text-decoration: none;
  }

  .user_avatar {
    width: 25px;
    height: 25px;
    padding: 0 15px 0 0;
    display: inline-block;
  }

  .repository_name {
    text-transform: uppercase;
    font-size: 1.4em;
    line-height: 1.3em;
    display: inline-block;
  }
`;
