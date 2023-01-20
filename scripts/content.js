const className = ".css-45qjcs"

let sec = 0
setInterval(() => {
    currentArea = document.querySelector(className)
    if (currentArea) {
        currentArea.style.cssText =
            'color: rgb(175 175 175); font-weight: 300; font-size:14px; line-height: 18px; font-family: "DM Sans", sans-serif;'
        sec++
        console.log(sec)
        let hour =
            parseInt(sec / 3600) < 10
                ? "0" + parseInt(sec / 3600)
                : parseInt(sec / 3600)
        let minute =
            parseInt((sec % 3600) / 60) < 10
                ? "0" + parseInt((sec % 3600) / 60)
                : parseInt((sec % 3600) / 60)
        let second = sec % 60 < 10 ? "0" + (sec % 60) : sec % 60

        currentArea.innerHTML = `Time elapsed ${hour}:${minute}:${second}`
    } else {
        sec = 0
    }
}, 1000)
