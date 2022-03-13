# Contribution Guide 

There are many ways to be an open source contributor, and we're here to help you on your way! You may:

* Propose ideas in our [discussion forums](https://github.com/TBD54566975/developer-site-docusaurus/discussions)
* Raise an issue or feature request in our [issue tracker](https://github.com/TBD54566975/developer-site-docusaurus/issues)
* Help another contributor with one of their questions, or a code review
* Suggest improvements to our Getting Started documentation by supplying a Pull Request
* Evangelize our work together in conferences, podcasts, and social media spaces.

This guide is for you.

## Development Prerequisites

| Requirement |
|-------------|
| [Node.js](https://nodejs.org/en/) |
| [Yarn](https://classic.yarnpkg.com/en/) |

### Node

This project is built and locally served by `Node.js`, a JavaScript runtime.

You may verify your `node` installation via the terminal:

```
$> node --version
v14.18.2
```

If you do not have Node, we recommend installing it via `nvm`, the [Node Version Manager](https://github.com/nvm-sh/nvm):

#### Cross-Platform

[Instructions for installation](https://github.com/nvm-sh/nvm#installing-and-updating) 
of `nvm` are:

```shell
$> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

or:

```shell
$> wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Yarn

Builds are run using the [Yarn](https://classic.yarnpkg.com/en/) dependency management 
system. [Installation](https://classic.yarnpkg.com/en/docs/install#mac-stable) can be done 
via `npm`, which comes with Node, installed above:

```shell
$> npm install --global yarn
```

### Installation

```shell
$ yarn
```

### Local Development

```shell
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

The site will typically be available at [`http://localhost:3000/`](http://localhost:3000/).

### Build

```shell
$> yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```shell
$> USE_SSH=true yarn deploy
```

Not using SSH:

```shell
$> GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contribution

We review contributions to the codebase via GitHub's Pull Request mechanism. We have the following guidelines to ease your experience and help our leads respond quickly to your valuable work:

* Start by proposing a change either in Issues (most appropriate for small change requests or bug fixes) or in Discussions (most appropriate for design and architecture considerations, proposing a new feature, or where you'd like insight and feedback)
* Cultivate consensus around your ideas; the project leads will help you pre-flight how beneficial the proposal might be to the project. Developing early buy-in will help others understand what you're looking to do, and give you a a greater chance of your contributions making it into the codebase! No one wants to see work done in an area that's unlikely to be incorporated into the codebase.
* Fork the repo into your own namespace/remote
* Work in a dedicated feature branch. Atlassian wrote a great [description of this workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
* When you're ready to offer your work to the project, first:
* Squash your commits into a single one (or an appropriate small number of commits), and rebase atop the upstream `main` branch. This will limit the potential for merge conflicts during review, and helps keep the audit trail clean. A good writeup for how this is done is [here](https://medium.com/@slamflipstrom/a-beginners-guide-to-squashing-commits-with-git-rebase-8185cf6e62ec), and if you're having trouble - feel free to ask a member or the community for help or leave the commits as-is, and flag that you'd like rebasing assistance in your PR! We're here to support you.
* Open a PR in the project to bring in the code from your feature branch.
* The maintainers noted in the `CODEOWNERS` file will review your PR and optionally open a discussion about its contents before moving forward.
* Remain responsive to follow-up questions, be open to making requested changes, and...
* You're a contributor!
* And remember to respect everyone in our global development community. Guidelines are established in our `CODE_OF_CONDUCT.md`.