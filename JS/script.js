{
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const button = document.querySelector(".button")
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("blue");
        button.classList.toggle("green");
        themeName.innerText = body.classList.contains("blue") ? "zielone" : "niebieskie";
    }
    
    const init = () => {
        const button = document.querySelector(".button")
        button.addEventListener("click", toggleBackground);
    }

    init();
}

