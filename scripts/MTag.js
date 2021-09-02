(function(global) {
	//returning new function constructor
	var MTag = function() {
		return new MTag.init();
	};

	//here you can declare data not visible for the outer world because of the closure which hide it.
	//different information about tags.
	const tagsInfo = {};

	let tag = null;

	//small arrow functions
	const errThrower = (msg) => {
		throw Error(msg);
	};
	const showErrMsgOnConsole = (msg) => console.log(msg);
	const setTagText = (text) => {
		if (!text) errThrower('Text cannot be invalid value. Error on line 19');
		tag.innerText = text;
	};
	const isObject = (data) => data && typeof data === 'object' && data.constructor === Object;
	const ifZeroAttributes = (attributes) => Object.keys(attributes).length === 0;
	const addAttrToTag = (attrs) => {
		Object.keys(attrs).forEach((attribute) => {
			tag.setAttribute(attribute, attrs[attribute]);
		});
	};

	//bigger functions
	function setTagAttr(attributes) {
		if (!attributes) errThrower('Invalid attributes for the tag. Error on line 25');
		if (!isObject(attributes))
			errThrower('Attributes must be an object. Not Array, but an object. Error on line 27');
		if (ifZeroAttributes(attributes)) return;
		addAttrToTag(attributes);
	}

	//Setting prototype(don't confuse with __proto__ - the prototype of the function. Prototype here point to the function constructor) to be empty object. It contain all custom methods of cutomst library.
	MTag.prototype = {
		create: function(config) {
			try {
				if (!config) errThrower('Invalid config on line 18');
				const { tagName, tagAttr, text } = config;
				if (!tagName) errThrower('Invalid name of tag. Error on line 31');
				tag = document.createElement(tagName);
				setTagText(text);
				setTagAttr(tagAttr);

				return this;
			} catch (ex) {
				showErrMsgOnConsole(ex.message);
			}
		},
		appendToBody: function() {
			try {
				const body = document.getElementsByTagName('body')[0];
				if (!body) errThrower('Body tag not found. Error on line 39');
				body.appendChild(tag);
				return this;
			} catch (ex) {
				showErrMsgOnConsole(ex.message);
			}
		}
	};

	//In function constructor we initialize here all needed variables if there are any.
	MTag.init = function() {
		const that = this;

		//if you wish to use custome methods here from prototype you can do by the following way
		// that.create(config);
	};

	MTag.init.prototype = MTag.prototype;

	//Attaching the name of our library to the global object. In that case the possible names to use are
	//MTag and MT. Example of using the library. You must first include this file in some .html //file and then for example
	//let MTag = MT(); or let MTag = MTag();
	//Of course you can add more names on the next line with names comfortable for you.
	//You can see example of using in index.html file
	global.MTag = global.MT = MTag;
})(window);
