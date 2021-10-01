const menu = document.getElementById('menu');
const hamburger = document.getElementById('open');
const close = document.getElementById('close');

function dropDown () {
    close.style.display='block';
    menu.style.display='flex';
    hamburger.style.display='none';
}

function closeDown () {
    close.style.display='none';
    menu.style.display='none';
    hamburger.style.display='block'
}

hamburger.addEventListener('click', dropDown);

cross.addEventListener('click', closeDown);