
const btnUsuario = document.getElementById('btnUsuario') 
const popup = document.querySelector("#popup")
const btnExit = document.getElementById('btnExit');

function desplegar(){
    popup.showModal();
}

function cerrarPopUp(){
    popup.close()
}

btnUsuario.addEventListener('click',desplegar,true);
btnExit.addEventListener('click', cerrarPopUp, true);
