"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quill_1 = __importDefault(require("quill"));
const QuillCodeBlockContainer = quill_1.default.import('formats/code-block-container');
class CodeBlockContainer extends QuillCodeBlockContainer {
    html(index, length) {
        // Quill returns <pre data-language="...">...</pre> - highlight js doesn't recognise this format
        // return html formatted for hljs : <pre><code class="language-...">...</code></pre>
        // wrap the innerHTML of the returned <pre> in a <code> tag
        // add the hljs language class to the code tag using the data-language value of the <pre> tag
        const markup = super.html(index, length);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = markup;
        const preTag = tempDiv.querySelector('pre');
        if (preTag) {
            const language = preTag.getAttribute('data-language') || '';
            const codeTag = document.createElement('code');
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
quill_1.default.register('formats/code-block-container', CodeBlockContainer, true);
exports.default = CodeBlockContainer;
