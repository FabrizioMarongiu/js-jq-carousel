$(document).ready(function(){


//DICHIARAZIONE VARIABILI IMPORTATE DALL'HTML
    var next =$('.next');
    var prev = $('.prev');


    next.click(function(){
        slider('next');
    });

    prev.click(function(){
        slider('prev');
    });

    //UTILIZZO TASTI
    $(document).keydown(function(e){
        console.log(e);
        console.log(e.keyCode);
        
        if(e.keyCode === 39){
            slider('next');

        }else if(e.keyCode === 37){
            slider('prev');
        }
    
    });
    //end document
});







/**********************************************************
 * FUNCTIONS
 * *******************************************************/
//FUNZIONE UNICA PER PERMETTERE DI SCORRERE INDIETRO O AVANTI NELLE SLIDE

function slider(direction){

    var active = $('.images img.active');
    var activeCircle = $('.nav i.active');

    active.removeClass('active');
    activeCircle.removeClass('active');

    //NEXT
    if(direction === 'next'){

        if(active.hasClass('last')){
            $('.images img.first ').addClass('active');
            $('.nav i.first').addClass('active');
        }else{
            active.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
    }
    
    //PREV
    else if(direction === 'prev'){

        if(active.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }else{
            active.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }
};
