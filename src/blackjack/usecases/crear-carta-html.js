/**
 * 
 * @param {String} carta carta a la que se le creara una imagen
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHtml = (carta) => {
    if (!carta) throw new Error('La carta es obligatoria');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}