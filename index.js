
$(document).scroll(function () {
    var position = window.scrollY;
    if(position>10){
        $(".navbar").addClass("afternav");
    }else{
        $(".navbar").removeClass("afternav");
    }
})