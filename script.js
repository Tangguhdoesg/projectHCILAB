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

// const ORDER_STORAGE = "ORDER_STORAGE";

