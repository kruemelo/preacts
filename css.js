// a css template literal function just for the sake of ide formatter tools 
export const css = (strings, ...values) => String.raw({ raw: strings }, ...values);

/**
 * Apply the css to the document
 * @param {string} rules css style rules
 */
css.render = (rules) => {
  // https://web.dev/articles/constructable-stylesheets
  const constructedStyleSheet = new CSSStyleSheet();

  constructedStyleSheet.replace(rules);
  document.adoptedStyleSheets.push(constructedStyleSheet);
};