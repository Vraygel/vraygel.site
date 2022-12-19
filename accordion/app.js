
function slidesPlugin(slideIndex = 0){
    const slides = document.querySelectorAll('.slide')

slides[slideIndex].classList.add("active")

for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClasess()
        slide.classList.add('active')
    })
}

function clearActiveClasess(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

}

slidesPlugin(0)