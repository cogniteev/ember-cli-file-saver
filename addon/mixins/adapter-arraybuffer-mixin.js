import Ember from 'ember';

export default Ember.Mixin.create({

  /**
   * Because dataType:json is hardcoded we are looking
   * for either a blob:true or arraybuffer:true ajax option
   * in order to set the proper data type to jQuery.
   *
   * @param url
   * @param type
   * @param options
   * @returns {*}
   */
  ajaxOptions(url, type, options) {
    const opts = this._super(url, type, options);
    if (options) {
      if (options.arraybuffer) {
        opts.dataType = 'arraybuffer';
        opts.processData = false;
      } else if (options.blob) {
        opts.dataType = 'blob';
        opts.processData = false;
      }
    }
    return opts;
  }

});
