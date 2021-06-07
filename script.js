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
    {id : 10, nama : "Hawaiian Chicken", harga : 100000}
]

function setErrorLog(text){
    let errorLog = document.getElementById("errorLog");
    errorLog.innerHTML = text;
    return;
}


function registerSubmit(e){
    e.preventDefault();
    let form = e.target;
    let name = form.elements["name"].value;
    let email = form.elements["email"].value;
    let phone = form.elements["phone"].value;
    let address = form.elements["address"].value;
    let menu = form.elements["menu"].value;
    let servingType = form.elements["servingType"].value;

    if(name === ""){
        setErrorLog("Name cannot be empty!");
        return;
    }
    if(email === ""){
        setErrorLog("Email cannot be empty!");
        return;
    }
    
    if(email.indexOf("@") === -1){
        setErrorLog("Email must contain @");
        return;
    }

    if(phone === ""){
        setErrorLog("Phone number cannot be empty!");
        return;
    }

    if(address === ""){
        setErrorLog("Address cannot be empty!");
        return;
    }

    if(menu === "Please select.."){
        setErrorLog("Please choose the menu");
        return;
    }

    if(servingType === "Please select.."){
        setErrorLog("Please choose the serving type");
        return;
    }

    console.log(email);
}

window.onload = function(){

    let formOrder = document.getElementById("formOrder");
    formOrder.addEventListener("submit", registerSubmit);

}