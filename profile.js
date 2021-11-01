
const colorBtn = document.querySelector('button#color');
const placeBtn = document.querySelector('button#place');
const ritualBtn = document.querySelector('button#ritual')

function clickColor(event) {
    event.preventDefault();
    alert('Black')
}
function clickPlace(event) {
    event.preventDefault();
    alert('The Bat Cave');
};
function clickRitual(event) {
    event.preventDefault();
    alert('Taking a bubble bath')
}

colorBtn.addEventListener('click', clickColor)
placeBtn.addEventListener('click', clickPlace)
ritualBtn.addEventListener('click', clickRitual)

const interestBtn = document.querySelector('button#suggest')

function interestThanks(event) {
    event.preventDefault();
    let inputField = document.querySelector('input');
    alert('Thank you for your suggestion!')
    inputField.value = ''
}

interestBtn.addEventListener('click', interestThanks)
