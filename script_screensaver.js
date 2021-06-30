window.onload = () =>{
    // alert("this")
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext("2d")

    let img = new Image()
    img.src = 'Assets/Logo.png'
    let x = 0
    let y = 0
    let boxW = 150;
    let boxH = 150
    let canvasHeight = 700
    let canvasWidht = 1275
    let vx = 1
    let vy = 1
    img.onload = () =>{}
    function render(){
        ctx.clearRect(0,0,canvasWidht,canvasHeight)
        ctx.drawImage(img,x,y,boxW,boxH)
        x+=vx
        y+=vy
        
        if(x+boxW>=canvasWidht || x<=0){
            vx*=-1
        }
        if (y+boxH>= canvasHeight || y<=0){
            vy*=-1
        }
    
        requestAnimationFrame(render)
    }
    // requestAnimationFrame(render)
    function screensaver(){
        var mousetimeout;
        var screensaver_active = false;
        var idletime = 5;
    
        function show_screensaver(){
            $('#screensaver').fadeIn();
            $('#tengah').fadeOut()
            screensaver_active = true;
            screensaver_animation();
        }
        function stop_screensaver(){
            $('#screensaver').fadeOut();
            $('#tengah').fadeIn()
            screensaver_active = false;
        }
    
        $(document).click(function(){
            clearTimeout(mousetimeout);
            
            if (screensaver_active) {
                stop_screensaver();
            }
    
            mousetimeout = setTimeout(function(){
                show_screensaver();
            }, 500 * idletime); // 5 secs			
        });
    
        $(document).mousemove(function(){
            clearTimeout(mousetimeout); 
            
            if (screensaver_active) {
                stop_screensaver();
            }
            mousetimeout = setTimeout(function(){
                show_screensaver();
            }, 1000 * idletime); // 5 secs			
        });
        function screensaver_animation(){
            if (screensaver_active) {
                // $('#screensaver').requestAnimationFrame(render)
                requestAnimationFrame(render)
            }
        }
    }
    screensaver()
}
//     let canvas = document.getElementById("canvas")
//     let ctx = canvas.getContext("2d")

//     let img = new Image()
//     img.src = 'Assets/Logo.png'

//     img.onload = () =>{
        
        
//     }
//     ctx.fillStyle = "red"
//     ctx.strokeStyle = "blue"


//     requestAnimationFrame(render)

