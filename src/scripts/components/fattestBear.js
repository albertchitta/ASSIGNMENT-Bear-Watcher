import renderToDOM from '../helpers/renderToDom';

const fattestBear = (array) => {
  let domString = '';

  array.forEach((bear) => {
    domString += `
      <div class="card fattest-bear-card" style="width: 20rem;">
        <img class="bear-img" src="${bear.url}" class="card-img-top" alt="...">
        <i class="fas fa-trophy ${bear.award}-trophy"></i>
        <div class="card-body">
          <h5 class="card-title">${bear.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Fish Catch Attempts: ${bear.attempts}
            <div id="attemptTime" class="text-muted">Last attempt: ${bear.attemptDate} at ${bear.attemptTime}</div>
          </li>
          <li class="list-group-item">Total Fish Caught: ${bear.catches}
            <div id="catchTime" class="text-muted">Last caught: ${bear.catchDate} at ${bear.catchTime}</div>
          </li>
        </ul>
      </div>
    `;
  });

  renderToDOM('#fattestBear', domString);
};

export default fattestBear;
