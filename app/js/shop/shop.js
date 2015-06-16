
/**
 *  Shop entry
 *
 */

$(function(){

  var Shop = PageView.extend({

    _initViews: function() {
      PageView.prototype._initViews.call(this);

      // Map
      var location_map = new LocationMap({
        el: this.$('.js-map')
      });
      location_map.render();

      // Parallax
      this.$('.parallax-window').parallax();
    }

  });

  window.shop = new Shop();

});