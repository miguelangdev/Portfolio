var contents = [
    document.getElementById("proyectos"),
    document.getElementById("conocimientos")
  ];

  var filters = [
    document.getElementById("filter-0"),
    document.getElementById("filter-1")
  ];

function changeTab(i) {
    for (let z = 0; z < contents.length; z++) {
      if(contents[z]) {
        contents[z].style.display = "none";
        filters[z].style.display = "none";
      }
      if (z == i) 
      {
        contents[z].style.display = "block";
        filters[z].style.display = "block";
      }
    }

    var elem = document.getElementsByClassName("filter-active");
    for(let z = 0; z < elem.length; z++){
      if ( elem[z].onclick ) {
        elem[z].onclick.apply(elem[z]);
      }
    }
  }

  changeTab(0);