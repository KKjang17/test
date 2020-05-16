let descriptionArray = ["Girl with a Pearl Earring" , "Artist holding a Thistle", "Portrait of Eleanor of Toledo"];
let quantityArray = [3, 1, 2];
let priceArray = ["$80.00", "$215.00", "$75.00"];
let amountArray = ["$240.00", "$125.00", "$150.00"];
let row1Array = ["Subtotal", "Tax", "Shipping", "Grand Total"];
let row2Array = ["$515.00", "$51.50", "$40.00", "$606.50"]

let descriptions = document.getElementsByClassName("description");
let quantity = document.getElementsByClassName("quantity");
let price = document.getElementsByClassName("price");
let amount = document.getElementsByClassName("amount");
let row1 = document.getElementsByClassName("row1");
let row2 = document.getElementsByClassName("row2");

for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].innerHTML = descriptionArray[i];
    quantity[i].innerHTML = quantityArray[i];
    price[i].innerHTML = priceArray[i];
    amount[i].innerHTML = amountArray[i];
}

for (let i = 0; i < row1.length; i++) {
    row1[i].innerHTML = row1Array[i];
    row2[i].innerHTML = row2Array[i];
}