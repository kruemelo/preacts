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

export type ClassNamesRecord = Record<string, boolean> 
export type ClassNamesArray = Array<string | ClassNamesRecord>
export type ClassNames = string | ClassNamesArray | ClassNamesRecord

css.classNames = (someClassNames: ClassNames): string | undefined => {
  if (!someClassNames) {
    return;
  }

  if (typeof someClassNames === "string") {
    const splitted = someClassNames.replace(/\s+/g, " ").trim().split(" ");
    if (splitted.length === 1) {
      return splitted[0];
    }
    return css.classNames(splitted);
  }

  if (Array.isArray(someClassNames)) {
    return someClassNames.map(css.classNames)
      .filter(Boolean)
      .join(" ");
  }

  if (typeof someClassNames === "object") {
    return Object.entries(someClassNames).map(([className, enabled]) => {
      if (enabled) {
        return css.classNames(className);
      }
    })
    .filter(Boolean)
    .join(" ");
  }

  console.warn("unknown class names argument structure", someClassNames);

  return String(someClassNames);
};
