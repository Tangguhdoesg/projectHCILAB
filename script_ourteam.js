const DATA_KEY = "DATA_STORAGE";

function checkOrder(){
    if(sessionStorage.getItem(DATA_KEY) != null){
        document.location.href = "create.html"
    }
    else{
        alert("You need to fill the form in the order menu first !")
    }
}