let precios = [10,20,30,40]

const total = precios.reduce((total ,numero) =>{
    return total + numero;
});

console.log(total);