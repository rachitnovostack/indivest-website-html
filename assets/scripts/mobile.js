// mobile animation
let currentIndex = 0;
const intervalTime = 1500;

document.addEventListener('DOMContentLoaded', () => {

    // Automatic screen change
    setInterval(() => {
        changeScreen();
    }, intervalTime);

});

function changeScreen() {
    currentIndex++;
    if(currentIndex > 3){
        currentIndex = 1;
    }

    document.querySelector('#mobile').style.backgroundImage = `url(./assets/img/img${currentIndex}.jpg)`;
    
}