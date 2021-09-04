(function (global) {
	//returning new function constructor
	const MTag = function (config = null) {
		return new MTag.init(config);
	};

	const removedTagsHTML5 = { acronym: true }

	//here you can declare data not visible for the outer world because of the closure which hide it.
	//different information about tags.
	const tagsInfo = {
		a: {
			attributes: {
				href: true, name: true, rel: true, rev: true, target: true, id: true, class: true,
				style: true, title: true
			},
			events: {
				onfocus: true, onblur: true, onclick: true, ondblclick: true, onkeydown: true,
				onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true
			},
			compatibility: { allBrowsers: true, msg: 'Compatible on all browsers' }
		},
		abbr: {
			attributes: {
				id: true, class: true, style: true, title: true
			},
			events: {
				onfocus: true, onblur: true, onclick: true, ondblclick: true, onkeydown: true,
				onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true
			},
			compatibility: { allBrowsers: true, msg: 'Compatible on all browsers' }
		},
		acronym: {
			attributes: {
				id: true, class: true, style: true, title: true
			},
			events: {
				onfocus: true, onblur: true, onclick: true, ondblclick: true, onkeydown: true,
				onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true
			},
			compatibility: { allBrowsers: true, msg: 'Compatible on all browsers' }
		},
	};

	let tag = null;
	let currentlyCreatedTagName = null;
	let showWarnings = null;

	//small arrow functions
	const showErrMsgOnConsole = (e) => {
		const [, lineno, colno] = e.stack.match(/(\d+):(\d+)/);
		console.log('%c Line: ' + lineno, 'background: red');
		console.log('%c Column: ' + colno, 'background: red');
		console.log('%c ' + e.message, 'background: red');
	};
	const setTagText = (text = null) => {
		if (!text) throw Error('Text cannot be invalid value.');
		tag.innerText = text;
	};
	const isObject = (variable) => variable && typeof variable === 'object' && variable.constructor === Object;
	const isDOMElement = (variable) => variable && typeof variable === 'object' && variable.constructor === Element;
	const getObjectKeysCount = (obj) => {
		if (!isObject(obj)) throw Error('Wrong type. Expect an object, not an array or something else.');
		return Object.keys(obj).length;
	};
	const ifZeroAttributes = (attributes) => getObjectKeysCount(attributes) === 0;
	const isAttrInTagInfo = (attr) => tagsInfo[currentlyCreatedTagName]['attributes'][attr];
	const isEventInTagInfo = (event) => tagsInfo[currentlyCreatedTagName]['events'][event];
	const addAttrsToTag = (attrs) => {
		Object.keys(attrs).forEach((attribute) => {
			if (showWarnings && !isAttrInTagInfo(attribute)) {
				const warnMsg =
					attribute + ' is not a standart attribute for ' + '<' + currentlyCreatedTagName + '> tag';
				showWarningMsgOnConsole(warnMsg);
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
	const checkBrowserCompatibility = () => {
		const isCompatible = tagsInfo[currentlyCreatedTagName]['compatibility']['allBrowsers'];
		if (showWarnings && currentlyCreatedTagName && !isCompatible) {
			const msg = !tagsInfo[currentlyCreatedTagName]['compatibility']['msg'];
			showWarningMsgOnConsole(msg);
			return false;
		}
		return true;
	};

	const checkIfRemovedInHTML5 = () => {
		if (showWarnings && currentlyCreatedTagName && removedTagsHTML5[currentlyCreatedTagName]) {
			const msg = 'Not recommend. The ' + currentlyCreatedTagName + ' tag is removed from HTML 5';
			showWarningMsgOnConsole(msg);
			return true;
		}
		return false;
	}

	const createTagFromString = (str) => {
		tag = document.createElement(str);
		currentlyCreatedTagName = str;
		checkBrowserCompatibility();
		checkIfRemovedInHTML5();
	};

	const addAttributeToTag = (attr, value) => tag.setAttribute(attr, value);
	const stringifiedTag = () => {
		const html = tag.outerHTML;
		const data = { tag: html };
		const json = JSON.stringify(data)
		return json;
	}
	const isString = (variable) => typeof variable === 'string';
	const parseTagFromJSON = (tagJSONStr) => {
		if (!tagJSONStr) throw Error('Invalid value passed on parseTagFromJSON. Check the passed value again. Cannot be empty, null or undefined');
		if (!isString(tagJSONStr)) throw Error('Value must be of a type string.');
		const obj = JSON.parse(tagJSONStr);
		tag = new DOMParser().parseFromString(obj.tag, "text/xml").firstElementChild;
		return tag;
	}
	const setTagObj = (outerTag) => {
		console.log(outerTag.constructor);
		if (!outerTag || !isDOMElement(outerTag)) throw Error('Inavlid data type.Tag must be ot type object');
		tag = outerTag;
	}

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
		const { tagName, tagAttr, text, events, inlineCSSstyles, title } = config;
		if (!tagName) throw Error('Invalid name of tag.');
		tag = document.createElement(tagName);
		currentlyCreatedTagName = tagName;
		checkBrowserCompatibility();
		checkIfRemovedInHTML5();
		if (text) setTagText(text);
		if (tagAttr) setTagAttr(tagAttr);
		if (events) setTagEvents(events);
		if (inlineCSSstyles) addInlineStyles(inlineCSSstyles);
		if (title) setTitle(title);
	}

	function createNewTag(element) {
		try {
			//element can be config object or just a string
			if (!element) throw Error('Invalid config');
			if (isObject(element)) {
				createTagByConfig(element);
				return;
			}
			if (!element) throw Error('Invalid name of tag.');
			createTagFromString(element);
		} catch (e) {
			showErrMsgOnConsole(e);
		}
	}

	function setTagAttr(attributes = null) {
		if (!attributes) throw Error('Invalid attributes for the tag.');
		if (!isObject(attributes)) throw Error('Attributes must be an object. Not Array, but an object.');
		if (ifZeroAttributes(attributes)) return;
		addAttrsToTag(attributes);
	}

	function setTagEvents(events = null) {
		if (!isObject(events)) throw Error('events must be object');
		if (getObjectKeysCount(events) === 0) return;
		Object.keys(events).forEach((event) => {
			//check if event exists in tagInfo events for the current tag
			if (showWarnings && !isEventInTagInfo(event)) {
				const warnMsg = event + ' is not a standart event for ' + '<' + currentlyCreatedTagName + '> tag';
				showWarningMsgOnConsole(warnMsg);
				return;
			}
			tag[event] = events[event] ? events[event] : '';
		});
	}

	function setHref(url = null) {
		if (!url) throw Error('Invalid url.');
		addAttributeToTag('href', url);
	}

	function setClassOnTag(className = null) {
		if (!className) throw Error('Invalid class name.');
		addAttributeToTag('class', className);
	}

	function setTitle(title) {
		if (!title) throw Error('Title attribute is invalid');
		addAttributeToTag('title', title);
	}

	function setId(id) {
		if (!id) throw Error('Id is invalid');
		addAttributeToTag('id', id);
	}

	function addCssRuleToTag(cssRule) {
		if (!cssRule) throw Error('Invalid css rule');
		if (!isObject(cssRule)) throw Error('Invalid data type.css rule must be of type object');
		if (getObjectKeysCount(cssRule) === 0) throw Error('Empty object is not valid css rule');
		const ruleKey = Object.keys(cssRule)[0];
		tag.style[ruleKey] = cssRule[ruleKey] ? cssRule[ruleKey] : '';
	}

	function addInlineStyles(inlineStyles = null) {
		if (!isObject(inlineStyles)) throw Error('styles must be object');
		Object.keys(inlineStyles).forEach((cssRule) => {
			if (inlineStyles[cssRule]) {
				tag.style[cssRule] = inlineStyles[cssRule];
			}
		});
	}

	function appendTagToHtmlBody() {
		try {
			const body = document.getElementsByTagName('body')[0];
			if (!body) throw Error('Body tag not found.');
			if (!tag) throw Error('You must first create a tag, then to append it to body');
			body.appendChild(tag);
			return tag;
		} catch (e) {
			showErrMsgOnConsole(e);
		}
	}

	//Setting prototype(don't confuse with __proto__ - the prototype of the function. Prototype here point to the function constructor) to be empty object. It contain all custom methods of cutomst library.
	MTag.prototype = {
		create: function (config) {
			try {
				createNewTag(config);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		enableWarningMsg: function (turnOnOff) {
			try {
				setWarnings(turnOnOff);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		appendToBody: function () {
			try {
				appendTagToHtmlBody();
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		addText: function (text) {
			try {
				setTagText(text);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		addAttributes: function (attributes) {
			try {
				setTagAttr(attributes);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		addEvents: function (events) {
			try {
				setTagEvents(events);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		addHref: function (url) {
			try {
				setHref(url);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		addClass: function (className) {
			try {
				setClassOnTag(className);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		addStyle: function (cssRule) {
			try {
				addCssRuleToTag(cssRule);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		addStyles: function (rules) {
			try {
				addInlineStyles(rules);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		addTitle: function (title) {
			try {
				setTitle(title);
				return this;
			} catch (e) {
				showWarningMsgOnConsole(e);
			}
		},
		addId: function (id) {
			try {
				setId(id);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		getTag: function () {
			try {
				return tag;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		getTagJSON: function () {
			try {
				return stringifiedTag();
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		parseTagFromJSON: function (tagJSONStr) {
			try {
				return parseTagFromJSON(tagJSONStr);
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		setTagObj: function (tag) {
			try {
				setTagObj(tag);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		}
	};

	//In function constructor we initialize here all needed variables if there are any.
	MTag.init = function (config = null) {
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
