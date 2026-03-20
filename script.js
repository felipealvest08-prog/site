function entrar() {
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("painel").classList.remove("hidden");

  gerarStories();
  gerarFeed();
}

// Stories aleatórios
function gerarStories() {
  const container = document.getElementById("stories");

  for (let i = 0; i < 10; i++) {
    let story = document.createElement("div");
    story.classList.add("story");

    // cor aleatória
    story.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;

    container.appendChild(story);
  }
}

// Feed aleatório
function gerarFeed() {
  const feed = document.getElementById("feed");

  const tipos = ["img", "video"];

  for (let i = 0; i < 10; i++) {
    let post = document.createElement("div");
    post.classList.add("post");

    let tipo = tipos[Math.floor(Math.random() * tipos.length)];

    if (tipo === "img") {
      let img = document.createElement("img");
      img.src = `https://picsum.photos/300/200?random=${i}`;
      post.appendChild(img);
    } else {
      let video = document.createElement("video");
      video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
      video.controls = true;
      post.appendChild(video);
    }

    feed.appendChild(post);
  }
}
