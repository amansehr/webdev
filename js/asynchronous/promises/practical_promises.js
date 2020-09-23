function download(url) {
    return new Promise((resolve, reject) => {
        if (!url.startsWith("http"))
            reject(new Error("Url does not start with http "))
        else {
            setTimeout(() => { //! fake 3-sec download task
                let filename = url.split('/').pop()
                resolve(filename)
            }, 3000);
        }
    })
}

function resize(filename) {
    return new Promise((resolve, reject) => {
        if (!filename.endsWith(".png")) {
            reject(new Error("file is not png"))
        }
        else { // ! Fake resize task
            setTimeout(() => {
                let resizedfile = filename.split('.')[0] + "resized" + "png"
                resolve(resizedfile)
            });
        }
    })
}

download('http://cb.lk/logo.png').then((filename) => {
    resize(filename).then((resizedfile) => {
        console.log("Resize file is at : " + resizedfile)
    })
}).catch((e) => {
    console.error(e)
})

//! dono ka same result aaye gha logic samaj
//  download('http://cb.lk/logo.png').then(resize).then((resizedfile) => {
//     console.log("Resize file is at : " + resizedfile)
// })
