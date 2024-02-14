// 1. callback function
// function FirstCallBack(callback) {
//     return callback(10, 10)
// }

// // Callback () =  SecCallBack(Firstnumber, SecNumber).

// function  SecCallBack(Firstnumber, SecNumber) {
//     console.log(Firstnumber * SecNumber);
// }

// FirstCallBack(SecCallBack)

//  2. Array method

let students = [
  { name: "Luka", age: 22, sallary: 50 },
  { name: "George", age: 17, sallary: 150 },
  { name: "Saba", age: 15, sallary: 1.5 },
  { name: "David", age: 19, sallary: 0 },
  { name: "Nick", age: 30, sallary: 76 },
  { name: "Levani", age: 27, sallary: 89 },
  { name: "Tedo", age: 12, sallary: 0 },
];

// let result = students.reduce(
//   (sum, item) => {
//     if (item.name.length > 2) {
//       sum.name++
//     }
//     if (item.age >= 18) {
//       sum.adult++;
//     }
//     return sum;
//   },
//   { adult: 0, name: 0 }, 
// );

// console.log(result);

// function AdultFinder() {
//   students.reduce(
//     (sum, item) => {
//       if (item.age >= 18) {
//         sum.adult++;
//       }
//       return sum;
//     },
//     { adult: 0 }
//   );
// }

// console.log(AdultFinder());
