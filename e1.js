//window.onload= function(){}
//con JQUERY 
/*

PARA ESCRIBIR DENTRO DE UN ID EN EL HTML

$("#caja").html("con JQuery la vida es mejor");

$("div"); SELECCIONAR ETIQUETAS
$("#caja"); SELECCIONAR ID
$(".div"); SELECCIONAR CLASES

*/

/*

METODOS MÁS UTILIZADOS

html()
hide()
show()


 */




    //$("#fecha").html(new Date());
    
//SI PONGO EL WINDOW ONLOAD NO ME FUNCIONA LA FUNCION SEGUNDOS ()

$(function(){
    $("#fecha").append("<ul><li></li><p>:</p><li></li><p>:</p><li></li></ul>");
    setInterval(function(){

        let fechita = new Date();
        let horitas=('0' + fechita.getHours()).slice(-2);
        let minutitos= ('0' + fechita.getMinutes()).slice(-2);
        let segunditos= ('0' + fechita.getSeconds()).slice(-2);
        
    
    let dia= fechita.getDay();

    switch(dia){
      

        case 1:
        dia= "Monday ";
        break; 

        case 2:
        dia= "Tuesday";
        break; 

        case 3:
        dia= "Wednesday";
        break; 

        case 4:
        dia= "Thursday";
        break; 

        case 5:
        dia= "Friday";
        break; 

        case 6:
        dia= "Saturday";
        break; 

        case 7:
        dia= "Sunday";
        break; 
    }

        $("li:first-child").html(horitas);
        $("li:nth-of-type(2)").html(minutitos);
        $("li:last-child").html(segunditos);
        $("#day").html(dia);
    }, 1000)

        //BORDE DE COLOR

        let line= document.querySelector("ul");
        const randomColor = () => '#' + Math.random().toString(16).substr(-6)
        const changeColorLine = () => line.style.borderColor = randomColor()
    
      
    
        //setInterval(() => {
            //changeColorSecondLi()
            //}, 60000)
    
        setInterval(() => {
            changeColorLine()
            }, 1000)

})
    

    
    

    
    /*function colores(){

        function randomColor(){
            '#' + Math.random().toString(16).substr(-6);}

        let changeColor = document.body.style.backgroundColor = randomColor()
    
    }

        setInterval(colores(), 1000)*/


            
         

       
        



        /*let i= 0;

        if(i<60){

            for(i=0; i>=60; i++){
                //METER AQUÍ LA MOVIDA HEXADECIMAL 
                //PARA QUE SE CAMBIE EL COLOR DE
                //FONDO DE LOS NUMEROS.
            }
        }
        else if (i>=60){
            for(i=60; i<=0; i--){
                //METER AQUÍ LA MOVIDA HEXADECIMAL 
                //PARA QUE SE CAMBIE EL COLOR DE
                //FONDO DE LOS NUMEROS.
            }
        }
        
    }*/
   
    


/*
let fecha;
let elem= document.getElementById("elem1");


function secondos(){
    fecha= new Date();
    let hora= fecha.getHours() + " " + fecha.getMinutes() + " " + fecha.getSeconds(); 
    elem.innerHTML= hora;
}



setInterval("secondos()", 1000); */