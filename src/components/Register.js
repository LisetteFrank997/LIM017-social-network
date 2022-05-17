// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { registerWithEmailAndPassword, registerWithGoogle } from '../FirebaseConfi/Auth.js'
//import { SaveDataUser } from './confi.js'


export const Register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('portadaDos');
  const registerBtn = `<div class="logo">
  <img class="logoImg" src="../img/Logo.png">
  <p>Encuentra tu camino viajero</p>
  </div>
  <div class="signin">
  <p class="firstBtns">Registrate</p>
  <div class="loginInputs">
  <div class="user">
  <i class="fa-solid fa-user"></i>
    <input type="email" id="registerEmail" placeholder="Crea un usuario/correo electrónico"></imput>
  </div>
  <p id="errorMessageE"></p>
  <div class="password">
  <i class="fa-solid fa-lock"></i>
    <input type="password" id="registerPassword" placeholder="Crea una contraseña"></imput>
  </div>
  <p id="errorMessageP"></p>
  <div class="user">
  <i class="fa-solid fa-user"></i>
    <input type="text" id="names" placeholder="Nombre de usuario"></imput>
  </div>
  <div class="user">
  <i class="fa-solid fa-user"></i>
    <input type="text" id="gender" placeholder="Género"></imput>
  </div>
  <label for="date">Fecha de nacimiento:</label>
  <div class="date">
    <input type="date" id="dateBirth"></imput>
  </div>
  <div class="entrar">
    <button type="submit" id="regpage">Registrarse</button>
    <button id="googleR" class="ggBtn"><img src="../img/googlebtn.png"></button>
    <button id="fbR" class="fbBtn"><img src="../img/fbbtn.png"></button>
    <button id="goBack"><i class="fa-solid fa-circle-chevron-left"></i></button>
  </div>
  </div>`;
  registerDiv.innerHTML = registerBtn;

  registerDiv.querySelector('#regpage').addEventListener('click', () => {
 
    const email = registerDiv.querySelector('#registerEmail').value;
    const registerWithP = registerDiv.querySelector('#registerPassword').value;
    const messageError = registerDiv.querySelector('#errorMessageE');
    const messageErrorp = registerDiv.querySelector('#errorMessageP');
    if (email === '') {
      messageError.innerHTML = 'Ingrese un correo electronico valido';
    } 
    if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g)) {
      messageError.innerHTML = 'Ingrese un correo electronico valido';
    } 

    const userName = registerDiv.querySelector('#names');
    //const lastName = registerDiv.querySelector('#lastNames');
    const gender = registerDiv.querySelector('#gender');
    const dateBirth = registerDiv.querySelector('#dateBirth');


    //SaveDataUser(userName.value, gender.value, email, dateBirth.value);
   
    registerWithEmailAndPassword(email, registerWithP, userName.value);
    
  });


  const registerWithGg = registerDiv.querySelector('#googleR');
  registerWithGg.addEventListener('click', () => {
    registerWithGoogle();
  });

  registerDiv.querySelector('#goBack').addEventListener('click', () => onNavigate('/'));
  
  return registerDiv;
};