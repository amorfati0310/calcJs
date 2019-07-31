const { addNumber } = require('./calcService');

const NUMBERS = [...Array(10)].map((_, i) => i);

const render = (state) => {
  const el = document.getElementById('app');
  el.innerHTML = renderToString(state);

  bindEvents(el);
};

const renderToString = ({current}) => {
  return `
    <div>${current}</div>
    ${NUMBERS.map(i => `
      <button class="button">${i}</button>
    `).join('')}
  `;
};

const bindEvents = () => {
  const buttons = [...el.querySelectorAll('button')];
  buttons.forEach(buttonEl => {
    buttonEl.addEventListener('click', (e) => {
      const number = parseInt(e.target.innerText);
      const newState = addNumber(state, number);
      render(newState);
    });
  });
};

module.exports = {
  render,
  renderToString,
};
