let captions = ["The Madarin Duck", "The Turaco", "The Golden Pheasant", 
                "The Rainbow Lorikeet", "The Quetzal"];

let birds = ["/images/bird1.jpg", "/images/bird2.jpg", "/images/bird3.jpg", "/images/bird4.jpg", "/images/bird5.jpg"];

window.addEventListener("load", function() {
    let pictureString = ".pic";
    let pictures = document.querySelectorAll(pictureString);
    
    for (i=0; i<pictures.length; i++) {
        pictures[i].addEventListener("click", function(e) {

            let currentImage = e.target.src;
            document.querySelector("#bigPic").src = currentImage;
            let index = currentImage.charAt(33);

            document.querySelector("figcaption").innerHTML = captions[index - 1];
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
