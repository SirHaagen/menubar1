
const btnMenu= document.querySelector("#btnMenu");
const btnCerrar= document.querySelector(".btnCerrar");
const menu= document.querySelector("#menu");
const submenuBtns= document.querySelectorAll(".submenu-btn"); //Pueden existir varios submenús
let desplegar= 0;

btnCerrar.addEventListener("click", ()=> menu.classList.toggle("mostrar"))
btnMenu.addEventListener("click",()=> menu.classList.toggle("mostrar"))

submenuBtns.forEach(subBoton=>{
  subBoton.addEventListener("click", ()=>{
    let subMenu= subBoton.nextElementSibling; //Selecciono el siguiente elemento (submenu)
    height= subMenu.scrollHeight; //Obtengo la altura del submenu
    if(desplegar !== 0) desplegar= subMenu.style.height= 0;
    else desplegar= subMenu.style.height= height+"px";
  })
})