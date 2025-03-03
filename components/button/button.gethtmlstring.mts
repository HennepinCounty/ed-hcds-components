export const getHcButtonHtmlString = (
    detailParams?: {
        spaceDelimitedClassNameList?: string;
        stringContainingAllOtherButtonElementProperties?: string;
        stringContainingHtmlChildElementsThatServeAsTheButtonsLabel: string;
    }
): string => `
<hc-button-with-better-accessibility>
    <button 
        ${!!detailParams?.spaceDelimitedClassNameList ? `class="${detailParams?.spaceDelimitedClassNameList}"` : ''}  
        ${!!detailParams?.stringContainingAllOtherButtonElementProperties ? detailParams?.stringContainingAllOtherButtonElementProperties : ''} 
    >
    ${detailParams?.stringContainingHtmlChildElementsThatServeAsTheButtonsLabel}
    </button>
</hc-button-with-better-accessibility>
<script>
    class BetterButtonAccessibilityWrapper extends HTMLElement {
        constructor() {
            super();
        }
		connectedCallback() {
			this.input = this.querySelector('button');
			this.button.addEventListener('click', this.preventDefaultIfAriaDisabled);
		}
		preventDefaultIfAriaDisabled = (e) => {
            if (this.button.getAttribute('aria-disabled') === 'true') {
                e.preventDefault();
            }
		};
    }
    customElements.define('hc-button-with-better-accessibility', BetterButtonAccessibilityWrapper);
</script>
`;

console.log(`Hi ${getHcButtonHtmlString()} there.`);