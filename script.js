const toggle = document.querySelector('#darkmode-toggle');
const mainImage = document.querySelector('.mainRightImg');
const bottomWaveColor = document.querySelectorAll('.bottom-wave .shape-fill');
const upperWaveColor = document.querySelectorAll('.upper-wave .shape-fill')

function dark_mode(){
    if(toggle.checked){
        bottomWaveColor.forEach(element => {
            element.style.transition = "all .3s ease-in-out";
            element.style.fill = "#242424";
        });
        upperWaveColor.forEach(element => {
            element.style.transition = "all .3s ease-in-out";
            element.style.fill = "#242424";
        });
        document.body.style.transition = "0.3s ease-in-out";
        document.body.style.backgroundColor = "rgb(47,47,47)";
        mainImage.style.transition = "all 0.3s ease-in-out";
        mainImage.src = "png/homePageMainImageWhite.png";
        
    } else {
        bottomWaveColor.forEach(element => {
            element.style.transition = "all .3s ease-in-out";
            element.style.fill = "#264ACA";
        })
        upperWaveColor.forEach(element => {
            element.style.transition = "all .3s ease-in-out";
            element.style.fill = "#264ACA";
        })
        document.body.style.transition = "0.3s ease-in-out";
        document.body.style.backgroundColor = "rgb(51,99,231)";
        mainImage.style.transition = "all 0.3s ease-in-out";
        mainImage.src = "png/homePageMainImage.png";
    }
}

const responsiveList = document.querySelector('.responsiveList');
const mobileHeaderLinks = document.querySelector('#headerLinks');
const mobileHeaderButtons = document.querySelector('#headerButtons');

responsiveList.addEventListener('click', function(){
    mobileHeaderLinks.classList.toggle('active');
    mobileHeaderButtons.classList.toggle('active');
    responsiveList.classList.toggle('active');
})