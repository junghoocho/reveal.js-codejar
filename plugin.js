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

let deck = null;
let hljs = null;

function highlight(editor) {
    // highlight.js does not trim old tags, let's do it by this hack.
    editor.textContent = editor.textContent;
    if (hljs) hljs.highlightBlock(editor);
}

function setupEditors() {
    if (!deck.isReady()) {
        deck.on('ready', setupEditors);
        return;
    }

    // get highlight.js
    if (deck.getPlugin('highlight')) {
        hljs = deck.getPlugin('highlight').hljs;
    }

    for (let e of deck.getRevealElement().querySelectorAll('.codejar')) {
        let highlighter = highlight;
        if (e.hasAttribute("data-line-numbers") && e.getAttribute("data-line-numbers").toLowerCase() !== "false") {
            highlighter = withLineNumbers(highlight);
        }
        e.addEventListener("keypress", (event) => { event.stopPropagation(); });
        CodeJar(e, highlighter, options);
    }
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
    style.innerHTML = `.codejar { border-radius: 6px; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); font-family: "Source Code Pro", monospace; font-size: 0.9em; line-height: 1.2em; padding: 10px; tab-size: 4; }`;
    head.appendChild(style);

    // setup editors
    setupEditors();
}

window.RevealCodeJar = window.RevealCodeJar || { id: pluginID, init: init };
