/*
	Basic content should be accessible to browsers that don't support JavaScript.
	In other words, the index.html file should display the entire list of students for browsers that don't support JavaScript.

	Unobstrusive JavaScript: this means that any content or functionality related to JavaScript should be added programmatically by JavaScript.
	For this project, that means, the pagination buttons and the (optional) search shouldn't be added directly to the index.html file.
	You need to use JavaScript to add them.

	Project Instructions
*/
'use strict';

const $student = $('.student-item');

function showPage( pageNumber, student ) {
	let maxNumber = pageNumber * 10;
	// Then loop through all students in our student list argument
	student.each(function( idx, value ) {
		let index = idx - 10;
	    // first hide all students on the page
		$(this).hide();

       // if student should be on this page number
		if( idx < maxNumber && idx > maxNumber - 11 ) {
		    // show the student
       		return $(this).show();
		}
	});
 }

 function appendPageLinks( studentList ) {
    // determine how many pages for this student list
    const max =  Math.ceil( ( studentList.length / 10 ) );
    let j = 1,
    	a = 1;

    // create a page link seciton
    $('.page').append('<div class="pagination"><ul></ul></div>');
    // “for” every page
    	for (let i =0; i < max; i++) {
	        // add a page link to the page link section
	        $('.pagination ul').append(`<li><a href="${[a++]}">${[j++]}</a></li>`);
    	}

    	// Select the first link as `active`
	 	$('.pagination ul li a').first().attr('class', 'active');

    	$('.pagination ul li a').on('click', function(e) {
		    // define what happens when you click a link
    		 e.preventDefault();
    		 let num = $(this).attr('href');

	        // Use the showPage function to display the page for the link clicked
    		 showPage( num, studentList );

    		 //Loop through and remove any `active` class on the <a> tag
    		 $('.pagination ul li a').each( function() {
    		 	$(this).removeAttr('class', 'active');
    		 });

	        // mark that link as “active”
    		 $(this).attr('class', 'active');
    	});

}

function searchList() {
	//Create input & button tags
	const $searchInput = $('<input type="text">'),
		  $searchButton = $('<button type="button">Search</button>');

	// Append the input & button to the h2 tag
	$('.page-header').append($searchButton),
	$('.page-header').append($searchInput);

	//Add class attributes to the input & button tags
	$searchInput.attr('class', 'student-search'),
	$searchButton.attr('class', 'student-search');


    $searchButton.on('click', function() {
	    $('.student-item').hide();
	    // remove the previous page link section
		$('.pagination ul li a').remove(),
	    $('.delete').remove();

    	let $search = $searchInput.val().toLowerCase(),
    		count = 0;
    	
	    // Loop over the student list, and for each student…
	    $('.student-details').each(function( idx, value ) {

			// ...obtain the student’s name…
			const $name = $(value).children().not('.email').text().toString(),
			// ...the student’s email…
				 $email = $(value).children().not('h3').text(),
			//...and student's image 
				 $img = $(value).children().first().attr('src');

			// ...if the search value is found inside either email or name…
			if ( $name.indexOf($search) > -1 ||  $email.indexOf($search) > -1 ) {
		    	//Remove any `message` from the page
		    	$('.message').remove();

				let li = $('<li class="student-item cf delete plus"></li>'),
					div = $('<div class="student-details"></div>'),
					img = $(`<img class="avatar" src="${$img}">`),
					h3 = $(`<h3>${$name}</h3>`),
					span = $(`<span class="email">${$email}</span>`);

	    		// ...add this student to list of “matched” student
					$('.student-list').append(li),
					$(li).append(div),
					$(div).append(img),
					$(div).append(h3),
					$(div).append(span);

				//Subtract one from the total count
					count-= 1;
			
			} else if ( !$name.indexOf($search) > -1 ||  !$email.indexOf($search) > -1 ) {
				//Add one to the total count for every Name or Email.that does not match
		           count += 1;
			}
	    });

	    // If there’s no “matched” students…
	    if ( count === $('.student-details').length ) {
		    //Remove any `message` from the page
	    	$('.message').remove(),
           // ...display a “no student’s found” message
           $('.page').append('<h3 class="message">no student’s found...</h3>');
	    }

	   // If over ten students were found…
		if ( $('.plus').length >= 10 ) {
			//Remove the pagination link from the page
			$('.pagination').remove(),
		   // ...call appendPageLinks with the matched students
		   appendPageLinks( $('.plus') ),
		   // Call showPage to show first ten students of matched list	
			showPage(  1, $('.plus') );
		}
    });
}

showPage( 1, $student ),
appendPageLinks( $student ),
searchList();

//Reload the page when the h2 tag is click
$('h2').on('click', function() {
	location.reload(true);
});
