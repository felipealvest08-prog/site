let usuario = { nome: "" };
let conversaAtual = "Geral";

// LOGIN
function entrar() {
  let nome = document.getElementById("nome").value;
  if (!nome) return alert("Digite um nome");

  usuario.nome = nome;

  document.getElementById("login").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  iniciar();
}

// INICIAR
function iniciar() {
  gerarConversas();
  gerarStories();
  gerarFeed();
}

// CONVERSAS
function gerarConversas() {
  let lista = document.getElementById("listaConversas");

  for (let i = 1; i <= 5; i++) {
    let div = document.createElement("div");
    div.classList.add("conversa");
    div.innerText = "Anônimo " + i;

    div.onclick = () => {
      conversaAtual = "Anônimo " + i;
      document.getElementById("chatBox").innerHTML = "";
    };

    lista.appendChild(div);
  }
}

// CHAT
function enviarMsg() {
  let msg = document.getElementById("msg").value;
  if (!msg) return;

  let chat = document.getElementById("chatBox");

  let p = document.createElement("p");
  p.innerText = usuario.nome + ": " + msg;

  chat.appendChild(p);
  document.getElementById("msg").value = "";
}

// STORIES
function gerarStories() {
  let container = document.getElementById("stories");

  for (let i = 0; i < 8; i++) {
    let url = `https://picsum.photos/200?random=${Math.random()}`;

    let story = document.createElement("div");
    story.classList.add("story");
    story.style.backgroundImage = `url(${url})`;

    story.onclick = () => abrirStory(url);

    container.appendChild(story);
  }
}

function abrirStory(url) {
  document.getElementById("storyImg").src = url;
  document.getElementById("storyView").classList.remove("hidden");
}

function fecharStory() {
  document.getElementById("storyView").classList.add("hidden");
}

// FEED
function gerarFeed() {
  let feed = document.getElementById("feed");

  for (let i = 0; i < 5; i++) {
    let post = document.createElement("div");
    post.classList.add("post");

    let nome = document.createElement("p");
    nome.innerText = "👤 Anônimo";

    let img = document.createElement("img");
    img.src = `https://picsum.photos/300/200?random=${Math.random()}`;

    post.appendChild(nome);
    post.appendChild(img);

    feed.appendChild(post);
  }
}
