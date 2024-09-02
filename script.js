let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

let currentSlideIndex = 0

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
        currentSlideIndex = (currentSlideIndex + 1) % sliderItems.length
    } else if(direction === 'prev'){
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
        currentSlideIndex = (currentSlideIndex - 1 + sliderItems.length) % sliderItems.length
    }

    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else if(direction === 'prev'){
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

// Add event listener for keyboard events
document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowRight' || event.key === 'Right') {
        moveSlider('next')
    } else if(event.key === 'ArrowLeft' || event.key === 'Left') {
        moveSlider('prev')
    }
})

// Automatic slider
setInterval(function() {
    moveSlider('next')
}, 7000) // Change the interval time as needed