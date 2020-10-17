import '@material/mwc-button';
import '@material/mwc-drawer';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-top-app-bar';

// import '@material/mwc-tab-bar';
// import '@material/mwc-tab';

// import '@material/mwc-list';
// import '@material/mwc-list/mwc-list-item';

const drawer = document.getElementsByTagName('mwc-drawer')[0];
if (drawer) {
  const container = drawer.parentNode;
  container.addEventListener('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });
}