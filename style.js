var navbar = document.body.getElementsByTagName('nav-bar')[0];
var email = "kilgorezeralt@gmail.com";
navbar.outerHTML = (`
  <nav>
    <span>Website ${navbar.getAttribute('name').replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase())}</span>${(function(a){return ""})("This line gets the name converted to title case.")}
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/videos/">Videos</a></li>
      <li><a href="mailto:${email}">Contact</a></li>
    </ul>
  </nav>
  <spacer/>
`);

(function(){
  var items = [
    "BFAMOC 2",
    "BFAMOC 3",
    "BFAMOC 4",
    "BFAMOC 6",
    "BFAMOC 7",
    "BFAMOC 8",
    "BFAMOC 9",
    "BFAMOC 10A",
    "BFAMOC 10B",
    "BFAMOC 10C",
  ];
  var tmp = "";
  for(var i = 0; i < items.length; i++) {
    tmp += "<li>"+items[i]+"</li>"
  }
  var list = document.getElementsByTagName('not-archived');
  for(i = 0; i < list.length; i++) {
    list[i].innerHTML = (`
      <ul>
        ${tmp}
      </ul>
    `);
  }
  list = document.getElementsByTagName('contact-me');
  for(i = 0; i < list.length; i++) {
    list[i].outerHTML = (`
      <a href="mailto:${email}">${email}</a>
    `);
  }
})();