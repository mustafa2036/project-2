var homeHeader = document.querySelector('#homeHeader');
var btnYellow = document.getElementById('btn-yellow');
var btnBlack = document.getElementById('btn-black');
var btnWhite = document.getElementById('btn-white');
var itemCaption = document.querySelector('#item-caption h3');
var itemCaptionSpan = document.querySelector('#item-caption span');
var itemCaptionP = document.querySelector('#item-caption p');

btnYellow.addEventListener('click',function(){
    homeHeader.style.backgroundImage = 'url(../images/pexels-annushka-ahuja-7991661.jpg)';
    itemCaption.style.color = '#f5aa00';
    itemCaptionSpan.style.color = '#162027';
    itemCaptionP.style.color = '#f5aa00';
});
btnBlack.addEventListener('click',function(){
    homeHeader.style.backgroundImage = 'url(../images/pexels-cottonbro-4753894.jpg)';
    itemCaption.style.color = '#fff';
    itemCaptionSpan.style.color = 'rgb(215 175 191)';
    itemCaptionP.style.color = '#aaa';
})
btnWhite.addEventListener('click',function(){
    homeHeader.style.backgroundImage = 'url(../images/pexels-michelle-leman-6798720.jpg)';
    itemCaption.style.color = '#000';
    itemCaptionSpan.style.color = 'rgb(215 175 191)';
    itemCaptionP.style.color = '#000';
})