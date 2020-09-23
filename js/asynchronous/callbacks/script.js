function dosomething(done) {
  console.log("doing something");
}

dosomething(() => {
  console.log("1. doing something");
});

console.log("3. end");

function dosomething1(done) {
  console.log("doing something");
  setTimeout(done, 0);
}

dosomething1(() => {
  console.log("1. doing something");
});

console.log("3. end");
