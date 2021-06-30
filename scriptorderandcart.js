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
    {id : 10, nama : "Hawaiian Chicken", harga : 100000}
]

$(function(){

    initCart();
    
});

function setLocalStorage(key, value){
    localStorage.setItem(key,JSON.stringify(value));
    initCart();
}
function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}
let total = 0

function initCart(){
    const cartList = $('#cartList');
    cartList.empty();
    const local = getLocalStorage(CART_KEY)
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

    

/* <div class = "table">
                <button class="buttonCart" onClick=increaseItem(${key.id})>+</button>
                <button class="buttonCart" onClick=decreaseItem(${key.id})>-</button>
                <div class ="cartClass">
                    <h3 class = "cartDetails" id="jumlah">${key.jumlah}</h3>
                    <h3 class = "cartDetails" id="nama">${key.nama}</h3>
                    <h3 class = "cartDetails" id="harga">${key.harga}</h3>
                </div>
</div> */

function docWrite(variable) {
    document.write(variable);
}

function increaseItem(id){
    const local = getLocalStorage(CART_KEY);
    const newItem = items.find((key)=>{
        //=== -> cek sampai ke tipe yg kita cek sama ato nggak
        // if(key.id === id) return key;
        return key.id === id;
    });
    // newItem["jumlah"] = 1
    newItem.jumlah = 1
    
    //tambahkan item kedalam storage yg masih kosong
    if(!local){
        setLocalStorage(CART_KEY,[newItem]);
        return;
    }
    const flag = local.find((key)=>{
        if(key.id === id){
            //check item jika sudah pernah di tambahkan ++
            key.jumlah++;
            return key;
        }
    });
    if(!flag){
        local.push(newItem);
    }
    setLocalStorage(CART_KEY,local)
}

function decreaseItem(id){
    const local = getLocalStorage(CART_KEY)
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
    setLocalStorage(CART_KEY,newLocal)
}

function submitOrder(){
    const localDATA = getLocalStorage(DATA_KEY)
    // const localCART = getLocalStorage(CART_KEY)
    localStorage.removeItem(DATA_KEY)
    localStorage.removeItem(CART_KEY)
    alert("Order by " + localDATA.name + " has been completed !");
    document.location.href="index.html";
    initCart();
}