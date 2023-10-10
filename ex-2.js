function countVowels(words) {
  let numbersOfVowels = 0;
  // Start coding here
for( let letter of words.toLowerCase())
{ if( letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
{numbersOfVowels = numbersOfVowels + 1}
}
return numbersOfVowels
}

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("TechUp")); // Output: 2


