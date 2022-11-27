const toggle = document.querySelector('#darkmode-toggle');
const mainImage = document.querySelector('.mainRightImg');

function dark_mode(){
    if(toggle.checked === true){
        document.body.style.background = "url('png/dark_background.png')";
        document.body.style.transition = "0.3s";
        mainImage.src = "png/homePageMainImageWhite.png";
        mainImage.style.transition = "0.3s";
        
    } else {
        document.body.style.background = "url('png/blue_background.png')";
        document.body.style.transition = "0.3s";
        mainImage.src = "png/homePageMainImage.png";
        mainImage.style.transition = "0.3s";
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