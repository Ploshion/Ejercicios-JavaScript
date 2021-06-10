//EJERCICIOS 1 Y 2

document.getElementById('formulario').addEventListener('submit', saveTask);

function saveTask (e) {
    
    let num1 = parseInt(document.getElementById('input1').value, 10)
    let num2 = parseInt(document.getElementById('input2').value, 10)

    let view = document.getElementById('resultado')

    console.log(num1)

   
    
    // const task = {
    //     num1,
    //     num2
    // };

    while(num1 <= 0 || num2 <= 0 || isNaN(num1) ||  isNaN(num2) ) {

    num1 = parseInt(document.getElementById('input1').value, 10)
    num2 = parseInt(document.getElementById('input2').value, 10)
    alert("Debes digitar solo números mayores a 0")
    alert.reset()

        }



if (num1 > num2) {
    view.innerHTML = `<div class="col-12">
 <input class="form-control" type="text"
 placeholder="El ${num1} es mayor y el ${num2} es menor y no son iguales" readonly>
 
 </div>`
 
} 
 else if (num1 < num2) {

    view.innerHTML = `<div class="col-12">
 <input class="form-control" type="text"
 placeholder="El ${num1} es menor y el ${num2} es mayor y no son iguales" readonly>
 </div>`
 
} else 
{
    view.innerHTML = `<div class="col-12">
 <input class="form-control" type="text"
 placeholder="El numero ${num1} es igual a el numero ${num2} " readonly>
 </div>`
 

}
 
   

e.preventDefault();

}

// TERMINA EJERCICIOS 1 Y 2

//-------------------------------------------------------------------------------------------------

//EJERCICIO 3
document.getElementById('Ejercicio3').addEventListener('submit', ejercicio3);

function ejercicio3 (ev) {
   

    let suma = 0;
    let contador = 0;

    let view = document.getElementById('E3resultado')

  
    
    do{
        
        var numero = parseInt(prompt("Introduce números a sumar, si deseas ver el resultado introduce un numero negativo",0));

             
        if(isNaN(numero)) {
            numero = 0;
    
        }else if(numero >= 0){
            suma += numero;
            contador++

            
            
        } 
        
        console.log(suma)
        console.log(contador)

        
    
    
        
 
    
         
    }while (numero >= 0) 

    media = suma / contador

   

    view.innerHTML = `<div class="col-12">
    <input class="form-control" type="text"
    placeholder="La suma es ${suma} y la media es ${media}" readonly>
    </div>`


    ev.preventDefault();
 
    
}


//TERMINA EJERCICIO 3


//-------------------------------




//EJERCICIO 4


document.getElementById('Ejercicio4').addEventListener('submit', ejercicio4);


function ejercicio4(e) {

    let numero1 = parseInt(document.getElementById('E4input1').value, 10)
    let numero2 = parseInt(document.getElementById('E4input2').value, 10)

   
    
    let E4view = document.getElementById('E4resultado')
   
    var numeros = []
     
    for(var i = numero1; i <= numero2; i++){

            //  document.write(i)
            numeros.push(i)
           

    }        
    
    console.log(numeros)

    E4view.innerHTML = `<div class="col-12">
    <input class="form-control" type="text"
    placeholder="Los numeros son ${numeros}">
    </div>`

    e.preventDefault();


}



//TERMINA EJERCICIO 4




//EJERCICIO 5

document.getElementById('Ejercicio5').addEventListener('submit', ejercicio5);


function ejercicio5(e) {

    let numero1 = parseInt(document.getElementById('E5input1').value, 10)
    let numero2 = parseInt(document.getElementById('E5input2').value, 10)


    let E5view = document.getElementById('E5resultado')
         
    numeros = []
    
   while(numero1 < numero2){
       numero1++

       if(numero1 % 2 != 0){

        numeros.push(numero1)
     
       }
      
   }     console.log(numeros) 

  
   
   E5view.innerHTML = `<div id="E5resultado" class="col-12">
   <p>${numeros} es Impar</p>    
   </div>`
    e.preventDefault();


}

//TERMINA EJERCICIO 5

//EJERCICIO 6

document.getElementById('Ejercicio6').addEventListener('submit', ejercicio6);


