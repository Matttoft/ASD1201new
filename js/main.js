/**
 * Project 1
 Matt Toft 
 ASD 1201

 */
$(document).ready(function(){
	
	var formLock = $(".lockup").length;


	$('#submit').live('click',function(key) {
		var xkey=this.key;
		var id='';
		
		if(!xkey) {
			var id = Math.floor(Math.random() * 100000001);
		} else {
			id = xkey;
		}

		var item = {};
		item.fname = ["First Name:", $('#fname').val()];
		item.lname = ["Last Name:", $('#lname').val()];
		item.email = ["Email:", $('#email').val()];
		item.tel = ["Telephone #:", $('#tel').val()];
		item.sex =["Sex:",$('input:radio[name=sex]:checked').val()];
		item.group = ["Ministry:", $('#dropdown').val()];
		item.attending = ["Attending Months:", $('#attending').val()];
		item.memtype = ["Member Type:", $('#checkbox').val()];
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Data submitted, a ministry leader will contact you soon.");

	});
	

	function getimage(catname, makesublist) {
		var imageli = document.createElement('li');
		makesublist.appendChild(imageli);
		var newimg = document.createElement('img');
		var setsrc = newimg.setAttribute('src', "img/" + catname + ".gif");
		imageli.appendChild(newimg);
	}
	
	    function lok() {
    
    	if ($(".lockup").length === 0){
    		$("[type='submit']").button('enable');
    	};	
    };  



	$("#fname").live("blur", function(){
		if (this.value === "") {
            $(this).css("border", "solid 1px red");
            $("#fnameErr").show();
		};
		if(this.value !== "") {
			$(this).css("border", "solid 1px black");
			$("#fnameErr").remove();
		};
		lok();         
	});

	$("#lname").live("blur", function(){
		if (this.value === "") {
            $(this).css("border", "solid 1px red");
            $("#lnameErr").show();
		};
		if(this.value !== "") {
			$(this).css("border", "solid 1px black");
			$("#lnameErr").remove();		
		};
		lok();
	});

	$("#dropdown").live("change", function(){
		if (this.value === "") {
            $("#groupErr").show();
		};
		if(this.value !== "Select Ministry") {
			$("#groupErr").remove();
		};
		lok();
	});




});
$("#minsignup").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});
