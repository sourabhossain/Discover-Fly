const first_class = document.querySelector("#first_class");
const plus        = document.querySelector("#plus");
const minus       = document.querySelector("#minus");
const economy     = document.querySelector("#economy");
const plus2       = document.querySelector("#plus2");
const minus2      = document.querySelector("#minus2");
const subtotal    = document.querySelector("#subtotal");
const total       = document.querySelector("#total");

function empty(value) {
    return (value == null || value === '');
}

function onePlus(id) {
    const element = document.querySelector(`#${id}`);
    element.value = parseInt(element.value) + 1;
}

function oneMinus(id) {
    const element  = document.querySelector(`#${id}`);
    const quantity = parseInt(element.value) - 1;

    if (quantity > -1) {
        element.value = quantity;   
    } else {
        alert('Negative quantity not exist!');    
    }
}

function inputBoxCheck(id) {
    const element = document.querySelector(`#${id}`);
    const quantity = parseInt(element.value);
    
    if(empty(element.value)) {
        element.value = 0;
    } else if (quantity < 0) {
        alert('Negative quantity not exist!');
        element.value = 0;
    } 
}
