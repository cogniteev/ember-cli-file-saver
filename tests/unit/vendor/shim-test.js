import Ember from 'ember';
import { module, test } from 'qunit';
import FileSaver from 'file-saver';

const { typeOf } = Ember;

module('Unit | Vendor | shim');

test('it shim the saveAs library properly', function(assert) {
  assert.equal(typeOf(FileSaver), 'object', 'FileSaver is an object');
  assert.equal(typeOf(FileSaver.saveAs), 'function', 'FileSaver.saveAs is a function');
});
