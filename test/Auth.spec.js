// importamos la funcion que vamos a testear
import { loginWithEmailPassword } from '../src/FirebaseConfi/Auth.js';
import { Home } from '../src/components/Home.js'


jest.mock('../src/FirebaseConfi/Firebase.js');

/*describe('SaveDataPost', () => {
  it('debería agregar un post', () => saveDataPost('los mejores destinos para viajar', 'Estos viajes fueron geniales').then((data) => {
    expect(data).toEqual({title:'los mejores destinos para viajar', post:'Estos viajes fueron geniales'});
  }));
});*/

describe('loginWithEmailPassword', () => {
  it('Recibe un correo y una contraseña para iniciar sesión', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const divhome= Home();
    const email= divhome.querySelector('#userEmailLogin');
    const password= divhome.querySelector('#userPasswordLogin');
    email.value= 'email@gmail.com';
    password.value= 'contraseña';
    const btnLogin= divhome.querySelector('#startSesion').dispatchEvent(new Event('click'));
    const resolvedLogin = loginWithEmailPassword(email.value, password.value);
    expect(btnLogin).toEqual(resolvedLogin);
  });
});
