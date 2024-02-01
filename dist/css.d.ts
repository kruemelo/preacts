export declare const css: {
    (strings: TemplateStringsArray, ...values: any): string;
    /**
     * Apply the css to the document
     * @param {string} rules css style rules
     */
    render(rules: string): void;
    classNames(someClassNames: ClassNames): string | undefined;
};
export type ClassNamesRecord = Record<string, boolean>;
export type ClassNamesArray = Array<string | ClassNamesRecord>;
export type ClassNames = string | ClassNamesArray | ClassNamesRecord;
