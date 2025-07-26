// let arpitsPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("I am Aprits Promise and rejecting now");
//   }, 5000);
// });

async function xyz(ID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ID === 5) {
        reject("An Error Occured");
      } else {
        console.log("The Data is", ID);
        resolve("Success");
      }
    }, 5000);
  });
}

// xyz(1)
//   .then((res) => {
//     console.log(res);
//     return xyz(2);
//   })
//   .then((res) => xyz(3))
//   .then((res) => xyz(4))
//   .then((res) => xyz(5))
//   .then((res) => xyz(6))
//   .catch((rej) => console.log("Error 500"));

await xyz(1);
await xyz(2);
await xyz(3);
await xyz(4);
await xyz(5);
await xyz(6);

