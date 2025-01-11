let menuIcon = document.getElementById("menu-icon");
let menuBar = document.getElementById("menubar");
let menuBarContainer = document.getElementById("menubar-container");

menuIcon.addEventListener("click", () => {
    if(menuBar.classList.contains("hidden")){
        menuBar.classList.toggle
        ("hidden", "w-0");
        menuBarContainer.classList.remove("hidden");
        menuBar.classList.add("sm:w-[40vw]", "w-[100vw]", "visible");
        menuBarContainer.classList.add("visible");
    } else {
        menuBar.classList.remove("sm:w-[40vh]", "w-[100vw]", "visible");
        menuBarContainer.classList.remove("visible");
        menuBar.classList.add("hidden", "w-0");
        menuBarContainer.classList.add("hidden");
    };
});