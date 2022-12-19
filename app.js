// const dropbtn = document.querySelectorAll('.dropbtn')
// const dropdownContent = document.querySelectorAll('.dropdown-content')

// console.log(dropdownContent)

// dropbtn.forEach((item, index) => {
//     if (index == 0) {
//         return
//     }
//     item.addEventListener('mouseover', (event) => {

//         let animated = ['animated', 'infinite', 'bounceInLeft', 'delay-1s', 'slow']

//         animated.forEach((item) => {
//             event.target.nextElementSibling.classList.add(`${item}`)
//         })
//         event.target.nextElementSibling.classList.add('active')
//         setTimeout(() => {
//             event.target.nextElementSibling.className = ('dropdown-content active')
//         }, 1000);
//     })


//     item.addEventListener('mouseout', (event) => {
//         if (event.target.nextElementSibling.classList.contains('active')) {
//             return
//         }
//         console.log(event.target.nextElementSibling.classList.contains('active_a'))
//         let animated = ['animated', 'infinite', 'bounceOutLeft', 'delay-1s', 'slow']
//         animated.forEach((item) => {
//             event.target.nextElementSibling.classList.add(`${item}`)
//         })
//         setTimeout(() => {
//             event.target.nextElementSibling.className = ('dropdown-content')
//         }, 1000);
//     })
// })


// dropdownContent.forEach((item) => {
//     console.log(item)
//     item.addEventListener('mouseover', (event) => {
//         event.target.parentElement.classList.add('active')
//         event.target.parentElement.classList.add('active_a')
        
//     })





//     item.addEventListener('mouseout', (event) => {
//         let animated = ['animated', 'infinite', 'bounceOutLeft', 'delay-1s', 'slow']
//         animated.forEach((item) => {
//             console.log(event.target.parentElement)
//             event.target.parentElement.classList.add(`${item}`)
//         })
//         setTimeout(() => {
//             event.target.parentElement.className = ('dropdown-content')
//         }, 1000);
//     })
// })

