import { pedirCarta, valorCarta} from './'
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} divCartasComputadora elemento HTML en el que se insertan las cartas de la computadora 
 * @param {HTMLElement} puntosHTML elemento HTMl en el que se insertan los puntos 
 * @param {Array<String>} puntosComputadora 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasComputadora) => {
    if (!puntosMinimos) throw new Error('Los puntos minimos son obligatorios');
    if (!deck) throw new Error('Los puntos de la computadora son obligatorios');
    if (!puntosHTML) throw new Error('El elemento HTML es obligatorio');
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;   
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );
        if( puntosMinimos > 21 ) {
            break;
        }
    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}