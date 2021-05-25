'use strict';

// importation d'un base de donné
import 'data.js';
// console.log(data);
const divArtistes = document.querySelector('.divArtistes');
// console.log(divArtistes);

function affichage(arr) {
  // console.log(arr);
  arr.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('artistes');
    // console.log(div);
    divArtistes.insertAdjacentHTML(
      'beforeend',
      `<li><div class="artistes"><h5 class="nomeDeAlbum">${element.album.title}<br></h5>
    <p class = "textPage">${element.title}<br>
    <a href="${element.link}"><img class ="imagesAlbum" src="${element.album.cover_medium}"><br></a>
    <audio class="audioPush" controls src="${element.preview}"></audio class="audioPush"></li></div>`
    );
    console.log(divArtistes);
  });
}
affichage(data);
