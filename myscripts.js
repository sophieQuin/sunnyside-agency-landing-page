const menu = document.getElementById('menu');
const hamburger = document.getElementById('open');
const close = document.getElementById('close');



function dropDown () {
    menu.style.width='150px';
    menu.style.transition=".5s";
    close.style.display='block';
    menu.style.display='flex';
    hamburger.style.display='none';
}

function closeDown () {
    menu.style.width='0px';
    close.style.display='none';
    menu.style.display='none';
    hamburger.style.display='block';
}

hamburger.addEventListener('click', dropDown);

close.addEventListener('click', closeDown);