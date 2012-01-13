/**
 * Project 1
 Matt Toft 
 ASD 1201

 */
$(document).ready(function(){
<<<<<<< HEAD
<<<<<<< HEAD

/*	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
} */

<<<<<<< HEAD
	function makeList() {
=======
/*	function makeList() {
>>>>>>> gh-pages
		var formTag = $("form");
		var selectLi = $('#select');
		var makeSelect $(document.createElement('select'));
		makeSelect.setAttribute("id", "dropdown");
		for(var i = 0, j = ministry.length; i < j; i++) {
			var makeOption = document.createElement('option');
			var optText = ministry[i];
			makeOption.setAttribute("value", optionText);
			makeOption.html (optionText);
			makeSelect.appendTo(makeOption);
		}
		selectLi.appendTo(makeSelect);
<<<<<<< HEAD
	}
=======
}; */
>>>>>>> gh-pages

/*	function getradio() {
		var radio = document.forms[0].sex;
		for(var i = 0; i < radio.length; i++) {
			if(radio[i].checked) {
				sexval = radio[i].val();
			}
		}

} */

	function getcheckval() {
		if($('checkbox-1').checked) {
			memtypeval = $('checkbox-1').val();
		} else {
			memtypeval = "No"
		}
	}

	function toggleControls(n) {
		switch(n) {
			case "on":
				$('minform').css = "none";
				$('clear').css = "inline";
				$('displayLink').css = "none";
				$('addnew').css = "inline";
				break;
			case "off":
				$('minform').css = "block";
				$('clear').css = "inline";
				$('displayLink').css = "inline";
				$('addnew').css = "none";
				$('items').css = "none";
				break;
			default:
				return false;
		}
	}

	function storeData(key) {
		if(!key) {
=======
	
	var formLock = $(".lockup").length;


=======
	
	var formLock = $(".lockup").length;


>>>>>>> gh-pages
	$('#submit').live('click',function(key) {
		var xkey=this.key;
		var id='';
		
		if(!xkey) {
<<<<<<< HEAD
>>>>>>> gh-pages
=======
>>>>>>> gh-pages
			var id = Math.floor(Math.random() * 100000001);
		} else {
			id = xkey;
		}
<<<<<<< HEAD
<<<<<<< HEAD
	//	getradio();
	//	getcheckval();
		var item = {};
<<<<<<< HEAD
		item.fname = ["First Name:", $('#fname').value];
		item.lname = ["Last Name:", $('#lname').value];
		item.email = ["Email:", $('#email').value];
		item.tel = ["Telephone #:", $('#tel').value];
		item.radios = ["Sex:", sexval];
		item.group = ["Ministry:", $('#dropdown').value];
		item.attending = ["Attending Months:", $('#attending').value];
		item.partner = ["Partner:", memtypeval];
		item.memtype = ["Member Type:", $('#checkbox-1').value];
		item.status = ["Status:", $('#status').value];
=======

		var item = {};
		item.fname = ["First Name:", $('#fname').val()];
		item.lname = ["Last Name:", $('#lname').val()];
		item.email = ["Email:", $('#email').val()];
		item.tel = ["Telephone #:", $('#tel').val()];
		item.sex =["Sex:",$('input:radio[name=sex]:checked').val()];
		item.group = ["Ministry:", $('#dropdown').val()];
		item.attending = ["Attending Months:", $('#attending').val()];
		item.memtype = ["Member Type:", $('#checkbox').val()];
		
>>>>>>> gh-pages
		localStorage.setItem(id, JSON.stringify(item));
=======
=======

		var item = {};
>>>>>>> gh-pages
		item.fname = ["First Name:", $('#fname').val()];
		item.lname = ["Last Name:", $('#lname').val()];
		item.email = ["Email:", $('#email').val()];
		item.tel = ["Telephone #:", $('#tel').val()];
<<<<<<< HEAD
	//	item.radios = ["Sex:", sexval];
		item.group = ["Ministry:", $('#dropdown').val()];
		item.attending = ["Attending Months:", $('#attending').val()];
	//	item.partner = ["Partner:", memtypeval];
		item.memtype = ["Member Type:", $('#checkbox-1').val()];
		
		sessionStorage.setItem(id, JSON.stringify(item));
>>>>>>> gh-pages
		alert("Data submitted, a ministry leader will contact you soon.");
<<<<<<< HEAD
		$.mobile.changePage( 'additem.html', {reloadPage: true},{ allowSamePageTranstion: true},{ transition: 'none'});
	}

	function getdata() {
	       $('#pullDiv').append(
			
			'<li>Name: ' + item.fname.toUpperCase()+ " " item.lname.toUpperCase() + '</li>' + 
			'<li>Email: ' + item.email + '</li>' +
			'<li>Telephone: ' + item.tel + '</li>' +
			'<li>Ministry: ' + item.dropdown + '</li>' +
			'<li>Months Attending: ' + item.attending + '</li>' + 
			'<li>Member Type: ' + item.checkbox-1 + '</li> ' +
			'<li>Partner: ' + item.memtype +'</li>'
		);
	sessionStorage.getItem("id", JSON.stringify());
}); 
$('#pullDiv').listview('refresh');

=======
		item.sex =["Sex:",$('input:radio[name=sex]:checked').val()];
		item.group = ["Ministry:", $('#dropdown').val()];
		item.attending = ["Attending Months:", $('#attending').val()];
		item.memtype = ["Member Type:", $('#checkbox').val()];
		
		sessionStorage.setItem(id, JSON.stringify(item));
		alert("Data submitted, a ministry leader will contact you soon.");
	//	$.mobile.changePage( 'additem.html', {reloadPage: true},{ allowSamePageTranstion: true},{ transition: 'none'});
	});
	
>>>>>>> gh-pages
=======

	});
	
>>>>>>> gh-pages

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


<<<<<<< HEAD
<<<<<<< HEAD
/*	function autofilldata() {
		var json = {
			'contact1' : {
				"fname" : ["First Name:", "Matt"],
				"lname" : ["Last Name:", "Toft"],
				"email" : ["Email:", "matttoft@fullsail.edu"],
				"tel" : ["Telephone:", "513-555-0559"],
				"radios" : ["Sex:", "male"],
				"dropdown" : ["Ministry:", "Nursery"],
				'attending' : ['Attending Months:', "6"],
				'partner' : ["Partner:", "Yes"],
				'checkbox-1' : ["Member Type:", "Transplant"],
				
			},
			'contact2' : {
				"fname" : ["First Name:", "Kim"],
				"lname" : ["Last Name:", "Toft"],
				"email" : ["Email:", "osulilbit@aol.com"],
				"tel" : ["Telephone:", "513-555-0559"],
				"radios" : ["Sex:", "female"],
				"dropdown" : ["Ministry:", "Outreach"],
				'attending' : ['Attending Months:', "6"],
				'partner' : ["Partner:", "Yes"],
				'checkbox-1' : ["Member Type:", "Transplant"],
				
			}
		};
		for(var n in json) {
			var id = Math.floor(Math.random() * 100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
} */

	function makeitemlinks(key, linksli) {
		var editlink = document.createElement('a');
		editlink.href = "#";
		editlink.key = key;
		var edittext = "Edit Contact";
		editlink.addEventListener("click", edititem);
		editlink.innerHTML = edittext;
		linksli.appendChild(editlink);

		var breaktag = document.createElement('br');
		linksli.appendChild(breaktag);

		var dellink = document.createElement('a');
		dellink.href = "#";
		dellink.key = key;
		var deltext = "Delete Contact";
		dellink.addEventListener("click", delitem);
		dellink.innerHTML = deltext;
		linksli.appendChild(dellink);

	}

	function edititem() {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		toggleControls("off");

		$('#fname').val(item.fname[1]);
		$('#lname').val(item.lname[1]);
		$('#email').val(item.email[1]);
		$('#tel').val(item.tel[1]);
		
		var radios = document.forms[0].sex;
		for(var i = 0; i < radios.length; i++) {
			if(radios[i].val() == 'male' && item.radios[1] == "male") {
				radios[i].setAttribute("checked", "checked");
			} else if(radios[i].val() == 'female' && item.radios[1] == "female") {
				radios[i].setAttribute("checked", "checked");
			}
		}
		$('#dropdown').val(item.dropdown[1]);
<<<<<<< HEAD
		$('#attending').value(item.attending[1]);
=======
		$('#attending').val()(item.attending[1]);
>>>>>>> gh-pages
		if(item.partner[1] == 'yes') {
			$('#partner').setAttribute("checked", "checked");
		}
		$('#checkbox-1').val(item.memtype[1]);
		$('#story').val(item.story[1]);

		saveEntry.unbind("click", storeData);

<<<<<<< HEAD
		$('#submit').value = "Edit Contact";
=======
		$('#submit').val() = "Edit Contact";
>>>>>>> gh-pages
		var editsubmit = $('#submit');
		editsubmit.addEventListener("click", validate);
		editsubmit.key = this.key;

	}

	function delitem() {
		var ask = confirm("Are you sure?");
		if(ask) {
			localStorage.removeItem(this.key);
			alert("Item Deleted.")
			window.location.reload();
		} else {
			alert("Item Not Deleted.")
		}
	}

	   function clearLocal() {
        if (sessionStorage.length === 0) {
            alert("There is nothing in Storage");
        } else {
            sessionStorage.clear();
            alert("Data has been cleared");
            return false;
        }
    }


	function validate(e) {
		var getgroup = $('#dropdown');
		var getfname = $('#fname');
		var getlname = $('#lname');
		var getemail = $('#email');

	errmsg.css("display", "none");
		$("#dropdown").css ("border","");
		$("#fname").css ("border","");
		$("#lname").css ("border","");
		$("#email").css ("border","");

		var messagearray = [];
		if(getgroup.val === "") {
			var grouperror = 'Please Choose a Ministry Option.';
			getgroup.style.border = "3px solid red";
			messagearray.push(grouperror);
		}
		if(getfname.val() === "") {
			var fnameerror = 'Please Enter a First Name.';
			getfname.style.border = "3px solid red";
			messagearray.push(fnameerror);
		}
		if(getlname.val() === "") {
			var lnameerror = 'Please Enter a Last Name.';
			getlname.style.border = "3px solid red";
			messagearray.push(lnameerror);
		}
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!(re.exec(getemail.val()))) {
			var emailerror = "Please Enter a Valid Email Address";
			getemail.style.border = "3px solid red";
			messagearray.push(emailerror);
=======
>>>>>>> gh-pages
=======
>>>>>>> gh-pages

	$("#fname").live("blur", function(){
		if (this.value === "") {
            $(this).css("border", "solid 1px red");
            $("#fnameErr").show();
		};
		if(this.value !== "") {
<<<<<<< HEAD
			$(this).css("border", "solid 1px green");
=======
			$(this).css("border", "solid 1px black");
>>>>>>> gh-pages
			$("#fnameErr").remove();
		};
		lok();         
	});
<<<<<<< HEAD

	$("#lname").live("blur", function(){
		if (this.value === "") {
            $(this).css("border", "solid 1px red");
            $("#lnameErr").show();
		};
		if(this.value !== "") {
			$(this).css("border", "solid 1px green");
			$("#lnameErr").remove();		
		};
		lok();
	});

	$("#male").live("change", function(){
		$("#genderErr").remove();
	});
	$("#female").live("change", function(){
		$("#genderErr").remove();
	});
	

=======

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

>>>>>>> gh-pages
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
