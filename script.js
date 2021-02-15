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
    const element = document.querySelector(`#${id}`);
    const quantity = parseInt(element.value) - 1;

    if (quantity > -1) {
        element.value = quantity;   
    } else {
        alert('Negative quantity not exist!');     
    }
}

first_class.addEventListener("input", () => {
    const book_quantity = parseInt(first_class.value);
     
    if(empty(first_class.value)) {
        first_class.value = 0;
    } else if (book_quantity < 0) {
        alert('Negative quantity not exist!');
        first_class.value = 0;
    } 
});