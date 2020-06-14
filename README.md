# reveal.js-codejar
This is a simple wrapper plugin for Reveal.js to embed a CodeJar editor into slides

## Usage Instruction

In order to set up the plugin, include this plugin js file to yours slide HTML file:

```html
<script src="/path/to/this/plugin/codejar.js"></script>
...
Reveal.initialize({
  ...
  plugins: [ ..., RevealCodeJar, ...],
  ...
});
```

Once the plugin is properly setup, you can embed a CodeJar editor in your slide just by adding a `<div>` element like the following:

```html
<div class="codejar language-js" data-line-numbers>let a = [1, 2, 3];
console.log(JSON.stringify(a));</div>
```

Here, the key is the `codejar` class. Any element with the `codejar` class will be transformed to a CodeJar editor.
Replace `js` (JavaScript) with the language of your choice, so that your code in the editor is properly syntax highlighted.
Remove `data-line-number` if you do not want to see line numbers. Finally, you can customize the style the editor by adding standard CSS rules to the `<div>` element.

## Code Information

The main plugin file is `codejar.js`, which is complied from `plugin.js` by the command

```shell
$ webpack plugin.js -o codejar.js
```

The files in `lib/` directory is the `codejar` editor v3.0.0. 
