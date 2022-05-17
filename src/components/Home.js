// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { loginWithEmailPassword} from '../FirebaseConfi/Auth.js';

export const Home = () => {
  const divHome = document.createElement('div');
  divHome.classList.add('portada');
  const homePage = `<img class="logoImg" src="../img/Logo.png">
  <p>Encuentra tu camino viajero</p>
  <div class="signin">
  <div class="firstBtns">
  <button>Iniciar Sesión</button>
  <button id="register">Registrate</button>
  </div>
  <div class="loginInputs">
  <div class="user">
  <i class="fa-solid fa-user"></i>
  <input type="text" id="userEmailLogin" placeholder="Usuario/correo electrónico"></imput>
  </div>
  <div class="password">
  <i class="fa-solid fa-lock"></i>
  <input type="password" id="userPasswordLogin" placeholder="Contraseña"></imput>
  </div>
  </div>
  <div class="entrar">
  <button id="startSesion">Entrar</button>
  </div>
  <div class="forgetpw">
  <a href="">¿Olvidaste tu contraseña?</a>
  </div>
  <div class="extBtns">
  <button id="fbL" class="fbBtn"><img src="../img/fbbtn.png"></button>
  <button id="googleL" class="ggBtn"><img src="../img/googlebtn.png"></button>
  </div>
  </div>`;

  divHome.innerHTML = homePage;

  
  const loginS = divHome.querySelector('#startSesion');
  loginS.addEventListener('click', () => {
   
    const loginEmail = divHome.querySelector('#userEmailLogin').value;
    const loginPassword = divHome.querySelector('#userPasswordLogin').value;
    loginWithEmailPassword(loginEmail, loginPassword);
  });

  
  divHome.querySelector('#register').addEventListener('click', () => onNavigate('/register'));
 
  /*divHome.querySelector('#startSesion').addEventListener('click', ()=> {
    onNavigate('/profile');
   
});*/
 
  return divHome;
};