function ConfirmDemo() {
//Ingresamos un mensaje a mostrar
var mensaje = confirm("Debe solicitar personal Autorizado para la Descarga");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
alert("¡Gracias por aceptar!");
}
//Detectamos si el usuario denegó el mensaje
else {
alert("¡Haz denegado el mensaje!");
}
}

var $th = $('.tableFixHead').find('thead th')
$('.tableFixHead').on('scroll', function() {
  $th.css('transform', 'translateY('+ this.scrollTop +'px)');
});

function ConfirmDemo(){
  location.href = "https://github.com";
}