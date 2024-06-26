/**
 * Esta funcion recibe una carta y nos devulve su valor
 * @param {string} carta carta
 * @returns {integer} valor carta
 */

// pedirCarta();
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}