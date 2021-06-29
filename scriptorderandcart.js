const DATA_KEY = "DATA_STORAGE";
const CART_KEY = "CART_STORAGE";
const FINAL_KEY = "ORDER_STORAGE";

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

function initCart(){
    const cartList = $('#cartList');
    cartList.empty();
    const local = getLocalStorage(CART_KEY)
    local.forEach(key =>{
        cartList.append(
            `
            <tr>
                <td>
                    <button onClick=increaseItem(${key.id})>+</button>
                    <button onClick=decreaseItem(${key.id})>-</button>
                </td>
                <td>${key.id}</td>
                <td>${key.nama}</td>
                <td>${key.harga}</td> 
                <td>${key.jumlah}</td>
            </tr>
            `
        )
    })
    
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
    const localCART = getLocalStorage(CART_KEY)
    const localORDER = [localDATA,localCART];
    setLocalStorage(FINAL_KEY,localORDER);

}