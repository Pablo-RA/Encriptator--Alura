const inputTexto = document.querySelector(".inputTexto");
const mensaje = document.querySelector(".mensaje")

/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

**Requisitos:**
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada 
también devolver una palabra encriptada para su versión original. */

function botonEncriptar() {
    const textoEncriptado = encriptar (inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage ="none";
    inputTexto.value = " ";
}
function botonDesencriptar() {
    const textoEncriptado = desencriptar (inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage ="none";
    inputTexto.value = " ";
}

function encriptar (stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 1; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]);
        }    
    }
    return stringEncriptada;
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 1; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]);
        }    
    }
    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value =" ";
    alert ("¡El texto fue copiado exitosamente!")
}
//function pegar (){} para el cuadro mensaje encriptado
function pegar () {
    document.querySelector(".pegar").addEventListener("click", function() {
        navigator.clipboard.readText()
            .then(text => {
                document.querySelector(".inputTexto").value = text;
            })
            .catch(err => {
                console.error('Error al leer el portapapeles: ', err);
            });
    });
}    
