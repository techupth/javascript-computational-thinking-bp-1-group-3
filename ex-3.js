const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
let mostExpensiveProduct;
let mostExpensivePrice = 0;
for( let i = 0; i < products.length ; i++)
{ if ( products[i].price > mostExpensivePrice)
{ mostExpensivePrice = products[i].price ;
mostExpensiveProduct = products[i].name;}
}
return "name: " + mostExpensiveProduct + " , price: " + mostExpensivePrice
}

console.log(getMostExpensiveProduct(products)); // Output: { name: "Laptop", price: 1000 }


