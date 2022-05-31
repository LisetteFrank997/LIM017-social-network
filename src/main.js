/* eslint-disable import/no-cycle */
import { Home } from './components/Home.js';
import { profile } from './components/profile.js';
import { Register } from './components/Register.js';



const routes = {
  '/': Home,
  '/register': Register,
  '/profile': profile,
};



export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

window.addEventListener("DOMContentLoaded", ()=>{
  const rootDiv = document.getElementById('root');
  const component = routes[window.location.pathname];
  window.onpopstate = () => {
    rootDiv.appendChild(component());
  };
  rootDiv.appendChild(component());
})
