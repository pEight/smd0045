(function () {

  // helpers
  const select = (identifer) => document.querySelector(identifer);

  let state = {
    visible: true,
  }

  function setState(obj) {
    if (typeof obj === 'function') {
      state = obj(state);
    }

    state = { ...state, ...obj };
  }

  // code
  const mainBox = select('#main');
  const btn = select('.btn');
  const feedback = select('.feedback');

  btn.addEventListener('click', (event) => {
    setState((old) => ({ ...old, visible: true }));
    btn.className = 'hidden';

    feedback.innerHTML = 'SUMIU!!!';
  });

})();