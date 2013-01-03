(function (window, document, undefined) {
    $('.toolbox').draggable({ cursor: "move", containment: "body", cancel: ".toolbox-content-wrapper"});
    $('td.toolbox-element.button').click(function(){
	var grid = $(this).attr('data').split("x");
	var buttonid = $(this).attr('id');
	$('.active-grid').removeClass('active-grid');
	$(this).addClass('active-grid');
	var dashboard = $('#dashboard');
	var id = 0;
	var element = $('<div></div>');
	for(var i = 0; i < grid[0]; i++){
	    var row = $('<div class="row show-grid" id="element-' + i +'"></div>')
	    for(var n = 0; n < grid[1]; n++){
		var span = 0;
		if( grid[1] == 1) 
		    span = 12;
		else if(grid[1] == 2)
		    span = 6;
		else if(grid[1] == 3)
		    span = 4;
		row.append('<div class="dashboard-grid droppable-element span' +  span   + '" id="element' + id + '">' + id + '</div>');
		id++;
	    }
	    element.append(row);
	}
	dashboard.html(element);
	$('.droppable-element').droppable({
	    drop: function(event,ui) {
		console.log(ui);
		if ( ui.draggable.attr('id') == "graph-service-single") {
		    $(this).removeClass('dashboard-grid');
		    $(this).addClass('well');
		    $(this).html("<a href='#' class='thumbnail'><img data-src='' alt='400x400'></a>");
		} else 		if ( ui.draggable.attr('id') == "graph-service-single") {
		}
	    }
	});
	
    });

    $('.toolbox-element.draggable').draggable({helper: "clone"});

})(this, this.document);

