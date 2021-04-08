$(document).ready(function(){



    var next =$('.next');
    var prev = $('.prev');


    next.click(function(){
        slider('next');
    });

    prev.click(function(){
        slider('prev');
    });

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

function slider(direction){

    var active = $('.images img.active');
    var activeCircle = $('.nav i.active');

    active.removeClass('active');
    activeCircle.removeClass('active');


    if(direction === 'next'){

        if(active.hasClass('last')){
            $('.images img.first ').addClass('active');
            $('nav i.first').addClass('active');
        }
        
        active.next('img').addClass('active');
        activeCircle.next('i').addClass('active');



    }else if(direction === 'prev'){
        active.prev('img').addClass('active');
        activeCircle.prev('i').addClass('active');

    }
}
