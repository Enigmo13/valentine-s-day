const przycisk1=document.getElementById('first_button');
przycisk1.addEventListener('click',start);
const heart=document.getElementsByClassName('heart');
heart[0].style.opacity='0'
const part=document.getElementsByClassName('parts');
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
przycisk1.style.left=(x-80)+'px';
heart[0].style.left=(x-90)+'px';
let tmp_count_opacity=0;
function start() {
    console.log('działa1!')
    przycisk1.classList.add('hide')
    setTimeout(part1_activation,2000)
    setTimeout(part2_activation,6000)
    setTimeout(part3_activation,10000)
    setTimeout(part4_activation,14000)
    setTimeout(heart1_function,18000)
    
}
function part1_activation() {
    console.log('part1')
    part[0].classList.toggle('transparet_part')
}
function part2_activation() {
    part[0].classList.toggle('transparet_part')
    console.log('part2')
    part[1].classList.toggle('transparet_part')
}
function part3_activation() {
    part[1].classList.toggle('transparet_part')
    console.log('part3')
    part[2].classList.toggle('transparet_part')
}
function part4_activation() {
    part[2].classList.toggle('transparet_part')
    console.log('part4')
    part[3].classList.toggle('transparet_part')
}

function heart1_function() {
    heart[0].classList.remove('show');
    part[3].classList.toggle('transparet_part')
    const opacity_show=setInterval(() => {
        tmp_count_opacity++
        if (tmp_count_opacity<=1000 && tmp_count_opacity%10==0) {
            let tmp_op=tmp_count_opacity/1000
            heart[0].style.opacity=tmp_op;
            console.log(tmp_op)
        }
        if (tmp_count_opacity>=1000) {
            clearInterval(opacity_show)
        }
    }, 1);
    setTimeout(bip,200)
    setInterval(() => {
        heart[0].style.scale='1.1';
    }, 1000);
}
function bip() {
    setInterval(() => {
        heart[0].style.scale='1';
    }, 1000);
}