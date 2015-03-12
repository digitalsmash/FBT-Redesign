

$(document).on('click', '.mega .dropdown-menu', function(e) {
  e.stopPropagation()
})

$(document).ready(function(){

$("#search").focus(function(){$(this).animate({width:"100%"})}).blur(function(){$(this).animate({width:"80px"})});

$(function () {
      $('#datetimepicker1').datetimepicker({
        locale: 'de',
        format: 'DD/MM/YYYY'
      });
      $('#datetimepicker2').datetimepicker({
        locale: 'de',
        format: 'DD/MM/YYYY'
      });
    });

$('#myCarousel').carousel({
interval:   6000
});

//moment.locale('de');
$('#radioEx1').radio();

});