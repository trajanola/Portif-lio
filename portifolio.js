function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((Letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += Letra;
        }, 75 * i);
    });
}

const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const texTo = document.querySelector(".texto");

menuIcon.onclick = () => {
    navLinks.classList.toggle("active")
}

ativaLetra(texTo);
