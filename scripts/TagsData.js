//different information about tags from https://way2tutorial.com/html/tag/reference.php
function getTagsInfo() {
    return {
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
        meter: {
            attributes: {
                id: true, class: true, style: true, title: true, form: true, high: true, low: true,
                max: true, min: true, optimum: true, value: true
            },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('meter') }
        },
        nav: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('nav') }
        },
        noframes: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {},
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('noframes') }
        },
        noscript: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {},
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('noscript') }
        },
        object: {
            attributes: {
                id: true, class: true, style: true, title: true, data: true, form: true, height: true,
                name: true, type: true, usemap: true, width: true, align: true, archive: true, border: true,
                codebase: true, hspace: true, standby: true, vspace: true
            },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('object') }
        },
        ol: {
            attributes: {
                id: true, class: true, style: true, title: true, reversed: true, start: true, type: true, compact: true
            },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('ol') }
        },
        optgroup: {
            attributes: { id: true, class: true, style: true, title: true, disabled: true, label: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('optgroup') }
        },
        option: {
            attributes: { id: true, class: true, style: true, title: true, disabled: true, label: true, selected: true, value: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('option') }
        },
        output: {
            attributes: { id: true, class: true, style: true, title: true, for: true, form: true, name: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('output') }
        },
        p: {
            attributes: { id: true, class: true, style: true, title: true, align: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('p') }
        },
        param: {
            attributes: { id: true, class: true, style: true, title: true, name: true, value: true, type: true, value: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('param') }
        },
        pre: {
            attributes: { id: true, class: true, style: true, title: true, width: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('pre') }
        },
        progress: {
            attributes: { id: true, class: true, style: true, title: true, max: true, value: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('progress') }
        },
        q: {
            attributes: { id: true, class: true, style: true, title: true, cite: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('q') }
        },
        rp: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('rp') }
        },
        rt: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('rt') }
        },
        ruby: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('ruby') }
        },
        s: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('s') }
        },
        samp: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('samp') }
        },
        script: {
            attributes: {
                id: true, class: true, style: true, title: true, async: true, charset: true, defer: true,
                src: true, type: true
            },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('script') }
        },
        section: {
            attributes: { id: true, class: true, style: true, title: true },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('section') }
        },
        select: {
            attributes: {
                id: true, class: true, style: true, title: true, autofocus: true, disabled: true, form: true,
                multiple: true, required: true, size: true
            },
            events: {
                onfocus: true, onblur: true, onabort: true, onchange: true, onbeforeunload: true, onclick: true, ondblclick: true,
                onkeydown: true, onkeypress: true, onkeyup: true, onmousedown: true, onmouseout: true, onmousemove: true,
                onmouseover: true, onmouseup: true, onreset: true, onselect: true, onsubmit: true, onload: true, onunload: true,
                ondrag: true, ondragend: true, ondragenter: true, ondragleave: true, ondragover: true, ondragstart: true, ondrop: true,
                onerror: true, onmessage: true, onmousewheel: true, onscroll: true, onresize: true, onstorage: true
            },
            compatibility: { allBrowsers: true, msg: genCompatibleMsg('select') }
        },
        //TODO to finish this for all tags
    };
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

function getRemovedTags() {
    return {
        acronym: true, applet: true, basefont: true, big: true, center: true, dir: true,
        font: true, frame: true, frameset: true, isindex: true, noframes: true, strike: true,
        tt: true
    }
}

export { getTagsInfo, getRemovedTags }

