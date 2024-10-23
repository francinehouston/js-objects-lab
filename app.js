const pokemon =  require('./data.js')



const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
 
 
  
  console.log(game);

  
  /*

Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:

*/
console.log(game.gyms)
game.difficutly = "medium"
console.log(game, "modified game")





/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
// 1. Do iteration to find all starters

// this is an array and musst use for loop
// only call those that starter is true
// add the first pokemon to the party

let result = []



pokemon.forEach(element => {

if(element.starter === true) {
 
result.push(element)
}
})

console.log(result,'is this the list of pokemons!')
const firstPokemon = result[0];
console.log(firstPokemon,'is the first pokemon!')

game.party.push(firstPokemon);
console.log(game)








/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// choose three pokemon to the pokemon array
// 
 
//pick 3 pokemon 

//party push 3 pokemon

// if the length of the pokemonwithhighestHP array is < 3, add the pokemon to the array
//if ( pokemonWithHighestHP.length < 3) [
     //pokemonWithHighestHP.push(pokemon)
//]

/* pokemonWithHighestHP = {

number : 11,
name: "Metapod",
type : "bug",
hp: 50,
starter : false
}
{ number : 12,
 name: "Butterfree",
 type: "bug",
 hp: 60,
 starter: false
}

{
number: 13,
name: "Weedle",
type: "bug",
hp: 60,
starter: false
}
*/

// pokemon = [ number: 30, name: "Nidorina", type: "poison", hp: 70, starter: false],

//find the pokemon with the lowest HP, replace it with the new pokemon.

//for (let i=0, i < pokemonWithHighestHP.length; i++) {
  //let lowestIndex;
  //if (pokemonWithHighestHP[i].hp)
    // if pokemon HP is higher than the current pokemonWithHighestHP, the save the index of the current pokemonWithHighestHP is lowestIndex

//}


// party push 3 pokemon
//pokemonWithHighestHP.forEach(pokemon => {
//pokemon.push(game.party)
//})
// select a pokemon 
// create a variable name
const selectPokemon = [
//{ number: 1, name: "Bulbasaur", type: "grass", hp: 45, starter: true },
//{ number: 2, name: "Ivysaur", type: "grass", hp: 60, starter: false },
//{ number: 3, name: "Venusaur", type: "grass", hp: 80, starter: false },
pokemon[0],
pokemon[1],
pokemon[2]
]
console.log(selectPokemon)

for (let i= 0; i <selectPokemon.length; i++) {
  //console.log(selectPokemon[i]);
  game.party.push(selectPokemon[i])
}
console.log(game, "final answer for party")



/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
const gyms = [
{ location: "Pewter City", 
  completed: false, 
  difficulty: 1 },
];

gyms.forEach(gyms=> {
  if (gyms.difficulty < 3) {
  }
  });


  console.log(gyms);

  /*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
// Assuming you have an array of Pokemon objects
// pokemon = [
//{name: "Pikachu" , 
  //evolved: false}
  
//
// Filter for evolved Pokemon
const evolvedPokemon = pokemon.filter(p => p.evolved);

// Display evolved Pokemon names
console.log("Evolved Pokemon:");
evolvedPokemon.forEach(p => console.log(p.name));

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
const party = ["Bulbasaur", "Bulbasaur", " Ivysaur", " Venusaur" ]
  console.log(party)

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/




pokemon.forEach(element => {
  if(element.starter === true) {
    console.log(element.name,"is a starter")
  }
})



/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/ 
// write the function(method)
game.catchPokemon = function(pokemonObj){
 game.party.push(pokemonObj)
}
// call the function
game.catchPokemon(pokemon[0])

console.log(game,"answer for exercise 10")

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

// write the function(method)
game.catchPokemon = function(pokemonObj){
  //game.party.push(pokemonObj)
game.items.forEach(item => {
  if (item.name === "pokeball" ){
    console.log(item)
    item.quantity -= 1
  }
}) 
 }
 // call the function
 //game.catchPokemon(pokemon[0])
 game.catchPokemon(game.items)

 
 console.log(game,"answer for exercise 11")

 /*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


game.gyms.forEach(gym =>{
if (gym.difficulty < 6) {
  gym.completed = true
}
})
console.log(game.gyms,"answer for exercise 12")


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymStatus = function() {
  const gymTally = {
    completed: 0, incomplete: 0
};
for (let gym of game.gyms) {
  if ( gym.completed) {
    gym.Tally.completed++;
  } else {
    gymTally.incomplete++;
  }
}


}
console.log(game);
/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:


*/
game.partyCount = function() {
  return game.party.length

} 
const numberOfPokemon = game.partyCount()
console.log("number of pokemon",numberOfPokemon)

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
game.gyms.forEach(gym =>{
  if (gym.difficulty < 8) {
    gym.completed = true
  }
  })
  console.log(game.gyms,"answer for exercise 15")
  
  /*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game)

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/
//const characterwithHighestHP = [
//{ number: 111, name: "Rhyhorn", type: "ground", hp: 80, starter : false },
//{ number: 112, name: "Rhydon", type: "ground", hp: 105, starter : false },
//{ number: 113, name: "Chansey", type: "normal", hp: 250, starter: false },
//characterWithHighestHP.sort((a,b) => b.hp - a.hp)// Sort descending by HP\
//];


game.party.sort((a,b) => b. hp -a.hp);
console.log(game.party)

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/
 game.collection = [];
 
// write the function(method)
game.catchPokemon = function(pokemonObj){
  
game.items.forEach(item => {
  if (item.name === "pokeball" ){
    console.log(item)
    item.quantity -= 1
  } 
}) 

if (game.party.length < 6 ){
  game.party.push(pokemonObj)
} else {
  game.collection.push(pokemonObj)
} 

 }

 // call the function

 game.catchPokemon(game.items)


  console.log(game.items,"answer for exercise 18")

  /*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

//let gamecollection = [];
 

//game.gyms.forEach(gym => {
  //if (gym.difficulty < 6) {
    //console.log("Number is within the limit (<= 6).")
   // gym.completed = true
//game.gyms.push(game.collection)
  //}
  //})
  //console.log(game.items,"answer for exercise 18")
