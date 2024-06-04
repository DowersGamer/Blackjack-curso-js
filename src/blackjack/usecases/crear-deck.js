import _ from 'underscore';
// Esta función crea un nuevo deck

/**
 * Esta funcion crea un nuevo Deck
 * @param {array<String>} tipos ejemplo ['C','D','H','S']
 * @param {array<String>} especiales ejemplo ['A','J','Q','K']
 * @returns {array<String>} Retorna nuestro arreglo de cartas 
 */
export const crearDeck = (tipos, especiales) => {
    if (!tipos) throw new Error('Los tipos de carta son obligatorios');
    if (!especiales || especiales.length == 0) throw new Error('Las especiales son obligatorios');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}