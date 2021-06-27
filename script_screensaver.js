

window.onload = ()=>{
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext("2d")

    let img = new Image()
    img.src = 'Assets/Logo.png'

    img.onload = () =>{
        
        
    }
    ctx.fillStyle = "red"
    ctx.strokeStyle = "blue"
    let x = 0
    let y = 0
    let boxW = 100;
    let boxH = 100
    let canvasHeight = canvas.clientHeight
    let canvasWidht = canvas.clientWidth
    let vx = 1
    let vy = 1

    requestAnimationFrame(render)

    function render(){
        ctx.clearRect(0,0,canvasWidht,canvasHeight)
        ctx.drawImage(img,x,y,boxW,boxH)
        x+=vx*3
        y+=vy*3
        
        if(x+boxW>=canvasWidht || x<=0){
            vx*=-1
        }
        if (y+boxH>= canvasHeight || y<=0){
            vy*=-1
        }

        requestAnimationFrame(render)
    }

    
}