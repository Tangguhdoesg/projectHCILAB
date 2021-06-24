$('document').ready(main)
var counterSlide = 1;

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


function main(){
    let maxIndex = $('.slide').length
    animationSlider()

    console.log('Max index ' + maxIndex)

    $('.prev').click(() => {
        if(counterSlide > 0){
            --counterSlide
            document.getElementById('radio'+counterSlide).checked = true
        }
        console.log(counterSlide)
    })

    $('.next').click(() => {
        if(counterSlide < maxIndex){
            ++counterSlide
            document.getElementById('radio'+counterSlide).checked = true
        }
        console.log(counterSlide)
    })
}

// function sliding(index) {
//     const itemSlider = $('.slide') 
//     itemSlider.each((i)=>{
//         $(itemSlider[i]).hide()
//     })
//     $(itemSlider[index]).show()
// }

function animationSlider(){
    var counter = 1
    document.getElementById('radio'+counter).checked = true
    setInterval(function(){
        document.getElementById('radio'+counter).checked = true
        counterSlide = counter++
        if(counter > 5){
            counter = 1
        }
    }, 5000)
}

// function animationSlider(){
//     //configuration
//     var currentSlide = 1
//     var $slides = $(".slides")
//     var slideCount = $slides.children().length

//     var width = 650;
//     var speed = 1000;

//     setInterval(function() {
//         $slides.animate({
//             'margin-left': '-='+width
//         }, speed, function() {
//             ++currentSlide;
//             if (currentSlide === slideCount) {
//                 currentSlide = 1;
//                 $slides.css('margin-left', '0px');
//             }
//         });			
//     }, 3000);
// }

// const ORDER_STORAGE = "ORDER_STORAGE";

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
    let name = form.elements["name"].value;
    let email = form.elements["email"].value;
    let phone = form.elements["phone"].value;
    let address = form.elements["address"].value;
    // let menu = form.elements["menu"].value;
    // let servingType = form.elements["servingType"].value;

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

    // if(menu == pleaseSelect){
    //     setErrorLog("Please choose the menu");
    //     return;
    // }

    // if(servingType === pleaseSelect){
    //     setErrorLog("Please choose the serving type");
    //     return;
    // }

    // localStorage.setItem(ORDER_STORAGE, );

    // let tableBody = document.getElementById("tableBody");
    // tableBody.innerHTML += `
    // <tr>
    //     <td>${name}</td>
    //     <td>${email}</td>
    //     <td>${phone}</td>
    //     <td>${address}</td>
    //     <td>${menu}</td>
    //     <td>${servingType}</td>
    //     <td><button onclick="deleteData(this)">Delete</button></td>
    // </tr>
    // `
    setErrorLog("");
    
    form.reset();

}

// window.onload = function(){

//     let formOrder = document.getElementById("formOrder");
//     formOrder.addEventListener("submit", registerSubmit);

// }