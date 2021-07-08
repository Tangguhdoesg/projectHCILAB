// Script for ScreenSaver
window.onload = () =>{
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
    // Function to render image to the screen
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
    // Screen saver function
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
            $('.section1').fadeIn()
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
    screensaver()
}



