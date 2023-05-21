const divContenedorImg = document.querySelector("#contenedor-imagen");
const inputImagen = document.querySelector("#cant-imagen");

const IMG_1 = "https://th.bing.com/th/id/OIP.nEAFovvpQ8YfkhDPhHmS_QAAAA?pid=ImgDet&rs=1";

function generarImagen() {
   
    let cantImg = inputImagen.value;
    divContenedorImg.innerHTML="";
    
    for (let i = 0; i < cantImg; i++) {
        divContenedorImg.innerHTML +=
            `<img src="${IMG_1}" alt="img">`;

    }
} 