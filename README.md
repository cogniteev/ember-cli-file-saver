# Ember-cli-file-saver

Include [https://github.com/eligrey/FileSaver.js](FileSaver) in an ember-cli app.

When the addon is installed, it will add FileSaver as a bower dependency and register a new transport
layer for jQuery in order to receive ArrayBuffers and Blobs.

To make this transport layer works using ember-data you need to add the `adapter-arraybuffer-mixin` mixin to your
adapter.

## Usage

### ES6 Import

This addon provides the ability to import FileSaver as an ES6 module.

```js
import FileSaver from 'file-saver';
```

### Adapter Mixin for ArrayBuffer / Blob response

```js
import ActiveModelAdapter from 'active-model-adapter';
import AdapterArrayBufferMixin from 'ember-cli-file-saver/mixins/adapter-arraybuffer-mixin';

const ApplicationAdapter = ActiveModelAdapter.extend(AdapterArrayBufferMixin);

ApplicationAdapter.reopen({
 // 
});

export default ApplicationAdapter;
```

### Download from a component

```js
import Ember from 'ember';
import FileSaverMixin from 'ember-cli-file-saver/mixins/file-saver';

const { Component, computed } = Ember;

export default Component.extend(FileSaverMixin, {

  tagName: 'button',

  click() {
    this.attrs.download()
      .then((content) => this.saveFileAs(this.get('filename'), content, this.get('contentType')));
  }
});
```

### Using from a model

This works well with the [https://github.com/mike-north/ember-api-actions](ember-api-actions) project:

```js
// models/invoice.js

import Ember from 'ember';
import DS from 'ember-data';
import { memberAction } from 'ember-api-actions';

const { computed } = Ember;
const { belongsTo, attr, Model } = DS;

export default Model.extend({

  invoiceNumber: attr('number'),

  download: memberAction({ path: 'download', type: 'GET', ajaxOptions: { arraybuffer: true } })
});
```

```js
// in a component

invoiceModel
  .download()
  .then((pdfContent) => this.saveFileAs('invoice.pdf', pdfContent, 'application/pdf'));

```


## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-file-saver`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
