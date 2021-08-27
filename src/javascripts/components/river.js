import renderToDOM from '../helpers/renderToDom';

const river = (array) => {
  let domString = '';

  array.forEach((bear) => {
    domString += `
      <div class="card bear-card" style="width: 20rem;">
        <img class="bear-img" src="${bear.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${bear.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Fish Catch Attempts: ${bear.attempts}
            <div id="attemptTime" class="text-muted">Last attempt: ${bear.attemptDate} at ${bear.attemptTime}</div>
          </li>
          <li class="list-group-item">Total Fish Caught: ${bear.catches}
            <div id="catchTime" class="text-muted">Last caught: ${bear.catchDate} at ${bear.catchTime}</div>
          </li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-primary" id="catchAttemptBtn-${bear.id}">Add Catch Attempt</button>
          <button type="button" class="btn btn-primary" id="successfulCatchBtn-${bear.id}">Add Successful Catch</button>
          <div id="catchTime"></div>
        </div>
      </div>
    `;
  });

  renderToDOM('#river', domString);
  document.getElementById('bear-form').reset();
};

export default river;
