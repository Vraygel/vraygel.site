
let offer_a = document.querySelectorAll('.offer_a') // находим кнопки "предложение"
let contacts_a = document.querySelectorAll('.contacts_a') // находим кнопки "контакты"
let portfolio_a = document.querySelectorAll('.portfolio_a') // находим кнопки "портфолио"
let animated = document.querySelector('.animated')
let span = document.querySelectorAll('span')
let nav = document.querySelectorAll('.nav')

let up = document.querySelector('.up')

let content = document.querySelector('.content')

let offer = document.querySelector('.offer') // находим страницу "предложение"
let contacts = document.querySelector('.contacts_content') // находим страницу "Контакты"
let portfolio = document.querySelector('.portfolio') // находим страницу "Портфолио"
let section = document.querySelector('.section') // находим блок "section"
let logo = document.querySelectorAll('.logo')// находим все дочерние элементы блока logo

let header = document.querySelector('.header') // находим header
let index = document.querySelector('.index') // находим index (контент главной страницы)



for (const iterator of offer_a) {
	iterator.addEventListener('click', () => { // навешиваем событие "клик"
		offer.classList.add('active_block')
		section.classList.add('active_block')
		header.classList.remove('active_block')
		index.classList.remove('active_flex')
		portfolio.classList.remove('active_block')
		contacts.classList.remove('active_block')
		window.scrollTo(0, 0)
		addActiveClass()
	})
}

for (const iterator of portfolio_a) {

	iterator.addEventListener('click', () => { // навешиваем событие "клик"
		portfolio.classList.add('active_block')
		section.classList.add('active_block')
		header.classList.remove('active_block')
		index.classList.remove('active_flex')
		offer.classList.remove('active_block')
		contacts.classList.remove('active_block')
		window.scrollTo(0, 0)
		addActiveClass()
	})
}

for (const iterator of contacts_a) {
	iterator.addEventListener('click', () => { // навешиваем событие "клик"
		contacts.classList.add('active_block')
		section.classList.add('active_block')
		header.classList.remove('active_block')
		index.classList.remove('active_flex')
		portfolio.classList.remove('active_block')
		offer.classList.remove('active_block')
		window.scrollTo(0, 0)
		addActiveClass()
	})
}

for (const iterator of logo) {
	let logoChildren = iterator.children
	for (const iterator of logoChildren) {
		iterator.addEventListener('click', () => { // навешиваем событие "клик"
			header.classList.add('active_block')
			index.classList.add('active_flex')
			contacts.classList.remove('active_block')
			section.classList.remove('active_block')
			portfolio.classList.remove('active_block')
			offer.classList.remove('active_block')
			window.scrollTo(0, 0)
		})
	}
}

window.addEventListener('resize', () => {
	if (document.documentElement.clientWidth < 1023) {
		animated.classList.add('bounceInLeft')
		animated.classList.add('delay-2s')
		animated.classList.add('faster')

	}
	if (document.documentElement.clientWidth > 1023) {
		animated.classList.remove('bounceInLeft')
		animated.classList.remove('delay-2s')
		animated.classList.remove('faster')
	}
}, true);

window.addEventListener('load', () => {
	let i = 0
	for (const iterator of span) {
		iterator.style.display = 'block'

		iterator.classList.add('fadeInUp')
		iterator.classList.add(`delay-${i}s`)
		iterator.classList.add('faster')
		iterator.classList.add('animated')
		i = i + 1
	}

	if (document.documentElement.clientWidth < 1023) {
		animated.classList.add('bounceInLeft')
		animated.classList.add('delay-2s')
		animated.classList.add('faster')

	}
	if (document.documentElement.clientWidth > 1023) {
		animated.classList.remove('bounceInLeft')
		animated.classList.remove('delay-2s')
		animated.classList.remove('faster')

	}
})

let p = content.querySelectorAll('p')
let img = content.querySelectorAll('img')

