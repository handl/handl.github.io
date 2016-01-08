function formatTitle(title) {
  if (title.endsWith(":")) {
    return title.substring(0, title.length - 1);
  }
  return title
}

window.onload = function() {
  var targetElement = document.getElementById("table-of-contents");
  //targetElement.innerHTML = "Hello World";
  
  var sectionElement = document.getElementsByTagName("section")[0];
  var currentList = document.createElement("ul");
  targetElement.appendChild(currentList);
  
  for (var i = 0; i < sectionElement.childElementCount; i++) {
    var element = sectionElement.children[i];
    if (element.tagName === "H2") {
      var sectionName = element.innerHTML;
      var sectionListItem = document.createElement("li");
      sectionListItem.appendChild(document.createTextNode(sectionName));
      currentList = document.createElement("ul");
      sectionListItem.appendChild(currentList);
      targetElement.appendChild(sectionListItem);
    }
    
    if (element.tagName === "H3") {
      var text = document.createTextNode(formatTitle(element.innerHTML));
      var anchor = document.createElement("a");
      anchor.href = "#" + element.id;
      anchor.appendChild(text);
      var listItem = document.createElement("li");
      listItem.appendChild(anchor);
      currentList.appendChild(listItem);
    }
  }
}
