// menu

// function showMobileNav() {
//     console.log("clicked")
//     let gridDisplay = window.getComputedStyle(document.querySelector('#grid')).display
//     let grid =document.getElementById("grid")
//     let mobileMenu = document.getElementById("mobileMenuItems")
    
    
//     // console.log(grid.style.display)
//     if (gridDisplay=="inline-block") {
//         console.log("hello poop")
//         grid.style.display = "none"
//         mobileMenu.style.display="inline-block"
//     }
//     if (gridDisplay=="none") {
//         grid.style.display = "inline-block"
//          mobileMenu.style.display="none"
// }
// }

// ////////////////////////////
var nameheight = window.getComputedStyle(document.querySelector('#nameHeight')).height
var menu = document.getElementById( 'moremenu' );


var curr_pic_position = [0,0,0,0,0,0,0,0,0,0,0,0,0] //13
var projpic_totals = [2,1,0,2,5,4,0,0,0,0,0,0,0]
var randomX
var randomY
function plusDivs(image) {
    if (projpic_totals[image.id] ==0) {
        console.log("gif")
        return 
    }
    else {
    num = image.id
    totalpix = projpic_totals[num]
    console.log(image)
    console.log(curr_pic_position)
    console.log(projpic_totals[num])
    
    
    
    var current_num = curr_pic_position[num]
    
    console.log("current_num", current_num)
    
    var sub_num = (++current_num)%totalpix

    console.log("sub_num", sub_num)
    
    curr_pic_position[num]=++curr_pic_position[num]

    var name = "project"
    var num = String(num)
    console.log("images/"+num+"-"+sub_num+".png")
    image.src="images/"+num+"-"+sub_num+".png"
    }

}


var globalHoverId;

function hoverImage(image){
    console.log("hoverimage")
    clearInterval(globalHoverId)
    globalHoverId = setInterval(function() {
        plusDivs(image);
    }, 1000);
};

function mouseOutImage() {
    clearInterval(globalHoverId);
}

projects = document.querySelectorAll(".project")

for (let project of projects) {

        project.addEventListener("mouseover", function(event) {
            console.log(project)
        project.querySelector(".text h2").style.textDecoration="underline"
       
        
        image =project.querySelector(".image")
        image.style.display="block"
        image.style.zIndex="10"
        
        // image.style.left = randomX+"%"
        // image.style.top = randomY+"%"

        hoverImage(image)
    });
    project.addEventListener("mouseout", function(event) {
        
        project.querySelector("h2").style.textDecoration="none"
         
        image =project.querySelector(".image")
        image.style.display="none"
        image.style.zIndex="0"
        mouseOutImage()
});
}

giffys = document.querySelectorAll(".underlineGif")

for (let gif of giffys) {
    gif.addEventListener("mouseover", function(event){
        var pos = gif.getBoundingClientRect();
        console.log(pos)
        var posX =pos.left +window.scrollX
        var posY =pos.top +window.scrollY
        console.log(posX, posY)
        
        var selectedGif = gif.querySelector("img")
        
        selectedGif.style.left =  String(posX+"px")
        selectedGif.style.top = String(posY+"px")
        console.log("selc", selectedGif.style.left, selectedGif.style.top)
        selectedGif.style.display="block"
        
        
        
    })
    gif.addEventListener("mouseout", function(event){
        gif.querySelector("img").style.display="none"
    })
}


function getPosition( element ) {
   var rect = element.getBoundingClientRect();
   return {x:rect.left,y:rect.top};
}



window.addEventListener("load", function (){
    // console.log("FUCKKKK!");
    
   
    
    
    if (document.getElementById("arrowHeight") != null ) {
    document.getElementById("arrowHeight").style.height = nameheight;
    }
    menu.style.height = nameheight;
    // console.log('menu is', menu)
   
    menu.addEventListener("click", function (event){
    // console.log('here')
    let gridDisplay = window.getComputedStyle(document.querySelector('#grid')).display
    let grid = document.getElementById("grid")
    let mobileMenu = document.getElementById("mobileMenuItems")
    // console.log("clicked")
    
    // console.log(grid.style.display)
    if (gridDisplay != "none") {
        console.log("hello poop")
        grid.style.display = "none"
        mobileMenu.style.display="inline-block"
    }
    if (gridDisplay=="none") {
        grid.style.display = "inline-block"
         mobileMenu.style.display="none"
    }
});
});

window.addEventListener("resize", function() {
    // var mobile;
    // if (window.innerWidth<575.98) {
    //     mobile=true;
    // }
    console.log("resize")
    nameheight = window.getComputedStyle(document.querySelector('#nameHeight')).height
    
    menu.style.height = nameheight;
    console.log(menu.style.height)
    if (document.getElementById("arrowHeight") != null ) {
    document.getElementById("arrowHeight").style.height = nameheight;
    
    // if (mobile) {
    // var hidden = document.getElementsByClassName("projectMobileOnly")
    // console.log(hidden)
    // for (var i =0; i<hidden.length; i++) {
    //     hidden[i].classList.toggle("projectMobileOnly")
    //     hidden[i].classList.toggle("projectMobileShow")
    // }
    // }
    // if (window.innerWidth> 575.98) {
    // var shown = document.getElementsByClassName("projectMobileShow")
    // console.log(shown)
    // for (var i =0; i<shown.length; i++) {
    //     shown[i].classList.toggle("projectMobileShow")
    //     shown[i].classList.toggle("projectMobileOnly")
    // }
    // }
    }
})