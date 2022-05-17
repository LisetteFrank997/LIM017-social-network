// importamos la funcion que vamos a testear
import { SaveDataPost } from '../src/FirebaseConfi/FunctionsPost.js';

describe('SaveDataPost', () => {
  it('debería agregar un post', () => SaveDataPost('los mejores destinos para viajar', 'Estos viajes fueron geniales').then((data) => {
    expect(data).toBe('los mejores destinos para viajar', 'Estos viajes fueron geniales');
  }));
});
