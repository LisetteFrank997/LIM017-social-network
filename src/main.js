/* eslint-disable import/no-cycle */
import { Home } from './components/Home.js';
import { profile } from './components/profile.js';
import { Register } from './components/Register.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/profile': profile,
};

const component = routes[window.location.pathname];

export const onNavigate = (pathname) => {
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

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());