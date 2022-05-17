import { userSignOut, userInfo } from '../FirebaseConfi/Auth.js';
import { SaveDataPost, GetDataPost, onGetPublication } from '../FirebaseConfi/FunctionsPost.js';
import { posts } from './post.js';

export const profile = () => {
  const profileDiv = document.createElement('div');
  const profileUser = `
    <div class="header">
    <li class="ajustesProfile">
    <button class="buttonstyle" id="favorite">Favoritos</button>
    <button class="buttonstyle" id="messages"> Mensajes</button>
    <button class="buttonstyle" id="reseñas">Reseña</button>
    <button class="buttonstyle" id="profile">Perfil</button>
    <button class="buttonstyle" id="placers"> Lugares visitados</button>
    <button class="buttonstyle" id="followers">Seguidores</button>
    <button class="buttonstyle" id="signOut">Cerrar Sesión</button>
    </li>
    </div>
    <section class="posts">
    <h1 id="nameUser"></h1>
    <form class="formPost" id="post">
    <input type="text" class="postStart" id="titlePost" placeholder="Agrega un título a tu publicación"></input>
    <input type="text" class="postStart" id="bodyPost" placeholder="Cuentanos tus aventuras"></input>
    <button id="upPost" class="upPost">Publicar</button>
    </form>
    <div class="conteinerPost" id="getPostUser"></div>
    </section>
    `;

  profileDiv.innerHTML = profileUser;
  const showUser = profileDiv.querySelector('#nameUser').innerHTML = userInfo();

  const upPost = profileDiv.querySelector('#upPost');
  upPost.addEventListener('click', (e) => {
    e.preventDefault();
    const titlePost = profileDiv.querySelector('#titlePost').value;
    const bodyPost = profileDiv.querySelector('#bodyPost').value;
    SaveDataPost(bodyPost, titlePost);
  });

  const showPost = profileDiv.querySelector('#getPostUser');

  onGetPublication(() => {
    GetDataPost()
      .then(async (data) => {
        posts(data, showPost);
      });
  });

  const closeSesion = profileDiv.querySelector('#signOut');
  closeSesion.addEventListener('click', () => {
    userSignOut();
  });

  return profileDiv;
};
