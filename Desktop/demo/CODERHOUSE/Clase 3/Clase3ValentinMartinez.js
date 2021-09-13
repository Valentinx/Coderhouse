//Simulamos un programa en donde el usuario ingresa su apellido para averiguar si está en el padron, el programa busca en una lista y si lo encuentra alerta y rompe el bucle

let apellidos = ('martinez', 'boada', 'fernandez', 'salomon')
let buscando = false

do {
    let apellido_ingresado = prompt('Ingrese su apellido para saber si esta en el padron: ');
    for (apellidos; apellido_ingresado = apellidos; apellidos++) {
        alert('tu apellido fue encontrado en el padron, puedes concurrir a votar!')
        buscando = true
    }

} while (buscando = false)