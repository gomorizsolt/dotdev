# c-hive.dev

A Next.js SPA website to showcase ourselves: https://c-hive.github.io/c-hive.dev/

## Local development

```bash
npm install
npm run dev
```

## Configuration

`settings/settings.json`

### Example

```
{
  "name": "Example Name",
  "logo": "static/logo/example-logo.png",
  "proxyURL": "https://example-proxy.com",
  "teamContributionCalendarUsers": {
    "github": ["exampleuser1", "exampleuser2"],
    "gitlab": ["exampleuser1", "exampleuser2"]
  },
  "medium": "examplemediumuser",
  "github": {
    "name": "examplegithubuser",
    "repos": ["examplegithubrepo1", "examplegithubrepo2"]
  }
}
```

#### Below you'll find a description of what each option does.


| Key  | Value Information | Type | Required |
| ------------- | ------------- | ------------- | ------------- |
| `name`  | Team/user/company name. | `string` | **No** |
| `logo`  | Team/user/company logo. | `string / path to img` | **No** |
| `proxyURL`  | CORS proxy url. Required for Medium API access E.g. https://github.com/c-hive/cors-proxy | `string / url` | **No** |
| `teamContributionCalendarUsers` | GitHub-like contribution calendar for the whole team. Supports GitHub and GitLab, **[you can learn more here](https://github.com/c-hive/team-contribution-calendar)**. | `object` | **No** |
| `medium` | Medium user/publication name. | `string` | **No** |
| `github` | GitHub user/organization name and repository name(s). | `object` | **No** |

## Conventions

This project follows [C-Hive guides](https://github.com/c-hive/guides) for code style, way of working and other development concerns.

---

For Issues and PRs older than 2019.11.16 refer to: https://gitlab.com/c-hive/c-hive.dev and https://github.com/c-hive/c-hive.dev/issues/35#issuecomment-555021380