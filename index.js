// generate a random color

const randomcolor = function(){
    const hex = "012345789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
} 
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changebgColor, 1000);
    }
    function changebgColor(){
        document.body.style.backgroundColor = randomcolor()
    }
}

 const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

const start = document.querySelector('#start')
start.addEventListener('click', startChangingColor)
const stop = document.querySelector('#stop')
stop.addEventListener('click', stopChangingColor)

