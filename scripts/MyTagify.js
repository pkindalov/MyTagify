(async function (global) {
	//returning new function constructor
	const MyTagify = function (config = null) {
		return new MyTagify.init(config);
	};

	let that = this;
	that.removedTagsHTML5 = loadTagDataInfo('removedTags');
	that.tagsInfo = loadTagDataInfo('tagsInfo');
	that.tag = null;
	that.showWarnings = null;

	const showErrMsgOnConsole = (e) => {
		const [, lineno, colno] = e.stack.match(/(\d+):(\d+)/);
		console.log('%c Line: ' + lineno, 'background: red');
		console.log('%c Column: ' + colno, 'background: red');
		console.log('%c ' + e.message, 'background: red');
	};
	const setTagText = (text = null) => {
		if (!text) throw Error('Text cannot be invalid value.');
		tagValidator();
		that.tag.innerText = text;
	};
	const isObject = (variable) => variable && typeof variable === 'object' && variable.constructor === Object;
	const isDOMElement = (variable) => variable && typeof variable === 'object' && variable.constructor === Element;
	const getObjectKeysCount = (obj) => {
		if (!isObject(obj)) throw Error('Wrong type. Expect an object, not an array or something else.');
		return Object.keys(obj).length;
	};
	const ifZeroAttributes = (attributes) => getObjectKeysCount(attributes) === 0;
	const isAttrInTagInfo = (attr, tagName) => that.tagsInfo[tagName]['attributes'][attr];
	const isEventInTagInfo = (event, tagName) => that.tagsInfo[tagName]['events'][event];
	const addAttrsToTag = (attrs) => {
		// let attrs = attributes;
		let tag = that.tag;
		let warnings = that.showWarnings;
		if (warnings) {
			if (!isObject(that.tagsInfo)) { //if the tags data is not loaded and it is a promise
				that.tagsInfo.then(data => {
					that.tagsInfo = data;
					if (attrs) {
						Object.keys(attrs).forEach((attribute) => {
							if (!isAttrInTagInfo(attribute, tag.tagName.toLowerCase())) {
								const warnMsg =
									attribute + ' is not a standart attribute for ' + '<' + tag.tagName + '> tag';
								showWarningMsgOnConsole(warnMsg);
							}
							tag.setAttribute(attribute, attrs[attribute]);
						});
					}
				});
				return;
			}

			//if tags data is loaded
			if (attrs) {
				Object.keys(attrs).forEach((attribute) => {
					if (!isAttrInTagInfo(attribute, tag.tagName.toLowerCase())) {
						const warnMsg =
							attribute + ' is not a standart attribute for ' + '<' + tag.tagName + '> tag';
						showWarningMsgOnConsole(warnMsg);
					}
					tag.setAttribute(attribute, attrs[attribute]);
				});
			}
			return;

		}

		if (attrs) {
			Object.keys(attrs).forEach((attribute) => {
				tag.setAttribute(attribute, attrs[attribute]);
			});
		}
	};
	const showWarningMsgOnConsole = (msg) => console.log('%c ' + msg, 'background: yellow;');
	const isVariableExists = (variable) => typeof variable !== undefined || variable === null;
	const setWarnings = (turnOnOff) => {
		if (isVariableExists(turnOnOff)) {
			that.showWarnings = turnOnOff;
		}
	};
	const checkBrowserCompatibility = (tagName, warnings) => {
		const isCompatible = that.tagsInfo[tagName]['compatibility']['allBrowsers'];
		if (warnings && tagName && !isCompatible) {
			const msg = !that.tagsInfo[tagName]['compatibility']['msg'];
			showWarningMsgOnConsole(msg);
			return false;
		}
		return true;
	};

	const checkIfRemovedInHTML5 = (tagName, warnings) => {
		that.removedTagsHTML5.then(data => {
			that.removedTagsHTML5 = data;
			if (warnings && tagName && that.removedTagsHTML5[tagName]) {
				const msg = 'Not recommend to use. The ' + tagName + ' tag is removed from HTML 5';
				showWarningMsgOnConsole(msg);
				return true;
			}
			return false;
		});
	}

	const createTagFromString = (str) => {
		that.tag = document.createElement(str);
		let currentTag = that.tag.tagName.toLowerCase();
		let warnings = that.showWarnings;
		if (warnings) {
			that.tagsInfo.then(data => {
				that.tagsInfo = data;
				checkBrowserCompatibility(currentTag, warnings);
				checkIfRemovedInHTML5(currentTag, warnings);
			});
		}
	};

	const addAttributeToTag = (attr, value) => that.tag.setAttribute(attr, value);
	const stringifiedTag = () => {
		const html = that.tag.outerHTML;
		const data = { tag: html };
		const json = JSON.stringify(data)
		return json;
	}
	const isString = (variable) => typeof variable === 'string';
	const parseTagFromJSON = (tagJSONStr) => {
		if (!tagJSONStr) throw Error('Invalid value passed on parseTagFromJSON. Check the passed value again. Cannot be empty, null or undefined');
		if (!isString(tagJSONStr)) throw Error('Value must be of a type string.');
		const obj = JSON.parse(tagJSONStr);
		that.tag = new DOMParser().parseFromString(obj.tag, "text/xml").firstElementChild;
		return that.tag;
	}
	const setTagObj = (outerTag = null) => {
		if (!outerTag || !isDOMElement(outerTag)) throw Error('Inavlid data type.Tag must be ot type object');
		that.tag = outerTag;
	}

	const changeInnerHTML = (htmlStr = null) => {
		if (!htmlStr) throw Error('Invalid html string.');
		tagValidator();
		that.tag.innerHTML = htmlStr;
	}

	const tagValidator = () => {
		if (!that.tag) throw Error('Tag is invalid. You must first create a tag before doing the current operation.');
	}

	function initializeMainSettings(config) {
		if (!config) {
			config = {
				isWarningsOn: true
			};
		}
		const { isWarningsOn } = config;
		//check if the variable exists and if its value is true
		that.showWarnings = isVariableExists(isWarningsOn) && isWarningsOn ? true : isWarningsOn;
	}

	async function loadTagDataInfo(whichFnToLoad = 'tagsInfo') {
		return (async () => {
			const tagsInfoModuleDir = './TagsData.js';
			const tagsDataModule = await import(tagsInfoModuleDir);
			switch (whichFnToLoad) {
				case 'tagsInfo':
					return tagsDataModule.getTagsInfo();
				case 'removedTags':
					return tagsDataModule.getRemovedTags();
				default:
					return tagsDataModule.getTagsInfo();
			}
		})(whichFnToLoad);
	}

	function createTagByConfig(config) {
		const { tagName, tagAttr, text, events, inlineCSSstyles, title } = config;
		if (!tagName) throw Error('Invalid name of tag.');
		that.tag = document.createElement(tagName);
		let currentTag = tagName;
		let warnings = that.showWarnings;
		if (warnings) {
			that.tagsInfo.then(data => {
				that.tagsInfo = data;
				if (tagAttr) setTagAttr(tagAttr);
				if (events) setTagEvents(events);
				if (text) setTagText(text);
				if (inlineCSSstyles) addInlineStyles(inlineCSSstyles);
				if (title) setTitle(title);
				checkBrowserCompatibility(currentTag, warnings);
				checkIfRemovedInHTML5(currentTag, warnings);
			});
			return;
		}
		if (tagAttr) setTagAttr(tagAttr);
		if (events) setTagEvents(events);
		if (text) setTagText(text);
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
		let warnings = that.showWarnings;
		let tagName = that.tag.tagName.toLowerCase();
		if (!isObject(events)) throw Error('events must be object');
		if (getObjectKeysCount(events) === 0) return;
		if (warnings) {
			if (!isObject(that.tagsInfo)) {
				that.tagsInfo.then(data => {
					that.tagsInfo = data;
					Object.keys(events).forEach((event) => {
						//check if event exists in tagInfo events for the current tag
						if (!isEventInTagInfo(event, tagName)) {
							const warnMsg = event + ' is not a standart event for ' + '<' + tagName + '> tag';
							showWarningMsgOnConsole(warnMsg);
							return;
						}
						that.tag[event] = events[event] ? events[event] : '';
					});
				});
				return;
			}

			Object.keys(events).forEach((event) => {
				//check if event exists in tagInfo events for the current tag
				if (!isEventInTagInfo(event, tagName)) {
					const warnMsg = event + ' is not a standart event for ' + '<' + tagName + '> tag';
					showWarningMsgOnConsole(warnMsg);
					return;
				}
				that.tag[event] = events[event] ? events[event] : '';
			});

		}

		Object.keys(events).forEach((event) => {
			that.tag[event] = events[event] ? events[event] : '';
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
		tagValidator();
		const ruleKey = Object.keys(cssRule)[0];
		that.tag.style[ruleKey] = cssRule[ruleKey] ? cssRule[ruleKey] : '';
	}

	function addInlineStyles(inlineStyles = null) {
		if (!isObject(inlineStyles)) throw Error('styles must be object');
		tagValidator();
		Object.keys(inlineStyles).forEach((cssRule) => {
			if (inlineStyles[cssRule]) {
				that.tag.style[cssRule] = inlineStyles[cssRule];
			}
		});
	}

	function appendTagToHtmlBody() {
		try {
			let body = document.getElementsByTagName('body')[0];
			if (!body) throw Error('Body tag not found.');
			if (!that.tag) throw Error('You must first create a tag, then to append it to body');
			body.appendChild(that.tag);
			// return tag;
		} catch (e) {
			showErrMsgOnConsole(e);
		}
	}

	function appendTagToById(elementId) {
		if (!elementId) throw Error('elementId is not valid.Cannot be empty, undefined or null');
		let parentEl = document.getElementById(elementId);
		if (!parentEl) throw Error('Element with id ' + elementId + ' not found');
		if (!that.tag) throw Error('You must first create a tag with create command');
		parentEl.appendChild(that.tag);
	}

	function appendElToContById(element, containerId) {
		if (!element) throw Error('Element is not valid');
		if (!containerId) throw Error('id of container is not valid');
		let parentEl = document.getElementById(containerId);
		if (!parentEl) throw Error('Element with id ' + containerId + ' not found');
		parentEl.appendChild(element);
	}

	//In function constructor we initialize here all needed variables if there are any.
	MyTagify.init = function (config = null) {
		initializeMainSettings(config);
	};

	//Setting prototype(don't confuse with __proto__ - the prototype of the function. Prototype here point to the function constructor) to be empty object. It contain all custom methods of cutomst library.
	MyTagify.prototype = {
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
				return true;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		appendTagToById: function (element) {
			try {
				appendTagToById(element);
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		appendElToContById: function (element, container) {
			try {
				appendElToContById(element, container);
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
		},
		changeInnerHTML: function (tagHtmlStr) {
			try {
				changeInnerHTML(tagHtmlStr);
				return this;
			} catch (e) {
				showErrMsgOnConsole(e);
			}
		},
		//TODO 3 to return block of code
		//createBlock: function(arrObj) arrObj - [{tag: 'a', attr: {}, events: {}...}]
	};


	MyTagify.init.prototype = MyTagify.prototype;

	//Attaching the name of our library to the global object. In that case the possible names to use are
	//MyTagify and MT. Example of using the library. You must first include this file in some .html //file and then for example
	//let MyTagify = MT(); or let MyTagify = MyTagify();
	//Of course you can add more names on the next line with names comfortable for you.
	//You can see example of using in index.html file
	global.MyTagify = global.MT = MyTagify;
})(window);
