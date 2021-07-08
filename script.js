$('document').ready(main)
// Variable for counting page on image slider
var counterSlide = 1;

// Variable for session storage key
const DATA_KEY = "DATA_STORAGE";

// Variable for Screensaver
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let img = new Image()
img.src = 'Assets/Logo.png'
let x = 0
let y = 0
let boxW = 150;
let boxH = 150
let canvasHeight = canvas.height
let canvasWidht = canvas.width
let vx = 1
let vy = 1
img.onload = () =>{};

// Main Function
function main(){
    let maxIndex = $('.slide').length
    animationSlider() // Function for auto slide image slider

    $('.prev').click(() => { // Onclick for left arrow to go to previous image
        if(counterSlide > 0){
            --counterSlide
            document.getElementById('radio'+counterSlide).checked = true
        }
    })

    $('.next').click(() => {  // Onclick for right arrow to go to next image
        if(counterSlide < maxIndex){
            ++counterSlide
            document.getElementById('radio'+counterSlide).checked = true
        }
    })

    screensaver() // Function for screensaver
}

// Function to check wether the order is filled or not before go to create burger page
function checkOrder(){
    if(sessionStorage.getItem(DATA_KEY) != null){
        document.location.href = "create.html"
    }
    else{
        alert("You need to fill the form in the order menu first !")
    }
}

// Function for auto slide image slider
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

function render(){
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    ctx.clearRect(0,0,canvasWidht,canvasHeight)
    ctx.drawImage(img,x,y,boxW,boxH)
    x+=vx
    y+=vy
    
    if(x+boxW>=window.innerWidth || x<=0){
        vx*=-1
    }
    if (y+boxH>= window.innerHeight || y<=0){
        vy*=-1
    }

    requestAnimationFrame(render)
}

function screensaver(){
        var mousetimeout;
        var screensaver_active = false;
        var idletime = 5;

    function show_screensaver(){
        $('#screensaver').fadeIn();
        $('#tengah').fadeOut()
        $('#header').fadeOut()
        $('#footer').fadeOut()
        $('#backgroundtengah').fadeOut()
        $('.section1').fadeOut()
        $('.section2').fadeOut()
        $('.section3').fadeOut()
        screensaver_active = true;
        screensaver_animation();
    }
    function stop_screensaver(){
        $('#screensaver').fadeOut();
        $('#tengah').fadeIn()
        $('#header').fadeIn()
        $('#footer').fadeIn()
        $('#backgroundtengah').fadeIn()
        $('.section1').fadeIn()
        $('.section2').fadeIn()
        $('.section3').fadeIn()
        screensaver_active = false;
    }

    $(document).click(function(){
        clearTimeout(mousetimeout);
        
        if (screensaver_active) {
            stop_screensaver();
        }

        mousetimeout = setTimeout(function(){
            show_screensaver();
        }, 500 * idletime); 			
    });

    $(document).mousemove(function(){
        clearTimeout(mousetimeout); 
        
        if (screensaver_active) {
            stop_screensaver();
        }
        mousetimeout = setTimeout(function(){
            show_screensaver();
        }, 1000 * idletime); 			
    });
    function screensaver_animation(){
        if (screensaver_active) {
            requestAnimationFrame(render)
        }
    }
}



