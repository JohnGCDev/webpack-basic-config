import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Crando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}. Cómo estas?`;
    document.body.append(h1);
}