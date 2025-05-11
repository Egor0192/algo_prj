let btn = document.querySelector(".btn")
btn.addEventListener("mouseenter", function(){
    anime({
        targets: ".btn",
        scale: [
            {value:1.1,duration:500},
        ],
        duration: 500,
    })
})
btn.addEventListener("mouseleave", function(){
    anime({
        targets: ".btn",
        scale: [
            {value:1,duration:500},
        ],
        duration: 500,
    })
})