document.getElementById("but").addEventListener("click", function() {
    x = document.getElementById("navbar");
    if(x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
});

