var cnt = 0;
var open = false;
$(document).ready(function () {

	'use strict';

	window.addEventListener('load', function() {
	  var forms = document.getElementsByClassName('needs-validation');
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);

	$(".closebtn").on('click', function(){
		open = false;
		closeNav();
	});

	$(".openbtn").on('click', function(){
		open = true;
		openNav();
	});

	function openNav() {
		$(".openbtn").hide();
		document.getElementById("tot").style.paddingTop = "240px";
		document.getElementById("mySidebar").style.width = "250px";
		document.getElementById("OvO").style.marginLeft = "250px";
	}
	  
	function closeNav() {
		$(".openbtn").show();
		document.getElementById("tot").style.paddingTop = "190px";
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("OvO").style.marginLeft = "0";
	}

	var navBar = $("#low-nav"); 
	var myWindow = $(window);
	navBar.hide();
	myWindow.on('scroll', function() {
		if ($(this).scrollTop() > 480 && !open) { 
			navBar.slideDown();
		}
		else{
			navBar.slideUp();
		}
	});
	
	$("a").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
			window.location.hash = hash;
		  });
		}
	});

});