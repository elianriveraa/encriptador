const textarea = document.querySelector(".escribirMensaje");
const mensaje = document.querySelector(".respuesta");
const copia = document.querySelector(".copiar");
/*copia.style.display = "none"*/


function botonEncriptar(){
    const textoEncriptado = encriptacion(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptacion(encriptacion){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encriptacion = encriptacion.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(encriptacion.includes(matrizCodigo[i][0])){
            encriptacion = encriptacion.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return encriptacion;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
}

function desencriptar(desencriptar){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    desencriptar = desencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(desencriptar.includes(matrizCodigo[i][1])){
            desencriptar = desencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return desencriptar;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}