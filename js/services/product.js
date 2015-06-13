var AST = AST || {};

var productService = {
	name: "Product",
	id: "product",
	request: function(callback) {
		var me = this;
		$.ajax({ url: "",
				 dataType: "json",
				 crossDomain: true,
				 timeout: 5000,
				 data: "",
				}).done(function(data, textStatus, jqXHR ) {
					console.log("Success " + JSON.stringify(data));
					me.parse(data, callback);
				}).fail(function(jqXHR, textStatus, errorThrown) {
					console.log("Error");
					callback(false, errorThrown);
				});
	},
	parse: function(response, callback) {
		
	}
};

AST.manager.addService(productService);