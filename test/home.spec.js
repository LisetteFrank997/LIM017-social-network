// importamos la funcion que vamos a testear
import { Home } from '../src/lib/Home.js';

describe('Home', () => {
  it('debería ser una función', () => {
    expect(typeof Home).toBe('function');
  });
});
