window.onload = function() {
  var targetElement = document.getElementById("table-of-contents");
  //targetElement.innerHTML = "Hello World";
  
  var sectionElement = document.getElementsByTagName("section")[0];
  var sectionsFound = []
  for (var i = 0; i < sectionElement.childElementCount; i++) {
    var element = sectionElement.children[i];
    if (element.tagName === "H3") {
      var anchor = document.createElement("a");
      anchor.href = "#" + element.id;
      var text = document.createTextNode(element.innerHTML);
      anchor.appendChild(text);
      targetElement.appendChild(anchor);
      // sectionsFound.push(element.innerHTML);
    }
  }
  
  
  // targetElement.appendChild(anchor);
  // targetElement.innerHTML = sectionsFound;
}
