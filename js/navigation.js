$(function(){
	console.log(" document ready ");

	$(".up_button").click( function(event) {
		console.log(event);
		$('html, body').animate({
			scrollTop: $("#head").offset().top
		}, 1500);
			});

	$("#return-to-top").click ( function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
		$( "#return-to-top" ).css("display", "none");
	});

	$(".project_button").click( function(event) {
		console.log(event);
		$('html, body').animate({
			scrollTop: $("#project_holder").offset().top
		}, 1500);

		// handle doing the scroll magic
		if(event.currentTarget.id == 'course') {
			$( "#project_holder" ).load( "projects/brief/course_brief.html" );
		}
		if(event.currentTarget.id == 'p1') {
			$( "#project_holder" ).load( "projects/city/project1.html" );
		}
		if(event.currentTarget.id == 'p2') {
			$( "#project_holder" ).load( "projects/sports/project1.html" );
		}
		if(event.currentTarget.id == 'p3') {
			$( "#project_holder" ).load( "projects/farm/project1.html" );
		}
		if(event.currentTarget.id == 'p4') {
			$( "#project_holder" ).load( "projects/pawn/project1.html" );
		}
		if(event.currentTarget.id == 'p5') {
			$( "#project_holder" ).load( "projects/judge/project1.html" );
		}
		if(event.currentTarget.id == 'p6') {
			$( "#project_holder" ).load( "projects/tools/project1.html" );
		}
		if(event.currentTarget.id == 'p7') {
			//$( "#project_holder" ).load( "projects/bounce/project1.html" );
		}

		$( "#return-to-top" ).css("display", "block");


	});
});
