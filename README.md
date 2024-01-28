# preacts

Run [preact](https://github.com/preactjs/preact) standalone in the browser.

- no transpiler necessary
- no build chain

**Supports**

- Writing `html` and `css` [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 
- Custom Components. Generate and register a custom element from a preact component.

**Based on**

- [preact and preact hooks](https://github.com/preactjs/preact)
- [HTM (Hyperscript Tagged Markup)](https://github.com/developit/htm)
- [preact-custom-element](https://github.com/preactjs/preact-custom-element)
- [preact-signals](https://github.com/preactjs/signals)

- preact and Web Components: https://preactjs.com/guide/v10/web-components ([npm](https://www.npmjs.com/package/preact-custom-element))
- preact and PWA: https://preactjs.com/guide/v10/progressive-web-apps
- Using Preact with HTM and ImportMaps: https://preactjs.com/guide/v10/getting-started#using-preact-with-htm-and-importmaps
- Syntax highlighting and language support via the [inline-html](https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html) extension.

## build lib

```bash
npm run build
```

## run

```bash
# prerequisites
npm install http-server -g
npm i
# startup the server open test in browser
http-server -o /test
```
