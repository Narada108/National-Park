let button = document.querySelector(".button")
let body = document.querySelector(".body")
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {
    body.classList.toggle("blue")
    button.classList.toggle("green")
    if (body.classList.contains("blue")) {
        themeName.innerText = "zielone";
    } else {
        themeName.innerText = "niebieskie"
    }
})
