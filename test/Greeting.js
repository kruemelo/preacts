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
