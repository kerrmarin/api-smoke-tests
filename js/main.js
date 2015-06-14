var AST = AST || {};
AST.data = {};
	
function triggerRefresh(frequency) {
    setInterval(function() {
		AST.manager.services.forEach(function(service) {
		    console.log(service);
			service.request(function(success, result, error) {
				if(success) {
					AST.data[result.serviceName] = result;
				} else {
					console.log(error);
				}
			});
		});
	}, frequency);
}

$(document).ready(function () {
    triggerRefresh(3000);
});
