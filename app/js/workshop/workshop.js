
/**
 *  Workshop entry
 *
 */

$(function(){

  var WorkShop = PageView.extend({

    _initViews: function() {
      PageView.prototype._initViews.call(this);

      // Calendar
      var calendar = new WorkshopCalendar({
        el:     this.$('.js-calendar'),
        events: this.options.classes,
        type:   this.options.type
      });

      calendar.render();

      // Slider
      $('.js-slider').flickerplate();
    }

  });

  window.workshop = new WorkShop({
    classes:  window.classes,
    type:     window.type
  });

});