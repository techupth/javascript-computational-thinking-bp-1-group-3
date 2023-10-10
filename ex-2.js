const countVowels = Str => Array.from(str).filter(letter => "aeiou".includes(letter)).length;

console.log(countVowels("Hello World"));
console.log(countVowels("TechUp"));