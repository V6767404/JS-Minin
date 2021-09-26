const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timelist = document.querySelector('#time-list')
let time = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up') //изменение экрана
})

timelist.addEventListener('click', (event) => {

    if (event.target.classList.contains('time-btn')){
      //  console.log(event.target.getAttribute('data-time'))
      time = parsInt(event.target.getAttribute('data-time'))
      startGame()
    } 
})

function startGame(){
    screens[1].classList.add('up') //12:24
}