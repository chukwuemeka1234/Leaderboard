import { recieveScore } from './apiData.js';

const scoreDisplay = document.getElementById('score-box');

const render = async () => {
  scoreDisplay.innerHTML = '';
  const data = await recieveScore();
  const list = data.map((item) => {
    const listItem = `<li class="list-item"><p>${item.user}:</p> <p>${item.score}</p></li>`;
    return listItem;
  });
  scoreDisplay.innerHTML = list.join('');
};

export default render;
