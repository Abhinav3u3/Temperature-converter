const Celsius = document.getElementById('cel');
const Fahrenheit = document.getElementById('fah');
const Kelvin = document.getElementById('kel');
const Button = document.getElementById('btn');


function roundNumber(number){
    return Math.round(number * 100)/100;
}

Celsius.addEventListener('input', function () {
    let c = parseFloat(this.value);
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    fah.value = roundNumber(f);
    kel.value = roundNumber(k);
})

Fahrenheit.addEventListener('input', function () {
    let f = parseFloat(this.value);
    let k = ((f - 32) * 5 / 9) + 274;
    let c = (f - 32) * 5 / 9;
    kel.value = k;
    cel.value = c;
});

Kelvin.addEventListener('input', function () {
    let k = parseFloat(this.value);
    let c = k - 273.15;
    let f = (k - 273.15) * 9 / 5 + 32;
    fah.value = f;
    cel.value = c;
});

Button.addEventListener('click', () => {
    cel.value = "";
    fah.value = " ";
    kel.value = " ";
})