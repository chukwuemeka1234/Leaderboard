const userName = document.getElementById('name');
const userScore = document.getElementById('score');

const sendNewItem = () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Avalanche Pipes' }),
    });
  };

  const sendNewScore = () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YQKZGYwmy1dBRFkOZiJs/scores/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userName.value, score: userScore.value }),
    });
  };

  const recieveScore = async () => {
    const web = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YQKZGYwmy1dBRFkOZiJs/scores/')
    const send = await web.json();
    return send.result;
  }

  export { sendNewItem, sendNewScore, recieveScore };
