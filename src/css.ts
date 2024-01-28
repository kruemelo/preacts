// a css template literal function just for the sake of ide formatter tools 
export const css = (strings: TemplateStringsArray, ...values:any) => String.raw({ raw: strings }, ...values);

/**
 * Apply the css to the document
 * @param {string} rules css style rules
 */
css.render = (rules:string) => {
  // https://web.dev/articles/constructable-stylesheets
  const constructedStyleSheet = new CSSStyleSheet();

  constructedStyleSheet.replace(rules);
  document.adoptedStyleSheets.push(constructedStyleSheet);
};