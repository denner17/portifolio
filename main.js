const chengeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode(){
    document.body.classList.toggle("dark");
};

chengeThemeBtn.addEventListener("change", function(){
    toggleDarkMode("dark");

    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
});