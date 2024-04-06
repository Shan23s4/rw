
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");



function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    // Add active classes to the clicked tab link and corresponding tab content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
   
}

let Darkmode=document.getElementById("mode")
let img=document.getElementById("img")
let text=document.getElementById("mtext")
Darkmode.addEventListener("click",function(){
    document.body.classList.toggle("light")
    if (document.body.classList.contains("light")) {
        img.src="images/moon.png"
        text.innerHTML="Light"

        
    }
    else{
        img.src="images/sun.png"
        text.innerHTML="Dark"
    }
})
let sidemenu=document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0"

}
function closemenu(){
    sidemenu.style.right="-200px"
}

