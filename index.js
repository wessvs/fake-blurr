// seletores das classes
const loadingText = window.document.querySelector("div.loading-text")
const bg = document.querySelector("section.bg")

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// declarando o intervalo a cada 30ms, e a function
let interval = setInterval(blurryng, 30)

let load = 0

function blurryng() {
    load++

    if(load > 99) {
        clearInterval(interval)
    }

    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}