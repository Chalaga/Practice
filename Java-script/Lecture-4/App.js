// // const firstpromise = new Promise((resolve, reject) => {
// //   // setTimeout (() => {}, time)
// //   setTimeout(resolve, 1000, "First promise Resolved");
// // });

// const firstpromise = new Promise((resolve, reject) => {
//     // setTimeout (() => {}, time)
//     setTimeout(reject, 1000, "First promise Rejected");
//   });

// // const Secondpromise = Promise.resolve("Second promise Resolved");

// const Secondpromise = new Promise((resolve, reject) => {
//     // setTimeout (() => {}, time)
//     setTimeout(resolve, 1000, "Second promise Resolved")
// })

// // console.log(firstpromise);

// // firstpromise.then((Res) => {
// //   console.log(Res);
// // });

// // Secondpromise.then((Res) => {
// //   console.log(Res);
// // });

// // Promise.all([firstpromise, Secondpromise])
// // .then(([Firstrsult, SecondResult]) => {
// //     console.log(Firstrsult,SecondResult);
// // }).catch (Err => {
// //     console.error(Err);
// // })

// // Promise.race([firstpromise, Secondpromise])
// // .then(([Firstrsult, SecondResult]) => {
// //     console.log(Firstrsult,SecondResult);
// // }).catch (Err => {
// //     console.error(Err);
// // })

// // Promise.any([firstpromise, Secondpromise])
// // .then(([Firstrsult, SecondResult]) => {
// //     console.log(Firstrsult,SecondResult);
// // }).catch (Err => {
// //     console.error(Err);
// // })

// Promise.allSettled([firstpromise, Secondpromise])
// .then(([Firstrsult, SecondResult]) => {
//     console.log(Firstrsult,SecondResult);
// }).catch (Err => {
//     console.error(Err);
// })