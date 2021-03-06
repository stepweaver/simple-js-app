let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    })
    .then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    })
    .catch(function(e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    })
    .then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.height;
      item.types = details.types;
      item.abilities = details.abilities;
    }).catch(function(e) {
      console.error(e);
    });
  }

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  function eventListener(event) {
    button.addEventListener('click', function() {
      showModal(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      console.log(pokemon);
    });
  } 

  // MODAL
  // function showModal(title, text) {
  //   modalContainer.innerHTML = '';
  //   let modal = document.createElement('div');
  //   modal.classList.add('modal');

  //   let closeButtonElement = document.createElement('button');
  //   closeButtonElement.classList.add('modal-close');
  //   closeButtonElement.innerText = 'Close';
  //   closeButtonElement.addEventListener('click', hideModal);

  //   let titleElement = document.createElement('h1');
  //   titleElement.innerText = title;

  //   let contentElement = document.createelement('p');
  //   contentElement.innerText = text;

  //   modal.appendChild(closeButtonElement);
  //   modal.appendChild(titleElement);
  //   modal.appendChild(contentElement);
  //   modalContainer.appendChild(modal);

  //   modalContainer.classList.add('is-visible');
  // }

  // function hideModal() {
  //   modalContainer.classList.remove('is-visible');
  // }

  // window.addEventListener('keydown', (e) => {
  //   if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
  //     hideModal();
  //   }
  // });

  // modalContainer.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if(target === modalContainer) {
  //     hideModal();
  //   }
  // });

  // document.querySelector('#show-modal').addEventListener('click', () => {
  //   showModal(pokemon);
  // });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});