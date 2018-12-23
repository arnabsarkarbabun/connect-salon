(function(){

$(document).ready(function() {

	var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
	console.log(html)
  	var switchery = new Switchery(html,{ size: 'small', color: '#dcdcdc', secondaryColor: '#dcdcdc', jackColor: '#64706e', jackSecondaryColor: '#9aaaa7'  });
});

	// var switchery = new Switchery(elem, { size: 'small' });

	
	// var switchery = new Switchery(elem, { color: '#faab43', secondaryColor: '#fC73d0', jackColor: '#fcf45e', jackSecondaryColor: '#c8ff77' });
	$('#monday_to, #monday_from, #tuesday_to, #tuesday_from, #wednesday_to, #wednesday_from, #thursday_to, #thursday_from,#friday_to, #friday_from,#saturday_to, #saturday_from,#sunday_to, #sunday_from').datetimepicker({format: 'LT'})


var options = { hideSidePanel: true, startCollapsed : true };
$("select#demo1").treeMultiselect(options);


});

})();