# api-smoke-tests
A simple web page that takes a bunch of services written in javascript to query a set of web services and display the results (i.e. as a dashboard to check whether they are up or down)

# Install

Clone this repo, create your own service integration and open the index.html page in a web browser.

# Usage

Create your own service integration, parse the results you expect from the response and then provide the manager with an object with the following properties:

 - status: a boolean, to indicate whether or not the service is responding as expected.
 - serviceName: a string, the name of the service you are querying. This will be output as the title of the panel
 - serviceData: an object, containing the key-value pairs you want to display on the panel's body.