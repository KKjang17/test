
$(document).ready(function() {
    let captions = ["City # 1", "City # 2", "City # 3", "City # 4", "City # 5"]
    
    $(".picture").click(function () {
        let cityNum = $(this).children("img").attr("src").charAt(12);
        $("#mainPic").attr("src", $(this).children("img").attr("src"));    
        $("#caption").html(captions[cityNum - 1]);   
    })
    
    //Applying the slider values
    $(".slider").on("input",function () {
        let values = document.querySelectorAll(".slider");
        let finalString = `opacity(${values[0].value}%) saturate(${values[1].value}%) brightness(${values[2].value}%) hue-rotate(${values[3].value}deg) grayscale(${values[4].value}%) blur(${values[5].value}px)` ;
        $("#mainPic").css("filter", finalString);
        
        let displayValues = document.querySelectorAll(".value");
        for (let i = 0; i < displayValues.length; i++) {
            let unit = i == 3 ? "deg" : i == 5 ? "px" : "%";
            displayValues[i].innerHTML = values[i].value + unit; 
        }
        
    });

    //Reseting everything on the reset button
    $("#reset").click(function () {
        let values = document.querySelectorAll(".slider");
        let finalString = `opacity(100%) saturate(100%) brightness(100%) hue-rotate(0deg) grayscale(0%) blur(0px)` ;
        $("#mainPic").css("filter", finalString);
        
        let resetVal = ["100", "100", "100", "0", "0", "0"];

        let displayValues = document.querySelectorAll(".value");
        for (let i = 0; i < displayValues.length; i++) {
            let unit = i == 3 ? "deg" : i == 5 ? "px" : "%";
            displayValues[i].innerHTML = resetVal[i] + unit; 
        }
    });
});
