//ingreso de valores
var CANTIDADN = document.getElementById('n');
var BOTON = document.getElementById('botonGenerar');

//
var tablaInicial = document.getElementById("Table").innerHTML;

//tablero
var TOTALES = document.getElementById('puntosTotales');
var INTERNOS = document.getElementById('puntosInternos');
var PORCENTAJE = document.getElementById('%');
var AREA = document.getElementById('area');


function generarPuntos(){
    document.getElementById("Table").innerHTML= tablaInicial;
    var pertenece = 0;
    var x,y;
    var n = CANTIDADN.value;
    for(let i=0; i<n;i++){
        var x = (Math.random() * 2 - 1).toFixed(3);
        var y = (Math.random() * 2 - 1).toFixed(3);
        var punto = '('+x+';'+y+')';
        console.log(punto);
        imprimirPunto(x,y)
        TOTALES.innerHTML=i+1;
        if (Math.pow(x,2)+Math.pow(y,2)<=1){
            pertenece++;
            INTERNOS.innerHTML = pertenece;
        }
        AREA.innerHTML = 4 * pertenece/(i+1);
        PORCENTAJE.innerHTML = 100*pertenece/(i+1);
    }
}


function pertenece(x,y){
    if (Math.pow(x,2)+Math.pow(y,2)<=1){
        return 'Pertenece';
    }
    else{
        return 'No Pertenece'
    }
}
function estilo(x,y){
    if (Math.pow(x,2)+Math.pow(y,2)<=1){
        return 'style="background-color: rgb(180, 235, 180,0.5)!important;"';
    }
    else{
        return 'style="background-color: rgb(228, 186, 186,0.5)!important;"'
    }
}

function imprimirPunto(x,y){
        $("#Table").append('<tr>' + 
        '<td align="center" '+ estilo(x,y) +'">' + '('+x+';'+y+')' + '</td>'+
        '<td align="center" '+ estilo(x,y) +'">' + pertenece(x,y) + '</td></tr>')
}