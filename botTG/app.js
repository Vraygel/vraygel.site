// let input_tg = document.querySelectorAll('.input_tg')
// const tel = document.querySelector('.tel');
// const email = document.querySelector('.email');

const textarea_message = document.querySelector('.textarea_message');




const TOKEN = '6165421106:AAF9Yqjw_AR1motp4LilFaQblZp5uxFe0t4'
const CHAT_ID = '-1001849912973'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const TEL_REGEXP = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

// for (const iterator of input_tg) {
//     console.log(iterator.value);
//     iterator.value.trim()
// }

// email.addEventListener('input', () => {
//     if (isEmailValid(email.value)) {
//         email.style.background = '#80ffdb';
//     } else {
//         email.style.background = '#ff006e';
//     }
// });

// tel.addEventListener('input', () => {
//     if (validatePhone(tel.value)) {
//         tel.style.background = '#80ffdb';
//     } else {
//         tel.style.background = '#ff006e';
//     }
// });

// function isEmailValid(value) {
//     return EMAIL_REGEXP.test(value);
// }

// function validatePhone(value) {
//     return TEL_REGEXP.test(value);
// }





document.getElementById('tg').addEventListener('submit', function (event) {
    event.preventDefault();
    // if (isEmailValid(this.email.value) && validatePhone(this.tel.value) && this.LastName.value != null && this.Name.value != null) {


    if (this.message.value != '') {
        let message = ``
       
        message += `<b>${this.message.value}$</b>\n`

        
   
        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
            .then((res) => {
                this.message.value = ''
                // this.Name.value = ''
                // this.LastName.value = ''
                // this.tel.value = ''
                // this.email.value = ''
                alert('сообщение успешно отправлено')
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => {
                console.log('Конец');
            })
        // removebackground()
    } else {
        alert('сообщение не может быть пустым')
    }
})

// function removebackground() {
//     tel.style.background = '#fff';
//     email.style.background = '#fff';
// }
