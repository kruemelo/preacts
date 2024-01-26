export * from "preact/hooks"

import htm from "htm";

export * from "@preact/signals";

// const html = htm.bind(h);
// import { html } from "htm/preact";
export * from "htm/preact";

export * from "../css.js";

import register from 'preact-custom-element';

export {
  htm,
  register,
};