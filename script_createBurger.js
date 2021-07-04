$("document").ready(main)

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
    // initCustomBurger()
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