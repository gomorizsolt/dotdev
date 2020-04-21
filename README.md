# dotdev

A Next.js SPA professional website template: https://c-hive.github.io/dotdev/

## Local development

```bash
npm install
npm run lint
npm run dev
```

## Usage

Refer to the [example](./config/config.example.yml) file for the available options.

## Deployment

Reading from a committed config file is not supported. Instead, set up a `CONFIG` secret from the values.

*Private* repositories can use the `GITHUB_TOKEN` secret to deploy to GitHub Pages. In the case of *public* repositories, however, [server-to-server requests do not kick off a page build](https://github.com/JamesIves/github-pages-deploy-action/issues/5#issuecomment-476224937) because [`GITHUB_TOKEN` does not have authorization to create any successive events](https://github.com/JamesIves/github-pages-deploy-action/issues/5#issuecomment-529812453). Therefore, opting for a different authorization method is a must in this case to spawn a page build. Our recommendation, and because it's how the [deployment workflow](./.github/workflows/deploy.yml) is set up, is generating a [deployment key](https://github.com/JamesIves/github-pages-deploy-action/tree/dev#using-an-ssh-deploy-key-) for this specific use-case.

Follow-up: https://github.community/t5/GitHub-Actions/Github-action-not-triggering-gh-pages-upon-push/m-p/31266/highlight/true#M743

## Caveats
- Leading slashes for static resources might work locally but fail in production.

## Conventions

This project follows [C-Hive guides](https://github.com/c-hive/guides) for code style, way of working and other development concerns.

---

For Issues and PRs older than 2019.11.16 refer to: https://gitlab.com/c-hive/c-hive.dev and https://github.com/c-hive/c-hive.dev/issues/35#issuecomment-555021380
