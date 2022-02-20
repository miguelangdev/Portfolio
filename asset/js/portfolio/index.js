import { onCarousel, onExperience, onFormacion, onAboutme, onPortfolio } from "./db.js";

var ini = false;

window.addEventListener("load", async () => {
  if (!ini) {
    ini = true;
    loadCarousel();
    loadExperience();
    loadFormacion();
    loadAboutme();
    loadTabs();
    //Se puede abrir un modal directamente añadiendo a la página /?modal=[NOMBRE DEL MODAL] ej. /?modal=MementumVRModal
    if (getQueryVariable("modal")) {
      $("#"+getQueryVariable("modal")).modal("show");
    }
  }
});

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0].toUpperCase() == variable.toUpperCase()) {
      return pair[1];
    }
  }
  return null;
}

$("#carousel-movement").carousel({
  interval: 10000,
});
$("#experience-movement").carousel({
  interval: 10000,
});
$("#formacion-movement").carousel({
  interval: 10000,
});

//Tabs controller
var tabs = $(".tabs");
var activeItem = tabs.find(".active");
var activeWidth = activeItem.innerWidth();
var contents = [
  document.getElementById("proyectos"),
  document.getElementById("conocimientos")
];
var carouselContent = 
[
  document.getElementById("carousel-section").getElementsByClassName("carousel-indicators"),
  document.getElementById("carousel-section").getElementsByClassName("carousel-inner")
];

var experienceContent = 
[
  document.getElementById("experience").getElementsByClassName("carousel-indicators"),
  document.getElementById("experience").getElementsByClassName("carousel-inner")
];

var formacionContent = 
[
  document.getElementById("formacion").getElementsByClassName("carousel-indicators"),
  document.getElementById("formacion").getElementsByClassName("carousel-inner")
];
var aboutmeContent = document.getElementById("container-about-me");

$(".selector").css({
  left: activeItem.position.left + "px",
  width: activeWidth + "px",
});

$(".tabs").on("click", "a", function (e) {
  e.preventDefault();
  $(".tabs a").removeClass("active");
  $(this).addClass("active");
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    left: itemPos.left + "px",
    width: activeWidth + "px",
  });
});

function loadCarousel(){
  onCarousel((querySnapshot) => {
    carouselContent[0][0].innerHTML = "";
    carouselContent[1][0].innerHTML = "";

    var carousel_data=[];
    var i=0;
    querySnapshot.forEach((doc) =>{
      var carousel = doc.data();
      carousel.Priority = Math.floor(carousel.Priority);
      carousel_data[i] = carousel;
      i++;
    });

    carousel_data.sort(function (a, b){
      return (a.Priority - b.Priority)
    });

    carousel_data.sort();
    
    for(let i = 0; i < carousel_data.length; i++){
      carouselContent[0][0].innerHTML += i==0 ?  "<li data-target='#carousel-movement' data-slide-to='"+i+"' class='active'></li>" : 
      "<li data-target='#carousel-movement' data-slide-to='"+i+"'></li>";
    }

    let z = 0
    carousel_data.forEach((doc) =>{
      var div = document.createElement("DIV");
      div.className = z==0? "item active" : "item";
      carouselContent[1][0].appendChild(div);
      var imgContent = doc.Type == "img"?  "<img src='"+doc.Source+"' alt=''>" : "<video autoplay muted loop id='VideoPlayer'><source src='"+doc.Source+"' type='video/"+doc.Type+"'></video>"

      div.innerHTML += "<a href='#' data-toggle='modal' data-target='#"+doc.Modal+"' class='link-1'>"+
      imgContent+
      "<div id='carousel-background'>"+
      "<div id='carousel-wrapper'>"+
      "<div id='carousel-text' class='anim"+z+"'>"+doc.Title+"</div>"+
      "</div></div></a></div>";

      var text = ".anim"+z;
      $(text).css(
        "animation",
        "typing 2s steps("+doc.Words+"), blink .5s step-end infinite alternate"
      );

      $(text).css(
        "width",
        ""+doc.Words+".2ch"
      );
      z++
    });
  });
}

