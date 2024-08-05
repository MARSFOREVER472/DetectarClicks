// PASO 1: DECLARAR LAS 2 VARIABLES...

let contador = 0;
let mensaje = "OYE! ALTO! Ya cliqueaste muchas veces!"

// PASO 2: GENERAR LA FUNCIÓN "countingClicks()"...

function countingClicks()
{

    // SE INCREMENTA EL CONTADOR DE CLICKS A MEDIDA QUE VAS CLICKEANDO...
    
    document.getElementById("counting").innerHTML = ++ contador;

    // SI LA CANTIDAD DE CLICKS ES MAYOR QUE 10...

    if (contador > 10)
    {
        // ARROJA UN MENSAJE DE ADVERTENCIA...

        document.getElementById("warning").innerHTML = mensaje; 
    }
}