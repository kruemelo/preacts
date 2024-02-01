import { html, css } from "preacts";

export const Greeting = ({ name = 'world', count }) => {
  return html`<h1 class="Greeting">Hello, ${count === 0 ? name : "again"}!</h1>`;
};

// css
const backgroundColor = "lightgreen";
const style = css`
  .Greeting {
    background-color: ${backgroundColor};
  }
`;

css.render(style);
