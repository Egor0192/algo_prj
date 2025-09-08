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

let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names = ['Пулемет', 'SLR', 'M4A1-S', 'AK-47']
for (let i = 0; i < item_name_objects.length; i += 1) {
   item_name_objects[i].innerHTML = item_names[i]
}

let item_descriptions = ['300 патронов в обойме', '25 патронов в обойме', '25 патронов в обойме', '30 патронов в обойме']
let item_prices = [5000, 2000, 2500, 3000]
let item_description_objects = document.querySelectorAll('.merch-item-descr')
let item_price_objects = document.querySelectorAll('.merch-item-price')
for (let i = 0; i < item_description_objects.length; i += 1) {
    item_description_objects[i].innerHTML = item_descriptions[i]
    item_price_objects[i].innerHTML = item_prices[i]
}

let imgs = document.querySelectorAll(".img")
for (let i = 0; i<imgs.length;i+=1){
    imgs[i].addEventListener("mouseenter", function(){
    anime({
        targets: ".img"+i,
        scale: [
            {value:1.1,duration:500},
        ],
        duration: 500,
    })
})
imgs[i].addEventListener("mouseleave", function(){
    anime({
        targets: ".img"+i,
        scale: [
            {value:1,duration:500},
        ],
        duration: 500,
    })
})
}