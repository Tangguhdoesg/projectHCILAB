$('document').ready(main)
var counterSlide = 1;




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

