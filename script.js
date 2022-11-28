const toggle = document.querySelector('#darkmode-toggle');
const mainImage = document.querySelector('.mainRightImg');

function dark_mode(){
    if(toggle.checked){
        document.body.style.background = "url('png/dark_background.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.transition = "0.3s ease-in-out";
        document.body.style.backgroundColor = "rgb(47,47,47)";
        mainImage.style.transition = "0.3s";
        mainImage.src = "png/homePageMainImageWhite.png";
        
    } else {
        document.body.style.background = "url('png/blue_background.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.transition = "0.3s ease-in-out";
        document.body.style.backgroundColor = "rgb(51,99,231)";
        mainImage.style.transition = "0.3s";
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