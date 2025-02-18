function promesa()  {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Promesa resuelta");
        }, 2000); 
});
}


async function asynCall() {
    console.log("llamando")
    const mensaje = await promesa();
    console.log(mensaje)
}

asynCall();