function loadExperience(){
  onExperience((querySnapshot) => {
    experienceContent[0][0].innerHTML = "";
    experienceContent[1][0].innerHTML = "";

    var experience_data=[];
    var k=0;
    querySnapshot.forEach((doc) =>{
      var experience = doc.data();
      experience.Priority = Math.floor(experience.Priority);
      experience_data[k] = experience;
      k++;
    });

    experience_data.sort(function (a, b){
      return (a.Priority - b.Priority)
    });

    experience_data.sort();

    for(let i = 0; i < experience_data.length/3; i++){
      experienceContent[0][0].innerHTML += i==0 ?  "<li data-target='#experience-movement' data-slide-to='"+i+"' class='active'></li>" : 
      "<li data-target='#experience-movement' data-slide-to='"+i+"'></li>";
    }

   for (let i = 0; i < experience_data.length/3; i++) {   
      var div = document.createElement("DIV");
      div.className = i==0? "item active" : "item";
      experienceContent[1][0].appendChild(div); 
      var div2 = document.createElement("DIV");
      div2.className = "container-experience";
      div.appendChild(div2);
      for(let z = i*3; (z < (i*3)+3) && z<experience_data.length ; z++){
        
          div2.innerHTML += 
          "<div id='experience-left'>"+
          "<div class='card'>"+
          "<img src='"+experience_data[z].Source+"' class='card-img'>"+
          "<div class='container-card'>"+
          "<h4><b>"+experience_data[z].Company+"</b></h4>"+
          "<h5><b>"+experience_data[z].Position+"</b></h5>"+
          "<p>"+experience_data[z].Paragraph+"</p>"+
          "<p>"+experience_data[z].Duration+"</p>"+
          "</div></div></div>";
        }
      }
  });
}

function loadFormacion(){
  onFormacion((querySnapshot) => {
    formacionContent[0][0].innerHTML = "";
    formacionContent[1][0].innerHTML = "";

    var formacion_data=[];
    var k=0;
    querySnapshot.forEach((doc) =>{
      var formacion = doc.data();
      formacion.Priority = Math.floor(formacion.Priority);
      formacion_data[k] = formacion;
      k++;
    });

    formacion_data.sort(function (a, b){
      return (a.Priority - b.Priority)
    });

    formacion_data.sort();

    for(let i = 0; i < formacion_data.length/2; i++){
      formacionContent[0][0].innerHTML += i==0 ?  "<li data-target='#formacion-movement' data-slide-to='"+i+"' class='active'></li>" : 
      "<li data-target='#formacion-movement' data-slide-to='"+i+"'></li>";
    }

   for (let i = 0; i < formacion_data.length/2; i++) {   
      var div = document.createElement("DIV");
      div.className = i==0? "item active" : "item";
      formacionContent[1][0].appendChild(div); 
      var div2 = document.createElement("DIV");
      div2.className = "container-experience";
      div.appendChild(div2);
      for(let z = i*2; (z < (i*2)+2) && z<formacion_data.length ; z++){
        
          div2.innerHTML += 
          "<div id='formacion-left'>"+
          "<div class='card'>"+
          "<img src='"+formacion_data[z].Source+"' class='card-img'>"+
          "<div class='container-card'>"+
          "<h4><b>"+formacion_data[z].College+"</b></h4>"+
          "<h5><b>"+formacion_data[z].Info+"</b></h5>"+
          "<p>"+formacion_data[z].Title+"</p>"+
          "<p>"+formacion_data[z].Duration+"</p>"+
          "<a class='btn btn-primary btn-xl text-uppercase rounded-button' target='_blank' href='"+formacion_data.Link+"'><i class='fa fa-plus'></i></a>"+
          "</div></div></div>";
        }
      }
  });
}

