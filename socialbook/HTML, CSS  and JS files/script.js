let settingsMenu = document.querySelector(".settings-menu");

function dropMenu() {
    settingsMenu.classList.toggle("settings-menu-height");
}

let toggleDarkMode = document.querySelector("#dark-btn");

toggleDarkMode.onclick = function(){
    toggleDarkMode.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    } else{
        localStorage.setItem("theme", "light")
    }
}


if(localStorage.getItem("theme") == "light"){
    toggleDarkMode.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark"){
    toggleDarkMode.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}