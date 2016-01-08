window.onload = function() {
  var targetElement = document.getElementById("table-of-contents");
  //targetElement.innerHTML = "Hello World";
  
  var sectionElement = document.getElementsByTagName("section")[0];
  var sectionsFound = []
  for (var i = 0; i < sectionElement.childElementCount; i++) {
    var element = sectionElement.children[i];
    if (element.tagName === "H3") {
      sectionsFound.push(element.innerHTML);
    }
  }
  var anchor = document.createElement("a");
  anchor.href = "http://google.com";
  var text = document.createTextNode("Hello there");
  anchor.appendChild(text);
  targetElement.appendChild(anchor);
  // targetElement.innerHTML = sectionsFound;
}
