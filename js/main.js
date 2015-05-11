var AST = AST || {};

function triggerRefresh(frequency) {
    setTimeout(function() {
		AST.manager.services.forEach(function(service) {
		    console.log(service);
			service.request(function(success, data, error) {
				
			});
		});
	}, frequency);
}

function createServiceContainers(success, data) {
	var container = document.getElementById("content");
	AST.manager.services.forEach(function(service) {
	    console.log(service.name);
		//Create the main div
		var div = document.createElement("div");
		div.className = "col-sm-4";
		div.id = service.id;
		
		//Create the panel 
		var panel = document.createElement("div");
		panel.classList.add("panel");
		panel.classList.add("panel-"+ success ? "success" : "danger");
		
		//Create the heading
		var heading = document.createElement("div");
		heading.classList.add("panel-heading");
		//Add the title
		var title = document.createTextNode(service.name);
		title.className = "panel-title";
		heading.appendChild(title);
		
		//Create the body
		var body = document.createElement("div");
		body.classList.add("panel-body");
		//Add all the elements 
		var list = document.createElement('ul');
		for (var key in data) {
		   if (data.hasOwnProperty(key)) {
	   			var item = document.createElement('li');
				var text = document.createTextNode(key + ": " + data[key]);
		        item.appendChild(text);
		        list.appendChild(item);
		   }
		}
		body.appendChild(list);
		
		//Create the structure
		panel.appendChild(heading);
		panel.appendChild(body);
		div.appendChild(panel);
		container.appendChild(div);
	});
}

$(document).ready(function () {
	createServiceContainers();
    triggerRefresh(3000);
});