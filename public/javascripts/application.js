/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Current date for when people print web page
$(document).ready(function(){

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  today = dd + ' ' + months[mm-1] + ' ' + yyyy;
  console.log(today);
  $('#currentdate').html(today);
});