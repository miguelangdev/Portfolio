var ini = false;
var dbTables = [
    [
        [
            ["images/portfolio/Airborn.jpg", "AIRBORN", "Juego desarrollado en Unity para android", "AIRBORNModal", "Juego en curso basado para android en unity. Eres un paracaidista de la segunda guerra mundial y el juego consiste en conseguir llegar a tierra sin morir, es un infinity run 2D donde aparecen elementos como balas y trozos de aviones que tendrás que esquivar para llegar sin morir a tierra, tendrás power-ups y podrás comprar nuevas skins para el personaje.\nRealizado por un equipo de siete personas donde soy el Lead programmer.", "#"],
            ["images/portfolio/Dumbwars.jpg", "Dumb Wars", "Juego desarrollado en Unity para android", "DumbWarsModal", "Juego para móviles basado en unity. Consiste en un arcade donde combates contra la IA. Manejas una facción y tienes que derrotar a todas las facciones enemigas. En el combate manejas tu fortaleza y envías enemigos por cinco calles en las cuales puedes construir además pequeños muros o torres para impedir al contrario avanzar, la IA intentara evitar que llegues a su castillo mientras a su vez intenta destruir el tuyo. En el juego también se puede mejorar personajes y comprar nuevos, y además posee un modo orda infinita donde puedes luchar infinitamente a cambio de recompensas.\nHe sido productor y programador, además de añadir el sonido, dentro de este proyecto en un grupo pequeño de 4 personas.", "#"],
            ["images/portfolio/mementumvr.jpg", "MementumVR", "Experiencia desarrollada con Unreal engine 4 para realidad virtual", "mementumVRModal", "Mementum VR es un ambicioso proyecto propio que consiste en la creación del primer portal de Realidad Virtual en el que poder sumergirte en la historia. Podrás ver, andar, tocar y sentir tan de cerca la historia que creerá participar en ella.\nCada ciudad podrá disponer de una experiencia Mementum VR que recreará como era la vida en un monumento histórico-cultural en un periodo de tiempo pasado.\nTodas las experiencias Mementum VR tienen un denominador común. El hiperrealismo y el rigor histórico.\nLa primera experiencia piloto ya está finalizada…. y cómo no? Es una recreación histórica de uno de los monumentos de mayor interés de Málaga, El Teatro Romano de Málaga.", "http://vrestudio.com/projects/mementun.html"],
            ["images/portfolio/vertigoVR.jpg", "VertigoVR", "Juego desarrollado con Unreal engine 4 para realidad virtual", "VertigoVRModal", "Con motivo de la inauguración del Polo de Contenidos Digitales de Málaga dedicamos nuestro esfuerzo en la creación de una experiencia en Realidad Virtual divertida en la que poder entretener a los asistentes a la vez de terapéutica para personas con miedo a las alturas.\nEn VERTIGO VR, pondremos a prueba tu equilibrio, llevaremos al límite tus sentidos y tus miedos, una experiencia VR cuyo propósito es pasar un buen rato entre amigos, conseguir la mejor puntuación y... ¿Por qué no? superar tu fobia a las alturas.\nUn juego con un alto grado de competitividad entre sus usuarios. Cruzar nuestra pasarela de 4 metros de longitud sin caerse ni perder el equilibrio no está al alcance de cualquiera.", "http://vrestudio.com/projects/Vertigo.html#"],
            ["images/portfolio/WESTERN.jpg", "WesternVR", "Juego desarrollado con Unreal engine 4 para realidad virtual", "WesternVRModal", "Juego de realidad virtual basado en unreal engine 4. Es un proyecto no publicado. Consiste en disparar a los enemigos que se aproximan y conseguir la máxima puntuación. Trabajé en un grupo de 7 personas, junto a otros dos programadores.", "#"],
            ["images/portfolio/VREapp.jpg", "VREapp", "Aplicación desarrollada en Android Studio para móvil", "VREappModal", "Desarrollé una aplicación en android studio para la empresa VREstudio, la cual reproduce vídeos en realidad virtual con un reproductor propio, descarga contenido online los cuales se añaden dinámicamente mediante una base de datos no relacional, y genera una cola de descargas cuanto más cosas quieras descargar. Fui el único programador en este proyecto.", "#"],
            ["images/portfolio/WebVR.jpg", "WebVR", "Web desarrollada con XML junto a plugins para realidad virtual", "WebVRModal", "Un proyecto para convertir la página de la empresa en una página adaptada a realidad virtual con la que poder enseñar mejor los conocimientos de la empresa dentro de este campo.\nHe sido la única persona en este proyecto.", "#"],
            ["images/portfolio/COPWARS.jpg", "COPWARS", "Juego desarrollado con Phaser para web", "COPWARSModal", "Juego HTLM hecho con Phaser y Javascript. Realizado solo por mí como unico integrante del equipo. Consiste en un juego donde puedes comprar mejoras, y tienes que sobrevivir a oleadas de enemigos. En dicho juego se usa firebase para base de datos y creación de usuarios incluida la posibilidad de crear la cuenta con google o facebook.", "#"],
            ["images/portfolio/sinnet.jpg", "Sinnet", "Juego desarrollado en Unreal engine 4 para ordenador", "SinnetModal", "Juego de terror basado en unreal engine 4. La historia se basa en una de las alucinaciones del personaje el cual cree estar en un castillo lleno de trampas y una criatura, todo controlado por alguien que lo intenta matar. Cuando el jugador consigue volver a la realidad se da cuenta que está en su casa y él está siendo el narrador que dirige el castillo.", "#"],
            ["images/portfolio/COMIN.jpg", "Comin", "Aplicación desarrollada en Android Studio para móvil", "CominModal", "Aplicación de gestión de comunidades y sus incidencias.\nConsiste en una aplicación móvil realizada para android, la cual permite gestionar las comunidades que tengas a tu cargo, añadiendo viviendas, personas o incidencias las cuales pueden ser asociadas a las viviendas, personas o comunidad. También permite la gestión de grupos de personas, guardar mensajes y guardar incidencias para poder crearlos rápidamente. Se puede filtrar de manera sencilla cualquier cosa que te interese, y añadir una configuración propia a cada comunidad. Además se puede enviar correos o llamar mediante la aplicación para avisar de cualquier incidencia que haya ocurrido o mandar una circular a todos los vecinos.\nEste proyecto lo he ido realizando en mi tiempo libre y por ello se ha alargado tanto. He sido el único integrante en este proyecto por lo que lo he hecho al 100% yo mismo.", "#"],
            ["images/portfolio/uList.jpg", "Ulist", "Aplicación desarrollado con Visual Studio en C# para ordenador", "UlistModal", "Proyecto de fin de grado. Consiste en crear una herramienta online que permite organizar tus películas, series y libros favoritos, mediante una base de datos externa donde puedes seleccionar cada producto, los cuales tienen una ficha técnica donde hay una valoración media general, donde se encuentra descripción y análisis del propio producto, además se le permite a los usuarios crear sus propios análisis y filtrar los mismos. Una sección para mostrar tus elementos seleccionados, y puedes filtrar en ellas. Puedes editar opciones de visualización,, idiomas y perfil. Cuenta con página de registro y se encripta todos los datos proporcionados.\nHe sido el único participante en el proyecto por lo que he ejercido de diseñador, artista y programador.", "#"]    
        ],
        [
            ["images/portfolio/Pathfinding.jpg", "IA pathfinding", "Conocimientos básicos de pathfinding en Unity", "PathfindingModal", "He realizado proyectos en unity donde he tenido que realizar un programa que realiza búsquedas con diversos algoritmos de inteligencia artificial como A*, Búsqueda de amplitud, Hill Climbing o Búsqueda con horizonte entre otros.", "#"],
            ["images/portfolio/Algoritmos.jpg", "IA algoritmos", "Conocimientos básicos de diversos algoritmos aplicados en Unity", "AlgoritmosModal", "He realizado diversos trabajos de inteligencia artificial donde he tenido que aplicar algoritmos como MinMax, genéticos o redes neuronales.", "#"],
            ["images/portfolio/fisicas.jpg", "Físicas con c++", "Programa en c++ donde creo un sistema de físicas", "fisicasModal", "Se trata de un proyecto en el cual se intenta simular físicas de un videojuego con programación en c++, en este caso se usa una pelota que rebota en las paredes dependiendo de la zona donde hagas click se ejercerá una fuerza equivalente al vector resultante del centro de la pelota hasta el punto del click en pantalla.", "#"],
            ["images/portfolio/flocking.jpg", "Flocking con c++", "Programa realizado en c++ que simula un comportamiento de flocking", "FlockingModal", "Programa que simula el comportamiento de flocking realizado desde programación en c++, en el se puede ver como puedes mover una pelota que ejerce como lider para atraer a las demás pelotas donde estas se acercan a una distancia máxima y realiza una separación entre las demás con las cuales nunca llegan a tocarse pese a estar todas persiguiendo a la bola lider.", "#"],
            ["images/portfolio/nodejs.jpg", "Combinar c++ y node.js", "Programa que combina una dll programada en c++ y node.js para gestionar bases de datos", "NodeModal", "Programa donde creo una herramienta web para gestión de bases de datos, realizado a partir de una dll programada con c++ y el uso de node.js para combinar el lenguaje c++ con javascript y a partir de ello desarrollar la herramienta", "#"],
            ["images/portfolio/motor.jpg", "Motor gráfico 3D", "Motor gráfico 3D realizado con c++ usando varios plugins", "MotorModal", "Motor gráfico 3D desarrollado en c++, donde carga una escena a partir de un XML, y se realiza una pequeña escena de muestra para testear y comprobar el funcionamiento del motor.", "#"],
            ["images/portfolio/motfis3.jpg", "Motor 3D con físicas", "Motor 3D con físicas realizado con c++ usando varios plugins", "Motfis3Modal", "Motor gráfico 3D desarrollado en c++, este motor usa un plugin para incorporar físicas, el propio motor se encarga de la correcta gestión de las mismas, se carga una escena a partir de un XML, y se realiza una pequeña escena de muestra para testear y comprobar el funcionamiento del motor.", "#"],
            ["images/portfolio/motfis2.jpg", "Motor 2D con físicas", "Motor 2D con físicas realizado con c++ usando varios plugins", "Motfis2Modal", "Motor gráfico 2D desarrollado en c++, este motor usa un plugin para incorporar físicas, el propio motor se encarga de la correcta gestión de las mismas, se carga una escena a partir de un XML, y se realiza una pequeña escena de muestra para testear y comprobar el funcionamiento del motor.", "#"],
            ["images/portfolio/transformation.jpg", "Transformación gerárquica", "Conocimientos básicos de pathfinding en Unity", "TransformModal", "Programa realizado en c++ que se encarga de generar transformaciones de manera gerárquica, en el proyecto se puede ver un sistema planetario con sus respectivas lunas.", "#"]
        ]
        ],
    []
];

