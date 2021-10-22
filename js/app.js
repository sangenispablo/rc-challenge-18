let seguir = true;
while (seguir) {
    let numero = prompt('Dame un numero');
    if (numero == null) {
        seguir = false;
    } else if (isNaN(Number(numero))) {
        alert('Dame un numero valido!!!');
    }
}