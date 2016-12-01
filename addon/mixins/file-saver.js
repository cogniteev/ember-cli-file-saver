import Ember from 'ember';
import FileSaver from 'file-saver';

export default Ember.Mixin.create({

  saveFile(content, contentType) {
    FileSaver.saveAs(this.toBlob(content, contentType))
  },

  saveCanvasAs(filename, canvas) {
    canvas.toBlob((blob) => this.saveAs(blob, filename));
  },

  saveTextAs(filename, text) {
    this.saveAs(new Blob([ text ], { type: 'text/plain;charset=utf-8' }), filename);
  },

  saveFileAs(filename, content, contentType) {
    this.saveAs(new File([ content], filename, { type: contentType }));
  },

  saveAs() {
    FileSaver.saveAs(...arguments);
  }

});
