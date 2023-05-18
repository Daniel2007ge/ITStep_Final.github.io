let x = localStorage.getItem("num1")
let HotOrRest = globalVariable.Hotels_And_Restourants

let img1 = document.getElementById("star")
img1.setAttribute("src", HotOrRest[x].stars)

let img2 = document.getElementsByTagName("img")[1]
img2.setAttribute("src", HotOrRest[x].img)
img2.style = "width: 314px"

let div = document.getElementsByTagName("div")[0]
div.innerHTML = HotOrRest[x].description

let h1 = document.createElement("h1")
h1.innerText = HotOrRest[x].name
div.prepend(h1)

let button = document.createElement("button")
button.innerText = "Serve"
div.append(button)
if(localStorage.length <= 1){
    button.style.opacity = 0.5
    button.setAttribute("title", "You need to create an account for to serve")
}

let b = document.createElement("b")
b.innerText = HotOrRest[x].price
div.append(b)

let span = document.createElement("span")
span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>`+HotOrRest[x].location
span.onclick = function () {window.open("https://www.google.com/maps/search/"+HotOrRest[x].name)}
div.append(span)

let div2 = document.getElementById("container")

for (let index = 0; index < HotOrRest[x].rooms; index++) {
    let img3 = document.createElement("img")
    img3.setAttribute("onclick", "func1("+index+")")
    img3.setAttribute("src", HotOrRest[x].roomPhoto+(index+1)+".png")
    div2.append(img3)
}

function func1(e) {
    let e2 = e + 1
    document.getElementsByTagName("section")[0].style.display = "flex"
    let newImg = document.getElementById("new")
    newImg.setAttribute("src", HotOrRest[x].roomPhoto+e2+".png")
    document.getElementsByTagName("html")[0].scrollTop = 855
}

function Back() {
    window.close("Full_Info.html")
    window.open("Hotels.html")
}