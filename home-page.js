var menuBtn = document.getElementById('menu-btn');
var menuEl = document.getElementById('menu');
var menuIcon = document.getElementById('menu-icon');
var show = false;


function menu(){
    if(show === false){
       menuIcon.src = '/img/close_button.png';
       menuEl.style.left = '0';
       show = true;
       
    }else{
        menuIcon.src = '/img/menu.png';
        menuEl.style.left = '-100%';
        show = false;
    }

    
}