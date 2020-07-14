var texto = document.getElementById("barra_texto");
var boton = document.getElementById("boton_a_darle");
boton.addEventListener("click", dibujoporclick);

var boton2 = document.getElementById("boton_recargar");
boton2.addEventListener("click", recargar)


var d = document.getElementById("canvas"); // metodo del documeto para traer un elemento por su Id, en este caso, dibujito, que
//corresponde a la etiqueta canvas 
var ancho = d.width;
var lienzo = d.getContext("2d");
//metodo del canvas para generar el contexto

function recargar()
{
    location.reload();
    
}

function dibujoporclick()
{
    

var x = parseInt(texto.value);
var espacio = ancho / x;

console.log(lineas);

var lineas = 30;
var l = 0;
var yi, xf;
var lineas2 = 30;
var l2 = 0;
var yi2, xf2;
var lineas3 = 30;
var l3 = 0;
var xi, yf; 
var lineas4 = 30;
var l4 = 0;
var xi2, yf2; 


while (l < lineas)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("red", 0, yi ,xf, 500);
    console.log("linea " + l);
    l = l + 0.5;
}
while (l2 < lineas2)
{
    yi2 = espacio * (l2 - 1);
    xf2 = 500 - (l2 * espacio);
    dibujarLinea("yellow", 500,yi2,xf2,500);
    l2 = l2 + 0.5;
}

while(l3 < lineas3)
{
    xi = l3 * espacio;
    yf = l3 * espacio;
    dibujarLinea("blue",xi,0,500,yf);
    l3 = l3 + 0.5;
}

while(l4 < lineas4)
{
    xi2 = 500 - (l4 * espacio);
    yf2 = espacio * (l4 + 1);
    dibujarLinea("green", xi2,0,0,yf2);
    l4 = l4 + 0.5;
    
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();//metodo para comenzar el trazo
    lienzo.strokeStyle = color; //atributo que indica el color de la linea
    lienzo.moveTo(xinicial, yinicial); //metodo inicia trazo
    lienzo.lineTo(xfinal, yfinal); //metodo mueve la linea
    lienzo.stroke(); //dibuja la linea
    lienzo.closePath();//cierra el trazo 
    
}
}
