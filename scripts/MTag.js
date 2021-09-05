(function (global) {
	//returning new function constructor
	const MTag = function (config = null) {
		return new MTag.init(config);
	};

	const removedTagsHTML5 = {
		acronym: true, applet: true, basefont: true, big: true, center: true, dir: true,
		font: true, frame: true, frameset: true, isindex: true, noframes: true, strike: true,
		tt: true
	}

	//here you can declare data not visible for the outer world because of the closure which hide it.
	//different information about tags from https://way2tutorial.com/html/tag/reference.php
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
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('a') }
		},
		abbr: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onclick: true, ondblclick: true, onkeydown: true,
				onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('abbr') }
		},
		acronym: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onclick: true, ondblclick: true, onkeydown: true,
				onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('acronym') }
		},
		address: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onclick: true, ondblclick: true, onkeydown: true,
				onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('address') }
		},
		applet: {
			attributes: {
				id: true, class: true, style: true, title: true, code: true, object: true, name: true,
				height: true, width: true
			},
			events: {
				onfocus: true, onblur: true, onclick: true, ondblclick: true, onkeydown: true,
				onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('applet') }
		},
		area: {
			attributes: {
				id: true, class: true, style: true, title: true, alt: true, href: true,
				target: true, shape: true, coords: true
			},
			events: {
				onfocus: true, onblur: true, onclick: true, ondblclick: true, onkeydown: true,
				onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('area') }
		},
		article: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('article') }
		},
		aside: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('aside') }
		},
		audio: {
			attributes: {
				id: true, class: true, style: true, title: true,
				src: true, autoplay: true, control: true, loop: true, muted: true, preload: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('audio') }
		},
		b: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('b') }
		},
		base: {
			attributes: { href: true, target: true },
			events: null,
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('base') }
		},
		basefont: {
			attributes: { color: true, target: true, size: true },
			events: null,
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('basefont') }
		},
		bb: {
			attributes: { id: true, class: true, style: true, title: true, type: true },
			events: null,
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('bb') }
		},
		bdo: {
			attributes: { id: true, class: true, style: true, title: true, dir: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('bdo') }
		},
		big: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('big') }
		},
		blockquote: {
			attributes: { id: true, class: true, style: true, title: true, cite: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('blockquote') }
		},
		body: {
			attributes: {
				id: true, class: true, style: true, title: true, background: true, bgcolor: true,
				text: true, vlink: true, alink: true, link: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('body') }
		},
		br: {
			attributes: { id: true, class: true, style: true, title: true },
			events: null,
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('br') }
		},
		button: {
			attributes: {
				id: true, class: true, style: true, title: true, name: true, type: true, value: true,
				autofocus: true, disabled: true, form: true, formaction: true, formenctype: true, formmethod: true,
				formnovalidate: true, formtarget: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('button') }
		},
		canvas: {
			attributes: { id: true, class: true, style: true, title: true, width: true, height: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('canvas') }
		},
		caption: {
			attributes: { id: true, class: true, style: true, title: true, align: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('caption') }
		},
		center: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('center') }
		},
		cite: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('cite') }
		},
		code: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('code') }
		},
		col: {
			attributes: { id: true, class: true, style: true, title: true, span: true, width: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('col') }
		},
		colgroup: {
			attributes: { id: true, class: true, style: true, title: true, span: true, width: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('colgroup') }
		},
		command: {
			attributes: {
				id: true, class: true, style: true, title: true, type: true, checked: true, label: true,
				icon: true, radiogroup: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('command') }
		},
		datagrid: {
			attributes: { id: true, class: true, style: true, title: true, disabled: true, multiple: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('datagrid') }
		},
		datalist: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('datalist') }
		},
		dd: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('dd') }
		},
		del: {
			attributes: { id: true, class: true, style: true, title: true, cite: true, datetime: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('del') }
		},
		details: {
			attributes: { id: true, class: true, style: true, title: true, open: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('details') }
		},
		dfn: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('dfn') }
		},
		dialog: {
			attributes: { id: true, class: true, style: true, title: true, open: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('dialog') }
		},
		dir: {
			attributes: { id: true, class: true, style: true, title: true, compact: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('dir') }
		},
		div: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('div') }
		},
		dl: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('dl') }
		},
		dt: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('dt') }
		},
		em: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('em') }
		},
		embed: {
			attributes: { id: true, class: true, style: true, title: true, src: true, height: true, width: true, type: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('embed') }
		},
		eventsource: {
			attributes: { id: true, class: true, style: true, title: true, src: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('eventsource') }
		},
		fieldset: {
			attributes: { id: true, class: true, style: true, title: true, disabled: true, form: true, name: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('fieldset') }
		},
		figure: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('figure') }
		},
		font: {
			attributes: { id: true, class: true, style: true, title: true, color: true, face: true, size: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('font') }
		},
		footer: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('footer') }
		},
		form: {
			attributes: {
				id: true, class: true, style: true, title: true, accept: true, 'accept-charset': true,
				action: true, autocomplete: true, enctype: true, method: true, name: true, novalidate: true, target: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('form') }
		},
		frame: {
			attributes: {
				id: true, class: true, style: true, title: true, frameborder: true, longdesc: true,
				marginheight: true, marginwidth: true, name: true, noresize: true, scrolling: true, src: true
			},
			events: null,
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('frame') }
		},
		frameset: {
			attributes: { id: true, class: true, style: true, title: true, cols: true, rows: true },
			events: null,
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('frameset') }
		},
		h1: {
			attributes: { id: true, class: true, style: true, title: true, align: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('h1') }
		},
		h2: {
			attributes: { id: true, class: true, style: true, title: true, align: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('h2') }
		},
		h3: {
			attributes: { id: true, class: true, style: true, title: true, align: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('h3') }
		},
		h4: {
			attributes: { id: true, class: true, style: true, title: true, align: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('h4') }
		},
		h5: {
			attributes: { id: true, class: true, style: true, title: true, align: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('h5') }
		},
		h6: {
			attributes: { id: true, class: true, style: true, title: true, align: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('h6') }
		},
		head: {
			attributes: { profile: true },
			events: null,
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('head') }
		},
		header: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('header') }
		},
		hgroup: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('hgroup') }
		},
		hr: {
			attributes: {
				id: true, class: true, style: true, title: true, align: true, color: true,
				noshade: true, size: true, width: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('hr') }
		},
		html: {
			attributes: { id: true, class: true, style: true, title: true, xmlns: true },
			events: null,
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('html') }
		},
		i: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('i') }
		},
		iframe: {
			attributes: {
				id: true, class: true, style: true, title: true, height: true, name: true, sandbox: true,
				src: true, width: true, align: true, frameborder: true, longdesc: true, marginheight: true,
				marginwidth: true, scrolling: true, allowfullscreen: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('iframe') }
		},
		img: {
			attributes: {
				id: true, class: true, style: true, title: true, alt: true, crossorigin: true,
				height: true, ismap: true, longdesc: true, src: true, usemap: true, width: true, align: true,
				border: true, hspace: true, vspace: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('img') }
		},
		input: {
			attributes: {
				id: true, class: true, style: true, title: true, accept: true, alt: true,
				autocomplete: true, autofocus: true, dirname: true, form: true, formaction: true, formenctype: true,
				formmethod: true, formnovalidate: true, formtarget: true, height: true, list: true, max: true,
				maxlength: true, min: true, minlength: true, multiple: true, name: true, pattern: true,
				placeholder: true, readonly: true, size: true, src: true, step: true, type: true, value: true,
				width: true, align: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('input') }
		},
		ins: {
			attributes: { id: true, class: true, style: true, title: true, cite: true, datetime: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('ins') }
		},
		isindex: {
			attributes: { id: true, class: true, style: true, title: true, prompt: true, action: true },
			events: null,
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('isindex') }
		},
		kbd: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('kbd') }
		},
		keygen: {
			attributes: {
				id: true, class: true, style: true, title: true, autofocus: true, challenge: true,
				disabled: true, form: true, keytype: true, name: true
			},
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('keygen') }
		},
		label: {
			attributes: { id: true, class: true, style: true, title: true, for: true, form: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('label') }
		},
		legend: {
			attributes: { id: true, class: true, style: true, title: true, align: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('legend') }
		},
		li: {
			attributes: { id: true, class: true, style: true, title: true, value: true, type: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('li') }
		},
		link: {
			attributes: {
				crossorigin: true, href: true, hreflang: true, media: true, rel: true, sizes: true,
				type: true, charset: true, rev: true, target: true
			},
			events: null,
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('link') }
		},
		map: {
			attributes: { id: true, class: true, style: true, title: true, name: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('map') }
		},
		mark: {
			attributes: { id: true, class: true, style: true, title: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: true, msg: genCompatibleMsg('mark') }
		},
		menu: {
			attributes: { id: true, class: true, style: true, title: true, label: true, type: true },
			events: {
				onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
				onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
				onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
				ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
				onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
			},
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('menu') }
		},
		meta: {
			attributes: { charset: true, content: true, 'http-equiv': true, name: true },
			events: null,
			compatibility: { allBrowsers: false, msg: genCompatibleMsg('meta') }
		},
		//TODO to finish this for all tags
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
		tagValidator();
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
			const msg = 'Not recommend to use. The ' + currentlyCreatedTagName + ' tag is removed from HTML 5';
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
	const setTagObj = (outerTag = null) => {
		// console.log(outerTag.constructor);
		if (!outerTag || !isDOMElement(outerTag)) throw Error('Inavlid data type.Tag must be ot type object');
		tag = outerTag;
	}

	const changeInnerHTML = (htmlStr = null) => {
		if (!htmlStr) throw Error('Invalid html string.');
		tagValidator();
		tag.innerHTML = htmlStr;
	}

	const tagValidator = () => {
		if (!tag) throw Error('Tag is invalid. You must first create a tag before doing the current operation.');
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

	function genCompatibleMsg(tagName) {
		//This information is valid for year of creating this 2021
		let msg = 'Compatible on most of the browsers';
		switch (tagName) {
			case 'a':
			case 'abbr':
			case 'acronym':
			case 'address':
			case 'area':
			case 'article':
			case 'aside':
			case 'audio':
			case 'b':
			case 'base':
			case 'bdo':
			case 'big':
			case 'blockquote':
			case 'body':
			case 'br':
			case 'button':
			case 'canvas':
			case 'caption':
			case 'center':
			case 'cite':
			case 'code':
			case 'col':
			case 'colgroup':
			case 'datagrid':
			case 'dfn':
			case 'dd':
			case 'del':
			case 'dir':
			case 'div':
			case 'dl':
			case 'dt':
			case 'em':
			case 'embed':
			case 'fieldset':
			case 'figcaption':
			case 'figure':
			case 'font':
			case 'footer':
			case 'form':
			case 'frame':
			case 'frameset':
			case 'h1':
			case 'h2':
			case 'h3':
			case 'h4':
			case 'h5':
			case 'h6':
			case 'head':
			case 'header':
			case 'hgroup':
			case 'hr':
			case 'html':
			case 'iframe':
			case 'i':
			case 'img':
			case 'input':
			case 'ins':
			case 'kbd':
			case 'label':
			case 'legend':
			case 'li':
			case 'link':
			case 'map':
			case 'mark':
			case 'meta':
			case 'meter':
			case 'nav':
			case 'noframes':
			case 'noscript':
			case 'object':
			case 'ol':
			case 'optgroup':
			case 'option':
			case 'output':
			case 'p':
			case 'param':
			case 'pre':
			case 'progress':
			case 'q':
			case 'rp':
			case 'rt':
			case 'ruby':
			case 's':
			case 'samp':
			case 'script':
			case 'section':
			case 'select':
			case 'small':
			case 'source':
			case 'span':
			case 'strike':
			case 'strong':
			case 'style':
			case 'sub':
			case 'table':
			case 'tbody':
			case 'td':
			case 'textarea':
			case 'tfoot':
			case 'th':
			case 'thead':
			case 'time':
			case 'title':
			case 'tr':
			case 'tt':
			case 'u':
			case 'ul':
			case 'var':
			case 'video':
			case 'wbr':
				return msg;
			case 'applet':
				msg = 'Following browsers not support this tag - Chrome, Microsoft Edge, Opera';
				return msg;
			case 'basefont':
			case 'bb':
			case 'eventsource':
			case 'isindex':
			case 'keygen':
			case 'track':
				msg = 'Not supported in most of the browsers';
				return msg;
			case 'command':
				msg = 'Supported only on Internet Explorer 9';
				return msg;
			case 'datalist':
				msg = 'Not supported on Safari';
				return msg;
			case 'details':
				msg = 'Not supported on Microsoft Edge';
				return msg;
			case 'dialog':
				msg = 'Not supported on Mozilla Firefox, Microsoft Edge and Safari';
				return msg;
			case 'menu':
				msg = 'Supported only on Mozilla Firefox';
				return msg;
			default:
				msg = 'No information about this element';
				return msg;
		}
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
		tagValidator();
		const ruleKey = Object.keys(cssRule)[0];
		tag.style[ruleKey] = cssRule[ruleKey] ? cssRule[ruleKey] : '';
	}

	function addInlineStyles(inlineStyles = null) {
		if (!isObject(inlineStyles)) throw Error('styles must be object');
		tagValidator();
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

	function appendMtagToElById(elementId) {
		if (!elementId) throw Error('elementId is not valid.Cannot be empty, undefined or null');
		const parentEl = document.getElementById(elementId);
		if (!parentEl) throw Error('Element with id ' + elementId + ' not found');
		if (!tag) throw Error('You must first create a tag with create command');
		parentEl.appendChild(tag);
	}

	function appendElToContById(element, containerId) {
		if (!element) throw Error('Element is not valid');
		if (!containerId) throw Error('id of container is not valid');
		const parentEl = document.getElementById(containerId);
		if (!parentEl) throw Error('Element with id ' + containerId + ' not found');
		parentEl.appendChild(element);
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
		appendMtagToElById: function (element) {
			try {
				appendMtagToElById(element);
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
