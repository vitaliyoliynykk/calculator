const display = document.querySelector('.display');
document.querySelectorAll('.digits, .ops')
    .forEach( el => el.addEventListener('click',buttonClick ) );

function buttonClick(el){
    const target = el.target;
    display.value += target.innerText;
}
document.querySelector('.equal').addEventListener('click',equal);
document.querySelector('.clear').addEventListener('click',clear);
document.querySelector('.sqrt').addEventListener('click',sqrt);

function equal(){
    display.value=eval(display.value);
}
function clear(){
    display.value = '';
}
function sqrt(){
    equal();
    display.value=Math.sqrt(display.value);
}