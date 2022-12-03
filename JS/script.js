{
    const toggleBackground = () => {
        let body = document.querySelector(".body");
        let button = document.querySelector(".button")
        let themeName = document.querySelector(".themeName");
        body.classList.toggle("blue");
        button.classList.toggle("green");
        themeName.innerText = body.classList.contains("blue") ? "zielone" : "niebieskie";
    }
    
    const init = () => {
        let button = document.querySelector(".button")
        button.addEventListener("click", toggleBackground);
    }

    init();
}

