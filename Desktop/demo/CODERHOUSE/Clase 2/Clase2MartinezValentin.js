var ofertaLaboral = prompt('Bienvenido al evaluador de ofertas laborales, desea continuar? (S/N): ')
var minExp = 1.0

if (ofertaLaboral == 'S' || ofertaLaboral == 's') {
    var profesion = prompt('Ingrese su profesión. (disponibles: QA / DEV): ')
    var experiencia = prompt('Ingrese su experiencia en años (por ej 1.0 = 1 año): ')
    if (profesion == 'DEV' || profesion == 'dev') {
        if (parseFloat(experiencia) >= minExp) {
            console.log('Tenemos ofertas disponibles')
        } else {
            console.log('Lamentablemente no cumple con la experiencia minima, la experiencia minima es', minExp, 'año')
        }
    } else {
        console.log('Lamentablemente no contamos con ofertas disponibles para QA')
    }
} else if (ofertaLaboral == 'N' || ofertaLaboral == 'n') {
    console.log('Gracias por utilizar el servicio!')
} else {
    console.log('No ingreso ninguna de las respuestas posibles, recuerde que puede seleccionar S para continuar o N para cancelar')
}