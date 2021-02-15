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

plus.addEventListener("click", () => {
    first_class.value = parseInt(first_class.value) + 1;
});

minus.addEventListener("click", () => {
    const book_quantity = parseInt(first_class.value) - 1;

    if (book_quantity > -1) {
        first_class.value = book_quantity;   
    } else {
        alert('Negative quantity not exist!');     
    }
});

first_class.addEventListener("input", () => {
    const book_quantity = parseInt(first_class.value);
     
    if(empty(first_class.value)) {
        first_class.value = 0;
    } else if (book_quantity < 0) {
        alert('Negative quantity not exist!');
        first_class.value = 0;
    } 
});