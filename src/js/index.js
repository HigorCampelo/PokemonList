//pegando a referencia do botao de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//pegando a referencia do body

const body = document.querySelector("body");

//pegando a referencia da imagem sol/lua
const imagemBotao = document.querySelector(".imagem-botao");

//identificar clique do usuário no botao troca de tema

botaoAlterarTema.addEventListener("click", () => {
   // add a classe modo-escuro no body

   //body.classList.toggle("modo-escuro");

   if (body.classList.contains("modo-escuro")) {
      body.classList.remove("modo-escuro");
      imagemBotao.setAttribute("src", "./src/imagens/sun.png");
   } else {
      body.classList.add("modo-escuro");
      imagemBotao.setAttribute("src", "./src/imagens/moon.png");
   }

});