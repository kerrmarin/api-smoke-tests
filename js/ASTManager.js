var AST = AST || {};

var manager = {
	services: [],
	addService: function(service) {
		this.services.push(service);
	}
};

AST.manager = manager;