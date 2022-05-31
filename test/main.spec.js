import { onNavigate } from "../src/main.js";
import { Home } from "../src/components/Home.js";

jest.mock("../src/FirebaseConfi/Firebase.js");

describe ('onNavigate()', () => {
    it('Funciona el cambio de vista a Home', () => {
        document.body.innerHTML = '<div id="root"></div>';
        const result= Home();
        onNavigate('/');
        const route= document.querySelector('#root').firstChild;
        console.log(route);

        expect(route).toEqual(result);
    });
})

