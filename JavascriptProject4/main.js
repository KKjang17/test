let captions = ["The Madarin Duck", "The Turaco", "The Golden Pheasant", 
                "The Rainbow Lorikeet", "The Quetzal"];

window.addEventListener("load", function() {
    let pictureString = ".pic";
    let pictures = document.querySelectorAll(pictureString);
    
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].addEventListener("click", function(e) {

            let currentImage = e.target.src;
            document.querySelector("#bigPic").src = currentImage;
            document.querySelector("figcaption").innerHTML = captions[i];
        })
    }

    document.querySelector("#fig").style.transition = "opacity 1s ease-out";
    let bigPicture = document.querySelector("#bigPicture");

    bigPicture.addEventListener("mouseover", function(e) {
        document.querySelector("#fig").style.opacity = "60%";
    });

    bigPicture.addEventListener("mouseout", function(e) {
        document.querySelector("#fig").style.opacity = "0%";
    });
});
