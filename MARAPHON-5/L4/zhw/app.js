const board = document.querySelector('#board') // доступ к элементу с id=board
const colors = ['#025393', '#68ef00', '#ffb9cb', '#fd56dc','#01d3fc']
const SQUARES_NUMBER = 400;



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
   // несколько улучшений
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` // 15:50
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000` // удаляет остатки shadow
}

function getRandomColor() {  //13:00 
   //console.log(colors[4]) 
   const index = Math.floor(Math.random() * colors.length)
   return colors[index] // getRandomColor() в консоле выдает рандомно цыета из colors[]
   
}