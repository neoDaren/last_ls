



// popUp Start
let whiteBtn = document.getElementsByClassName('white')[0];
let popUpWrapper = document.querySelector('.popUpForm')
let closeBtn = document.querySelector('.close');
whiteBtn.addEventListener('click', popUpForm)
closeBtn.addEventListener('click', closePopUp)
function popUpForm(){
    popUpWrapper.style.display='flex';
}
function closePopUp(){
    popUpWrapper.style.display = 'none';
}

