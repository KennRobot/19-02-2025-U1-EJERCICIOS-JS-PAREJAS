const promesa = new Promise(resolve => {
    setTimeout(() =>{
        resolve("Promesa resuelta");
    }, 2000)
});

promesa.then(
    alert
)