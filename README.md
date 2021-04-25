<p align="center">
  <img src="https://i.imgur.com/erv3eR9.png" width="100">
</p>

# RCRD Website

[Access the website](http://rcrd.me/)

This project uses:

- [Yarn](https://yarnpkg.com/)
- [Vue](https://vuejs.org/)
- [Sass](http://sass-lang.com/)

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

```sh

# Clone this repository
git clone git@github.com:ricardogouveia3/ricardogouveia3.github.io.git
cd ricardogouveia3.github.io

# install dependencies
yarn install

```

After that, you should be good to go :)


### Publishing

Github pages will serve from main branch content. Build the project, then use push-dir create a subtree from /dist folder to master branch and push it. This process is automatic with the command:

`yarn deploy`


### Folders/Files Structure

```sh
├── public
│   ├── public_assets/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── sass/
│   │   │   └── *.sass
│   │   └── img/
│   │       └── *.{jpg||png||svg}
│   ├── components/
│   │   └── *.vue
├── node_modules
│   └── (...)
├── dist
│   └── (publised *.html/*.css/*.js)
├── _legacy
│   └── *.zip
├── .editorconfig
├── .gitignore
├── babel.config.js
├── package.json
├── yarn.lock
├── CNAME
└── README.md
```

### Code Standarts

This project uses [LFeh's Coding Style Guide](https://github.com/LFeh/coding-style)


### Tasks

#### Dev/Server Tasks

These tasks are used for live reloading and debugging. They are time-saving focused. Don't use then for deploying.

- `yarn serve`: Compiles everything uminified and serves to a port (default 8080).

- `yarn ui`: Serves GUI vue app to a port (default 8000).

- `yarn lint`: Lints project.

#### Build Tasks

These tasks are used for building and deploying. They are performance and good practices focused. They may be too slow for live reloading (or may cause infinite looping tasks).

- `yarn build`: Builds minified files to /dist.

## License

[MIT License](http://ricardogouveia3.mit-license.org/) © Ricardo Álvaro Gouveia Gomes Filho
