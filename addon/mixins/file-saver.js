import Ember from 'ember';
import FileSaver from 'file-saver';

export default Ember.Mixin.create({

  saveCanvasAs(filename, canvas) {
    canvas.toBlob((blob) => this.saveAs(blob, filename));
  },

  saveTextAs(filename, text) {
    this.saveFileAs(filename, text, 'text/plain;charset=utf-8');
  },

  saveFileAs(filename, content, contentType) {
    this.saveAs(new Blob([ content ], { type: contentType }), filename);
  },

  saveAs() {
    FileSaver.saveAs(...arguments);
  }

});
