/**
 * A simple wrapper to embed a CodeJar Editor to reveal.js slide
 *
 * @author Junghoo Cho at UCLA
 */

import { CodeJar } from "./lib/codejar.js";
import { withLineNumbers } from "./lib/linenumbers.js";

// plugin ID
const pluginID = 'codejar';
let options = {};
let deck = Reveal;

// text highlight function
function highlight(editor) {
    // get highlight plugin
    let hljs = deck.getPlugin('highlight');

    if (hljs) {
        // highlight.js does not trim old tags, let's do it by this hack.
        editor.textContent = editor.textContent;
        hljs.hljs.highlightBlock(editor)
    }
}

// create the CodeJar editor for the element
function createEditor(element, highlighter, codeJarOptions) {
    // check if the element has already been setup as CodeJar Editor
    if (element.codeJarObject) {
        return element.codeJarObject;
    }

    // get syntax highlighter
    if (highlighter === undefined) {
        // check if line numbers are needed
        if (element.hasAttribute("data-line-numbers") &&
            element.getAttribute("data-line-numbers").toLowerCase() !== "false") {
            highlighter = withLineNumbers(highlight);
        } else {
            highlighter = highlight;
        }
    }

    // get codeJarOptions
    if (codeJarOptions === undefined) {
        codeJarOptions = options;
    }

    // prevent the keypress event from propagating upward
    element.addEventListener("keypress", (event) => { event.stopPropagation(); });

    // create CodeJar Editor
    element.codeJarObject = CodeJar(element, highlighter, codeJarOptions);
    return element.codeJarObject;
}

function init(reveal) {
    // save reveal to deck
    deck = reveal;

    // get user-provided configuration options
    if (deck.getConfig()[pluginID]) {
        Object.assign(options, deck.getConfig()[pluginID]); 
    }

    // setup default CSS
    let head = document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = "text/css";
    style.innerHTML = `.codejar { border-radius: 6px; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); font-family: "Source Code Pro", monospace; font-size: 0.85em; line-height: 1.15em; padding: 10px; tab-size: 4; -webkit-user-select: text; user-select: text;}`;
    head.appendChild(style);

    // setup editors
    for (let editor of deck.getRevealElement().querySelectorAll('.codejar')) {
        createEditor(editor);
    }
}

/* Reveal.js plugin API:
   (1) The plugin js file must create one global object
   (2) The global object should be (a function that returns) 
       an object with `id` property (of string type)
       and optionally `init` property (of function type)
   (3) The global object's name will be listed in the `plugins: [ ... ]`
       property during slide deck initialization
   (4) The object's `id` is the "key" the plugin is registered with
   (5) If exists, the `init` method will be called as part of the slide 
       initialization process
   (6) If the `init` method returns a promise, the slide "ready" event 
       is fired only after the promise resolves

   The global variable RevealCodeJar will be the plugin's global object.
   If RevealCodeJar already exists, we don't need to do anything */

window.RevealCodeJar = window.RevealCodeJar || { id: pluginID, init: init, CodeJar: createEditor };
