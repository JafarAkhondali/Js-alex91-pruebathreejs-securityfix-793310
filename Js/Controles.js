$(document).keypress(function(event){
    // Esto es lo que pasa cuando pulso la W
    if ( event.which == 119 ) {avance = 1;}
    // Esto es lo que pasa cuando pulso la S
    if ( event.which == 115 ) {avance = -1;}
    // Esto es lo que pasa cuando pulso la A
    if ( event.which == 97 ) {girando = 1;}
    // Esto es lo que pasa cuando pulso la D
    if ( event.which == 100 ) {girando = -1;}
})
 $(document).keyup(function(event){
     // Esto es lo que pasa cuando pulso la W
    if ( event.which == 87 ) {avance = 0;}
    // Esto es lo que pasa cuando pulso la S
    if ( event.which == 83 ) {avance = 0;}
    // Esto es lo que pasa cuando pulso la A
    if ( event.which == 65 ) {girando = 0;}
    // Esto es lo que pasa cuando pulso la D
    if ( event.which == 68 ) {girando = 0;}
})