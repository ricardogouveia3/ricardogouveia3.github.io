<p align="center">
  <img src="https://i.imgur.com/erv3eR9.png" width="100">
</p>

# RCRD Portfolio

[Access the website](http://rcrd.me/)

This project uses:
- [Pug](https://pugjs.org/)
- [Sass](http://sass-lang.com/)
- [Grunt](https://gruntjs.com/)
- [Browsersync](https://www.browsersync.io/)

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [Grunt](https://gruntjs.com/)

```sh

# Clone this repository
git clone git@github.com:ricardogouveia3/ricardogouveia3.github.io.git
cd ricardogouveia3.github.io

# install dependencies
npm install

```

After that, you should be good to go :)

### Folders/Files Structure

```sh
├── assets/
│   ├── css/
│   │   └── *.sass
│   │   └── *.css
│   ├── img
│   │   └── *.png
│   │   └── *.jpg
│   │   └── *.svg
│   │   └── favicon.ico
│   │   ├── portfolio/
│   │   │   └── *.jpg
│   ├── js/
│   │   └── *.js
├── includes/
│   ├── _*.pug
├── Gruntfile.js
├── index.html
├── index.pug
├── LICENSE.md
├── package.json
├── README.md
```
These structure will change during the project.

### Code Standarts

This project uses [LFeh's Coding Style Guide](https://github.com/LFeh/coding-style)


### Tasks

- `grunt concat`: concat `*.js` into `index.min.js`
- `grunt uglify`: uglifies `index.min.js` into `index.min.js`
- `grunt sass`: build `*.sass` into `style.css`
- `grunt autoprefixer`: prefixes `*.css` into style.css
- `grunt watch`: watch files for changes

- `grunt compile`: compile all `.sass`, `.pug` files, autoprefixes `.css`, concat/uglify `.js`, and optimize images.
- `grunt`: run watch and browsersync tasks - local server.


## License

[MIT License](http://ricardogouveia3.mit-license.org/) © Ricardo Álvaro Gouveia Gomes Filho