const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timelist = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
let time = 20

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

//DEBUG 14:10
startGame()

function startGame(){
   // screens[1].classList.add('up') //12:24
    setinterval(decreaseTime, 1000)
    timeEl.innerHTML = `00:${time}` // 13:10
}

function decreaseTime(){
    let current = --time
    timeEl.innerHTML = `00:${current}`
}