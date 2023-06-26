function goTop(){
    window.scrollTo(0,0)
}

function setThings(){
    document.getElementById("heading").style.bottom = (document.getElementById("searchBoxContainer").offsetHeight / 2) + "px";
}

function openMenu(){
    document.querySelector("#entrance nav").classList.add("active")
    document.querySelector("#menuClose").classList.add("active")
}

function closeMenu(){
    document.querySelector("#entrance nav").classList.remove("active")
    document.querySelector("#menuClose").classList.remove("active")
}