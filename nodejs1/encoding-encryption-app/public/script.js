let txtarea = document.getElementById('txtid')
let btnencode = document.getElementById('btnencode')
let inpid = document.getElementById('inpid')
let btnencrypt = document.getElementById('btnencrypt')
btnencode.onclick = function () {
    inpid.value = btoa(txtarea.value)
}

btnencrypt.onclick = function () {
    let str = inpid.value
    inpid.value = str.replace(/([a-zA-Z])/g, function (match) {
        return String.fromCharCode(match.charCodeAt() ^ 32)
    })
}

