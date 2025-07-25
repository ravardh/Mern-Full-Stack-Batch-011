// console.log(1);

// console.log(2);

// console.log(3);

// console.log(4);

// console.log(5);

// setTimeout(() => {
//   console.log("I am arrow Function");
// }, 5000);

// console.log(6);

// console.log(7);

// console.log(8);

// console.log(9);

// function sum(a, b) {
//   console.log("Doing Sum");
//   return a + b;
// }

// function calculate(x, y, abc) {
//   let p = x + 1;
//   let q = y - 1;
//   console.log("Calculation Started");
//   return abc(p, q);
// }

// console.log(calculate(5, 5, sum));

function getData(ID, pranjul) {
  setTimeout(() => {
    console.log("The data is", ID);
    if (pranjul) {
      pranjul();
    }
  }, 3000);
}


//callback hell
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => {
        getData(5);
      });
    });
  });
});
