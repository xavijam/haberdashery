
  /**
   *  Cookie banner view
   *
   */

  var CookieBanner = Backbone.View.extend({

    events: {
      'click .js-close': '_onClickClose'
    },

    render: function() {
      this.$el[ !this.model.isEmpty() ? 'hide' : 'show' ]();
      return this;
    },

    _onClickClose: function(e) {
      e.preventDefault();
      this.$el.hide();
      this.model.save({ 'merceria-alonso': true });
    }

  });