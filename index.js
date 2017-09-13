/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');


module.exports = {
  name: 'ember-cli-file-saver',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/FileSaver.js', {
      type: 'vendor'
    });

    this.import('vendor/jquery-ajax-arraybuffer.js', {
      type: 'vendor'
    });

    this.import('vendor/file-saver.shim.js', {
      type: 'vendor',
      exports: {
        rison: ['default']
      }
    });
  },

  treeForVendor(vendorTree) {
    var fileSaverTree = new Funnel(path.join(this.project.root, 'node_modules', 'file-saver'), {
      files: ['FileSaver.js']
    });

    return new MergeTrees([vendorTree, fileSaverTree]);
  },
};
