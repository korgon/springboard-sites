// **NOT TO BE USED IN PRODUCTION**
// v3 loader compiled by Springboard
// created for Springboard use only

var SearchSpring = SearchSpring || {};

SearchSpring.Hooke = {"siteid":"oxoxox","context":"","site":"spring.ox","catalog":"gnu","cdn":"a.cdn.searchspring.net/sites","proxy":{"catalog":"gnu","context":""}};

(function() {
	var head = document.head || document.getElementsByTagName('head')[0]

	var location;
	if (window.location.port) {
		location = '//' + window.location.host + '/sites/';
	} else {
		location = '//' + SearchSpring.Hooke.cdn + '/'
	}
	location += SearchSpring.Hooke.site + '/' + SearchSpring.Hooke.catalog + '/';

	var style = document.createElement('link');
	style.type = 'text/css';
	style.rel = 'stylesheet';
	style.href = location + 'generated/stylesheet.css';

	head.appendChild(style);

	var context = SearchSpring.Hooke.context ? (' ' + SearchSpring.Hooke.context) : '';

	if (SearchSpring.Hooke.proxy && SearchSpring.Hooke.proxy.catalog && SearchSpring.Hooke.proxy.catalog == 'smc') {
		context += SearchSpring.Hooke.proxy.context ? (' ' + SearchSpring.Hooke.proxy.context) : '';
		document.write(unescape('%3Cscript src="//cdn.searchspring.net/search/v3/js/searchspring.catalog.js?' + SearchSpring.Hooke.siteid + '"' + context + '%3E%3C/script%3E'));
	} else {
		context += ' external="' + location + 'generated/' + SearchSpring.Hooke.catalog + '.js"';
		document.write(unescape('%3Cscript src="//cdn.searchspring.net/search/v3/js/searchspring.catalog.springboard.js?' + SearchSpring.Hooke.siteid + '"' + context + '%3E%3C/script%3E'));
	}
})();