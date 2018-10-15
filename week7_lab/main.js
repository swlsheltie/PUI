var pics = ["catbox.jpg", "lil hedgehog.jpeg", "lil pig.jpeg", "taro.png"]
var names = ["Muff", "Buff", "Luff", "Tuff", "Taro", "Yomi"] 
var ages =[2, 45, 19, 12, 10, 90] 

class Animal {

    constructor (img, name, age)
    {
        this.pic = img 
        this.name = name
        this.age = age
    }
}

$(document).ready(() => {

    console.log("ready")
    var animal= new Animal(pics[random(4)], names[random(6)], ages[random(6)])
    console.log(animal, random(5))

    var animal2 = new Animal(pics[2], names[0], ages[5])

    $("#animal-img").attr("src", animal.pic)
    $("#animal-name").html(animal.name)
    $("#animal-age").html(animal.age+" years old")
})


function random(length) {
    return Math.floor(Math.random()*length)
}