const viewportHeight = window.innerHeight
window.addEventListener('scroll', () => {

for (const iterator of nav) {
		// console.log(window.innerHeight); 
		if (iterator.getBoundingClientRect().bottom <= viewportHeight - 250) {
			up.classList.add('active_block')
		} else{
			up.classList.remove('active_block')
		}
	
}

	// for (const iterator of p) {

	// 	if (iterator.getBoundingClientRect().top < viewportHeight) {

	// 		if (iterator.classList.contains('active_block_p')) {
	// 			continue
	// 		}

	// 		iterator.classList.add('bounceInLeft')
	// 		iterator.classList.add('animated')
	// 		iterator.classList.add('faster')
	// 		iterator.classList.add('active_block_p')
	// 	}

	// 	if (iterator.getBoundingClientRect().top > viewportHeight) {

	// 		iterator.classList.remove('bounceInLeft')
	// 		iterator.classList.remove('animated')
	// 		iterator.classList.remove('faster')
	// 		iterator.classList.remove('active_block_p')

	// 	}
	// }
	// for (const iterator of img) {
		
	// 	if (iterator.getBoundingClientRect().top < viewportHeight) {

	// 		if (iterator.classList.contains('active_block_img')) {
	// 			continue
	// 		}

	// 		iterator.classList.add('bounceInLeft')
	// 		iterator.classList.add('animated')
	// 		iterator.classList.add('faster')
	// 		iterator.classList.add('active_block_img')
	// 	}

	// 	if (iterator.getBoundingClientRect().top > viewportHeight) {

	// 		iterator.classList.remove('bounceInLeft')
	// 		iterator.classList.remove('animated')
	// 		iterator.classList.remove('faster')
	// 		iterator.classList.remove('active_block_img')

	// 	}
	// }

})

up.addEventListener('click', () => {
	window.scrollTo(0, 0)
}) 



function addActiveClass() {
	

for (const iterator of p) {

	iterator.classList.remove('active_block_p')

	if (iterator.getBoundingClientRect().top < viewportHeight) {
		iterator.classList.add('active_block_p')

	}
}


for (const iterator of img) {

	iterator.classList.remove('active_block_img')

	if (iterator.getBoundingClientRect().top < viewportHeight) {
		iterator.classList.add('active_block_img')

	}
}




}























// let buttonOffer = document.querySelectorAll('.button_offer')
// let buttonPortfolio = document.querySelectorAll('.button_portfolio')
// let buttonContacts = document.querySelectorAll('.button_contacts')
// let main = document.querySelector('.main')
// let offer = document.querySelector('.offer')
// let portfolio = document.querySelector('.portfolio')
// let contacts = document.querySelector('.contacts')
// let animated = document.querySelectorAll('.animated')
// let ul = document.querySelector('ul')
// let ham3 = document.querySelector('.ham3')


// ul.addEventListener('click', () => {
// 	console.log('sdfsdf');
// 	ul.classList.add('active')
// })

// ham3.addEventListener('click', () => {
// 	console.log('sdf sdf');
// 	// ul.style.display = 'block'
// 	ul.classList.toggle('active')
// })


// for (const item of animated) {
// 	item.addEventListener('mouseover', () => {
// 		item.classList.add('pulse')
// 		item.classList.add('slow')
// 	})

// 	item.addEventListener('mouseout', () => {
// 		item.classList.remove('pulse')
// 		item.classList.remove('delay-1s')
// 		item.classList.remove('slow')
// 	})
// }

// let allChildrenMain = main.children
// for (const item of buttonOffer) {
// 	item.addEventListener('click', () => {
// 		for (const item of allChildrenMain) {
// 			item.classList.remove('active')
// 		}
// 		offer.classList.add('active')
// 	})
// }

// for (const item of buttonPortfolio) {
// 	item.addEventListener('click', () => {
// 		for (const item of allChildrenMain) {
// 			item.classList.remove('active')
// 		}
// 		portfolio.classList.add('active')
// 	})
// }

// for (const item of buttonContacts) {
// 	item.addEventListener('click', () => {
// 		for (const item of allChildrenMain) {
// 			item.classList.remove('active')
// 		}
// 		contacts.classList.add('active')
// 	})
// }


function randomInteger(min, max) { // случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}
