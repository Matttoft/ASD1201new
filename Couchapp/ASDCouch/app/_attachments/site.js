/**
 * @author Matt Toft
 * ASD 1112
 */

$(document).ready(function() {
	//site code
<<<<<<< HEAD
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
});
=======
	
		
		
$('#json').bind('click', function(){
	$('#browse').empty();
	$.ajax({
		url: 'XHR/data.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
        	for (var i=0, j=response.techteam.length; i<j; i++){
				var jdata = response.techteam[i];
				$(''+
					'<li class="member">'+
						'<h2>'+ jdata.fname +'</h2>'+
						'<h3>'+ jdata.ministry +'</h3>'+
						'<h4>'+ jdata.email +'</h4>'+
						'<h4>'+ jdata.tel +'</h4>'+
					'</li><hr />'
				).appendTo('#browse');
				console.log(response);
			}
		}
	});
	return false;
});


   $('#xml').bind('click', function(){
	$('#browse').empty();
	$.ajax({
		url: 'xhr/data.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(xml){
			$(xml).find("mem").each(function(){
   				var name = $(this).find('fname').text();
   				var email= $(this).find('email').text();
   				var tel= $(this).find('phone').text();
				var min= $(this).find('min').text();
    			$(''+
					'<li class="member">'+
						'<h2>'+ name+'</h2>'+
						'<h3>'+ min +'</h3>'+
						'<h4>'+ email +'</h4>'+
						'<h4>'+ tel+'</h4>'+				

						
					'</li><hr />'
				).appendTo('#browse');
				console.log(xml);
			});
		}
	});
	return false;
});

	$('#csv').bind('click', function(){
	$('#browse').empty();
	 $.ajax({
        type: "GET",
        url: "XHR/data.csv",
        dataType: "text",
        success: function(data) {
        	var allTextLines = data.split(/\r\n|\n/);
    		var headers = allTextLines[0].split(',');
    		var lines = []; 

			for (var i=1; i<allTextLines.length; i++) {
				var data = allTextLines[i].split(',');
				if (data.length == headers.length) {
					var members= []; 
					
					for (var j=0; j<headers.length; j++) {
						members.push(data[j]);
					}
					lines.push(members); 
				}
				
			}
			
			for (var m=0; m<lines.length; m++){
				var member = lines[m];
			$(''+
					'<li class="memebrs">'+
						'<h2>'+ member[0] +'</h2>'+
						'<h4>'+ member[5] +'</h4>'+
						'<h4>'+ member[2] +'</h4>'+
						'<h4>'+ member[3] +'</h4>'+
					'</li><hr />'
				).appendTo('#browse');
			console.log(lines);	
			}
        }
	});
	return false;
>>>>>>> gh-pages
});

		
		
		
		
	});
		
