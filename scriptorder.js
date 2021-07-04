const DATA_KEY = "DATA_STORAGE";
const CART_KEY = "CART_STORAGE";
const CREATE_KEY = "CUSTOM_STORAGE";

$(function(){

    let formOrder = document.getElementById("formOrder");
    formOrder.addEventListener("submit", registerSubmit);
    
});



function setErrorLog(text){
    let errorLog = document.getElementById("errorLog");
    errorLog.innerHTML = text;
    return;
}

function deleteData(node){
    if(confirm("Are you sure?")){
        node.parentNode.parentNode.remove();
    }
 }



function registerSubmit(e){
    e.preventDefault();
    let pleaseSelect = "select"
    let form = e.target;
    let names = form.elements["name"].value;
    let email = form.elements["email"].value;
    let phone = form.elements["phone"].value;
    let address = form.elements["address"].value;
    let servingType = form.elements["servingType"].value;

    if(names === ""){
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

    if(servingType === pleaseSelect){
        setErrorLog("Please choose the serving type");
        return;
    }
    setErrorLog("");
    
    let dataCustomer = {name: names, email: email, phone: phone, address: address, servingType: servingType};
    console.log(dataCustomer)
    if(localStorage != null){
        localStorage.removeItem(DATA_KEY)
        localStorage.removeItem(CART_KEY)
    }
    setLocalStorage(DATA_KEY,dataCustomer);
    
    form.reset();
    document.location.href="OrderandCart.html";

}

function setLocalStorage(key, value){
    localStorage.setItem(key,JSON.stringify(value));
}
function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

