# style-to-js

[![NPM](https://nodei.co/npm/style-to-js.png)](https://nodei.co/npm/style-to-js/)

[![NPM version](https://img.shields.io/npm/v/style-to-js.svg)](https://www.npmjs.com/package/style-to-js)
[![Build Status](https://travis-ci.org/remarkablemark/style-to-js.svg?branch=master)](https://travis-ci.org/remarkablemark/style-to-js)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/style-to-js/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/style-to-js?branch=master)

Parses CSS inline style to JavaScript object (camelCased):

```
StyleToJS(string)
```

#### Example

```js
import parse from 'style-to-js';
parse('background-color: #BADA55;');
```

Output:

```js
{ 'backgroundColor': '#BADA55' }
```

## Install

[NPM](https://www.npmjs.com/package/style-to-js):

```sh
$ npm install style-to-js --save
```

[Yarn](https://yarnpkg.com/package/style-to-js):

```sh
$ yarn add style-to-js
```

[CDN](https://unpkg.com/style-to-js/):

```html
<script src="https://unpkg.com/style-to-js@latest/umd/style-to-js.min.js"></script>
<script>
  window.StyleToJS(/* string */);
</script>
```

## Usage

Import module:

```js
// ES Modules
import parse from 'style-to-js';

// CommonJS
const parse = require('style-to-js').default;
```

Parse single declaration:

```js
parse('line-height: 42');
```

Output:

```js
{ 'lineHeight': '42' }
```

Parse multiple declarations:

```js
parse(`
  border-color: #ACE;
  z-index: 1337;
`);
```

Output:

```js
{ 'borderColor': '#ACE', 'zIndex': '1337' }
```

This library does not validate declarations, so unknown declarations can be parsed:

```js
parse('the-answer: 42;');
```

Output:

```js
{ 'theAnswer': '42' }
```

Invalid declarations/arguments:

```js
parse(`
  margin-top: ;
  margin-right: 1em;
`); // { marginRight: '1em' }

parse(); // {}
parse(null); // {}
parse(1); // {}
parse(true); // {}
parse('top:'); // {}
parse(':12px'); // {}
parse(':'); // {}
parse(';'); // {}

parse('top'); // throws Error
parse('/*'); // throws Error
```

## Testing

Run tests with coverage:

```sh
$ npm test
```

Run tests in watch mode:

```sh
$ npm run test:watch
```

Lint files:

```sh
$ npm run lint
```

Fix lint errors:

```sh
$ npm run lint:fix
```

## Release

Only collaborators with credentials can release and publish:

```sh
$ npm run release
$ git push --follow-tags && npm publish
```

## Special Thanks

- [style-to-object](https://github.com/remarkablemark/style-to-object)

## License

[MIT](https://github.com/remarkablemark/style-to-js/blob/master/LICENSE)
