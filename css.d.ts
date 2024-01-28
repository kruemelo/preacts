export function css(strings: any, ...values: any[]): string;
export namespace css {
    /**
     * Apply the css to the document
     * @param {string} rules css style rules
     */
    function render(rules: string): void;
}
