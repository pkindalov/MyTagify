(function(global) {
	//returning new function constructor
	var CustomLibraryStructure = function(outerVariable1, outerVariable2) {
		return new CustomLibraryStructure.init(outerVariable1, outerVariable2);
	};

	//here you can declare data not visible for the outer world because of the closure which hide it.
	let privateData = [ 1, 2, 3, 4 ];

	//Setting prototype(don't confuse with __proto__ - the prototype of the function. Prototype here point to the function constructor) to be empty object. It contain all custom methods of cutomst library.
	CustomLibraryStructure.prototype = {
		customMethod1: function() {
			console.log(privateData);
		},
		customMethod2: function() {}
	};

	//In function constructor we initialize here all needed variables if there are any.
	CustomLibraryStructure.init = function(outerVariable1, outerVariable2) {
		let that = this;
		//these are just example data
		that.outerVariable1 = outerVariable1;
		that.outerVariable2 = outerVariable2;
		that.numVar = 1;
		that.strVar = 'text';

		//if you wish to use custome methods here from prototype you can do by the following way
		that.customMethod1();
	};

	CustomLibraryStructure.init.prototype = CustomLibraryStructure.prototype;

	//Attaching the name of our library to the global object. In that case the possible names to use are
	//CustomLibraryStructure and CLS. Example of using the library. You must first include this file in some .html //file and then for example
	//let customLibraryStructure = CLS(); or let customLibraryStructure = CustomLibraryStructure();
	//Of course you can add more names on the next line with names comfortable for you.
	//You can see example of using in index.html file
	global.CustomLibraryStructure = global.CLS = CustomLibraryStructure;
})(window);