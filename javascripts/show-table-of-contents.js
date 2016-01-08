window.onload = function() {
  var targetElement = document.getElementById("table-of-contents");
  //targetElement.innerHTML = "Hello World";
  
  var sectionElement = document.getElementsByTagName("section")[0];
  var currentList = document.createElement("ul");
  targetElement.appendChild(currentList);
  
  for (var i = 0; i < sectionElement.childElementCount; i++) {
    var element = sectionElement.children[i];
    if (element.tagName === "H3") {
      var text = document.createTextNode(element.innerHTML);
      var anchor = document.createElement("a");
      anchor.href = "#" + element.id;
      anchor.appendChild(text);
      var listItem = document.createElement("li");
      listItem.appendChild(anchor);
      currentList.appendChild(listItem);
    }
  }
}
