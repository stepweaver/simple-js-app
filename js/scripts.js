let 

let pokemonList = [
  {number: '001', name: 'Bulbasaur', height: '2\' 04"', weight: '15.2 lbs', category: 'seed', abilities: 'overgrow', types: ['grass', 'poison'], weaknesses: ['fire', 'psychic', 'flying', 'ice']},
  {number: '002', name: 'Ivysaur', height: '3\' 03"', weight: '28.7 lbs', category: 'seed', abilities: 'overgrow', types: ['grass', 'poison'], weaknesses: ['fire', 'psychic', 'flying', 'ice']},
  {number: '003', name: 'Venusaur', height: '6\' 07"', weight: '220.5 lbs', category: 'seed', abilities: 'overgrow', types: ['grass', 'poison'], weaknesses: ['fire', 'psychic', 'flying', 'ice']},
  {number: '004', name: 'Charmander', height: '2\' 00"', weight: '18.7 lbs', category: 'lizard', abilities: 'blaze', types: 'fire', weaknesses: ['water', 'ground', 'rock']},
  {number: '005', name: 'Charmeleon', height: '3\' 07"', weight: '41.9 lbs', category: 'flame', abilities: 'blaze', types: 'fire', weaknesses: ['water', 'ground', 'rock']},
  {number: '006', name: 'Charizard', height: '5\' 07"', weight: '199.5 lbs', category: 'flame', abilities: 'blaze', types: ['fire', 'flying'], weaknesses: ['water', 'ground', 'rock']},
  {number: '007', name: 'Squirtle', height: '1\' 08"', weight: '19.8 lbs', category: 'water', abilities: 'torrent', types: 'water', weaknesses: ['grass', 'electric']},
  {number: '008', name: 'Wartortle', height: '3\' 03"', weight: '49.6 lbs', category: 'water', abilities: 'torrent', types: 'water', weaknesses: ['grass', 'electric']},
  {number: '009', name: 'Blastoise', height: '5\' 03"', weight: '188.5 lbs', category: 'shellfish', abilities: 'torrent', types: 'water', weaknesses: ['grass', 'electric']},
  {number: '010', name: 'Caterpie', height: '1\' 00"', weight: '6.4 lbs', category: 'worm', abilities: 'shield dust', types: 'bug', weaknesses: ['fire', 'flying', 'rock']},
  {number: '013', name: 'Weedle', height: '1\' 00"', weight: '7.1 lbs', category: 'hairy bug', abilities: 'shield dust', types: ['bug', 'poison'], weaknesses: ['fire', 'psychic', 'flying', 'rock']},
  {number: '016', name: 'Pidgey', height: '1\' 00"', weight: '4.0 lbs', category: 'tiny bird', abilities: ['keen eye', 'tangled feet'], types: ['normal', 'flying'], weaknesses: ['electric', 'ice', 'rock']},
  {number: '019', name: 'Rattata', height: '1\' 00"', weight: '7.7 lbs', category: 'mouse', abilities: ['run away', 'guts'], types: 'normal', weaknesses: 'fighting'},
  {number: '025', name: 'Pikachu', height: '1\' 04"', weight: '13.2 lbs', category: 'mouse', abilities: 'static', types: 'electric', weaknesses: 'ground'},
  {number: '026', name: 'Raichu', height: '2\' 07"', weight: '66.1 lbs', category: 'mouse', abilities: 'static', types: 'electric', weaknesses: 'ground'},
  {number: '027', name: 'Sandshrew', height: '2\' 00"', weight: '26.5 lbs', category: 'mouse', abilities: 'sand veil', types: 'ground', weaknesses: ['water', 'grass', 'ice']},
  {number: '028', name: 'Sandslash', height: '3\' 03"', weight: '65.0 lbs', category: 'mouse', abilities: 'sand veil', types: 'ground', weaknesses: ['water', 'grass', 'ice']}
];

pokemonList.forEach(function(list) {
  document.write("<p>" + list.number +' '+ list.name +' '+ '(height:' +' '+ list.height +')');
  if (list.height >= '6') {
    document.write(' - Wow, that\'s BIG!' + "</p>");
  }
});