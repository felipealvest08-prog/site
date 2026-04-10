let usuario = {
  nome: "",
  foto: "",
  visitas: 0
};

// LOGIN
function entrar() {
  const nome = document.getElementById("nome").value;

  if (!nome) {
    alert("Digite seu nome!");
    return;
  }

  usuario.nome = nome;

  let file = document.getElementById("foto").files[0];
  if (file) {
    usuario.foto = URL.createObjectURL(file);
  }

  document.getElementById("login").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  iniciarApp();
}

// INICIAR
function iniciarApp() {
  gerarStories();
  gerarFeed();
}

// STORIES
function gerarStories() {
  const container = document.getElementById("stories");

  for (let i = 0; i < 8; i++) {
    let story = document.createElement("div");
    story.classList.add("story");

    story.style.backgroundImage =
      `url(https://picsum.photos/100?random=${Math.random()})`;

    container.appendChild(story);
  }
}

// FEED
function gerarFeed() {
  const feed = document.getElementById("feed");

  for (let i = 0; i < 5; i++) {
    let post = document.createElement("div");
    post.classList.add("post");

    let nome = document.createElement("p");
    nome.innerText = "👤 Anônimo";
    nome.onclick = abrirPerfil;

    let img = document.createElement("img");
    img.src = `https://picsum.photos/300/200?random=${Math.random()}`;

    post.appendChild(nome);
    post.appendChild(img);

    feed.appendChild(post);
  }
}

// PERFIL
function abrirPerfil() {
  usuario.visitas++;

  document.getElementById("perfil").classList.remove("hidden");
  document.getElementById("perfilNome").innerText = usuario.nome;
  document.getElementById("perfilFoto").src = usuario.foto || "";
  document.getElementById("visitas").innerText =
    "Visitas: " + usuario.visitas;
}

function fecharPerfil() {
  document.getElementById("perfil").classList.add("hidden");
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
