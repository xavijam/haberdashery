
$(document).ready(function() {

   var $calendar = $('#calendar');
   var id = 10;

   $calendar.weekCalendar({
    timeFormat : "h:i",
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
       callback(getEventData());
    },
    readonly: true,
    shortDays : ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    longDays : ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
   });

   function getEventData() {
      var events = _.clone(classes);

      return _.map(events.classes, function(item, i){
        item.id = i;
        item.start = new Date(moment().day(item.day).hour(item.hourStart).minute(item.minStart).second(0).format());
        item.end = new Date(moment().day(item.day).hour(item.hourEnd).minute(item.minEnd).second(0).format());
        item.color = events.types[ item.title ];
        return item
      });
   }

});