

$(document).on('click', '.mega .dropdown-menu', function(e) {
  e.stopPropagation()
})

$(document).ready(function(){

$("#search").focus(function(){$(this).animate({width:"100%"})}).blur(function(){$(this).animate({width:"80px"})});


$('#myCarousel').carousel({
interval:   6000
});

moment.locale('de');

$('#fromDatepicker').datepicker({
 momentConfig: 
 {
    culture: 'de',
    format: 'L'
 }
});
$('#toDatepicker').datepicker({
 momentConfig: 
 {
    culture: 'de',
    format: 'L'
 }
});

moment.lang('de', {
    week : {
        dow : 1 // Monday is the first day of the week
    }
})
//moment.locale('de');
$('#radioEx1').radio();

});