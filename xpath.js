const input_xml 	= document.querySelector('#input_xml')
const input_xpath	= document.querySelector('#input_xpath')

const out_root		= document.querySelector('#out_root')
const out_count		= document.querySelector('#out_count')
const out_children	= document.querySelector('#out_children')
const out_xpr	= document.querySelector('#out_xpr')

const parser = new DOMParser();
let xmldoc;

input_xml.onkeyup	= function() {
	console.log(this.value);

	xmldoc = parser.parseFromString(this.value, 'text/xml');
	out_root.innerText 		= xmldoc.documentElement.tagName;
	out_count.innerText 	= xmldoc.documentElement.childElementCount;
	out_children.innerText 	= xmldoc.documentElement.children[0].tagName;
}

input_xpath.onkeyup	= function() {
	console.log(this.value);

	const nodes = xmldoc.evaluate(this.value, xmldoc, null,
									XPathResult.ANY_TYPE, null);

	let result = nodes.iterateNext();

	while (result) {
		// do something with result...
		result = nodes.iterateNext();
	}
	str = new XMLSerializer().serializeToString(elem);
}