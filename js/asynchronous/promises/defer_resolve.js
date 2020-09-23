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
setTimeout(() => {
    downloadfile.then(() => {
        console.log("After Download")
    })
}, 4000)