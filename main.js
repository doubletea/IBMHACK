
var ing = ["onions","garlic"];

var fetch = function(ingr, callback){
	var uri = "http://www.recipepuppy.com/api/?i=";
	
	for (var i = 0; i < ingr.length; ++i){
		uri = uri + ingr[i];
		if (i !== ingr.length - 1) uri = uri + ",";
	}
	
	uri = uri + ""; // PAGES TODO
	
	$.ajax({
		type: "POST",
		dataType: 'text',
		url: uri,
		crossDomain : true,
		xhrFields: {
			withCredentials: false
		}
	}).done(function( data ) {
		console.log("done");
		
		var nodeNames = [];
		var html = JSON.parse(data);
		
		if (callback) callback(html.results);

	})
	.fail( function(xhr, textStatus, errorThrown) {
		alert(xhr.responseText);
		alert(textStatus);
	});
};

fetch(ing);
	



