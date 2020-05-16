
let images = ["/images/monument1.jpg", "/images/monument2.jpg", "/images/monument3.jpg", "/images/monument4.jpg", 
            "/images/monument5.jpg", "/images/monument6.jpg", "/images/monument7.jpg", "/images/monument8.jpg", 
            "/images/monument9.jpg", "/images/monument10.jpg", "/images/monument11.jpg", "/images/monument12.jpg"];

let monuments = ["Big Ben", "Eiffel Tower", "Notre-Dame", "Statue of Liberty", "Sagrada Família", "Taj Mahal", 
                "Leaning Tower of Pisa", "Machu Picchu", "Stonehenge", "Hagia Sophia", "Petra", "Colosseum"]

let locations = ["London, England", "Paris, France", "Paris, France" , "New York, United States", 
                "Barcelona, Spain", "Uttar, India", "Pisa, Italy", "Cuszo, Peru", "Wiltshire, England",
                "Istanbul, Turkey", "Ma'an Governorate, Jordan", "Rome, Italy"];

$(document).ready(function(){
  
    for (let i = 0; i < images.length; i++) {
         let currentImage = $(`<img src="${images[i]}" class="image">`);
        $("#mainContent").append(currentImage);
    }  
});

$(document).ready(function(){
    
    let xPos;
    let yPos;

    $("body").mousemove(function(e) {
        xPos = e.pageX;
        yPos = e.pageY;        
    })
    
    $(".image").mouseenter(function() {

        $(this).toggleClass("gray");

        let preview = $("<div id='preview'></div>");
        $("body").append(preview);

        let previewImage = $(this).attr("src");
        $("#preview").append(`<img src="${previewImage}" id="previewImage">`);
        
        stylePreview($("#preview"), xPos, yPos);
        $("#previewImage").css({"width" : "100%", "height" : "100%"});

        setImageCaption(images, locations, monuments, previewImage, preview);
        $("#monument").css("color", "white");
        $("#location").css({"color" : "white", "font-style" : "italic"});

    })

    $(".image").mouseleave(function() {

        $(this).toggleClass("gray");
        $("#preview").remove();
    })
});

//Takes tag to style and the x and y coorndinates to style to preview div
stylePreview = (tag, xPos, yPos) => {
    tag.css({"width" : "50%", "height" : "50%", "background-color" : "black", 
    "padding" : "10px 10px 60px 10px", "position" : "absolute", "left" : `${xPos}px`, 
    "top" : `${yPos}px`});
}

//Takes the array of images, retrieves the index and appends the corresponding caption
setImageCaption = (imageArray, locationArray, monumentArray, previewImage, appendDiv) => {
    let index = imageArray.indexOf(previewImage);
    appendDiv.append(`<p id='monument'>${monumentArray[index]}</p>`);
    appendDiv.append(`<p id='location'>${locationArray[index]}</p>`);
}