var AST = AST || {};

var wishlistService = {
	name: "Wishlist",
	id: "wishlist",
	request: function(callback) {
		$.ajax({ url: "",
				 dataType: "json",
				 cache: false,
				 crossDomain: true,
				 timeout: 5000
				}).done(function(data, textStatus, jqXHR ) {
					console.log("Success");
					this.parse(data, callback);
				}).fail(function(jqXHR, textStatus, errorThrown) {
					console.log("Error " + textStatus);
					callback(false, errorThrown);
				});
	},
	
	parse: function(response, callback) {
		
	}
};

AST.manager.addService(wishlistService);