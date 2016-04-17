/**
 *  Home entry
 *
 */

$(function () {
  var Home = PageView.extend({

    _initViews: function () {
      PageView.prototype._initViews.call(this);
      $('.js-slider').flickerplate();
      this._startBoni();
    },

    _startBoni: function () {
      for (var i = 0, l = 36; i < l; i++) {
        var makeItVisible = parseInt(Math.random() * 2) ? true : false;
        $('.js-logo').append(
          $('<span>').addClass(
            'Slider-logoBoni ' + (!makeItVisible ? 'is-hidden' : '')
          ).attr('style', 'transform: rotate(' + i * 10 + 'deg)')
        );
      }
    }

  });

  window.home = new Home();

});
