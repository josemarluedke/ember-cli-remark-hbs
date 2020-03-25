'use strict';

const stew = require('broccoli-stew');
const remark = require('./remark');

module.exports = class RemarkTemplateCompiler {
  constructor(options) {
    this.name = 'remark-template-compiler';
    this.ext = ['md', 'markdown'];
    this.options = options || {};
    this.remark = remark(this.options);
  }

  toTree(tree) {
    let compiled = stew.map(tree, `**/*.{${this.ext}}`, (string) =>
      this.remark.processSync(string).toString()
    );

    return stew.rename(compiled, '.md', '.hbs');
  }
};
