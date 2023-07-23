
$(document).scroll(function () {
    var position = window.scrollY;
    if (position > 10) {
        $(".navbar").addClass("afternav");
    } else {
        $(".navbar").removeClass("afternav");
    }
})



const buttons = document.querySelectorAll(".carousel-btn");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.getAttribute("data-btn") === "next" ? 1 : -1;
        const slides = document.querySelectorAll(".project");
        const activeSlide = document.querySelector("[data-active]");
        const rightSlide = document.querySelector("[data-right]");
        const leftSlide = document.querySelector("[data-left]");
        const slideArray = [...slides];
        const indexActive =slideArray.indexOf(activeSlide)+direction;
        const indexRight =slideArray.indexOf(rightSlide)+direction;
        const indexLeft =slideArray.indexOf(leftSlide)+direction;
        const index = [indexLeft ,indexActive ,indexRight];
        index.forEach((i,j) =>{
            if (i < 0 ){
                index[j] = slideArray.length-1;
            }else if(i>=slideArray.length){
                index[j]=0;
            }
        })

        slideArray[index[1]].dataset.active = true ;
        slideArray[index[2]].dataset.right = true ;
        slideArray[index[0]].dataset.left = true ;
        delete slideArray[indexActive-direction].dataset.active;
        delete slideArray[indexRight-direction].dataset.right;
        delete slideArray[indexLeft-direction].dataset.left;
        
    })
})