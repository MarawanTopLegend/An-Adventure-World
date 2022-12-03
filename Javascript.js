let menu = document.querySelector(".menu")
let submenu = document.querySelector(".submenu")
let db = true
menu.onclick = function(){
    if(db == true){
        submenu.style.cssText = `background-color: black;
        margin-top: 5em;
        display: flex;
        flex-direction: column;
        padding: 1em;`
        db = false
    }
    else{
        submenu.style.cssText = ""
        db = true
    }   
}
