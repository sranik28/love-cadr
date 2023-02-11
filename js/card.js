document.getElementById('first_button').addEventListener('click', function(){
document.body.style.backgroundImage = "url('../images/love.png')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = 'right' ;


document.getElementById('main-text').innerText = "I Love You Too";

document.getElementById('main-text').style.color = 'pink';

})
document.getElementById('secound-button').addEventListener('click', function(){
    document.getElementById('main-text').innerText = "Why Don't You Love Me? ";

    document.body.style.backgroundImage = "url('../images/sad.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = 'top' ;
})
