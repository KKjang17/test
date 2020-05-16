
// Toggle blur effects
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

window.addEventListener("load", function() {
    let cssSelector = "input[type=text], select" ;
    let fields = document.querySelectorAll(cssSelector);
    for (i=0; i<fields.length; i++) {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});


//Form validation
document.addEventListener('submit', 
    function(e) {
        let emptyCheck = document.querySelectorAll(".required");
        let atLeastOneEmpty = false;
        
        for (let i = 0; i < emptyCheck.length; i++) {
            if (emptyCheck[i].value == "") {
                atLeastOneEmpty = true;
                emptyCheck[i].style.backgroundColor = "rgb(248, 221, 221)";
                emptyCheck[i].style.borderColor = "red";
                document.querySelector("#red" + (i + 1)).style.visibility = "visible";
            }
        }

        e.preventDefault();
    })