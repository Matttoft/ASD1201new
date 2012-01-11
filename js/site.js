/**
 * @author Matt Toft
 * ASD 1112
 */

$(document).ready(function() {
	//site code

	$.ajax({
		type : "GET",
		url : "xhr/data.xml",
		dataType : "xml",
		complete : function() {
			$('#impressions').listview('refresh');
		},
		success : function(xml) {
			$(xml).find('item').each(function() {
				var day = $(this).find('day').text();
				var task = $(this).find('task').text();
				$('<li data-role="list-divider" ></li>').html(day).appendTo('#impressions');
				$('<li data-theme="d" ></li>').html(task).appendTo('#specList');
			});
		}
	});

});
//Getting data from a JSON file
$.getJSON('xhr/data.json', function(data) {
	var techteam = [];
	$.each(data, function(key, val) {
		techteam.push('<li id="' + key + '">' + val + '</li>');
	});
	$('<li/>', {
		html : techteam.join('')
	}).appendTo('#tech');
});
