
$(document).ready(function() {


   var $calendar = $('#calendar');
   var id = 10;

   $calendar.weekCalendar({
    timeFormat : "h",
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
    shortDays : ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    longDays : ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
   });

   function getEventData() {
      // var year = new Date().getFullYear();
      // var month = new Date().getMonth();
      // var day = new Date().getDate();

      var events = _.clone(classes);

      return _.map(events.classes, function(item, i){
        item.id = i;
        item.start = new Date(item.start);
        item.end = new Date(item.end);
        return item
      });
   }

});