
let offer_a = document.querySelectorAll('.offer_a') // находим кнопки "предложение"
let contacts_a = document.querySelectorAll('.contacts_a') // находим кнопки "контакты"
let portfolio_a = document.querySelectorAll('.portfolio_a') // находим кнопки "портфолио"




let offer = document.querySelector('.offer') // находим страницу "предложение"
let contacts = document.querySelector('.contacts_content') // находим страницу "Контакты"
let portfolio = document.querySelector('.portfolio') // находим страницу "Портфолио"
let section = document.querySelector('.section') // находим блок "section"
let logo = document.querySelectorAll('.logo')// находим все дочерние элементы блока logo




let header = document.querySelector('.header') // находим header
let index = document.querySelector('.index') // находим index (контент главной страницы)


for (const iterator of offer_a) {
	
	iterator.addEventListener('click', () => { // навешиваем событие "клик"
		console.log(iterator);

		offer.classList.add('active_block')

		section.classList.add('active_block')
		header.classList.remove('active_block')
		index.classList.remove('active_flex')
		portfolio.classList.remove('active_block')
		contacts.classList.remove('active_block')
	})
	
}

for (const iterator of portfolio_a) {
	
	iterator.addEventListener('click', () => { // навешиваем событие "клик"
		console.log(iterator);
		portfolio.classList.add('active_block')

		section.classList.add('active_block')
		header.classList.remove('active_block')
		index.classList.remove('active_flex')
		offer.classList.remove('active_block')
		contacts.classList.remove('active_block')
	})
	
}

for (const iterator of contacts_a) {
	
	iterator.addEventListener('click', () => { // навешиваем событие "клик"
		console.log(iterator);
		contacts.classList.add('active_block')
		section.classList.add('active_block')
		header.classList.remove('active_block')
		index.classList.remove('active_flex')
		portfolio.classList.remove('active_block')
		offer.classList.remove('active_block')
	})
	
}

for (const iterator of logo) {
	let logoChildren = iterator.children
	for (const iterator of logoChildren) {
		iterator.addEventListener('click', () => { // навешиваем событие "клик"
			console.log(iterator);
			header.classList.add('active_block')
			index.classList.add('active_flex')
			contacts.classList.remove('active_block')
			section.classList.remove('active_block')
			portfolio.classList.remove('active_block')
			offer.classList.remove('active_block')
		})
		
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