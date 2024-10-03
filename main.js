let cantidad = document.querySelector('#cantidad')
let boton = document.querySelector('#generar')
let contraseña = document.querySelector('#contrasena')

const cadenacaracteres = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopñlkjhgfdsazxcvbnm012345678'

function generar() {

    let numerodigitado = parseInt(cantidad.value)
    if(numerodigitado < 6) {
    alert('La cantidad minima de caracteres debe ser 6')
    }
    else{
        let password = ''
        for (let index = 0; index < numerodigitado; index++) {
            let caracteraleatorio = cadenacaracteres[Math.floor(Math.random() * cadenacaracteres.length)]
            password+=caracteraleatorio

        
    }
    contraseña.value = password
    }
}









