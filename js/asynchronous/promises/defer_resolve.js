function downloadpromise() {
    return new Promise((resolve, reject) => {
        console.log("Starting to download the file")
        setTimeout(() => {
            console.log("Download is completed")
            resolve()
        }, 3000);
    })
}

let downloadfile = downloadpromise()

//this is away to exec then function after some time when promise is resolved
// Agar Ek promise reslove ho jaye uspe tum kabhi bhi ek baar then fn call kar sakta ho. not necessary ki compulsory
setTimeout(() => {
    downloadfile.then(() => {
        console.log("After Download")
    })
}, 4000)