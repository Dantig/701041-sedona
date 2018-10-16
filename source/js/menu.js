var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var TOGGLE_STATE = {
  CLOSED: 'nav--closed',
  OPENED: 'nav--opened'
};

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains(TOGGLE_STATE.CLOSED)) {
    navMain.classList.remove(TOGGLE_STATE.CLOSED);
    navMain.classList.add(TOGGLE_STATE.OPENED);
  } else {
    navMain.classList.remove(TOGGLE_STATE.OPENED);
    navMain.classList.add(TOGGLE_STATE.CLOSED);
  }
});
