# Quill Syntax Code Block - `getSemanticHTML()` fix

This custom format is written to address an [issue](https://github.com/slab/quill/issues/4289) with Quill's `code-block` html method which is responsible for the rendered html when calling `quill.getSemanticHTML()`.

Quill's Syntax module highlights code with [`highlight.js`](https://highlightjs.org/), but the format rendered by `getSemanticHTML` is not one recognised by that library.

Quill's output:

```html
<pre data-language="xxx">...</pre>
```

[Format expected](https://highlightjs.org/#usage:~:text=%3Cpre%3E%3Ccode%20class%3D%22language%2Dhtml%22%3E...%3C/code%3E%3C/pre%3E) for auto-highlighting by `highlight.js`:

```html
<pre><code class="language-xxx">...</code></pre>
```

This custom format outputs the latter.

## Usage

This fix is distibuted as node module and compiled js. 

The format will auto-register on load.

>[!WARNING]
>
>Quill's default `code-block-container` is superceded by this format on load. 
>
>This format must loaded after Quill and before the editor is created.

### npm

```typescript
npm install --save quill-syntax-code-block-container-html
```

### script tag

```html
<script 
  src="https://cdn.jsdelivr.net/npm/quill-syntax-code-block-container-html@1.0/dist/quill-syntax-code-block-container.js">
</script>
```