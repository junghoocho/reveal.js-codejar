"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.withLineNumbers = void 0;
function withLineNumbers(highlight, options) {
    if (options === void 0) { options = {}; }
    var opts = __assign({ "class": "codejar-linenumbers", wrapClass: "codejar-wrap", width: "35px", backgroundColor: "rgba(128, 128, 128, 0.15)", color: "" }, options);
    var lineNumbers;
    return function (editor) {
        highlight(editor);
        if (!lineNumbers) {
            lineNumbers = init(editor, opts);
        }
        var code = editor.textContent || "";
        var linesCount = code.replace(/\n+$/, "\n").split("\n").length + 1;
        var text = "";
        for (var i = 1; i < linesCount; i++) {
            text += i + "\n";
        }
        lineNumbers.innerText = text;
    };
}
exports.withLineNumbers = withLineNumbers;
function init(editor, opts) {
    var css = getComputedStyle(editor);
    var wrap = document.createElement("div");
    wrap.className = opts.wrapClass;
    wrap.style.position = "relative";
    var lineNumbers = document.createElement("div");
    lineNumbers.className = opts["class"];
    wrap.appendChild(lineNumbers);
    // Add own styles
    lineNumbers.style.position = "absolute";
    lineNumbers.style.top = "0px";
    lineNumbers.style.left = "0px";
    lineNumbers.style.bottom = "0px";
    lineNumbers.style.width = opts.width;
    lineNumbers.style.overflow = "hidden";
    lineNumbers.style.backgroundColor = opts.backgroundColor;
    lineNumbers.style.color = opts.color || css.color;
    lineNumbers.style.setProperty("mix-blend-mode", "difference");
    // Copy editor styles
    lineNumbers.style.fontFamily = css.fontFamily;
    lineNumbers.style.fontSize = css.fontSize;
    lineNumbers.style.lineHeight = css.lineHeight;
    lineNumbers.style.paddingTop = css.paddingTop;
    lineNumbers.style.paddingLeft = css.paddingLeft;
    lineNumbers.style.borderTopLeftRadius = css.borderTopLeftRadius;
    lineNumbers.style.borderBottomLeftRadius = css.borderBottomLeftRadius;
    // Tweak editor styles
    editor.style.paddingLeft = "calc(" + opts.width + " + " + lineNumbers.style.paddingLeft + ")";
    editor.style.whiteSpace = "pre";
    // Swap editor with a wrap
    editor.parentNode.insertBefore(wrap, editor);
    wrap.appendChild(editor);
    return lineNumbers;
}
