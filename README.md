# preacts

Run [preact](https://github.com/preactjs/preact) standalone in the browser.

- no transpiler necessary
- no build chain

**Supports**

- Writing `html` and `css` [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- Custom Components. Generate and register a custom element from a preact component.
- css rendering using [CSSStyleSheet](https://web.dev/articles/constructable-stylesheets)

**Based on**

- [preact and preact hooks](https://github.com/preactjs/preact)
- [HTM (Hyperscript Tagged Markup) and html/preact](https://github.com/developit/htm)
- [preact-custom-element](https://github.com/preactjs/preact-custom-element)
- [preact-signals](https://github.com/preactjs/signals)
- [wouter](https://www.npmjs.com/package/wouter), including
  - `wouter-preact/use-location`
  - `wouter-preact/matcher`

**Readings**

- preact and Web Components: <https://preactjs.com/guide/v10/web-components> ([npm](https://www.npmjs.com/package/preact-custom-element))
- preact and PWA: <https://preactjs.com/guide/v10/progressive-web-apps>
- Using Preact with HTM and ImportMaps: <https://preactjs.com/guide/v10/getting-started#using-preact-with-htm-and-importmaps>
- Syntax highlighting and language support via the [inline-html](https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html) extension.

## Install

npm:

```bash
npm i --save-dev @kruemelo/preacts
cp node-modules/@kruemelo/preacts/dist/preacts.js <your/web/path/here/>preacts.js
```

Replace `<your/web/path/here/>` with your desired target location.

## Use

[index.html](./test/index.html):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="importmap">
      {
        "imports": {
          "preacts": "<your/web/path/here/>/preacts.js"
        }
      }
    </script>    
  </head>
  <script type="module">
    import {
      html,
      render,
      signal,
      useRef,
      useEffect,
    } from "preacts";
    import { Greeting } from "./Greeting.js";
  
    const count = signal(0);

    function App() {
      const myRef = useRef(null);

      useEffect(() => {
        console.log("useEffect", myRef.current);
      }, []);

      return html`
        <div ref=${myRef}>
          <${Greeting} name="again" />
          <button onClick=${() => (count.value += 1)}>
            Increment with signal
          </button>
          <p>Counter: ${count}</p>
        </div>
      `;
    }

    render(html`<${App} />`, document.body);
  </script>
</html>
```

You need to adjust `importmap`: Replace `<your/web/path/here/>` with the path the `preacts.js` file is accessible for the browser.

[Greeting.js](./test/Greeting.js):

```js
import { html, css } from "preacts";

export const Greeting = ({ name = 'World' }) => {
  return html`<h1 class="Greeting">Hello, ${name}!</h1>`;
};

// css
const backgroundColor = "lightgreen";
const style = css`
  .Greeting {
    background-color: ${backgroundColor};
  }
`;

css.render(style);
```

## Build lib

```bash
npm run build
```

## Run

```bash
# prerequisites
npm install http-server -g
npm i
# startup the server open test in browser
http-server -o /test
```
