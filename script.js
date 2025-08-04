//alert("Bem vindo ao meu portifólio 🤓🖖")

function clicouBtn(){
    alert("Para entrar em contato comigo, basta enviar um email para: devvictorsarris@gmail.com")
}

const imagem = document.getElementById("img-pessoa");

const imagens = [
    "images/dev.png",
    "images/dev2.jpg"
];

let indice = 0;

setInterval(() => {
  // Alterna entre 0 e 1
  indice = (indice + 1) % imagens.length;
  imagem.src = imagens[indice];
}, 4000);