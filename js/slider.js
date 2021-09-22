let imagesForSlider = ['./image/main/slider/8 марта.png',
    './image/main/slider/скида при регистрации.png',
    './image/main/slider/распродажа.png',
    './image/main/slider/февраля 23.png'
];
let slider = document.querySelector('.slider');
slider.style.background = 'url(\'' + imagesForSlider[0] + '\')';
let indexCurrentSlide = 0;

document.querySelectorAll('.slider__choose__item').forEach(item => {
    item.addEventListener('change', () => {
        let radioButtons = document.querySelectorAll('.slider__choose__item');
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                setSlider(i);
                break;
            }
        }
    })
})

document.querySelector('.slider__prev').addEventListener('click', () => {
    let radioButtons = document.querySelectorAll('.slider__choose__item');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            setSlider((--i) >= 0 ? i : (imagesForSlider.length - 1), true);
            break;
        }
    }
})
document.querySelector('.slider__next').addEventListener('click', () => {
    let radioButtons = document.querySelectorAll('.slider__choose__item');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            setSlider((++i) < imagesForSlider.length ? i : 0, false);
            break;
        }
    }
})




function setSlider(indexNewSlide, newSlideFromLeftSide) {


    let nextSlide = document.querySelector('#slider__next-image');
    nextSlide.src = imagesForSlider[indexNewSlide];
    if (newSlideFromLeftSide == undefined) {

        switch(indexCurrentSlide>indexNewSlide){
            case true: newSlideFromLeftSide = true; break;
            case false: newSlideFromLeftSide = false; break;
            default: newSlideFromLeftSide = false; break;
        }
    }

    indexCurrentSlide = indexNewSlide;
    let radioButtons = document.querySelectorAll('.slider__choose__item');
    radioButtons[indexNewSlide].checked = true;

    if (newSlideFromLeftSide) {
        nextSlide.style.objectPosition = "right top";
        let time = setInterval(() => {
            nextSlide.style.width = (nextSlide.offsetWidth + 10) + 'px';
            if (nextSlide.offsetWidth == 660) {
                clearInterval(time);
                slider.style.background = 'url(\'' + imagesForSlider[indexNewSlide] + '\')';
                slider.style.backgroundSize = 'cover';
                nextSlide.style.width = 0 + 'px';
            }

        }, 2);
    } else {

        nextSlide.style.objectPosition = "left top";

        let time = setInterval(() => {
            nextSlide.style.marginLeft = (660 - nextSlide.offsetWidth - 10) + 'px';
            nextSlide.style.width = (nextSlide.offsetWidth + 10) + 'px';
            if (nextSlide.offsetWidth >= 660) {
                clearInterval(time);
                slider.style.background = 'url(\'' + imagesForSlider[indexNewSlide] + '\')';
                slider.style.backgroundSize = 'cover';
                nextSlide.style.width = '0px';
                nextSlide.style.marginLeft = '0px';
            }
        }, 2);

    }
}