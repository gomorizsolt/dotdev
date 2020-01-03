# c-hive.dev

A Next.js SPA website to showcase ourselves: https://c-hive.github.io/c-hive.dev/

## Local development

```bash
npm install
npm run dev
```
## Configuration 📁

Below you'll find a description of what each option does.

#### Example configuration

```
{
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
| `proxyURL`  | Your proxy url. | `string / url` | **No** |
| `teamContributionCalendarUsers`  | GitHub-like contribution calendar for the whole team. Supports GitHub and GitLab, **[you can learn more here](https://github.com/c-hive/team-contribution-calendar)**. | `object` | **No** |
| `medium`  | Display articles from a Medium user.  | `string` | **No** |
| `github`  | Here you can add github repos that you want to show. | `object` | **no** |


## Example SPA website project structure

```
.
├── pages
│   └── _document.js
│   └── index.js
├── settings
│   └── settings.json
├── src
│   ├── common
│   │   └── GlobalStyle
│   ├── components
│   │   └── App
│   │       ├── App.js
│   │       └── App.style.js
│   ├── resources
│   ├── utils
├── static
│   └── images, fonts, ...
├── next.config.js
├── package.json
├── README.md
```

## Special folders

- `settings`
  - Configuration file for setup the project.
- `src/common`
  - style files applied to the whole project
- `src/components`
- `src/resources`
  - Json data files, hardcoded data (e.g. `Themes, Breakpoints`)
- `src/utils`
  - Non-UI / non-component / utility features not tightly linked to the specific project. Reusable, generic purpose functions (e.g. `Api`, `CorsProxy`)

## Grouping
- Files are grouped by functionality (components) in folders.
- Each component should contain its related files.
- Files can be logically groupped into more folders (e.g. `external/users` and `internal/users`).

For Issues and PRs older than 2019.11.16 refer to: https://gitlab.com/c-hive/c-hive.dev and https://github.com/c-hive/c-hive.dev/issues/35#issuecomment-555021380
