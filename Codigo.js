const main = () => {

	let element = document.querySelector(".container");
	console.log(elemet);
    
}

const cambiarColor1 = () => {

	let element = document.querySelector(".container");
	element.classList.add("estilo1");
}
  

const cambiarColor2 = () => {

	let element = document.querySelector(".container");
	element.classList.add("estilo2");
}
  

const cambiarColor3 = () => {

	let element = document.querySelector(".container");
	element.classList.add("estilo3");
}
 
 const removerEstilos = () => {

	let element = document.querySelector(".container");
	element.classList.remove("estilo1", "estilo2", "estilo3");
} 

 

function mostrar(){

   document.getElementById("fun").style.display = "Block";
}


 function ocultar(){

   document.getElementById("fun").style.display = "none";
}


function Mostrar_Ocultar(){
     var fun =document.getElementById("fun");

     if (fun.style.display == "none"){
     	mostrar();
        document.getElementById("boton").value ="Ocultar";
     }
     else{
     	ocultar();
     	document.getElementById("boton").value ="Mostrar";
     }

}





function mostrar1(){

   document.getElementById("funone").style.display = "Block";
}


function ocultar1(){

   document.getElementById("funone").style.display = "none";
}


function Mostrar_Ocultar1(){
     var funone =document.getElementById("funone");

     if (funone.style.display == "none"){
     	mostrar1();
        document.getElementById("botonone").value ="Ocultar";
     }
     else{
     	ocultar1();
     	document.getElementById("botonone").value ="Mostrar";
     }

}





function mostrar2(){

   document.getElementById("funtwo").style.display = "Block";
}


function ocultar2(){

   document.getElementById("funtwo").style.display = "none";
}



function Mostrar_Ocultar2(){
     var funtwo =document.getElementById("funtwo");

     if (funtwo.style.display == "none"){
     	mostrar2();
        document.getElementById("botontwo").value ="Ocultar";
     }
     else{
     	ocultar2();
     	document.getElementById("botontwo").value ="Mostrar";
     }

}








function mostrar3(){

   document.getElementById("funthree").style.display = "Block";
}


function ocultar3(){

   document.getElementById("funthree").style.display = "none";
}


function Mostrar_Ocultar3(){
     var funthree =document.getElementById("funthree");

     if (funthree.style.display == "none"){
     	mostrar3();
        document.getElementById("botonthree").value ="Ocultar";
     }
     else{
     	ocultar3();
     	document.getElementById("botonthree").value ="Mostrar";
     }

}
