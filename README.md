ember-cli-remark-hbs ![](https://github.com/josemarluedke/ember-cli-remark-hbs/workflows/CI/badge.svg)
==============================================================================

Ember CLI Remark allows compiling from markdown files to Ember handlebars templates using [remark](https://github.com/remarkjs/remark).

We use [remark-hbs](https://github.com/josemarluedke/remark-hbs) to keep all the handlebars code from markdown.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-remark-hbs
```

Usage
------------------------------------------------------------------------------

Plugins power remark, so you probably would like to add some to your
app. To support this use case, you can pass an array of plugins in `ember-cli-build.js`.

```js
// ..
const app = new EmberApp(defaults, {
  'ember-cli-remark-hbs': {
    plugins: [
      require('remark-slug'),
      require('remark-autolink-headings'),
      require('remark-highlight.js')
    ]
  }
});
// ..
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