function ejercicio6(e) {

    let numero1 = parseInt(document.getElementById('E6input1').value, 10)
    
    let E6view = document.getElementById('E6resultado')
         
    numeros = []
  for(i = 1; i <= numero1; i++)
  {
    if(numero1 % i == 0){
        numeros.push(i)

    }
    
  }

  E6view.innerHTML = `<div id="E6resultado" class="col-12">
  <p>Los divisores son ${numeros} </p>    
  </div>`

 

  

  

    e.preventDefault();




}


//TERMINA EJERCICIO 6



//EJERCICIO 7

document.getElementById('Ejercicio7').addEventListener('submit', ejercicio7);


function ejercicio7(e) {

    let numero1 = parseInt(document.getElementById('E7input1').value, 10)
    
    let E7view = document.getElementById('E7resultado')
         
    console.log("mostrando valor ingresado "+ numero1 )



    if(isNaN(numero1)){
        alert(" En el ejercicio 7 Debes ingresar solo números")
    }
    else if(numero1 % 2 == 0){

        E7view.innerHTML = `<div id="E7resultado" class="col-12">
        <p>El ${numero1} es par </p>    
        </div>`
    } else {
        E7view.innerHTML = `<div id="E7resultado" class="col-12">
        <p>El ${numero1} es impar </p>    
        </div>`
    }

  

    e.preventDefault();

}

//TERMINA EJERCICIO 7

//EJERCICIO 8

document.getElementById('Ejercicio8').addEventListener('submit', ejercicio8);


function ejercicio8(e) {

    let numero1 = parseInt(document.getElementById('E8input1').value, 10)
    
    let E8view = document.getElementById('E8resultado')
         
    console.log("mostrando valor ingresado "+ numero1 )

   

    for(i = 1; i <= 10; i++)
    {   

        
        por = numero1 * i 
        console.log(numero1 +" Por " + i  +" = " + por)
        
    }
  

    e.preventDefault();

}


//TERMINA EJERCICIO 8

//EJERCICIO 9

document.getElementById('Ejercicio9').addEventListener('submit', ejercicio9);


function ejercicio9(e) {

    let numero1 = parseInt(document.getElementById('E9input1').value, 10)
    let numero2 = parseInt(document.getElementById('E9input2').value, 10)
    
    let E9view = document.getElementById('E9resultado')
         
    console.log("mostrando valor ingresado "+ numero1, numero2)

    
   
    let suma = (numero1 + numero2)
    console.log(suma)

    let resta = (numero1 - numero2)

    let multiplicar = (numero1 * numero2)

    let dividir = (numero1 / numero2)


    let resultado = "La suma es: "+suma + " <br/>"+
                    "La resta es: "+resta + " <br/>"+
                    "La multiplicar es: "+multiplicar + " <br/>"+
                    "La división es: "+dividir + " <br/>";

    let resultadocmd = "La suma es: "+suma + " \n "+
                    "La resta es: "+resta + " \n"+
                    "La multiplicar es: "+multiplicar + " \n"+
                    "La división es: "+dividir + " \n";

    
    console.log(resultadocmd)


    E9view.innerHTML = `<div id="E7resultado" class="col-12">
    <p>Este es el resultado ${resultado}  </p>    
    </div>`

    e.preventDefault();

}

//TERMINA EJERCICIO 9


// EJERCICIO 10 , 11  12 13


document.getElementById('Ejercicio10').addEventListener('submit',ejercicio10)

function ejercicio10(e) {

    numeros = []
   
    let E10view = document.getElementById('E10resultado')

    for(var i = 0; i <= 5; i++){
        numeros.push(parseInt(prompt("Introduce los 6 numeros a guardar", 0)))
        
    }

    

    E10view.innerHTML = `<div id="E10resultado" class="col-12">
    <p>Estos son los numeros ingresados ${numeros}, estos son los numeros ordenados ${numeros.sort()}, este los numeros invertidos ${numeros.reverse()} </p>    
    </div> `



    e.preventDefault()

}


//TERMINA EJERCICIO 10 11 12 y 13


// EJERCICIO 14

document.getElementById('Ejercicio14').addEventListener('submit',ejercicio14 )
function ejercicio14(e){

        let free = false

        

            const validar = () => {
                let edad = prompt('Cual es tu edad?')
        
                let hora = prompt('Que hora es?')
    
                if(edad >= 18) {
    
                        if(hora >= 2 && hora < 7 && free == false){
                        console.log("Puedes pasar y es gratis para ti por ser la primera persona luego de las 2")
                        free = true
                    }else    {
                        console.log("Puedes pasar pero tienes que pagar")
                        }
                } else {
                  console.log('No puedes pasar')  
                }
    
            }   
          
              
   

    

    validar()
    validar()
    validar()
    validar()
    validar()

    e.preventDefault()

}

