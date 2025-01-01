var navbar = document.body.getElementsByTagName('nav-bar')[0];
var email = "kilgorezeralt@gmail.com";
var subject = "\n\nSent From BFAMOC Archive Website";
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // This line of code is from https://stackoverflow.com/questions/77506413/detecting-if-the-user-is-on-desktop-or-mobile-in-the-browser and is not under the same attribution restrictions as the rest of the website
var discord = {
  url: "https://discord.gg/vCStZHxA7e",
  desc: "BFAMOC Fans"
};
navbar.outerHTML = (`
  <nav>
    <span>Archive ${navbar.getAttribute('name').replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase())}</span>${(function(a){return ""})("This line gets the name converted to title case.")}
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/videos/">Videos</a>${!isMobile?'<a href="/ondemand/" title="Advanced">&#x25BE;</a>':''}</li>
      <li><a href="mailto:${email}?subject=${encodeURIComponent(subject)}">Contact</a></li>
    </ul>
  </nav>
  <spacer/>
`);

(function(){
  var items = [
    "BFAMOC 2",
    "BFAMOC 3",
    "BFAMOC 6",
    "BFAMOC 7",
    "BFAMOC 8",
    "BFAMOC 10B",
    "BFAMOC 10C",
  ];
  var tmp = "";
  for(var i = 0; i < items.length; i++) {
    tmp += "<li>"+items[i]+"</li>"
  }
  var list = document.getElementsByTagName('not-archived');
  for(i = 0; i < list.length; i++) {
    list[i].outerHTML = (`
      <ul not-archived>
        ${tmp}
      </ul>
    `);
  }
  list = document.getElementsByTagName('contact-me');
  for(i = 0; i < list.length; i++) {
    list[i].outerHTML = (`
      <a contact-me href="mailto:${email}?subject=${encodeURIComponent(subject)}">${email}</a>
    `);
  }
  list = document.getElementsByTagName('discord');
  for(i = 0; i < list.length; i++) {
    list[i].outerHTML = (`
      <a contact-me href="${discord.url}">The ${discord.desc} Discord Server</a>
    `);
  }
  list = document.getElementsByTagName('select');
  for(i = 0; i < list.length; i++) {
    if(list[i].getAttribute('value_')) {
      list[i].value = list[i].getAttribute('value_');
    }
  }
})();

var randombits = function(n, c) {
	var tmp="";
	for(var i = 0; i < c; i++) {
		tmp += Math.random() < 1/n ? "1" : "0";
	}
	return tmp;
}
if( Number(randombits(location.host.includes('local')?1:37, 1)) ) {
	var _37_ = document.createElement('img');
	_37_.src = "/37.png";
	_37_.id = "37";
	document.body.appendChild(_37_);
	var _2763_ = document.createElement('img');
	_2763_.src = "/2763.png";
	_2763_.id = "2763";
	document.body.appendChild(_2763_);
}