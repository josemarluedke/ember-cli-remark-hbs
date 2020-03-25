'use strict';

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry(type, registry) {
    if (type === 'parent') {
      let options = this.app.options['ember-cli-remark'];
      let RemarkTemplateCompiler = require('./lib/compiler');
      registry.add('template', new RemarkTemplateCompiler(options));
    }
  }
};
