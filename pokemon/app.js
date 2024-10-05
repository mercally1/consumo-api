const pokemon = 'https://pokeapi.co/api/v2/pokemon/ditto'

const btnPoke = document.querySelector('#btn-poke')
const pokeContainer =document.querySelector('#pokemon-Imagen')

pokeman.addEventListener('click', () =>{
    fetch(pokemon)
        .then(response => response.json())
        .then(data => {
            const poke = data [0].url;
        
            pokeContainer.style.background = `url('${poke}')`
        })
        .catch(error => console.error(error)) 
})
        