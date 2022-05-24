import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// Off Canvas Menu
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

// ketika url hash diubah
window.addEventListener('hashchange', () => {
  app.renderPage();
});

// ketika halaman dimuat
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
