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

  async function task(){
      await Promise.all([
            prmse(3,"Aman"),
            prmse(3,"Bablu"),
            prmse(3,"Annu")
      ])
    
      console.log("<-----first batch over---->")
      await Promise.all([
        prmse(3,"Tona"),
        prmse(3,"Renu"),
        prmse(3,"Anita")
      ])

      //the above await wali lina serially run hogi ek dusra ke sath 
      //and under ki line parallely run hogi.
      //promise.all() it take an array it allows to pass more than one prmse.
  }

  task()