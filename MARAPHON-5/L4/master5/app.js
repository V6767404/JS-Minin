const board = document.querySelector('#board') // доступ к элементу с id=board
const colors = ['red', 'blue', 'green', 'yellow','purple']
const SQUARES_NUMBER = 500;



for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div') // создание Html Элемента square тег div
    square.classList.add ('square') //создание класса css для square
   
    

    board.append(square) // вставляем элемент square в элемент html board

    // square.addEventListener('mouseover', () => {
    //     console.log('eeffsfsdf')
    // })

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

}

function setColor(element) {
   // element.style.backgroundColor = 'red'
   const color = getRandomColor()
   element.style.backgroundColor = color
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
}

function getRandomColor() {  //13:00 
   //console.log(colors[4]) 
   const index = Math.floor(Math.random() * colors.length)
   return colors[index] // getRandomColor() в консоле выдает рандомно цыета из colors[]
   
}