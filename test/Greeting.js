import {
  html,
  register,
} from "preacts";

export const Greeting = ({ name = 'World' }) => {
  return html`<p>Hello, ${name}!</p>`;
};

register(Greeting, 'x-greeting', ['name'], { shadow: false });