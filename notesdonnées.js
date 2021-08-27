let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let tab1 = document.getElementById("tableau1");
let tab2 = document.getElementById("tableau2");

btn1.addEventListener("click",() =>{
    tab1.style.display = "block";
    tab2.style.display = "none";  

})

function afficher(){
    tab2.style.display = "block";
    tab1.style.display = "none";  
};
btn2.onclick = afficher;