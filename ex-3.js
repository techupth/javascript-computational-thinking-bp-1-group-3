const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  let expensive = 0;
  let name1;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > expensive) {
      expensive = products[i].price;
      name1 = products[i].name;
    }
  }
  return ("Name: " + name1 + ", Price: " + expensive)
}

console.log(getMostExpensiveProduct(products));
