$("#send").click(function(){   
        var user = $("#user").val();
        var pass = $("#pass").val();        
        if(user =='kael74' & pass =='admin'){
            window.location.href='Inicio.html';
        }else{        
        if(user == '' & pass == ''){
            $("#notice2").removeClass('hidden');
        }else{
            $("#notice1").removeClass('hidden');
        }
        }       
});

$("#user").click(function(){
    $("#notice2").addClass('hidden');
    $("#notice1").addClass('hidden');
});
$("#pass").click(function(){
    $("#notice2").addClass('hidden');
    $("#notice1").addClass('hidden');
});