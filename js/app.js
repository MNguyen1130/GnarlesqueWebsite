function showDiv(div) {
  var list = document.getElementsByTagName("div")
  for (var i = 0; i < list.length; i++) {
    if(list[i].id == div)
    {
      // list[i].style.display = 'block';
      list[i].className = "open";
    }
    else if(list[i].className.indexOf("open") > -1)
    {
      // list[i].style.display = 'none';
      list[i].className = "hidden";
    }
  }
}
