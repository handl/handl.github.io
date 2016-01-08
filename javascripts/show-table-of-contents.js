window.onload = function() {
  var targetElement = document.getElementById("table-of-contents");
  //targetElement.innerHTML = "Hello World";
  
  var sectionElement = document.getElementsByTagName("section")[0];
  var sectionsFound = []
  for (var i = 0; i < sectionElement.childElementCount; i++) {
    var element = sectionElement[i];
    if (element.tagName === "h3") {
      sectionsFound.push(element.innerHTML);
    }
  }
  targetElement.innerHTML = sectionsFound;
}
