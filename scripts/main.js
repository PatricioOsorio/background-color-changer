function generarColor() {
    const caracteres = '0123456789ABCDEF';
    const cadena = [];
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        cadena.push(caracteres[random]);
    }
    return cadena.join('');
};

console.log(generarColor());

const $hexadecimal = document.getElementById('hexadecimal');
const $colorBody = document.getElementById('body');


document.addEventListener('click', (e) => {
    if (e.target.matches('#btn-cambiar')) {
        $colorBody.style.backgroundColor = '#' + generarColor();
        $hexadecimal.textContent = $colorBody.style.backgroundColor;
    }
});


