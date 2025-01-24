"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMarkdown = void 0;
// filepath: src/utils/markdownParser.ts
var marked_1 = require("marked");
var parseMarkdown = function (markdown) {
    return (0, marked_1.marked)(markdown);
};
exports.parseMarkdown = parseMarkdown;
