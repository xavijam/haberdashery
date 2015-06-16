
  /**
   *  Location map
   *  
   */

  var LocationMap = Backbone.View.extend({

    defaults: {
      center: new google.maps.LatLng(40.474139, -3.872835)
    },

    initialize: function() {
      this._initBinds();
    },

    render: function() {
      this.$el.append(
        $('<div>')
          .attr('id', 'map')
          .css('height', '100%')
      );

      var mapOptions = {
        zoom: 18,
        center: this.defaults.center,
        disableDefaultUI: false,
        disableDoubleClickZoom: true,
        draggable: true,
        scrollwheel: false
      };

      this.map = new google.maps.Map(this.$('#map')[0],mapOptions);

      this._addMarker();
      this._onResize();

      return this;
    },

    _initBinds: function() {
      _.bindAll(this, '_onResize');
      $(window).on('resize', this._onResize)
    },

    _addMarker: function() {
      var image = {
        url: '/img/shop/marker.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        size: new google.maps.Size(60, 60),
        // The origin for this image is 0,0.
        origin: new google.maps.Point(0,0),
        // The anchor for this image is the base of the flagpole at 0,32.
        anchor: new google.maps.Point(30,60)
      };

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.474049, -3.872952),
        map: this.map,
        icon: image,
        title: 'Mercería Alonso'
      });

    },

    _onResize: function() {
      this.map.setCenter(this.defaults.center);
    }

  })