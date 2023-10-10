function getLetterFrequency(words) {
  let count = {};
  words.split('').forEach(function(s) {
   count[s] = count[s] ? count[s]+1 : 1;
  });
  return count;
 }
 console.log(getLetterFrequency("Techupth"))
 
  

const str = "Techupth";

getLetterFrequency(str);

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
