import { css } from "styled-components";

export const projectDisplayerStyle = css`
  text-align: left;
  margin-bottom: 1.2em;

  .loader {
    margin: 0 auto;
  }

  .repository_link {
    display: flex;
    text-decoration: none;
    flex-direction: column;

    .project_header {
      width: 100%;
      display: flex;
      align-items: center;

      .user_avatar {
        width: 25px;
        height: 25px;
        padding: 7px 11px 11px 0;
        display: inline-block;
      }

      .repository_name {
        text-transform: uppercase;
        font-size: 1.4em;
        line-height: 1.3em;
        display: inline-block;
      }

      .project_star {
        display: inline-block;
        margin: 0 12px;

        svg {
          width: 12px;
          height: 12px;
        }
      }
    }

    .project_description {
      font-size: 1em;
      font-style: italic;
      font-weight: 200;
    }
  }
`;
