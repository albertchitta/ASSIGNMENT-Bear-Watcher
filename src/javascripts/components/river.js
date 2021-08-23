import renderToDOM from '../helpers/renderToDom';

const river = (array) => {
  let domString = '';

  array.forEach((bear, i) => {
    domString += `
      <div class="card bear-card" style="width: 18rem;">
        <img src="${bear.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${bear.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Fish Catch Attempts: ${bear.attempts}</li>
          <li class="list-group-item">Total Fish Caught: ${bear.catches}</li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-primary" id="catchAttemptBtn-${i}">Add Catch Attempt</button>
          <button type="button" class="btn btn-primary" id="successfulCatchBtn-${i}">Add Successful Catch</button>
        </div>
      </div>
    `;
  });

  renderToDOM('#river', domString);
  document.getElementById('bear-form').reset();
};

export default river;
