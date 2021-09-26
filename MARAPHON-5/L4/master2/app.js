const board = document.querySelector('#board') // доступ к элементу с id=board
const SQUARES_NUMBER = 500;


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div') // создание Html Элемента square тег div
    square.classList.add ('square') //создание класса css для square
   

    board.append(square) // вставляем элемент square в элемент html board

    // square.addEventListener('mouseover', () => {
    //     console.log('eeffsfsdf')
    // })

    square.addEventListener('mouseover', () => setColor(square))
  

}

function setColor(element) {
    element.style.backgroundColor = 'red'
}