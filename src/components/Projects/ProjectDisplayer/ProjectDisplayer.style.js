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
      align-items: baseline;

      .project_title {
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
            margin: 0 2px 0 0;
          }
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

export const repositoryLanguagesStyle = css`
  display: inline-block;
  margin: 4px 2px;

  div {
    display: inline-block;
    padding: 0 1px 0 2px;
    /* color: ${props => props.theme.color}; */
    text-decoration: none;
    line-height: 1.4em;
    transition: 0.3s;

    display: inline-block;
    padding: 0.4em 1em;
    color: #325359;
    background-color: rgba(247, 176, 84, 1);
    font-size: 0.8em;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    margin: 3px 9px 3px 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;
