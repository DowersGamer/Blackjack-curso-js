
/**
 * Esta funcion devuelve una carta de la baraja global al tiempo que la elimina de la misma
 * @param {array<String>} deck 
 * @returns {array<String>} retorna la carta 
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
    
    if ( !deck && deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}