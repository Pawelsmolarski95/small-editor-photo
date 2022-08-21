let filterA = document.getElementById("blur")
let filterB = document.getElementById("brightnees")
let filterC = document.getElementById("contrast")
let filterD = document.getElementById("garyscale")


let sliders = document.querySelectorAll('.filter input[type="range"]')
console.log(sliders);
sliders.forEach(slider => slider.addEventListener('input', addFilter))

function addFilter () {
    Image.style.filter = 1
}