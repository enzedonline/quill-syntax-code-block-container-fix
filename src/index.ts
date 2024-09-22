import Quill from 'quill';
const QuillCodeBlockContainer = Quill.import('formats/code-block-container') as any;

class CodeBlockContainer extends QuillCodeBlockContainer {
    html(index: number, length: number): string {
        // Quill returns <pre data-language="...">...</pre> - highlight js doesn't recognise this format
        // return html formatted for hljs : <pre><code class="language-...">...</code></pre>
        // wrap the innerHTML of the returned <pre> in a <code> tag
        // add the hljs language class to the code tag using the data-language value of the <pre> tag
        const markup: string = super.html(index, length);
        const tempDiv: HTMLElement = document.createElement('div');
        tempDiv.innerHTML = markup;
        const preTag: HTMLElement | null = tempDiv.querySelector('pre');
        if (preTag) {
            const language: string = preTag.getAttribute('data-language') || '';
            const codeTag: HTMLElement = document.createElement('code');
            if (!!language) {
                codeTag.className = `language-${language}`;
            }
            codeTag.innerHTML = preTag.innerHTML;
            preTag.innerHTML = '';
            preTag.removeAttribute('data-language');
            preTag.appendChild(codeTag);
            return preTag.outerHTML;
        }
        return markup; // fallback
    }
}

Quill.register('formats/code-block-container', CodeBlockContainer, true);
export default CodeBlockContainer
