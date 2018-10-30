//variables

var cartItems = 0

var cartBuns =[]

var totalDollars =0

//building blocks for shopping cart objects

var pics = ["imgs/chocoGlaze.png",  "imgs/sugarGlaze.png", "imgs/orangeGlaze.png"]
var names = ["Chocolate Swirl"] 
var glazes = ["Chocolate", "Vanilla", "Sugar"]
var quantity =[1, 3, 6, 12] 

//bun object

class Bun {

    constructor (tag, img, name, glaze, quant)
    {
        this.tag = tag
        this.pic = img 
        this.name = name
        this.glaze = glaze
        this.quant = quant
    }
}



//when you add a bun to a cart, create these objects for the cart page 
function cart(){
    
    cartBuns = JSON.parse(localStorage.getItem("cartBuns"));
    document.getElementById("navCartButton").innerHTML="Cart ("+cartBuns.length+")"

    document.getElementById("bunAmount").innerHTML=cartBuns.length

    console.log(cartBuns)
    for (bun in cartBuns) {

        var container = document.createElement("div");
        container.className = "container"
        container.id = cartBuns[bun].tag
        document.getElementById("main").appendChild(container);

        var bigPic =document.createElement("div");
        bigPic.className = "big-pic"
        container.appendChild(bigPic)

        var bunImg = document.createElement("img");
        
        bunImg.src = cartBuns[bun].pic
        
        bigPic.appendChild(bunImg)


        var details = document.createElement("div");
        details.className = "details"
        container.appendChild(details);

        var bunName =document.createElement("div");
        bunName.className= "bun-name"
        details.appendChild(bunName)

        var h3 =document.createElement("h3");
        h3.innerHTML=cartBuns[bun].name
        bunName.appendChild(h3)

        var glaze =document.createElement("div");
        glaze.className= "glaze subhead"
        details.appendChild(glaze)

        var glazeh4=document.createElement("h4");
        glazeh4.innerHTML="Glaze: " + cartBuns[bun].glaze
        glaze.appendChild(glazeh4)

        var quantity =document.createElement("div");
        quantity.className= "quantity subhead"
        details.appendChild(quantity)

        var quantityh4=document.createElement("h4");
        quantityh4.innerHTML="Quantity: " + cartBuns[bun].quant
        quantity.appendChild(quantityh4)

        var total =document.createElement("div");
        total.className= "total subhead"
        details.appendChild(total)

        var totalh4=document.createElement("h4");
        totalh4.innerHTML= "Total: $" +cartBuns[bun].quant*3
        totalDollars += (cartBuns[bun].quant*3)
        total.appendChild(totalh4)

        var buttons = document.createElement("div");
        buttons.className = "buttons"
        details.appendChild(buttons)

        var edit = document.createElement("button")
        edit.id="edit"
        edit.innerHTML="Edit "
        edit.style.marginRight="1em"
        buttons.appendChild(edit)

        var remove = document.createElement("button")
        remove.className="remove"
        remove.innerHTML="Remove"
        buttons.appendChild(remove)
    }

    //if you remove soemthing from the cart 
    var removeList = document.getElementsByClassName("remove")
    console.log(cartBuns)
    for (var i =0; i<removeList.length; i++) {
        removeList[i].addEventListener("click",  removefromCart.bind(this, removeList[i]));
    }
   
    document.getElementById("totalAmount").innerHTML="$"+ String(totalDollars)
}



function removefromCart(elem) {
    console.log(cartBuns)
    console.log("hi")
    var main = document.getElementById( "main" );
    console.log(elem)
    
    console.log(elem.parentNode.parentNode.parentNode)
    let contain = elem.parentNode.parentNode.parentNode
    let curTag = contain.id
    console.log(curTag)

    contain.remove()
    cartItems--

    for (var j =0; j<cartBuns.length; j++) {
        if (cartBuns[j].tag ==curTag ) {
            var thisAmount = cartBuns[j].quant*3
            cartBuns.splice(j, 1);
        }
    }
    console.log(cartBuns)
    localStorage.setItem("cartBuns", JSON.stringify(cartBuns));

    document.getElementById("bunAmount").innerHTML=cartBuns.length
    document.getElementById("totalAmount").innerHTML="$"+totalDollars-thisAmount


}
function random(length) {
    return Math.floor(Math.random()*length)
}


//changing the images 
function glazeImage() {
    console.log("whut")
    var choc = document.getElementById( "chocolateGlaze" );
    var vanilla=document.getElementById( "vanillaGlaze" );
    var orange=document.getElementById( "orangeGlaze" );
    if (choc.selected==true) {
        document.getElementById("largeImage").src="imgs/chocoGlaze.png"
    }
    if (vanilla.selected==true) {
        document.getElementById("largeImage").src="imgs/sugarGlaze.png"
    }
    if (orange.selected==true) {
        document.getElementById("largeImage").src="imgs/orangeGlaze.png"
    }
}

//adding something to your cart

function addCart() {
    // console.log("hello")
    var glazeOption = document.getElementById( "glazeOption" );
    var glazeSelect = glazeOption.options[ glazeOption.selectedIndex ].value
    console.log(glazeOption.selectedIndex)

    var quantOption = document.getElementById( "quantOption" );
    var quantSelect = quantOption.options[ quantOption.selectedIndex ].value

    cartItems++
    console.log(glazeSelect, quantSelect, cartItems)

    document.getElementById("navCartButton").innerHTML="Cart ("+cartItems+")"

    var cartBun= new Bun(random(100), pics[glazeOption.selectedIndex-1], names[0], glazeSelect, quantity[quantOption.selectedIndex])
    cartBuns.push(cartBun)

    console.log(cartBun)
    console.log(cartBuns)
    localStorage.setItem("cartBuns", JSON.stringify(cartBuns));
    
}