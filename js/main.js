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

$(document).ready(function () {
    triggerRefresh(3000);
});