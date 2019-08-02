import { css } from "styled-components";

export const projectDisplayerStyle = css`
  text-align: left;
  margin-bottom: 1.2em;

  .repository_link {
    display: flex;
    /* justify-content: flex-start; */
    /* align-items: center; */
    text-decoration: none;
    flex-direction: column;
  }

  .project_header {
    width: 100%;

    .project_star {
      display: inline-block;
      margin: 0 8px;

      svg {
        width: 12px;
        height: 12px;
      }
    }
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
