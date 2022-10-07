// CSX For Loops

// let countDown = 10
// for (let i = 1 ; i <= 10 ; i ++) {
//     countDown--
// }
// console.log(countDown)

//Example of Array
// const myArray = ['string1', 'string2', 'string3'];

// for (let i = 0; i < myArray.length; i++) {
//   console.log( myArray[i] );
// }

//_____________________________________________________________

// Challenge: For Loops and Arrays

// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = [];

// for (let i = 0; i < synonyms.length; i++) {
//   let greet = "Have a " + synonyms[i] + " day!"
//   greetings.push(greet)
 
// }

// for (let j = 0; j < greetings.length; j++) {
//    console.log(greetings[j])
// }

//___________________________________________________________________

// For Loops and Array Indices

// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];

// const bios = [];

// for (let i=0; i < firstNames.length; i++) {
//   bios.push ("My name is " + firstNames [i] + " " + lastNames [i] + " and I am from " + places [i])
// }
// console.log(bios)

//________________________________________________________________________

// For Loops - Calculating Array Elements

// const increaseByTwo = [1, 2, 3, 4, 5];

// // ADD CODE HERE
// for (let i = 0; i < increaseByTwo.length; i++){
// increaseByTwo[i] += 2  
// }


// // Uncomment the line below to check your work!
//  console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

//____________________________________________________________________________

//While Loops - Fundamentals

// let count = 2;

// while (count <= 6){
//   count += 2
//   count++
// }
// console.log(count); 

//_____________________________________________

//While Loops - Conditional Expression

// let addThis = 0
// let sum = 0

// while(addThis < 10) {
//   sum += addThis
//   addThis++
// }
// console.log(sum);

//_________________________________________________

// Control Flow - if statements

// const num = 40;
// let final;
// // ADD CODE HERE
// if (num > 100){
//   console.log (final = null)
// } else {
//   console.log(final = 2 * num)
// }

//__________________________________________________________

// fizzbuzz

const fb = [];

for( let i = 1; i <= 16; i++){
  if (i % 3 === 0 && i % 5 === 0){
    fb.push("fizzbuzz")
  } else if ( i % 5 === 0){
    fb.push("buzz")
  } else if (i % 3 === 0){
    fb.push("fizz")
  }
  else {fb.push(i)}
}
console.log(fb)












