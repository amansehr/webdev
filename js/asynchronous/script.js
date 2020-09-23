// function hellosayer(times, name) {
//   let count = 0;
//   let intr = setInterval(() => {
//     count++;
//     console.log("hello" + name);
//     if (count === times) {
//       clearInterval(intr);
//     }
//   }, 100);
// }

// hellosayer(3, "Aman");
// hellosayer(2, "Bablu");
// //this code run parallelly
//check the output agar samaj na aaye toh
//this is code to run serially also called using callback
// function hellosayer(times, name, donesaying) {
//   let count = 0;
//   let intr = setInterval(() => {
//     count++;
//     console.log("hello" + name);
//     if (count === times) {
//       clearInterval(intr);
//       donesaying();
//     }
//   }, 100);
// }

// hellosayer(3, "Aman", () => {
//   hellosayer(3, "Bablu", () => {
//     hellosayer(3, "Annu", () => {});
//   });
// });

//promises
function prmse(times, name) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let pid = setInterval(() => {
      count++;
      console.log("hello " + name);
      if (count === times) {
        clearInterval(pid);
        resolve();
      }
    }, 100);
  });
}
//these will concurrently means parallely
// prmse(100, "Aman")
// prmse(100,"Done")
//prmse(3,"Aman").then(prmse(2,"Bablu")) //eska logic event loop se hi bana gha ki ye kasha kam kar rha h
//agar na samaj aaye toh page pe likh ke dekh
prmse(3,"Aman").then(prmse(2,"Bablu")).then(prmse(2,"Annu")) //both behave samaj logic samaj 
//prmse(3,"Aman").then(prmse(2,"Bablu").then(prmse(2,"Annu"))) //asha likhna se parallel execution hoga


//by passing in arrow fn we can change from parallel exec to serial execution
//ye serially kara gha
// prmse(100, "Aman").then(() => {
//     prmse(100,"Bablu")
// });
