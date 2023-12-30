// var resources= [
//   {
//     id: 'a',
//     title: 'Room A'
//   },
//   {
//     id: 'b',
//     title: 'Room B'
//   },
//   {
//     id: 'c',
//     title: 'Room C'
//   }
// ];
//  var events= [
//   {
//     title: 'ishika',
//     start: '2023-12-29T12:30:00',
//     end :'2023-12-29T03:00:00',
//     description:'Meeting',
//     allDay : false,
//     resourceId:'a'
//   }
// ]

var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    //  resources:resources,
     // events : events,
     editable : true,
     nowIndicator : true
});
calendar.render();

$(".btn").click(a=>{
  var drId  = $("#drId").val();
  var drName = $("#drName").val();

  var drObj={
    id:  drId,
    title: drName
  }
  console.log(drObj);
  calendar.addResource(drObj);
});