function loadAboutme(){
  onAboutme((querySnapshot) => {
    var aboutme_data;
    querySnapshot.forEach((doc) =>{
      aboutme_data = doc.data();
    });
    
    aboutmeContent.innerHTML = "";

    var isFound = true;
    var text = "";
    var text2 ="";
    for(let i=1; isFound; ){
      if(aboutme_data.Aptitude.indexOf("-", i) != -1){
        text += "<p>"+aboutme_data.Aptitude.substring(i-1, aboutme_data.Aptitude.indexOf("-", i))+"</p>";
        i = aboutme_data.Aptitude.indexOf("-", i) +1;
      }else{
        isFound = false;
      }
    }

    isFound = true;
    for(let i=1; isFound; ){
      if(aboutme_data.Interest.indexOf("-", i) != -1){
        text2 += "<p>"+aboutme_data.Interest.substring(i-1, aboutme_data.Interest.indexOf("-", i))+"</p>";
        i = aboutme_data.Interest.indexOf("-", i) +1;
      }else{
        isFound = false;
      }
    }
    
      aboutmeContent.innerHTML += 
      "<div id='img-about-me'>"+
      "<img src='"+aboutme_data.Image+"' alt=''>"+
      "</div>"+
      "<div id='description'>"+
      "<div class='section-title text-center'>"+
      "<h3>Sobre mí</h3>"+
      "</div>"+
      "<p>"+
      aboutme_data.Paragraph+
      "</p>"+
      "<p>"+
      aboutme_data.Paragraph2+
      "</p>"+
      "<p>"+
      aboutme_data.Paragraph3+
      "</p>"+
      "<div class='doble_seccion'>"+
      "<div class='doble_seccion1'>"+
      "<div class='section-title text-center'>"+
      "<h5><b>Aptitudes</b></h5>"+
      "</div>"+
      text+
      "</div>"+
      "<div class='doble_seccion2'>"+
      "<div class='section-title text-center'>"+
      "<h5><b>Datos de interés</b></h5>"+
      "</div>"+
      text2+
      "</div></div>";
  });
}