window.onload = function(){
    if(!ini){
        ini = true;
        loadTabs();
    }
}

//Tabs controller

var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
var contents = [document.getElementById("proyectos"), document.getElementById("conocimientos"), document.getElementById("sobremi")];

$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});

function loadTabs(){
    for(let i = 0; i<contents.length-1; i++){
    var ul = document.createElement("UL");
    ul.id = "portfolio-list";
    contents[i].appendChild(ul);
    for(let z=0;z<dbTables[0][i].length;z++){
        var li = document.createElement("LI");
        ul.appendChild(li);

        var div = document.createElement("DIV");
        div.className = "portfolio-item";
        li.appendChild(div);
        
        div.innerHTML += "<div class='section-modal modal fade' id="+dbTables[0][i][z][3]+" tabindex='-1' role='dialog' aria-hidden='true'><div class='modal-content'><div class='close-modal' data-dismiss='modal'><div class='lr'><div class='rl'></div></div></div><div class='container'><div class='row'><div class='section-title text-center'><h3>"+dbTables[0][i][z][1]+"</h3><p>"+dbTables[0][i][z][4]+"</p></div></div><div class='row'><div class='col-md-6'><img src="+dbTables[0][i][z][0]+" class='img_modal' alt='..'></div></div></div></div></div>";

        var img = document.createElement("IMG");
        img.src = dbTables[0][i][z][0];
        img.className = "img-responsive";
        img.alt = "";
        div.appendChild(img);

        var div2 = document.createElement("DIV");
        div2.className = "portfolio-caption";
        div.appendChild(div2);

        var h4 = document.createElement("H4");
        h4.innerHTML = dbTables[0][i][z][1];
        div2.appendChild(h4);

        var p = document.createElement("P");
        p.innerHTML = dbTables[0][i][z][2];
        div2.appendChild(p);

        div2.innerHTML += "<a href='#' data-toggle='modal' data-target='#"+dbTables[0][i][z][3]+"' class='link-1'><i class='fa fa-magic'></i></a>";

        var a2 = document.createElement("A");
        a2.href = dbTables[0][i][z][5];
        a2.className = "link-2";
        div2.appendChild(a2);

        var i2 = document.createElement("I");
        i2.className = "fa fa-link";
        a2.appendChild(i2);
    }
}
}

function changeTab(i){
    for(let z=0; z<contents.length; z++){
        contents[z].style.display = "none";
        if(z==i)
            contents[z].style.display = "block";        
    }

    console.log(contents);
}

changeTab(0);