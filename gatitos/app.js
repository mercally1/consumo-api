const apicat ='https://api.thecatapi.com/v1/images/search';

// Obtener  el Boton y el contenedor 
const btnCat = document.querySelector('#btn-cat')
const catImgContiner = document.querySelector('#cat-img-cantainer')

// Escuchar cuando se da click
btnCat.addEventListener('click', () => {
    fetch(apicat)
        // convertir la respuesta a json
        .then(response => response.json())
        .then(data => {
            // Obtener url de la imagen del gato
            const catImgUrl = data[0].url;

            // agregar la imagen como backgroud al container
            catImgContiner.style.backgroundImage = `url('${catImgUrl}')`;
        })
        .catch(error => console.error(error));
})
  
// =========================================================== 
// const apiUrl = 'https://api.thecatapi.com/v1/images/search'

// fetch(apiUrl)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))


