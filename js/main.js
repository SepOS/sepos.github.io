//To change the list-crumbs
const scrollSpy = new bootstrap.ScrollSpy(
  document.body, 
  {
    target: '#list-spy'
  }
)

//To change the welcome text
var data = [
  {moment:'morning', at:0},
  {moment:'afternoon', at:12},
  {moment:'evening', at:18}
];

var msg =   function () {
  var date = new Date();
  var time = date.getHours();

  var preamble = '— good ';
  var error = '— Hi';

  if (time > data[2].at) {
    return preamble + data[2].moment;
  } else if (time > data[1].at) {
    return preamble + data[1].moment;
  } else if (time >= data[0].at) {
    return preamble + data[0].moment;
  } else {
    return error;
  }
}

$( document ).ready(function() {
  $("#greeting").html(msg());
});