# Requirements

	- One HTML page that will have different divs for each API
	- The divs will change colour green/red and will have the name of the API on them
	- There will be one main JS file that every X seconds will fire a request for each "service"
	- Services must have 2 functions:
		- Fire a request to their API endpoint
		- Parse the response and return whether there was a success or error
	- Services must have at least 2 properties:
		- ID: will be the ID of the div that will change colour
		- Name: The title of the service, to put it in the div so we know which one is failing