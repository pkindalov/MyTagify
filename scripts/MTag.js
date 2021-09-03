(function(global) {
	//returning new function constructor
	var MTag = function(config = null) {
		return new MTag.init(config);
	};

	//here you can declare data not visible for the outer world because of the closure which hide it.
	//different information about tags.
	const tagsInfo = {
		a: {
			attributes: {
				href: true,
				name: true,
				rel: true,
				rev: true,
				target: true,
				id: true,
				class: true,
				style: true,
				title: true
			},
			events: {
				onfocus: true,
				onblur: true,
				onclick: true,
				ondblclick: true,
				onkeydown: true,
				onkeypress: true,
				onkeyup: true,
				onmousedown: true,
				onmouseout: true,
				onmousemove: true,
				onmouseover: true,
				onmouseup: true
			},
			compatibility: { allBrowsers: true, msg: 'Compatible on all browsers' }
		}
	};

	let tag = null;
	let currentlyCreatedTagName = null;
	let showWarnings = null;

	//small arrow functions
	const errThrower = (msg) => {
		throw Error(msg);
	};
	const showErrMsgOnConsole = (e) => {
		const [ , lineno, colno ] = e.stack.match(/(\d+):(\d+)/);
		console.log('%c Line: ' + lineno, 'background: red');
		console.log('%c Column: ' + colno, 'background: red');
		console.log('%c ' + e.message, 'background: red');
	};
	const setTagText = (text = null) => {
		if (!text) errThrower('Text cannot be invalid value.');
		tag.innerText = text;
	};
	const isObject = (data) => data && typeof data === 'object' && data.constructor === Object;
	const getObjectKeysCount = (obj) => {
		if (!isObject(obj)) errThrower('Wrong type. Expect an object, not an array or something else.');
		return Object.keys(obj).length;
	};
	const ifZeroAttributes = (attributes) => getObjectKeysCount(attributes) === 0;
	const addAttrToTag = (attrs) => {
		Object.keys(attrs).forEach((attribute) => {
			if (showWarnings && !tagsInfo[currentlyCreatedTagName]['attributes'][attribute]) {
				// const warnMsg = '<' + currentlyCreatedTagName + "> is not a standart " + attribute + ' attribute.';
				const warnMsg =
					attribute + ' is not a standart attribute for ' + '<' + currentlyCreatedTagName + '> tag';
				showWarningMsgOnConsole(warnMsg);
				// return;
			}
			tag.setAttribute(attribute, attrs[attribute]);
		});
	};
	const showWarningMsgOnConsole = (msg) => console.log('%c ' + msg, 'background: yellow;');
	const isVariableExists = (variable) => typeof variable !== undefined || variable === null;
	const setWarnings = (turnOnOff) => {
		if (isVariableExists(turnOnOff)) {
			showWarnings = turnOnOff;
		}
	};
	const checkBrowserCompatibility = (tag) => {
		const isCompatible = tagsInfo[tag]['compatibility']['allBrowsers'];
		if (!isCompatible) {
			const msg = !tagsInfo[tag]['compatibility']['msg'];
			showWarningMsgOnConsole(msg);
			return false;
		}
		return true;
	};

	const createTagFromString = (str) => {
		tag = document.createElement(str);
		currentlyCreatedTagName = str;
	};

	//bigger functions
	function initializeMainSettings(config) {
		if (!config) {
			config = {
				isWarningsOn: true
			};
		}

		const { isWarningsOn } = config;
		//check if the variable exists and if its value is true
		showWarnings = isVariableExists(isWarningsOn) && isWarningsOn ? true : isWarningsOn;
	}

	function createTagByConfig(config) {
		const { tagName, tagAttr, text, events, inlineCSSstyles } = config;
		if (!tagName) errThrower('Invalid name of tag.');
		tag = document.createElement(tagName);
		currentlyCreatedTagName = tagName;
		checkBrowserCompatibility(currentlyCreatedTagName);
		if (text) setTagText(text);
		if (tagAttr) setTagAttr(tagAttr);
		if (events) setTagEvents(events);
		if (inlineCSSstyles) addInlineStyles(inlineCSSstyles);
	}

	function createNewTag(element) {
		try {
			//element can be config object or just a string
			if (!element) errThrower('Invalid config');
			if (isObject(element)) {
				createTagByConfig(element);
				return;
			}
			if (!element) errThrower('Invalid name of tag.');
			createTagFromString(element);
			checkBrowserCompatibility(currentlyCreatedTagName);
		} catch (e) {
			showErrMsgOnConsole(e);
		}
	}

	function setTagAttr(attributes = null) {
		if (!attributes) errThrower('Invalid attributes for the tag.');
		if (!isObject(attributes)) errThrower('Attributes must be an object. Not Array, but an object.');
		if (ifZeroAttributes(attributes)) return;
		addAttrToTag(attributes);
	}

	function setTagEvents(events = null) {
		if (!isObject(events)) errThrower('events must be object');
		if (getObjectKeysCount(events) === 0) return;
		Object.keys(events).forEach((event) => {
			tag[event] = events[event];
		});
	}

	function addInlineStyles(inlineStyles = null) {
		if (!isObject(inlineStyles)) errThrower('styles must be object');
	}

	function appendTagToHtmlBody() {
		try {
			const body = document.getElementsByTagName('body')[0];
			if (!body) errThrower('Body tag not found.');
			body.appendChild(tag);
			return this;
		} catch (e) {
			showErrMsgOnConsole(e);
		}
	}

	//Setting prototype(don't confuse with __proto__ - the prototype of the function. Prototype here point to the function constructor) to be empty object. It contain all custom methods of cutomst library.
	MTag.prototype = {
		create: function(config) {
			createNewTag(config);
			return this;
		},
		enableWarningMsg: function(turnOnOff) {
			setWarnings(turnOnOff);
			return this;
		},
		appendToBody: function() {
			appendTagToHtmlBody();
			return this;
		},
		addText: function(text) {
			setTagText(text);
			return this;
		},
		addAttributes: function(attributes) {
			setTagAttr(attributes);
			return this;
		},
		addEvents: function(events) {
			setTagEvents(events);
			return this;
		}
	};

	//In function constructor we initialize here all needed variables if there are any.
	MTag.init = function(config = null) {
		initializeMainSettings(config);
	};

	MTag.init.prototype = MTag.prototype;

	//Attaching the name of our library to the global object. In that case the possible names to use are
	//MTag and MT. Example of using the library. You must first include this file in some .html //file and then for example
	//let MTag = MT(); or let MTag = MTag();
	//Of course you can add more names on the next line with names comfortable for you.
	//You can see example of using in index.html file
	global.MTag = global.MT = MTag;
})(window);
