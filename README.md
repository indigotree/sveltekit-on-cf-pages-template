# An Indigo Tree project

This project has been built by [Indigo Tree](https://indigotree.co.uk), and it's powered by [SvelteKit](https://kit.svelte.dev) and [Cloudflare](https://cloudflare.org).

This is our template for new SvelteKit projects, The app itself prints a "Hello, world".

---

- [Onboarding](#onboarding)
- [Development process](#development-process)
- [Deployment](#deployment)
- [Running the tests](#running-the-tests)

---

# Onboarding

_Please read carefully through this entire file (it's important!)._

To be onboarded to the project, you'll need the following from Indigo Tree:

- Access to our Github organisation.
- Access to the appropriate Cloudflare account.
- Access to the project on Teamwork.

Contact the project manager and/or your developer colleagues to get access as required. You will need to enable multi-factor authentication on your accounts.

# Development process

Before you begin committing code, [double-check that you have the correct email address configured for this particular Git repo](https://help.github.com/articles/setting-your-email-in-git/#setting-your-email-address-for-a-single-repository). It's likely that this should be your _work_ email address instead of a _personal_ email address.

## Local development

Once you have installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Git Flow

The development process mostly follows the [Git Flow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) model. Development happens in feature branches, which are merged into `develop`, which is merged into `staging` for deployment to the testing environment, and then merged into `main` for deployment to production.

When a pull request is opened, it will be automatically assigned to one of your colleagues for code review, after which it is your responsibility to merge into the project.

## Package management

This project uses NPM for package management. NPM is used to install build tools and third-party Javascript packages.

# Deployment

Deployment to Cloudflare Pages is handled by a Github Action. To set this up for a new project, [consult Cloudflare's documentation](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/#deploy-with-cloudflare-pages).

## Deployment to develop

1. Triggered when a change is merged into `develop` branch on Github.
2. Javascript quality checks are run and must pass prior to deployment.
3. Github deploys the changes to Cloudflare Pages.

## Deployment to staging

1. Triggered when the `develop` branch is merged into `staging` on Github.
2. Javascript quality checks are run and must pass prior to deployment.
3. Github deploys the changes to Cloudflare Pages.

## Deployment to production

1. Triggered when the `staging` branch is merged into `main` on Github.
2. Javascript quality checks are run and must pass prior to deployment.
3. Github deploys the changes to Cloudflare Pages.

# Running the tests

The project contains only one type of automated test:

- _Coding standards_ which are run with [ESLint](https://eslint.org).

All of the test frameworks are installed with NPM as part of setup.
