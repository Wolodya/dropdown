$('.dropdown-menu.menu-custom').on('click', function(event){
	event.stopPropagation();
});

$('.dropdown').on("shown.bs.dropdown",()=>{

	var menu = $(".dropdown-menu");
	var btn = $("#dropdownMenuButton");
	var menuOffset = menu.offset();

	var spaceUp = (menuOffset.top - btn.height() - menu.height()) - $(window).scrollTop();
	var spaceDown = $(window).scrollTop() + $(window).height() - (menuOffset.top + menu.height());

	if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown))
		$('.dropdown').addClass("dropup");
});

$('.dropdown').on("hidden.bs.dropdown", ()=> {
	$('.dropdown').removeClass("dropup");
});


$("#template-menu input[type='checkbox']").on('change',()=>{
	var checkboxes = $("#template-menu input[type='checkbox']:checked");
	$("#dropdownMenuButton .badge").text(checkboxes.length ? `(${checkboxes.length})` : '');
});

var selectedCheckboxesTexts=[]
$('.dropdown button').on("mouseenter", ()=> {
	var checkboxes = $("#template-menu input[type='checkbox']:checked");
	var selectedCheckboxesTexts=[]
	checkboxes.each(function(index){selectedCheckboxesTexts.push($(this).next().text())})
	$('#dropdownMenuButton').attr("title", selectedCheckboxesTexts.join('\n'));
});