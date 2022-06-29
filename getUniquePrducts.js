//// PROBLEM STATEMENTS:
// 2. you need to write a function say, getUniquePrducts which should return an array of objects 
// by grouping the products based on the
//  productName and summing up the quantity for the same products present in the 
//  given list of Products considering Product Name as Key.



const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];


const getUniquePrducts = (listOfProducts) => {
  const Obj = {};
  for (let i=0;i<listOfProducts.length;i++) {
    if (listOfProducts[i].productName in Obj) {
      Obj[listOfProducts[i].productName].quantity += listOfProducts[i].quantity;
    } else {
      Obj[listOfProducts[i].productName] = { ...listOfProducts[i] };
    }
  }
  return Object.values(Obj);
};

console.log(getUniquePrducts(listOfProducts));

//output
// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]