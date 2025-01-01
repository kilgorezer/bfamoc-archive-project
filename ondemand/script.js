(async function(fetch) {
	console.debug('Verbose Message');
	console.log('Info Message');
	console.warn('Warning Message');
	console.error('Error Message');
	window.videos = await fetch.json('//archive.bfamoc.kilgorezer.com/ondemand/videos.json');
	for i in videos.avalible
})((function(){
	var i = async function(i) { // a better fetch function for my use case (in terms of function usage)
		return await (await fetch(i)).text();
	};
	i.json = async function(j) {
		try {
			return JSON.parse(await i(j));
		}
		catch(e) {
			return {error: e, toString: function() {return '[JSON Parsing Error]'}};
		}
	};
	document.querySelector.for = function(query, handler) {
		for(element of document.querySelectorAll(query)) {
			handler(element);
		}
	}; // A querySelector modification that allows the code to easily run a handler for each element.
	return i;
})());