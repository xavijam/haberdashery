
  /**
   *  Home javascript
   *
   */

  $(function(){

    var Home = Backbone.View.extend({

      events: {
        "click a[href*=#]:not([href=#])": "_scrollTo",
        "click .header-comp-nav": "_changeActive",
        "click": "_removeActive"
      },

      initialize: function(obj) {
        this.options = obj;
        this.model = new Backbone.Model({ active: false });
        this.cookie = new CookieModel({ id: 'merceria-alonso' });
        this._initViews();
        this._initBinds();
      },

      _initViews: function() {
        // Show cookies?
        var cookie_banner = new CookieBanner({
          el: this.$('.cookie-banner'),
          model: this.cookie
        });
        cookie_banner.render();

        // Image slider
        var slider = new Slider({
          el: this.$('.image-slider')
        });
        slider.render();

        // // Last posts
        // var lastPosts = new LastPosts({
        //   el: this.$('.js-posts')
        // });

        // Slider
        $('.js-slider').flickerplate();
      },

      _initBinds: function() {
        this.model.bind('change:active', this._onActiveChange, this);
      },

      _onActiveChange: function(e) {
        var active = this.model.get('active');
        this.$el[active ? 'addClass' : 'removeClass' ]('active')
      },

      _changeActive: function(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.model.set('active', !this.model.get('active'));
      },

      _removeActive: function() {
        this.model.set('active', false);
      },

      _scrollTo: function(e) {
        var hash = $(e.target).attr('href');
        
        if (hash && hash.search('#') === 0 && hash.search('#/') === -1) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }

          var target = $(hash);
          target = target.length ? target : this.$('[name=' + hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      }

    });

    window.home = new Home({ el: document.body });

  });