requirejs.config({
    // baseUrl : "./js",
    paths : {
         "jquery": "../assets/jQuery/jquery-3.1.1",
         "carousel":"../assets/jquery-rhcarousel/jquery-rhcarousel",
         "zoom":"../assets/jquery-rhzooom/jquery.rhzoom"
    },
    shim:{
    	"carousel":{
    		deps: ["jquery"],
		 	exports: "jQuery.fn.rhcarousel"
    	},
    	"zoom":{
    		deps: ["jquery"],
		 	exports: "jQuery.fn.rhzoom"
    	}
    }
});