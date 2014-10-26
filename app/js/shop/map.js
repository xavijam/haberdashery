
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
      this.$el.append($('<div>').attr('id', 'map'));

      var mapOptions = {
        zoom: 18,
        center: this.defaults.center,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        draggable: false,
        scrollwheel: false
      };

      this.map = new google.maps.Map(this.$('#map')[0],mapOptions);

      this._addPolygon();
      this._onResize();

      return this;
    },

    _initBinds: function() {
      _.bindAll(this, '_onResize');
      $(window).on('resize', this._onResize)
    },

    _addPolygon: function() {
      this.map.data.addGeoJson({
        "type": "Feature",
        "geometry": {
          "type":"MultiPolygon",
          "coordinates":[[[
            [-3.873039,40.474150],
            [-3.873043,40.474090],
            [-3.872883,40.474087],
            [-3.872903,40.474259],
            [-3.872978,40.474260],
            [-3.872987,40.474142],
            [-3.873039,40.474150]
          ]]]
        }
      });

      var featureStyle = {
        fillColor: '#00B285',
        fillOpacity: 0.7,
        strokeWeight: 1.5,
        strokeColor: '#666'
      }

      this.map.data.setStyle(featureStyle);
    },

    _onResize: function() {

      this.map.setCenter(this.defaults.center);

      if ($(window).width() < 569) {
        this.$el.addClass('padtop');
        this.map.panBy(-30,130);
      } else {
        this.map.panBy(200,0);
        this.$el.removeClass('padtop');
      }
    }

  })