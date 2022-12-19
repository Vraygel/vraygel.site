const question = document.querySelector('.question')
const answer = document.querySelector('.answer')
const buttonQuestion = document.querySelector('.button_question')
const buttonAnswer = document.querySelector('.button_answer')
const loginButton = document.querySelector('.login_button')
const wrapperIndex = document.querySelector('.index_wrapper')
const loginWrapper = document.querySelector('.login_wrapper')

const registrationButton = document.querySelector('.registration_button')
const registrationWrapper = document.querySelector('.registration_wrapper')


const newQuestionWrapper = document.querySelector('.new_question_wrapper')
const newQuestionButton = document.querySelector('.new_question_button')


const questionButton = document.querySelector('.question_button') 

function active() {
    document.querySelector('.active').classList.add('rotate_active')
    document.querySelector('.active').classList.remove('active')
    let rotate_active = document.querySelector('.rotate_active')
    let rotate_none = document.querySelector('.rotate_none')

    setTimeout(() => {
        rotate_active.classList.add('none')
        rotate_active.classList.remove('active')

        rotate_none.classList.add('active')
        rotate_none.classList.remove('none')

        rotate_active.classList.remove('rotate_active')
        rotate_none.classList.remove('rotate_none')
    }, 500);
}



loginButton.addEventListener('click', event =>{
    if(loginWrapper.classList.contains('active')){
        return
    }
    loginWrapper.classList.add('rotate_none')
    active()

})


registrationButton.addEventListener('click', event =>{
    if(registrationWrapper.classList.contains('active')){
        return
    }
    registrationWrapper.classList.add('rotate_none')
    
    active()
})

newQuestionButton.addEventListener('click', event =>{
    if(newQuestionWrapper.classList.contains('active')){
        return
    }
    newQuestionWrapper.classList.add('rotate_none')
    active()
})

questionButton.addEventListener('click', event =>{
    if(question.classList.contains('active')){
        return
    }
    question.classList.add('rotate_none')
    active()
})


buttonQuestion.addEventListener('click', event =>{
    if(answer.classList.contains('active')){
        return
    }
    answer.classList.add('rotate_none')
    active()
})

buttonAnswer.addEventListener('click', event =>{
    if(question.classList.contains('active')){
        return
    }
    question.classList.add('rotate_none')
    active()
})













