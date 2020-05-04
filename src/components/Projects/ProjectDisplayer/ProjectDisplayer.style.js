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

export const errorContainerStyle = css`
  margin-bottom: 1.2em;
`;

export const languageIconsWrapperStyle = css`
  margin-top: 5px;

  & > div {
    margin-right: 5px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const languageTextsWrapperStyle = css`
  margin: 4px 2px;

  div {
    display: inline-block;
    margin: 3px 9px 3px 0;
    padding: 0.4em 1em;
    background-color: rgba(247, 176, 84, 1);
    font-size: 0.8em;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    color: #325359;
    white-space: nowrap;
    border-radius: 0.25rem;
    transition: 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`;