function loadTabs() {
  onPortfolio((querySnapshot) => {
    var portfolio_data = [[],[]];
    querySnapshot.forEach((doc) =>{
      var portfolio = doc.data();

      portfolio.ID = Math.floor(portfolio.ID);
      portfolio.Priority = Math.floor(portfolio.Priority);

      if(portfolio.Tab == "Portfolio"){
        portfolio_data[0][portfolio_data[0].length] = portfolio;
      }else{
        portfolio_data[1][portfolio_data[1].length] = portfolio;
      }
    });
    
    contents[0].innerHTML = "";
    contents[1].innerHTML = "";

    portfolio_data[0].sort(function (a, b) {
      if (a.Priority == b.Priority) return (a.ID < b.ID) ? -1 : (a.ID > b.ID) ? 1 : 0;
      else {
       return (a.Priority < b.Priority) ? -1 : 1;
      }
    });
    portfolio_data[1].sort(function (a, b) {
      if (a.Priority == b.Priority) return (a.ID < b.ID) ? -1 : (a.ID > b.ID) ? 1 : 0;
      else {
       return (a.Priority < b.Priority) ? -1 : 1;
      }
    });

    portfolio_data[0].sort();
    portfolio_data[1].sort();

    for (let i = 0; i < contents.length; i++) {
      var ul = document.createElement("UL");
      ul.className = "portfolio-list";
      contents[i].appendChild(ul);
      for (let z = 0; z < portfolio_data[i].length; z++) {
        var filter_list = [];
        filter_list = portfolio_data[i][z].Additional.split(', ');
        filter_list[filter_list.length] = portfolio_data[i][z].Language == "C++"? "Cpp" : portfolio_data[i][z].Language == "C#"? "Csharp" : portfolio_data[i][z].Language;
        filter_list[filter_list.length] = portfolio_data[i][z].Platform_Filter;

        var filter_text = "";
        for (let m = 0; m < filter_list.length; m++) {
          filter_text += " filter-"+filter_list[m];
        }

        var li = document.createElement("LI");
        li.className = "portfolio-li"+filter_text;
        ul.appendChild(li);
  
        var div = document.createElement("DIV");
        div.className = "portfolio-item";
        li.appendChild(div);
  
        var imgContent = portfolio_data[i][z].Type == "img"?  "<img src='"+portfolio_data[i][z].ModalSource+"' class='img_modal' alt=''>" : "<video autoplay muted loop id='VideoPlayer'><source src='"+portfolio_data[i][z].ModalSource+"' type='video/"+portfolio_data[i][z].Type+"'></video>"
  
        var modaldivtext = "<div class='section-modal modal fade' id=" +
        portfolio_data[i][z].Modal +
        " tabindex='-1' role='dialog' aria-hidden='true'>"+
        "<div class='modal-content'>"+
        "<div class='close-modal' data-dismiss='modal'>"+
        "<div class='lr'>"+
        "<div class='rl'>"+
        "</div></div></div>"+
        "<div class='container'>"+
        "<div class='row justify-content-center'>"+
        "<div class='section-title text-center'>"+
        "<h3>" +
        portfolio_data[i][z].Title +
        "</h3>"+
        imgContent;
  
        if(i==0){
          modaldivtext+= 
          "<div class='modal_description'>"+
          "<h4>" +
          "DESCRIPCIÓN" +
          "</h4>"+
          "<p>" +
          portfolio_data[i][z].Description +
          "</p>"+
          "</div>"+
          "<div class='modal_table'>"+
          "<h3>"+
          "Ficha técnica"+
          "</h3>"+
          "<ul>"+
          "<li>"+
          "<b>Puesto: </b>"+
          portfolio_data[i][z].Position+
          "</li>"+
          "<li>"+
          "<b>Plataforma: </b>"+
          portfolio_data[i][z].Platform+
          "</li>"+
          "<li>"+
          "<b>Lenguaje: </b>"+
          portfolio_data[i][z].Language+
          "</li>"+
          "<li>"+
          "<b>Uso adicional: </b>"+
          portfolio_data[i][z].Additional+
          "</li>"+
          "</ul>"+
          "</div></div></div>"+
          "<div class='row'>"+
          "<div class='col-md-6'>"+
          "</div></div></div></div></div>";
          
        }else{
          modaldivtext += 
          "<h4>" +
          "DESCRIPCIÓN" +
          "</h4>"+
          "<p>" +
          portfolio_data[i][z].Description +
          "</p></div></div>"+
          "<div class='row'>"+
          "<div class='col-md-6'>"+
          "</div></div></div></div></div>";
        }
  
        div.innerHTML += modaldivtext;
        
        var img = document.createElement("IMG");
        img.src = portfolio_data[i][z].Source;
        img.className = "img-responsive";
        img.alt = "";
        div.appendChild(img);
  
        var div2 = document.createElement("DIV");
        div2.className = "portfolio-caption";
        div.appendChild(div2);
  
        var h4 = document.createElement("H4");
        h4.innerHTML = portfolio_data[i][z].Title;
        div2.appendChild(h4);
  
        var p = document.createElement("P");
        p.innerHTML = portfolio_data[i][z].Info;
        div2.appendChild(p);
        
        var text;
  
        if(portfolio_data[i][z].Link == "#") {
          text = "<a href='#' data-toggle='modal' data-target='#" +
          portfolio_data[i][z].Modal +
                  "'><i class='fa fa-magic'></i></a>";
                  
        div2.innerHTML += text;
        }
        else {
          text = "<a href='#' data-toggle='modal' data-target='#" +
          portfolio_data[i][z].Modal +
                  "' class='link-1'><i class='fa fa-magic'></i></a>";
                  
        div2.innerHTML += text;
  
        var a2 = document.createElement("A");
        a2.href = portfolio_data[i][z].Link;
        a2.className = "link-2";
        a2.target = "_blank";
        div2.appendChild(a2);
  
        var i2 = document.createElement("I");
        i2.className = "fa fa-link";
        a2.appendChild(i2);
        }
      }
    }
    
    setTimeout(() => {
      tab_filter();
    }, 2000);
  });
}

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => {
        e.onclick = listener;
      })
    } else {
      selectEl.onclick = listener;
    }
  }
}

window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});

function tab_filter(){
  let portfolioContainer = select('.portfolio-list', true);
  if (portfolioContainer.length > 0) {
    let portfolioFilters = []; 
    for(let i = 0; i < portfolioContainer.length; i++){
      let portfolioIsotope = new Isotope(portfolioContainer[i], {
        itemSelector: '.portfolio-li'
      });
  
       portfolioFilters[i] = select('#filter-'+i+' #portfolio-flters li', true);
  
      on('click', '#filter-'+i+' #portfolio-flters li', function(e) {
        if(e){
          e.preventDefault();
        }

        portfolioFilters[i].forEach(function(el) {
          el.classList.remove('filter-active');
        });
        
        this.classList.add('filter-active');

        var this_element = this;

        for(let k = 0; k < portfolioFilters.length; k++){
          if(i != k) {
            portfolioFilters[k].forEach(function(el) {
              el.classList.remove('filter-active');
              if(this_element.innerHTML == el.innerHTML) el.classList.add('filter-active');
            });
          }
        }
  
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }
  }
}