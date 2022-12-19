let buttonOffer = document.querySelectorAll('.button_offer')
let buttonPortfolio = document.querySelectorAll('.button_portfolio')
let buttonContacts = document.querySelectorAll('.button_contacts')
let main = document.querySelector('.main')
let offer = document.querySelector('.offer')
let portfolio = document.querySelector('.portfolio')
let contacts = document.querySelector('.contacts')
let animated = document.querySelectorAll('.animated')
let ul = document.querySelector('ul')
let ham3 = document.querySelector('.ham3')


ul.addEventListener('click', () => {
	console.log('sdfsdf');
	ul.classList.add('active')
})

ham3.addEventListener('click', () => {
	console.log('sdf sdf');
	// ul.style.display = 'block'
	ul.classList.toggle('active')
})


for (const item of animated) {
	item.addEventListener('mouseover', () => {
		item.classList.add('pulse')
		item.classList.add('slow')
	})

	item.addEventListener('mouseout', () => {
		item.classList.remove('pulse')
		item.classList.remove('delay-1s')
		item.classList.remove('slow')
	})
}

let allChildrenMain = main.children
for (const item of buttonOffer) {
	item.addEventListener('click', () => {
		for (const item of allChildrenMain) {
			item.classList.remove('active')
		}
		offer.classList.add('active')
	})
}

for (const item of buttonPortfolio) {
	item.addEventListener('click', () => {
		for (const item of allChildrenMain) {
			item.classList.remove('active')
		}
		portfolio.classList.add('active')
	})
}

for (const item of buttonContacts) {
	item.addEventListener('click', () => {
		for (const item of allChildrenMain) {
			item.classList.remove('active')
		}
		contacts.classList.add('active')
	})
}