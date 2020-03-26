'use strict';

const unified = require('unified');
const markdown = require('remark-parse');
const hbs = require('remark-hbs');
const html = require('remark-html');

module.exports = function (options) {
  let stack = unified().use(markdown);

  if (options.plugins) {
    options.plugins.forEach((item) => {
      if (Array.isArray(item)) {
        stack = stack.use(...item);
      } else {
        stack = stack.use(item);
      }
    });
  }

  return stack.use(hbs).use(html);
};
