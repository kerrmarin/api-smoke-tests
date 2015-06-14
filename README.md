# api-smoke-tests
A simple web page that takes a bunch of services written in javascript to query a set of web services and display the results (i.e. as a dashboard to check whether they are up or down)

# Install

Clone this repo, create your own service integration and open the index.html page in a web browser.

# Usage

Create your own service integration, parse the results you expect from the response and then provide the manager with an object with the following properties:

Services take the following pattern:

```javascript
var AST = AST || {};

var eventService = {
    name: "Montana flynn",
    id: "montana-flynn",
    request: function(callback) {
        var me = this;
        $.ajax({ url: "https://montanaflynn-dictionary.p.mashape.com/define",
            dataType: "json",
            cache: false,
            crossDomain: true,
            timeout: 5000
        }).done(function(data, textStatus, jqXHR ) {
            me.parse(data, callback);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            callback(false, errorThrown);
        });
    },
    parse: function(response, callback) {
        //Here, parse the results you expect and return an object like:
        //var data = { serviceName: this.name, serviceData: {}, success: Boolean }
        //if(response.isCorrect()) {
        //    callback(true, data);
        //}
    }
};

AST.manager.addService(eventService);
```

 - status: a boolean, to indicate whether or not the service is responding as expected.
 - serviceName: a string, the name of the service you are querying. This will be output as the title of the panel
 - serviceData: an object, containing the key-value pairs you want to display on the panel's body.
