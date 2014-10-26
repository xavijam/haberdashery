
  /**
   *  Custom calendar using jQueryWeekCalendar
   *
   */

  var WorkshopCalendar = Backbone.View.extend({

    _LEGEND_ITEM_TEMPLATE: '<li><span style="background:<%= color %>"></span><%= name %></li>',

    initialize: function(obj) {
      this.options = obj;
    },

    render: function() {
      this.$el.append($('<div>').attr('id', 'calendar'));
      this._initViews();
      this._createLegend();
      return this;
    },

    _initViews: function() {
      var self = this;
      
      // jQuery week calendar
      this.$('#calendar').weekCalendar({
        timeFormat : "H:i",
        date: new Date(),
        dateFormat : "",
        timeslotsPerHour : 3,
        allowCalEventOverlap : true,
        overlapEventsSeparate: true,
        firstDayOfWeek : 1,
        businessHours :{start: 10, end: 20, limitDisplay: true },
        daysToShow : 6,
        use24Hour : true,
        useShortDayNames: true,
        timeSeparator: " - ",
        buttons: false,
        height : function($calendar) {
          return $(window).height()
        },
        eventRender : function() {},
        draggable : function() {},
        resizable : function(calEvent, $event) {
          return calEvent.readOnly != true;
        },
        eventNew : function() {},
        eventDrop : function() {},
        eventResize : function() {},
        eventClick : function() {},
        eventMouseover : function(calEvent, $event) {},
        eventMouseout : function(calEvent, $event) {},
        noEvents : function() {},
        data : function(start, end, callback) {
           callback(self._getEventData());
        },
        readonly: true,
        shortDays : ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        longDays : ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
      });
    },

    _createLegend: function() {
      var $list = $('<ul>').addClass('workshop-calendar-legend');
      
      _.each(this.options.events.types, function(color, name) {
        $list.append(
          _.template(this._LEGEND_ITEM_TEMPLATE)({
            color:  color,
            name:   name
          })
        )
      }, this);

      this.$el.prepend($list);
    },

    _getEventData: function() {
      var events = _.clone(this.options.events);

      return _.map(this.options.events.classes, function(item, i){
        item.id = i;
        item.color = events.types[ item.title ];

        var weekday = moment().weekday();
        if (weekday === 0) {
          weekday = -1;
        }

        item.start = new Date(moment().weekday(weekday).day(item.day).hour(item.hourStart).minute(item.minStart).second(0).format());
        item.end = new Date(moment().weekday(weekday).day(item.day).hour(item.hourEnd).minute(item.minEnd).second(0).format());

        return item
      });
    }

  })