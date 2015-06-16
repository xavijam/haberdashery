
/**
 *  Cookies entry
 *
 */

$(function(){

  var Cookies = PageView.extend({

    _initViews: function() {
      PageView.prototype._initViews.call(this);
      
      // Parallax
      this.$('.parallax-window').parallax();
    }
  });

  window.cookies = new Cookies();

});