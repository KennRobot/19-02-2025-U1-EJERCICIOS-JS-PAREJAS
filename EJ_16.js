const Correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const CadenaCorreo = "Andri2ck@@gmail.com"

if(Correo.test(CadenaCorreo)){
    console.log("Correo valido")
}else{
    console.log("Correo no valido")
}