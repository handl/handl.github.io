window.onload = function() {
  var targetElement = document.getElementById("table-of-contents");
  //targetElement.innerHTML = "Hello World";
  
  var sectionElement = document.getElementsByTagName("section")[0];
  targetElement.innerHTML = sectionElement.childElementCount;
}
