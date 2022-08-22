$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({
        fullWidth: true
    });
    $('.parallax').parallax();
    $('.myreviews').carousel({
        myVisible:7,
        shift:25,
        padding:55,
    });
   
})

function toggleModal(){
    var instance = M.Modal.getInstance($("#modal3"))
    instance.open();
}
