
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
      this._startBoni();

    },

    _startBoni: function() {
      for (var i = 0, l = 36; i < l; i++) {
        var makeItVisible = parseInt(Math.random() * 2) ?  true : false;
        $('.js-logo').append('<span class="Slider-logoBoni ' + (!makeItVisible ? 'is-hidden' : '' ) + '" style="transform: rotate(' + i * 10 + 'deg);"></span>');
      }
    }

  });

  window.home = new Home();

});
