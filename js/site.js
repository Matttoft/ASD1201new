/**
 * @author Matt Toft
 * ASD 1112
 */

$(document).ready(function() {
	//site code
<<<<<<< HEAD

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

=======
    $('#click1 a').click(function(){
        $('#mytest').empty();
        $.ajax({
            url: 'xhr/data.json',
            type: 'GET',
            dataType: 'json',
            success: function(response){
                for (var i=0, j=response.customers.length; i<j; i++){
                    var cust2= response.customers[i];
                    $(''+
                        '<li>'+
                            '<h3 class="ui-li-aside">'+ cust2.phone +'</h3>'+
                            '<h2>'+ cust2.name +'</h2>'+
                            '<p>'+ cust2.address +'</p>'+
                            
                        '</li>'
                    ).appendTo('#mytest');
                };
            }
        });
    });
    $('#click2 a').click(function(){
        $('#mytest').empty();
        $.ajax({
            url: 'xhr/orders.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(response2){
                $(response2).find('order').each(function(){
                    var name_txt = $(this).find('name').text()
                    var addr_txt = $(this).find('addr').text()
                    var phone_txt = $(this).find('phone').text()
                    var item_txt = $(this).find('item').text()
                    $(''+
                        '<li>'+
                            '<h3 class="ui-li-aside">'+ phone_txt +'</h3>'+
                            '<h2>'+ name_txt +'</h2>'+
                            '<p>'+ addr_txt +'</p>'+
                            '<p>'+ item_txt +'</p>'+
                        '</li>'
                    ).appendTo('#mytest');
                });
            }
        });
    });
    $('#click3 a').click(function(){
        $('#mytest').empty();
        $('#mytest').CSVToTable('xhr/test.csv');
    });
>>>>>>> master
});
});
