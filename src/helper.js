
// Obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la marca
export function calcularMarca (marca) {
    let incremento;
    switch (marca) {
        case "toyota":
            incremento = 1.30;
            break;
        case "ford":
            incremento = 1.15;
            break;
        case "fiat":
            incremento = 1.05;
            break;

        default:
            break;
    }

    return incremento;
}

// Calcula el tipo de Seguro
export function obtenerPlan (plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// muestra la primer letra en Mayuscula
export function primerMayuscula (texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}