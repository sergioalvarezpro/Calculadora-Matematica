// El método prompt muestra un dialogo con mensaje, y solicita al usuario que introduzca el operador deseado: 
let operacion = prompt('¿Qué operación quieres hacer? SUMA, RESTA, MULTIPLICACION, DIVISION o POTENCIA');

// El método toLoWerCase devuelve el valor introducido por el usuario en minúsculas. 
operacion = operacion.toLowerCase();

//Se solicita al usuario dos valores para hacer la operación que ha seleccionado previamente.
let numero1 = Number(prompt('Dime el primer número'));
let numero2 = Number(prompt('Dime el segundo número'));
let resultado = 0;

//Con el Condicional Switch determina la operación que ha seleccionado el usuario.
switch (operacion) {
    case 'suma':
        const SUMAR = (pNumero1, pNumero2) => pNumero1 + pNumero2;
        resultado = SUMAR(numero1, numero2);
        break;
    case 'resta':
        const RESTAR = (pNumero1, pNumero2) => pNumero1 - pNumero2;
        resultado = RESTAR(numero1, numero2);
        break;
    case 'multiplicacion':
        const MULTIPLICAR = (pNumero1, pNumero2) => pNumero1 * pNumero2;
        resultado = MULTIPLICAR(numero1, numero2);
        break;
    case 'division':
        const DIVIDIR = (pNumero1, pNumero2) => pNumero1 / pNumero2;
        resultado = DIVIDIR(numero1, numero2);
        break;
    case 'potencia':
        //Para Operar con el exponente, se utiliza la función Math.pow que devuelve la base elevada al exponente.
        const POTENCIA = (pNumero1, pNumero2) => Math.pow(pNumero1, pNumero2);
        resultado = POTENCIA(numero1, numero2);
        break;
    default:
        alert('No has escrito correctamente el operador, ¡Vuelve a intentarlo!');
        //El metodo location.reload() carga de nuevo la URL actual, como lo hace el boton de Refresh de los navegadores.
        location.reload();
        break;
}

function pintarResultado(pResultado) {

    //En el caso que el usuario no introduzca los valores númericos solicitados o incluso introduzca cualquier otro carácter, se mostrará el siguiente mensaje:
    if (isNaN(pResultado)) {
        document.write(`<p style= "color: white; background-color: red;">Introduce números, ¡ no me valen las letras ni los signos raros !</p>`);
    }
    //El resultado de la operación es positivo. Se muestra en verde.
    else if (pResultado >= 0) {
        document.write(`<p style= "color: green;">La ${operacion} tiene un resultado de ${pResultado}.</p>`);
    }
    //El resultado de la operación es negativo. Se muestra en rojo.
    else {
        document.write(`<p style= "color: red;">La ${operacion} tiene un resultado de ${pResultado}.</p>`);
    }
}

pintarResultado(resultado);