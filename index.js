/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var map = require('broccoli-stew').map;


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
    var trees = [];
    var fileSaverPath = path.dirname(require.resolve('file-saver'));
    var fileSaverTree = new Funnel(fileSaverPath, {
      files: ['FileSaver.js']
    });

    fileSaverTree = map(fileSaverTree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    if (vendorTree !== undefined) {
      trees.push(vendorTree);
    }

    trees.push(fileSaverTree);

    return new MergeTrees(trees);
  },
};
