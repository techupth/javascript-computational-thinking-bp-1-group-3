function getLetterFrequency(words) {
  // Start coding here
let letterFrequency = {};
for ( let i = 0 ; i < words.length ; i++ )
 { let character = words.charAt(i).toLowerCase();
  if (letterFrequency[character]) {letterFrequency[character] = letterFrequency[character] + 1}
  else { letterFrequency[character] = 1}
}
return letterFrequency;
}

const str = "Techupth";
let letter = str.charAt(1)
console.log(letter)

console.log(getLetterFrequency(str));

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
