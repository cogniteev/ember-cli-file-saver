import Ember from 'ember';
import AdapterArraybufferMixin from 'ember-cli-file-saver/mixins/adapter-arraybuffer-mixin';
import { module, test } from 'qunit';

const { Object: EmberObject } = Ember;

module('Unit | Mixin | adapter arraybuffer mixin');

function createSubject() {
  return EmberObject.extend({
    ajaxOptions(url, type, options) {
      return { url, type, options };
    }
  }, AdapterArraybufferMixin).create();
}

test('it does not do anything if no options is given', function(assert) {
  assert.deepEqual(createSubject().ajaxOptions('http://domain.com', 'GET', { key: 'value' }), {
    url: 'http://domain.com',
    type: 'GET',
    options: {
      key: 'value'
    }
  });
});

test('it sets dataType to arraybuffer and processData to false if arraybuffer:true', function(assert) {
  assert.deepEqual(createSubject().ajaxOptions('http://domain.com', 'GET', { arraybuffer: true }), {
    url: 'http://domain.com',
    type: 'GET',
    dataType: 'arraybuffer',
    processData: false,
    options: {
      arraybuffer: true
    }
  });
});

test('it sets dataType to blob and processData to false if blob:true', function(assert) {
  assert.deepEqual(createSubject().ajaxOptions('http://domain.com', 'GET', { blob: true }), {
    url: 'http://domain.com',
    type: 'GET',
    dataType: 'blob',
    processData: false,
    options: {
      blob: true
    }
  });
});
