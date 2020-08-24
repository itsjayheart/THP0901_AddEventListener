//FONCTION 1
let footer = document.getElementsByTagName("footer")[0]
clickCount = 0

footer.addEventListener("click", function() {
    clickCount ++
    console.log("click numéro " + clickCount)
})

//FONCTION 2
menuExpanded = false

navBar = document.getElementById("navbarHeader")
navBtn = document.getElementsByClassName("navbar-toggler")[0]

navBtn.onclick = function(){
    if(!menuExpanded){
        menuExpanded = !menuExpanded
        navBar.classList.remove("collapse")
    }else{
        menuExpanded = !menuExpanded
        navBar.classList.add("collapse")
    }
}

//FONCTION 3
cardBtnSecondary = document.querySelectorAll("button.btn-outline-secondary")

cardBtnSecondary[0].addEventListener("click", function() {
    console.log("trigered red on")
    cardBtnSecondary[0].style = "color:red"
})

//FONCTION 4
cardBtnSecondary[1].addEventListener("click", function() {
    if(cardBtnSecondary[1].style.color == 'green'){
        console.log("trigered gren off")
        cardBtnSecondary[1].style = ""
    }else{
        console.log("trigered gren on")
        cardBtnSecondary[1].style = "color:green"
    }
})

//FONCTION 5
css = document.getElementsByTagName('link')[0]
head = document.head
navBarClicker = document.querySelectorAll("div.navbar")[0]

navBarClicker.addEventListener("dblclick", function() {
    if(document.getElementsByTagName('link')[0]){
        console.log("trigered css off")
        css.remove()
        navBarClicker.style = "background: grey"
    }else{
        console.log("trigered css on")
        head.appendChild(css)
        navBarClicker.style = ""
    }
})

//FONCTION 6
cardsContainer = document.querySelectorAll("div.row")[1]

cards = cardsContainer.children


for(let count = 0; count < cards.length; count++){
    cards[count].addEventListener("pointerenter", function(){
        console.log("youtuched me"+cards[count])
        console.log(cards[count].firstElementChild.children[1].firstElementChild.innerHTML)
        if(cards[count].classList[cards[count].classList.length-1] !== "destroyed"){
            console.log("destroyed")
            cards[count].classList.add("destroyed")
            cards[count].firstElementChild.firstElementChild.style = "width: 20%; height: 20%"
            cards[count].firstElementChild.children[1].firstElementChild.style = "opacity: 0" 
        }else if(cards[count].classList[cards[count].classList.length-1] === "destroyed"){
            console.log("revived")
            cards[count].classList.remove("destroyed")
            cards[count].firstElementChild.firstElementChild.style = "width: 100%; height: 100%"
            cards[count].firstElementChild.children[1].firstElementChild.style = "opacity: 1" 
        }
    })
}

//FONCTION 7
let swichBtn = document.querySelectorAll("a.btn-secondary")[0]

var swich = function(){
    console.log("yahoo!")
    cardsContainer.insertBefore(cards[cards.length-1], cards[0])
    
}

swichBtn.addEventListener("click", swich)

//FONCTION 8
let unSwichBtn = document.querySelectorAll("a.btn-primary")[0]
unSwichBtn.setAttribute("href","#")

var unSwich = function(){
    console.log("oohay!")
    let target = cards[0]
    target.remove()
    cardsContainer.appendChild(target)
    
}

unSwichBtn.addEventListener("click", unSwich)

//FONCTION 9
bodyElements = document.body.children

title = document.getElementsByClassName("navbar-brand")[0]

const cleanDoc = () => {
    classes = document.body.classList
    for(let count = 0; count <= classes.length; count++){
    console.log(count + 1 +"class removed")
    document.body.classList.remove(classes[0])
    }
}

let onTargetKeys = function(e) {
    let key = e.code
    console.log(key)
    switch(key){
        case "KeyQ":
            cleanDoc()
            console.log("To the left")
            document.body.classList.add("col-4")
            break;
        case "KeyY":
            cleanDoc()
            console.log("To the midle")
            document.body.classList.add("col-4")
            document.body.classList.add("offset-md-4")
            break;
        case "KeyP":
            cleanDoc()
            console.log("To the right")
            document.body.classList.add("offset-md-8")
            break;
        case "KeyB":
            cleanDoc()
            console.log("Back to normal")
            break;    
        default:
            console.log("Wrong input")
    }
}

title.addEventListener("keydown", onTargetKeys)
