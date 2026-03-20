body {
  font-family: Arial;
  margin: 0;
  text-align: center;
  background: #111;
  color: white;
  transition: 0.3s;
}

.light {
  background: #f5f5f5;
  color: black;
}

input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 250px;
}

button {
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}

/* esconder */
.hidden {
  display: none;
}

/* topo */
.topo {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* stories */
.stories {
  display: flex;
  overflow-x: auto;
}

.story {
  min-width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}

/* feed */
.post {
  background: #222;
  margin: 15px auto;
  padding: 10px;
  border-radius: 10px;
  width: 300px;
}

.light .post {
  background: #ddd;
}

.post img, .post video {
  width: 100%;
  border-radius: 10px;
}

.acoes {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.comentarios {
  text-align: left;
  font-size: 14px;
}
