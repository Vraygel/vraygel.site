const board = document.querySelector('#board')
const colors = ['#f72585', '#b5179e', '#7209b7', '#560bad', '#480ca8', '#3a0ca3', '#3f37c9', '#4361ee', '#4895ef', '#4cc9f0']
const squares_number = 500


for (let i = 0; i < squares_number; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('pointermove', () => setColor(square))
    square.addEventListener('pointerleave', () => removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}


function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}