# Boilerplace: Graphql, React, Typescript

## Before you start

If you don't yet have the frontend dependencies installed (if there's no
`node_modules` folder in this directory) you need to install them. It's a good
idea to also make sure we're using a recent version of
[Node.js](https://nodejs.org/en/) installed - in a terminal run:

```
node --version
```

If it's less than 6, follow [these instructions for installing version 6](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

Once that's done, in a terminal in this directory, run:

```
npm install
```

## Developing

From this directory:

```
npm start
```

This will run a watch process that keeps an eye on your files and recompiles
whenever you save changes. `control-c` will quit the watch process. It also
starts a development server at `http://localhost:8080` which auto-reloads
whenever there are changes.

If you want to start project with mocked data run:

```
npm run start:mock
```

## Project structure & build process features

```
├── .babelrc
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── jest-mock-files.js
├── jest-mock-styles.js
├── package.json
├── README.md
├── webpack.config.js
└── src
    ├── index.html
    ├── index.tsx
    ├── index.scss
    ├── components
    ├── graphql
    ├── types
    └── base-styles
        ├── _base.scss
        └── _variables.scss
```

To learn about `.editorconfig` and to see if there is a plugin for your code
editor, see [the EditorConfig website](http://editorconfig.org/).

### Webpack compilation features

#### HTML template

`src/index.html` can be customised as you see fit. It has no CSS
or JS files included - these are dynamically added with cache busting
functionality at build time.

#### SCSS compilation

All `.scss` files that are imported either into `src/index.scss`
or into a JS file directly will be compiled.
[Autoprefixer](https://github.com/postcss/autoprefixer#autoprefixer-) is
included (so you don't need to write vendor prefixes) in the build process.

#### Typescript compilation

The project is written using Typescript.
It will be compiled to javascript using `ts-loader`

To automatically generate types based on queries in a project run:

```
npm run apollo:generate
```

#### File loader

Any other static assets like image files, font files etcetera, can either be
included from your CSS (treat paths as being relative to `src`)
or directly imported and used in your JS files. During the build process they
will be given a unique hash name.

So for example if you have a file at `src/assets/img/myimage.png`, you could include it from a CSS file like:

```
background: url(assets/img/myimage.png);
```

or from a JS file like:

```
import myImage from 'assets/img/myimage.png';
```

### Linting

### JavaScript

Use `npm run lint` to run the JS linter. The configuration file for the linter
is at `.eslintrc.json`, where you can tweak you configuration as you please -
refer to the [eslint
documentation](https://eslint.org/docs/user-guide/configuring). By default the
[Airbnb JavaScript style guide](https://github.com/airbnb/javascript) is used
(with a few tweaks). You can also run `npm run lint:fix` to fix any
automatically fixable errors directly.

### SCSS

Use `npm run stylelint` to run the SCSS/CSS linter. The configuration file is at
`.stylelintrc` - refer to the [stylelint docs](https://stylelint.io/) to see how
you can tweak configuration if you would like. Some errors can be automatically
fixed - use the `npm run stylelint:fix` command for that.

### Testing with Jest

Running `npm run test` will invoke [Jest](https://facebook.github.io/jest/), or you can
use the interactive watch mode with `npm run test:watch`. You can also use the
built-in coverage tool via `npm run test:coverage`. The test runner will look
for any files in a `__tests__` folder, or any files with a `.test.ts` suffix.

## Deploying

To generate the compiled static files, from this directory run:

```
npm run build
```

Note that by default these files are **not** kept in version control (to avoid
conflicts), so your project deployment process should include this build
process.

## Storybook

Project also uses storybook to present components in isolation.

To run storybook project use:

```
npm run storybook
```

To learn more about storybook go to [https://storybook.js.org/](https://storybook.js.org/)
