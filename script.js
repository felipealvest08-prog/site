let temaEscuro = true;

function entrar() {
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("painel").classList.remove("hidden");

  gerarStories();
  gerarFeed();
}

// alternar tema
function toggleTema() {
  document.body.classList.toggle("light");
}

// avatar automático
function gerarAvatar(nome) {
  return nome ? nome.charAt(0).toUpperCase() : "?";
}

// stories
function gerarStories() {
  const container = document.getElementById("stories");

  for (let i = 0; i < 10; i++) {
    let story = document.createElement("div");
    story.classList.add("story");

    story.style.background = `hsl(${Math.random() * 360},70%,50%)`;

    story.onclick = () => {
      alert("Story aleatório 👀");
    };

    container.appendChild(story);
  }
}

// atualizar feed
function atualizarFeed() {
  document.getElementById("feed").innerHTML = "";
  gerarFeed();
}

// gerar feed
function gerarFeed() {
  const feed = document.getElementById("feed");

  const tipos = ["img", "video"];

  for (let i = 0; i < 8; i++) {
    let post = document.createElement("div");
    post.classList.add("post");

    let tipo = tipos[Math.floor(Math.random() * tipos.length)];

    // mídia
    if (tipo === "img") {
      let img = document.createElement("img");
      img.src = `https://picsum.photos/300/200?random=${Math.random()}`;
      post.appendChild(img);
    } else {
      let video = document.createElement("video");
      video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
      video.controls = true;
      post.appendChild(video);
    }

    // ações
    let likes = 0;

    let acoes = document.createElement("div");
    acoes.classList.add("acoes");

    let btnLike = document.createElement("button");
    btnLike.innerText = "❤️ 0";

    btnLike.onclick = () => {
      likes++;
      btnLike.innerText = "❤️ " + likes;
    };

    let btnComentar = document.createElement("button");
    btnComentar.innerText = "💬";

    let comentariosDiv = document.createElement("div");
    comentariosDiv.classList.add("comentarios");

    btnComentar.onclick = () => {
      let texto = prompt("Digite um comentário:");
      if (texto) {
        let p = document.createElement("p");
        p.innerText = "👤 " + texto;
        comentariosDiv.appendChild(p);
      }
    };

    acoes.appendChild(btnLike);
    acoes.appendChild(btnComentar);

    post.appendChild(acoes);
    post.appendChild(comentariosDiv);

    feed.appendChild(post);
  }
}
