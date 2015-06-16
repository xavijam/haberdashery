
/**
 *  Home entry
 *
 */

$(function(){

  var Home = PageView.extend({

    _initViews: function() {
      PageView.prototype._initViews.call(this);

      // Slider
      $('.js-slider').flickerplate();
    }

  });

  window.home = new Home();

});