// TERMINA EJERCICIO 14


// EJERCICIO 15


document.getElementById('Ejercicio15').addEventListener('submit', ejercicio15)

function ejercicio15 (e) {

    
    let cantidad = prompt('Cuantos alumnos son?')
    let alumnosTotales = []

    for (i = 0; i < cantidad; i++){
        alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0 ]

    }

    const tomarAsistencia = (nombre, p) => {
        let presencia = prompt(nombre)
        if(presencia == "p" || presencia == "p" ) {
            alumnosTotales[p][1]++
        }
    }

    for (i = 0; i < 5; i++){
        for (alumno in alumnosTotales) {
            tomarAsistencia(alumnosTotales[alumno][0], alumno)
        }
    }
    for(alumno in alumnosTotales) {
        let resultado = `${alumnosTotales[alumno][0]}:<br>
        __________Asistencias: ${alumnosTotales[alumno][1]} <br>
        __________Ausencias: ${5 - parseInt(alumnosTotales[alumno][1])}`


        if (5 - alumnosTotales[alumno][1] > 2){
                resultado+= "REPROBADO POR INASISTENCIA<br><br>"
        } else {
            resultado+= "<br><br>"
        }
        document.write(resultado)
    }




    e.preventDefault()

}
// TERMINA EJERCICIO 15

// EJERCICIO 16

document.getElementById('Ejercicio16').addEventListener('submit', ejercicio16)

function ejercicio16 (e) {

    class Calculadora { 

        sumar  (num1,num2){
            return parseInt(num1) + parseInt(num2)
        }

        restar  (num1,num2){
            return parseInt(num1) - parseInt(num2)
        }

        multiplicar  (num1,num2){
            return parseInt(num1) * parseInt(num2)
        }

        dividir  (num1,num2){
            return parseInt(num1) / parseInt(num2)
        }

        potenciar(num1,exp){
            let numero = num
            // for(var i = 0; i < exp; i++){
            //     numero = numero * num
            // }
            return num**exp
        }

    }

    const calculadora = new Calculadora()
  
    let operación = prompt('Que operación deseas realizar? 1: Suma, 2: resta, 3: multiplicar, 4: dividir, 5: Potenciación')

    if(operación == 1){
        let num1 = prompt('Digite el numero uno a sumar')
    
        let num2 = prompt('Digite el numero uno a sumar')

        resultado = calculadora.sumar(num1,num2)
        alert(`El resultado es ${resultado}`)
        
    }else if(operación == 2){
        let num1 = prompt('Digite el numero uno a restar')
    
        let num2 = prompt('Digite el numero uno a restar')

        resultado = calculadora.restar(num1,num2)
        alert(`El resultado es ${resultado}`)
        
    }else if(operación == 3){
        let num1 = prompt('Digite el numero uno a multiplicar')
    
        let num2 = prompt('Digite el numero uno a multiplicar')

        resultado = calculadora.multiplicar(num1,num2)
        alert(`El resultado es ${resultado}`)
        
    }else if(operación == 4){
        let num1 = prompt('Digite el numero uno a dividir')
    
        let num2 = prompt('Digite el numero uno a dividir')

        resultado = calculadora.dividir(num1,num2)
        alert(`El resultado es ${resultado}`)
        
    } else if {
        
    }

    e.preventDefault()
}

// TERMINA EJERCICIO 16

// EJERCICIO 17

document.getElementById('Ejercicio17').addEventListener('submit', ejercicio17)

