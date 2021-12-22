const data = [
  { name: 'Victor', score: 45 },
  { name: 'Daniel', score: 25 },
  { name: 'Sirchi', score: 35 },
  { name: 'Chimbo', score: 50 },
  { name: 'Joshua', score: 40 },
];

const index = (i) => `${data[i].name}-${data[i].score}`;

function display(data) {
  const scoreBox = document.querySelector('.score-box');
  scoreBox.innerHTML = '';
  const codeData = data.map((el, i) => `<li id="${index(i)}" class="table-data">
  <span class="name">${el.name}</span>
  <span class="score">${el.score}</span>
  </li>`).join('');
  scoreBox.innerHTML = codeData;
}
export { data, display };
