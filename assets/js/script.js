$(document).ready(function(){

	//HIDE AND SHOW MODAL CONTAINER
	
	$("#modal-enter").click(function(){
		$("#modal-container").fadeOut(500);
	});

	$("#modal-overlay").click(function(){
		$("#modal-container").fadeOut(500);
	});

	$("#modal-enter").click(function(){
		$("#modal-container").fadeOut(500);
	});

	$("#contact-tab").click(function(){
		$("#contact-container").fadeIn(100);
	});

	$("#contact-submit").click(function(){
		$("#contact-container").fadeOut(500);
	});

	$("#contact-cancel").click(function(){
		$("#contact-container").fadeOut(500);
	});

	$("#contact-overlay").click(function(){
		$("#contact-container").fadeOut(500);
	});

	$("#contact-container-all").click(function(){
		$("#contact-container").fadeIn(100);
	});

	$("#contact-overlay").click(function(){
		$("#contact-container").fadeOut(500);
	});

	// SCROLLING

	$("#education-tab").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#education-header").offset().top - 20},
	        'slow');
	});


	$("#prof-tab").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#professional-header").offset().top - 20},
	        'slow');
	});


	$("#skills-tab,#honors-tab").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#honors-header").offset().top - 500},
	        'slow');
	});

	// HOMEPAGE HOVER so that icon appears

	$("#about-tab").hover(
		function(){
			$("#about-icon").addClass("icons-hover");
		},
		function(){
			$("#about-icon").removeClass("icons-hover");
		}
	);
	$("#resume-tab").hover(
		function(){
			$("#resume-icon").addClass("icons-hover");
		},
		function(){
			$("#resume-icon").removeClass("icons-hover");
		}
	);
	$("#portfolio-tab").hover(
		function(){
			$("#portfolio-icon").addClass("icons-hover");
		},
		function(){
			$("#portfolio-icon").removeClass("icons-hover");
		}
	);
	$("#contact-tab").hover(
		function(){
			$("#contact-icon").addClass("icons-hover");
		},
		function(){
			$("#contact-icon").removeClass("icons-hover");
		}
	);

	/*Hover over certain text and it will bold*/
	$("#skills-container").hover(function() {
		// ADD BOLD ELEMENTS
    	$('#skills-container:contains("Japanese")').each(function(){
        	$(this).html( 
            	$(this).html().replace(/Japanese/g,'<strong>$&</strong>'));
			}
   		);
	});

});