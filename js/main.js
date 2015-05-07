var AST = AST || {};

function triggerRefresh(frequency) {
    setTimeout(function() {
		AST.manager.services.forEach(function(service) {
		    console.log(service);
			service.request(function(success, error) {
				
			});
		});
	}, frequency);
}

function createServiceContainers() {
	var container = document.getElementById("content");
	AST.manager.services.forEach(function(service) {
	    console.log(service.name);
		var div = document.createElement("div");
		div.className = "service";
		div.id = service.id;
		var text = document.createTextNode(service.name);
		text.className = "service-title";
		div.appendChild(text);
		container.appendChild(div);
	});
}

$(document).ready(function () {
	createServiceContainers();
    triggerRefresh(3000);
});