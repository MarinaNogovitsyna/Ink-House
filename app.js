let franceBtn = document.getElementById('france');
let germanyBtn = document.getElementById('germany');
let englandBtn = document.getElementById('england');

let franceRepr = document.getElementsByClassName('reproductions_france')[0];
let germanyRepr = document.getElementsByClassName('reproductions_germany')[0];
let englandRepr = document.getElementsByClassName('reproductions_england')[0];

window.addEventListener('load', firstWindow);
function firstWindow () {
    franceRepr.style['display'] = "flex";
    germanyRepr.classList.add('hidden');
    englandRepr.classList.add('hidden');
}


franceBtn.addEventListener('click', function() {
    franceRepr.style['display'] = "flex";
    franceBtn.style['border'] = "2px solid #376B44";
    germanyBtn.style.removeProperty('border');
    englandBtn.style.removeProperty('border');
    germanyRepr.style.removeProperty('display');
    englandRepr.style.removeProperty('display');
    if (franceRepr.classList.contains('hidden')) {
        franceRepr.classList.remove('hidden');
    }
    if (!germanyRepr.classList.contains('hidden')) {
        germanyRepr.classList.add('hidden');
    }
    if (!englandRepr.classList.contains('hidden')) {
        englandRepr.classList.add('hidden');
    }
})

germanyBtn.addEventListener('click', function() {
    germanyRepr.style['display'] = "flex";
    germanyBtn.style['border'] = "2px solid #376B44";
    franceBtn.style.removeProperty('border');
    englandBtn.style.removeProperty('border');
    franceRepr.style.removeProperty('display');
    englandRepr.style.removeProperty('display');
    if (germanyRepr.classList.contains('hidden')) {
        germanyRepr.classList.remove('hidden');
    }
    if (!franceRepr.classList.contains('hidden')) {
        franceRepr.classList.add('hidden');
    }
    if (!englandRepr.classList.contains('hidden')) {
        englandRepr.classList.add('hidden');
    }
})

englandBtn.addEventListener('click', function() {
    englandRepr.style['display'] = "flex";
    englandBtn.style['border'] = "2px solid #376B44";
    franceBtn.style.removeProperty('border');
    germanyBtn.style.removeProperty('border');
    franceRepr.style.removeProperty('display');
    germanyRepr.style.removeProperty('display');
    if (englandRepr.classList.contains('hidden')) {
        englandRepr.classList.remove('hidden');
    }
    if (!franceRepr.classList.contains('hidden')) {
        franceRepr.classList.add('hidden');
    }
    if (!germanyRepr.classList.contains('hidden')) {
        germanyRepr.classList.add('hidden');
    }
})


let burger = document.getElementsByClassName('burg_menu')[0];
let close = document.getElementsByClassName('close')[0];

burger.addEventListener('click', function(){
    for (let i = 0; i < document.getElementsByClassName('part_menu').length; i++) {
        document.getElementsByClassName('part_menu')[i].style['display'] = 'block';
    }
    document.getElementsByClassName('basket')[0].style['display'] = 'none';
    document.getElementsByClassName('menu_ul')[0].style['flex-direction'] = 'column';
    document.getElementsByClassName('menu_ul')[0].style['gap'] = '50px';
    close.classList.remove('hidden');
    burger.style['display'] = 'none';
})

close.addEventListener('click', function() {
    for (let i = 0; i < document.getElementsByClassName('part_menu').length; i++) {
        document.getElementsByClassName('part_menu')[i].style['display'] = 'none';
    }
    document.getElementsByClassName('basket')[0].style['display'] = 'block';
    document.getElementsByClassName('menu_ul')[0].style['flex-direction'] = 'row';
    document.getElementsByClassName('menu_ul')[0].style['gap'] = '0px';
    close.classList.add('hidden');
    burger.style['display'] = 'block';
})