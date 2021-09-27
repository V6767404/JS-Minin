const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timelist = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up') //изменение экрана
})

timelist.addEventListener('click', (event) => {

    if (event.target.classList.contains('time-btn')){
      //  console.log(event.target.getAttribute('data-time'))
      time = parseInt(event.target.getAttribute('data-time'))
      screens[1].classList.add('up') //14:10
      startGame()
    } 
})

//26:46 один слушатель для всей доски
board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove() // удаляем кружок
        createRandomCircle() // и создаем новый рандомный
    }
}   ) 

//DEBUG 14:10
// startGame()

function startGame(){
   // screens[1].classList.add('up') //12:24
    setInterval(decreaseTime, 1000)
   // timeEl.innerHTML = `00:${time}` // 13:10
   createRandomCircle()
   setTime(time)
}

function decreaseTime(){
    if (time === 0) {

        finishGame()

    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        //timeEl.innerHTML = `00:${current}` //15:40
        setTime(current)
    }
}   
    
function setTime(value) { // 17:10
    timeEl.innerHTML = `00:${value}`
}

function finishGame() { // 28:40
    timeEl.parentNode.remove() //30:20
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
 
}

function createRandomCircle () { // 18:40
    const circle = document.createElement('div') // создание html div circle
    const size = getRandomNumber(10, 60)
    //  const x = 150
    //  const y = 200
    const {width, height} = board.getBoundingClientRect() // 24:07 - 26:35
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle') // создание класса для circle
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    // помещаем div circle в div c id=board
    // для начала получаем элемент const board = document.querySelector('#board')
    board.append(circle)
}

function getRandomNumber(min, max) {  //21:52 
  return Math.round(Math.random() * (max -min) + min)
}
