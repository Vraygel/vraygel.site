.active{
    z-index: 10;
}


question.addEventListener('click', (even) => toggle())

answer.addEventListener('click', (even) => toggle())


function toggle() {
    question.classList.toggle('active')
    answer.classList.toggle('active')
}