# c-hive.dev

A Next.js SPA website to showcase ourselves: https://c-hive.github.io/c-hive.dev/

## Local development

```bash
npm install
npm run dev
```

## Configuration

Replace
- `settings/settings.json`
- `public/favicon.ico`
- `public/static/logo/logo.png`

### Example

```
{
  "name": "Example Name",
  "logo": "static/logo/logo.png",
  "technologyIcons": {
    "react": {"name": "React", "icon": "static/svg/react.svg"},
    "javascript": {"name": "Javascript", "icon": "static/svg/js.svg"}
  },
  "socialIcons": {
    "github": { "name": "Github", "icon": "static/svg/github.svg" },
    "medium": { "name": "Medium", "icon": "static/svg/medium.svg" }
  },
  "display": "icon",
  "proxyURL": "https://example-proxy.com",
  "header": {
    "technologies": ["javascript", "react"],
    "teamMembers": [
      { "name": "Example Member1", "link": "https://github.com/examplemember1" },
      { "name": "Example Member2", "link": "https://github.com/examplemember2" }
    ],
    "socialLinks": [
      { "name": "medium", "link": "https://medium.com/" },
      { "name": "github", "link": "https://github.com/" }
    ]
  },
  "productsTitle": "Project showcase",
  "products": [
    {
      "name": "First product",
      "cover": "static/images/first-cover.jpg",
      "description": "First product description",
      "technologies": ["react", "javascript"],
      "socialLinks": [
        { "name": "medium", "link": "https://medium.com/" },
        { "name": "github", "link": "https://github.com/" }}
      ]
    },
    {
      "name": "Second product",
      "cover": "static/images/second-cover.jpg",
      "description": "Second product description",
      "technologies": ["react", "javascript"],
      "socialLinks": [
        { "name": "medium", "link": "https://medium.com/" },
        { "name": "github", "link": "https://github.com/" }}
      ]
    }
  ],
  "teamContributionCalendarUsers": {
    "github": ["exampleuser1", "exampleuser2"],
    "gitlab": ["exampleuser1", "exampleuser2"]
  },
  "medium": "examplemediumuser",
  "github": {
    "name": "examplegithubuser",
    "languageThreshold": 10,
    "repos": ["examplegithubrepo1", "examplegithubrepo2"]
  }
}
```

#### Below you'll find a description of what each option does.

| Key                             | Value Information                                                                                                                                                      | Type                   | Required |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | -------- |
| `name`                          | Team/user/company name.                                                                                                                                                | `string`               | **No**   |
| `logo`                          | Team/user/company logo.                                                                                                                                                | `string / path to img` | **No**   |
| `technologyIcons`               | Path to the used technology icons (img or svg).                                                                                           | `object`               | **No**   |
| `socialIcons`               | Path to the used social icons (img or svg).                                                                                           | `object`               | **No**   |
| `display`                       | The given technologies should be shown by name or by logo. It accepts two states: "icon" or "name"                                                                     | `string`               | **No**   |
| `proxyURL`                      | CORS proxy url. Required for Medium API access E.g. https://github.com/c-hive/cors-proxy                                                                               | `string / url`         | **No**   |
| `header.technologies`           | Technologies used by team/user/company.                                                                                                                                | `array`                | **No**   |
| `header.teamMembers`            | Team member(s) name and link.                                                                                                                                          | `object`               | **No**   |
| `header.socialLinks`            | Team online presence.                                                                                                                                          | `object`               | **No**   |
| `productsTitle`                      | Change products block title. Default value: "Products"                                                                               | `string`         | **No**   |
| `products.name`            | Product name. (This is required if you create a product entry)                                                                                                                                          | `string`               | **Yes**   |
| `products.cover`            | Product cover image.                                                                                                                                          | `string / path to img`               | **No**   |
| `products.description`            | Product description                                                                                                                                          | `string`               | **No**   |
| `products.technologies`            | Technologies used by the product.                                                                                                                                          | `array`               | **No**   |
| `products.socialLinks`            | Product online presence.                                                                                                                                          | `object`               | **No**   |
| `teamContributionCalendarUsers` | GitHub-like contribution calendar for the whole team. Supports GitHub and GitLab, **[you can learn more here](https://github.com/c-hive/team-contribution-calendar)**. | `object`               | **No**   |
| `medium`                        | Medium user/publication name.                                                                                                                                          | `string`               | **No**   |
| `github.name`                        | GitHub user/organization name.                                                                                                                  | `string`               | **No**   |
| `github.languageThreshold`                        | Displays repository languages which are higher than a percent (by default 10%).                                                                                                                     | `integer`               | **No**   |
| `github.repos`                        | GitHub user/organization repository name(s).                                                                                                                  | `array`               | **No**   |

Note:
- Leading slashes for static resources might work locally but fail in production

## Conventions

This project follows [C-Hive guides](https://github.com/c-hive/guides) for code style, way of working and other development concerns.

---

For Issues and PRs older than 2019.11.16 refer to: https://gitlab.com/c-hive/c-hive.dev and https://github.com/c-hive/c-hive.dev/issues/35#issuecomment-555021380
