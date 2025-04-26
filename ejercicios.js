console.log(eval(new String("2+2")));// devuelve un objeto String que contiene "2+2"
console.log('\n');
console.log(eval("2+2"));  //Devuelve 4


var nombre="Hola Mundo";
console.log(nombre)

var variable="nombre";
let nombre2;
nombre2 = "Camilo";
const apellido ="Rocha";
console.log(apellido, nombre2)
let nombrecompleto2="Sebastian Vanegas";
let nombreCompleto2="Camilo Rocha";
console.log(nombrecompleto2,nombreCompleto2)

let _1654= "Paula";
let $fdgth="124578";
let a34456="5";
console.log(_1654,$fdgth,a34456)

let x,y;
x=3;
y=6;
console.log(x,y)

var bandera=true;
console.log(bandera)
var z =undefined;
console.log(z)

var objeto= {nombre:"Paula",apellido:"Vargas",telefono:"3174569505"}
console.log(objeto.nombre)
console.log(objeto)

//Array
var autos=['BMW','Audi','Volvo'];
console.log(autos[0],autos[1],autos[2], autos[3])

function myfuncion(){

}
class persona{
    constructor(nombre,apellido){
        this.apellido=apellido;

    }
}

//suma
let a=3;
let b=2;
let p=a+b;
console.log(p);

//Resta
p= a-b;
console.log(p);

//Multiplicacion
n= a*b;
console.log(n);
//Division
f= a/b;
console.log(f);

//Modulo
m= a%b;
console.log(m);

//Exponente
t= a**b;
console.log(t);

//Variables
let r =3; y=4;
let sum= x+y;

//Incremento 
sum=++r;

//Decremento
sum =y++;

let i=0;
console.log(i++)

let j=0;
console.log(j++);
console.log(j);
console.log(j++);
console.log(j);

//Operadores de asignacion
let h=1;

//Asignacion compuesto
h +=3; //a=a+3   
h -=2; //a=a-2
h *=2; //a=a*2
h /=2; //a=a/2
h %=2; //a=a%2
h **=2; //a=a**2


//Operador de comparacion
let ñ =3; b=2, c="3", d=3;
 let o = (ñ==b); 
 o = (a==c);
console.log(o);
 //Operador de igualdad estricta
 let v = (a===c);
 v=(a===d);
 console.log(v);

 //Operador de desigualdad
 let w = (a!=c);
 w=(a!=d);
 console.log(w);

 //Operador de desigualdad estricta 
 let l = (a!==c);
 l=(a!==d);
 console.log(l);

 //Operador de mayor
 let s = (a>b);
 m=(a>c);
 console.log(s);

 //Operador de menor

//Funciones Declaradas:LLama la palabra reservada,la declara y sus valores 
 function mifuncion(a,b){
console.log("suma: "+ (a+b));
 }

function suma(num1,num2){
    let resultado = num1+num2;
    return resultado;
}
mifuncion(4,5);
console.log(suma(4,3));

function saludo(){
    let a="holamundo";
    return "holamundo";
}
console.log(saludo())

//Funciones Expresadas se denominan anonimas "la variable no tiene nombre"
let x1 = function (a,b){return a+b};
let resultado = x1(4,5);
console.log(resultado);

//Funcion recursiva es una funcion que se llama a si misma
const factorial = function fac(n){
    return n<2?1: n*fac(n-1);
}
console.log(factorial(4));

//Funcion flecha
const sumarFuncionFlecha = (num1,num2)=>num1+num2;
resultado=sumarFuncionFlecha(4,5);
console.log(resultado);

//Funcion Declarada
function mifuncion(a,b){
    console.log("resta: "+ (a-b));
     }
    
    function resta(num1,num2){
        let resultado = num1-num2;
        return resultado;
    }
    mifuncion(4,5);
    console.log(resta(4,3));
    
    //Funcion Expresada
    
    let restar = function (a,b){
        return a-b
    };
    let resultado2 = restar(2,2);;
     console.log(resultado2);

     //Funcion Flecha 
     const restarFuncionFlecha = (num1,num2)=>num1-num2;
     resultado=restarFuncionFlecha(8,5);
     console.log(resultado);


     //TRABAJO CLASE

     //Funcion Declarada
function mifuncion(a,b){
    console.log("division: "+ (a/b));
     }
     
    
    function division(num1,num2){
        let resultado = num1/num2;
        return resultado;
    }
    mifuncion(2,8);
    console.log(division(0,0));



    //Actividad 11/04/2025

    const obtenerMayor = (numeros) => {
        if (numeros.length === 0) {
          return undefined ;
        }
        else{
            return Math.max(...numeros); 
        }
      }

      console.log(obtenerMayor([5, 7, 2, 8]));
      console.log(obtenerMayor([]));


      //Semantica de objetos
      let personas={
        nombre:"Paula",
        apellido:"Vargas",
        telefono:"3174569505",
        email:"cerocha@u.edu.co",
        edad: 18,
        nombreCompleto: function (){return this.nombre+' ' +this.apellido}
      }
      for (nombrepersonas in personas){
        console.log(nombrepersonas);
        console.log(personas[nombrepersonas])
      }
      console.log(personas.apellido)
      console.log(personas.nombreCompleto()) 
      //Agregar un nuevo campo
      personas.tel=3456789;
      console.log(personas.tel);


      let persona3 = new Object ();
      persona3.apellido="Vargas";
      persona3.nombre="Paula";
      console.log(persona3.apellido);
      console.log(persona3.nombre);


      let personaString = JSON.stringify(personas);
      console.log(personaString);
      

    //Objeto literal con formato Jeison y método

      let cliente1={
        nombre:"Juan",
        edad:30,
        saludar: function(){ return ("Hola" + cliente1.nombre);}
      }
      console.log(cliente1.saludar())


      function fSaludar (nombre){
        return("Hola" + nombre);    
      };
      let cliente2={
        saludar:fSaludar
      };
      cliente2.saludar("Santi");
      console.log(cliente2.saludar("Santi"));

      //Closure: función anónima podemos crear propiedades y métodos privados
      let constructor = function (precio){
        let miObjeto={
            precioBase: precio,
            iva:1.21,
            calcularIva:function (){ return(this.precioBase*this.iva);
            }
        };
        return miObjeto;
      };
      precio1= constructor(100);
      console.log(precio1.calcularIva());


    function miFuncion(){
        let count = 1
        function contador(){
            return (count)
        }
        return contador() //imprime1
        
    }
    console.log(miFuncion())
    

    var x2 =10;
    function foo(){
        var y= 20;
        function bar(){
            var z = 15;
            var output = x+y+z;
            return output;
    
        }
        return bar();
        
        console.log(output);
    
    }
