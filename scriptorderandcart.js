const DATA_KEY = "DATA_STORAGE";
const CART_KEY = "CART_STORAGE";
const CREATE_KEY = "CUSTOM_STORAGE";

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

$(function(){

    initCart();
    
});

function setSessionStorage(key, value){
    sessionStorage.setItem(key,JSON.stringify(value));
    initCart();
}
function getSessionStorage(key){
    return JSON.parse(sessionStorage.getItem(key));
}
let total = 0

function initCart(){
    const cartList = $('#cartList');
    cartList.empty();
    const local = getSessionStorage(CART_KEY)
    total = 0
    local.forEach(key =>{
        cartList.append(
            `
            <tr>
                <td class="cartButton">
                    <button class="buttonCart" onClick=increaseItem(${key.id})>+</button>
                    <button class="buttonCart" onClick=decreaseItem(${key.id})>-</button>
                </td>
                <td class="cartDetails">${key.jumlah}x</td>
                <td class="cartDetails">${key.nama}</td>
                <td class="cartDetails">Rp ${key.harga},-</td> 
            </tr> 
            `
        )
        total += key.jumlah*key.harga
    })
    document.getElementById("total").innerHTML = "Rp " + total + ",-"
}

function docWrite(variable) {
    document.write(variable);
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

function decreaseItem(id){
    const local = getSessionStorage(CART_KEY)
    if(!local){
        alert("Belum ada item yang ditambahkan")
        return;
    }
    local.find(key=>{
        if(key.id === id){
            if(key.jumlah > 0)key.jumlah--;
        }
    })
    const newLocal = local.filter((key)=>{
        return key.jumlah > 0;
    })
    setSessionStorage(CART_KEY,newLocal)
}

function submitOrder(){
    const localDATA = getSessionStorage(DATA_KEY)
    sessionStorage.removeItem(DATA_KEY)
    sessionStorage.removeItem(CART_KEY)
    alert("Order by " + localDATA.name + " has been completed !");
    document.location.href="index.html";
    initCart();
}

function createBurger(){
    document.location.href="create.html";
}

function checkOrder(){
    if(sessionStorage.getItem(DATA_KEY) != null){
        document.location.href = "create.html"
    }
    else{
        alert("You need to fill the form in the order menu first !")
    }
}