function ejercicio17 (e) {

    let E17view = document.getElementById('E17resultado')

    class Celular {
        constructor(color, peso, tamaño, rdc, ram  ){
            this.color = color
            this.peso = peso
            this.tamaño = tamaño
            this.resoluciónDeCámara = rdc
            this.ram = ram
            this.encendido = false

        }

        presionarBotonEncendido() {
            if(this.encendido == false){
                alert("celular prendido")
                this.encendido = true
            } else {
                alert("Celular apagado")
                this.encendido = false
            }
        }

        reiniciar() {
            if (this.encendido == true){
                alert("Reiniciando Celular")
            } else {
                alert("El celular esta apagado")
            }
        }

        tomarFoto() {
            alert(`Foto tomada en una resolución de: ${this.resoluciónDeCámara}`)
        }

        grabarVideo() {
            alert(`Video grabado en una resolución de: ${this.resoluciónDeCámara}`)
        }
        mostrarInfo(){
            return `
            Color: <b>${this.color}</b></br>
            Peso: <b>${this.peso}</b></br>
            Tamaño: <b>${this.tamaño}</b></br>
            Resolución de Cámara: <b>${this.resoluciónDeCámara}</b></br>
            Memoria Ram: <b>${this.ram}</b></br>

            `
        }

   }


   class CelularAltaGama extends Celular{
       constructor(color, peso, tamaño, rdc, ram, rdce){
            super(color, peso, tamaño, rdc, ram)
            this.resoluciónDeCámaraExtra = rdce
       }
       
     

     grabarVideoLento(){
         alert("Video Grabado en modo lento")
     }

     reconocimientoFacial(){
         alert("Iniciando Reconocimiento Facial")
     }

     mostrarInfoGamaAlta(){
        return `
        <b>Celular de Alta Gama</b> </br>
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Cámara: <b>${this.resoluciónDeCámara}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>
        Resolución de Cámara Extra: <b>${this.resoluciónDeCámaraExtra}</b></br>

        `
     }
     

   }
  
   


   celular1 = new Celular("rojo","150g","5'"," HD","2GB")
   celular2 = new Celular("azul","150g","5'","Full HD ","4GB")
   celular3 = new Celular("gris","150g","5'","2K","6GB")

   celular4 = new CelularAltaGama("negro","160g","6'","HD","6GB","4k")
   celular5 = new CelularAltaGama("blanco","165g","5.8'","HD","8GB","4k")

   
   E17view.innerHTML = `<div id="E17resultado" class="col-12">
    <p>Estos son los 3 celulares </br>
     Celular 1:</br>
     ${celular1.mostrarInfo()}</br>
     Celular 2: </br>
     ${celular2.mostrarInfo()}</br>
     Celular 3: </br>
     ${celular3.mostrarInfo()}</br> 
     
     Celular 4:</br>
     ${celular4.mostrarInfoGamaAlta()}</br>
     Celular 5:</br>
     ${celular5.mostrarInfoGamaAlta()}</br>
     
     
     </p>   

    </div> `

   celular1.presionarBotonEncendido()
   celular1.tomarFoto()
   celular1.grabarVideo()
   celular1.reiniciar()
   celular1.presionarBotonEncendido()


    e.preventDefault()
}

// TERMINA EJERCICIO 17

// EJERCICIO 18

document.getElementById('Ejercicio18').addEventListener('submit', ejercicio18)

function ejercicio18 (e){

    let E18view = document.getElementById('E18resultado')
 

    class App {
        constructor(descargas, puntuación, tamaño){
            this.descargas = descargas
            this.puntuación = puntuación
            this.tamaño = tamaño
            this.iniciada = false
            this.instalada = false
        }

        instalar() {
            if(this.instalada == false){
                this.instalada = true
                alert("Se ha instalado la App")
    
            }
        }

         desinstalar() {
            if(this.instalada == true){
                this.instalada = false
                alert("Se ha desinstalado la App")
    
            }
        }

        abrir() {
            if(this.iniciada == false && this.instalada == true){
                this.iniciada = true
                alert("Se ha abierto la app")
            }
        }

        cerrar() {
            if(this.iniciada == true && this.instalada == true){
                this.iniciada = false
                alert("Se ha cerrado la app")
            }
        }

        info(){
            return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuación}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
         `
        }
    }

    app = new App("1.5k","4","500mb")
    app2 = new App("2k","3.5","800mb")
    app3 = new App("3k","4.3","600mb")

    // app.instalar()
    // app.abrir()
    // app.cerrar()
    // app.desinstalar()
    
    E18view.innerHTML = `<div id="E18resultado" class="col-12">
    <p>Estos son las 3 Apps </br></br>
    
    App numero 1</br>
    ${app.info()}
    </br>
    App numero 1</br>
    ${app2.info()}
    </br>
    App numero 1</br>
    ${app3.info()}    
     
     </p>   

    </div> `




    e.preventDefault()
}