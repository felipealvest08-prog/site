let usuario = {
  nome: "",
  foto: ""
};

// LOGIN
function entrar() {
  usuario.nome = document.getElementById("nome").value;

  let file = document.getElementById("foto").files[0];
  if (file) {
    usuario.foto = URL.createObjectURL(file);
  }

  document.getElementById("login").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  gerarStories();
  gerarFeed();
}

// TEMA
function toggleTema() {
  document.body.classList.toggle("light");
}

// STORIES estilo Instagram
function gerarStories() {
  const container = document.getElementById("stories");
  container.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    let story = document.createElement("div");
    story.classList.add("story");
    story.innerText = "👤";

    story.onclick = () => alert("Visualizando story 👀");

    container.appendChild(story);
  }
}

// FEED
function gerarFeed() {
  const feed = document.getElementById("feed");

  for (let i = 0; i < 5; i++) {
    let post = document.createElement("div");
    post.classList.add("post");

    // USER
    let userDiv = document.createElement("div");
    userDiv.classList.add("user");

    let avatar = document.createElement("div");
    avatar.classList.add("avatar");

    if (usuario.foto) {
      avatar.style.backgroundImage = `url(${usuario.foto})`;
      avatar.style.backgroundSize = "cover";
    } else {
      avatar.innerText = usuario.nome.charAt(0);
    }

    let nome = document.createElement("span");
    nome.innerText = usuario.nome;

    userDiv.appendChild(avatar);
    userDiv.appendChild(nome);

    // IMG
    let img = document.createElement("img");
    img.src = `https://picsum.photos/300/200?random=${Math.random()}`;

    // LIKE
    let likes = 0;
    let btn = document.createElement("button");
    btn.innerText = "❤️ 0";

    btn.onclick = () => {
      likes++;
      btn.innerText = "❤️ " + likes;
    };

    post.appendChild(userDiv);
    post.appendChild(img);
    post.appendChild(btn);

    feed.appendChild(post);
  }
}

function atualizarFeed() {
  document.getElementById("feed").innerHTML = "";
  gerarFeed();
}

// CHAT
function enviarMsg() {
  let input = document.getElementById("msg");
  let chat = document.getElementById("chatBox");

  let p = document.createElement("p");
  p.innerText = usuario.nome + ": " + input.value;

  chat.appendChild(p);
  input.value = "";
}
