// 1. შეუცვალეთ დივს ბექრაუნდი წითლიდან მწვანეზე , მწვანიდან წითელზე

// const div = document.createElement('div')
// document.body.append(div)

// div.style.width = '100px'
// div.style.height = '100px'
// div.style.backgroundColor = 'red'

// div.addEventListener(('click'), () => {
//     if (div.style.backgroundColor === 'red') {
//         return div.style.backgroundColor = 'green'
//     } else  {
//       return  div.style.backgroundColor = 'red'
//     }
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2. შექმენით მასივი ფერებით დივის კლიკზე უნდა უცვალოს ამ დივს ფერები,
// ფერები უნდა აიღოს მასივიდიან

// let colors = ["red", "green", "blue", "yellow"];

// const div = document.createElement('div')
// document.body.append(div)

// div.style.width = '100px'
// div.style.height = '100px'
// div.style.backgroundColor = 'red'

// div.addEventListener(('click'), () => {
//     if (div.style.backgroundColor === 'red') {
//         div.style.backgroundColor =  colors[1]
//     } else if (div.style.backgroundColor ===  colors[1]) {
//         return div.style.backgroundColor =  colors[2]
//     } else if (div.style.backgroundColor ===  colors[2]) {
//         return div.style.backgroundColor =  colors[3]
//     } else if (div.style.backgroundColor ===  colors[3]) {
//         return div.style.backgroundColor = 'red'
//     } else {
//         div.style.backgroundColor === 'red'
//     }
// })




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.
// უნდა შექმნათ ფუნქცია რომელიც პარამეტრად მიიღებს მასივს და შეამოწმებს,
// თუ მასივში არის უარყოფითი ციფრი დალოგეთ "მაფია" თუ არარის დალოგეთ
// "არარის"

// let array1 = [1, 2, 3, 4,];

// function NegativeNum(array1) {
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] < 0) {
//             return  "მაფია";
//         }
//     }
//     return "არ არის";
// }

// console.log(NegativeNum(array1));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. გაფილტრეთ პროდუქტები კატეგორიის მიხედვით , Filter მეთოდით

// const products = [
//     { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//     { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//     { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//     { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//     { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//     { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];

// const result = products.filter((product) => {
//     console.log(product.category); 
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. იპოვეთ ყველაზე იაფრი პროდუქტი , Reduce მეთოდით

// const products = [
//     { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//     { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//     { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//     { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//     { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//     { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];

// const CheapProduct = products.reduce((acc, product) => {
// }, 0);

// console.log(CheapProduct);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6.

// დაასორტირეთ პროდუქტები ფასის მიხედვით

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];

// // var priceProducts = new Array(products.length);
// // for (let i = 0; i < priceProducts.length; i++) {
// //   priceProducts[i] = products[i].price;

// // }
// // priceProducts.sort(((x, y) => x - y));

// // for (let i = 0; i < priceProducts.length; i++) {
// //     console.log(priceProducts[i]);
// // }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7

// წამოიღეთ დეითა ეიპიაიდან კონკრეტულად (Id, Title, Price)

// https://fakestoreapi.com/products



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////