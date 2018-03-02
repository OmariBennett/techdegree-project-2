# techdegree-project-2

Pagination & Content Filter
By: Omari Bennett 03/02/18

Requirements:
	Progressive enhancement & unobtrusive JavaScript
		No inline JavaScript. All JavaScript is linked from an external file.
		Use unobtrusive JavaScript to append markup for the pagination links
	Pagination Links:
		No links appear for pagination, pagination is hard coded, or the incorrect number of links are displayed.
		Pagination links are created. If there are 44 students, 5 links should be generated, if there’s 66, 7 links should be generated.
	Paging
		The first 10 students aren’t shown when the page loads.
		Nothing happens when the links are clicked, or the incorrect number of students are displayed.
		The first 10 students are shown when the page loads, and each pagination link displays the correct students.
		Clicking on “1” in the pagination links should shows students 1 to 10. Clicking “2” shows 11 to 20. Clicking “5” shows students 41 to 50, and so on.

Objectives:
	The page includes a list of 54 students. You need to add programming to display 10 students per page, and add buttons to jump between the lists of 10 students.
	Your solution should work for any number of student listings, whether there were 5, 25, 55 or 100 student listings.
	Optionally, you can add a search bar to let users search the list of students for a particular student or students.
	Feel free to use jQuery for this project, but please avoid using plugins to achieve the pagination and/or search functionality.

Exceeds Expectations:
	I'm shooting for the "Exceeds Expectations" grade by:
		Use unobtrusive JavaScript to append HTML for a search bar and pagination links
		Pagination links display based on how many search results are returned. For example: if 10 or fewer results are returned, 0 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.
		When a search yields 0 results, a message informing the user is that no results have been found is displayed in place of results
