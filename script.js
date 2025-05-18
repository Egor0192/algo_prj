let btns = document.querySelectorAll(".btn")
for (let i = 0; i<btns.length;i+=1){
    btns[i].addEventListener("mouseenter", function(){
    anime({
        targets: ".btn"+i,
        scale: [
            {value:1.1,duration:500},
        ],
        duration: 500,
    })
})
btns[i].addEventListener("mouseleave", function(){
    anime({
        targets: ".btn"+i,
        scale: [
            {value:1,duration:500},
        ],
        duration: 500,
    })
})
}