// модификация кода app.js для выбора активного слайда программно
// для этого оформляем все через ф-цию в которую передаем параментр
// Урок 1. Бонус
// https://www.youtube.com/watch?v=RubuSFonJTM
// перкондишион : нужно из index.html убрать стиль class="slide active" (заменить на class="slide")

function slidesPlugin(activeSlide = 0) { // значение по умлчанию =0, оно изменяеся при передаче параметра

    const slides = document.querySelectorAll('.slide')

// slides по факту массив
// slides[2].classList.add('active')

    slides[activeSlide].classList.add('active') //

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(4) // запуск фукции с выбором активного элемента (в данном случае 5-го последнего)

