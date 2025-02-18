async function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
const respuesta = await fetch(url);

const res = await respuesta.json();

console.log(res);
}
getData();