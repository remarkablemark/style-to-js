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

```json
{ "backgroundColor": "#BADA55" }
```

[Repl.it](https://repl.it/@remarkablemark/style-to-js) | [JSFiddle](https://jsfiddle.net/remarkablemark/04nob1y7/)

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

### Import

Import or require module:

```js
// ES Modules
import parse from 'style-to-js';

// CommonJS
const parse = require('style-to-js').default;
```

### Parse style

Parse single declaration:

```js
parse('line-height: 42');
```

Output:

```json
{ "lineHeight": "42" }
```

> Notice that the CSS property is camelCased.

Parse multiple declarations:

```js
parse(`
  border-color: #ACE;
  z-index: 1337;
`);
```

Output:

```json
{
  "borderColor": "#ACE",
  "zIndex": "1337"
}
```

### Vendor prefix

Parse [vendor prefix](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix):

```js
parse(`
  -webkit-transition: all 4s ease;
  -moz-transition: all 4s ease;
  -ms-transition: all 4s ease;
  -o-transition: all 4s ease;
  -khtml-transition: all 4s ease;
`);
```

Output:

```json
{
  "webkitTransition": "all 4s ease",
  "mozTransition": "all 4s ease",
  "msTransition": "all 4s ease",
  "oTransition": "all 4s ease",
  "khtmlTransition": "all 4s ease"
}
```

### Custom property

Parse [custom property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*):

```js
parse('--custom-property: #f00');
```

Output:

```json
{ "--custom-property": "#f00" }
```

### Unknown declaration

This library does not validate declarations, so unknown declarations can be parsed:

```js
parse('the-answer: 42;');
```

Output:

```json
{ "theAnswer": "42" }
```

### Invalid declaration

Declarations with missing value are removed:

```js
parse(`
  margin-top: ;
  margin-right: 1em;
`);
```

Output:

```json
{ "marginRight": "1em" }
```

Other invalid declarations or arguments:

```js
parse(); // {}
parse(null); // {}
parse(1); // {}
parse(true); // {}
parse('top:'); // {}
parse(':12px'); // {}
parse(':'); // {}
parse(';'); // {}
```

The following values will throw an error:

```js
parse('top'); // Uncaught Error: property missing ':'
parse('/*'); // Uncaught Error: End of comment missing
```

### Options

#### reactCompat

When option `reactCompat` is true, the [vendor prefix](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) will be capitalized:

```js
parse(
  `
    -webkit-transition: all 4s ease;
    -moz-transition: all 4s ease;
    -ms-transition: all 4s ease;
    -o-transition: all 4s ease;
    -khtml-transition: all 4s ease;
  `,
  { reactCompat: true }
);
```

Output:

```json
{
  "WebkitTransition": "all 4s ease",
  "MozTransition": "all 4s ease",
  "MsTransition": "all 4s ease",
  "OTransition": "all 4s ease",
  "KhtmlTransition": "all 4s ease"
}
```

This helps resolve the React warning:

```
Warning: Unsupported vendor-prefixed style property %s. Did you mean %s?%s", "oTransition", "OTransition"
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
