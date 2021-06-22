$('document').ready(main)

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
    let maxIndex = $('.item-slider').length
    let index = 0
    sliding(index)

    //configuration
    var width = 720;
    var speed = 1000;
    var pause = 3000;
    var current = 1;

    //cache DOM
    var $slider = $('#slider');
    var $slides = $slider.find('#slides');
    var $slide = $slides.find('.slide');

    setInterval(function() {
        //move image the defined width and speed to the left
    $slides.animate({'margin-left': '-='+width}, speed, function() {
        //count number of slides and loop back to first from last
        current++;
        if (current === $slides.length) {
            current = 1;
            $slides.css('margin-left', 0);
        }
    });			
}, pause);
    
    $('.prev').click(() => {
        if(index > 0){
            sliding(--index)
        }
    })

    $('.next').click(() => {
        if(index < maxIndex-1){
            sliding(++index)
        }
    })
}

function sliding(index) {
    const itemSlider = $('.item-slider') 
    itemSlider.each((i)=>{
        $(itemSlider[i]).hide()
    })
    $(itemSlider[index]).show()
}