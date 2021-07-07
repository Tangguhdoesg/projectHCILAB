$("document").ready(main)

const DATA_KEY = "DATA_STORAGE";
const CART_KEY = "CART_STORAGE";

let items = [
    {id : 1, nama : "SteakHouse Meal", harga : 100000},
    {id : 2, nama : "American BrewHouse", harga : 100000},
    {id : 3, nama : "Chicken Big King", harga : 75000},
    {id : 4, nama : "Double Cheeseburger", harga : 95000},
    {id : 5, nama : "SteakHouse", harga : 85000},
    {id : 6, nama : "Whooper", harga : 80000},
    {id : 7, nama : "Beef Royale", harga : 85000},
    {id : 8, nama : "Double Whooper", harga : 90000},
    {id : 9, nama : "Big King", harga : 95000},
    {id : 10, nama : "Hawaiian Chicken", harga : 100000},
    {id : 11, nama : "Custom Burger", harga : "100000"}
]

// Ingredients
let selectedBread, selectedMeat, selectedVegetable

// Sauce
let mushroom, chilli, bbq, cheese


// Image
let imgTopBread = document.querySelector("#top-bun img")
let imgBottomBread = document.querySelector("#bottom-bun img")
let imgMeat = document.getElementById("meat")
let imgMushroom = document.querySelector("#sauce-mushroom")
let imgChilli = document.querySelector("#sauce-chilli")
let imgBBQ = document.querySelector("#sauce-bbq")
let imgCheese = document.querySelector("#sauce-cheese")

function main(){
    console.log(imgTopBread.src)
    $("#selectBread").change(function(){
        selectedBread = $(this).find(":selected").text()
        if(selectedBread === "Regular"){
            imgTopBread.src = "Assets/Create Burger/regular bun top.png"
            imgBottomBread.src = "Assets/Create Burger/regular bun bottom.png"
        }
        else {
            imgTopBread.src = "Assets/Create Burger/wheat bun top.png"
            imgBottomBread.src = "Assets/Create Burger/wheat bun bottom.png"
        }
    })
    $("#selectMeat").change(function(){
        selectedMeat = $(this).find(":selected").text()
        if(selectedMeat === "Beef"){
            imgMeat.src = "Assets/Create Burger/beef patty.png"
        }
        else if(selectedMeat === "Chicken"){
            imgMeat.src = "Assets/Create Burger/chicken patty.png"
        }
        else {
            imgMeat.src = "Assets/Create Burger/fish patty.png"
        }
    })
    $("#selectVegetable").change(function(){
        selectedVegetable = $(this).find(":selected").text()
        $("#lettuce").toggle(".notDisplay")
    })

    $("#selectMushroom").change(function(){
        $("#sauce-mushroom").toggle(".notDisplay")
    })
    $("#selectChilli").change(function(){
        $("#sauce-chilli").toggle(".notDisplay")
    })
    $("#selectBBQ").change(function(){
        $("#sauce-bbq").toggle(".notDisplay")
    })
    $("#selectCheese").change(function(){
        $("#sauce-cheese").toggle(".notDisplay")
    })

}

function checkedSauce(){
    if(document.getElementById("selectMushroom").checked()){
        $("#sauce-mushroom").toggle(".notDisplay")
    }
    else if(document.getElementById("selectChilli").checked()){

    }
    else if(document.getElementById("selectBBQ").checked()){

    }
    else {

    }

}

function initCustomBurger() {
    selectedBread = $('#selectBread').find(":selected").text();
    selectedMeat = $("#selectMeat").find(":selected").text()
    selectedVegetable = $("#selectVegetable").find(":selected").text()
}

function buttonAddToCart(){
    increaseItem(11);
    document.location.href="OrderandCart.html";
}

function setSessionStorage(key, value){
    sessionStorage.setItem(key,JSON.stringify(value));
}
function getSessionStorage(key){
    return JSON.parse(sessionStorage.getItem(key));
}

function increaseItem(id){
    const local = getSessionStorage(CART_KEY);
    const newItem = items.find((key)=>{
        return key.id === id;
    });
    newItem.jumlah = 1
    
    if(!local){
        setSessionStorage(CART_KEY,[newItem]);
        return;
    }
    const flag = local.find((key)=>{
        if(key.id === id){
            key.jumlah++;
            return key;
        }
    });
    if(!flag){
        local.push(newItem);
    }
    setSessionStorage(CART_KEY,local)
}

