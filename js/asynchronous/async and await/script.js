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

//async keyword to make task async and await to change from parallel exec to serial exex
async function task(){
    // if we call one promise without the await keyword vo baki sab ke sath parallel chahla gha
    // prmse(3,"anita") ye hata ke dekh samaj me aaye gha 
    await prmse(3,"aman")
    await prmse(3,"bablu")
    await prmse(3,"annu")
    await prmse(3,"renu")
    await prmse(3,"tona")
    await prmse(3,"banti")
    
}
prmse(3,"mahender") //ye dono yha per parallel chala gha 
task() //logic samaj
