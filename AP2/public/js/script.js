const query = (id) => document.querySelector(id);

const inp = query('.inp');
const btn = query('.btn');
const resField = query('.res');
const footer = query('.footer');

btn.addEventListener('click', () => {
  const n = inp.value; 

  fetch(`/sum?value=${n}`)
    .then(res => res.status === 200 ? res.json() : Promise.reject(res.json()))
    .then(res => {
      resField.innerHTML = `Resultado: ${res}`;
      inp.value = '';
    })
    .catch(err => {
      resField.innerHTML = `Resultado: '${n}' não pode ser um número`
    });
});

fetch(`/me`)
  .then(res => res.json())
  .then(res => {
    footer.innerHTML = `Made by ${res}`
  });

