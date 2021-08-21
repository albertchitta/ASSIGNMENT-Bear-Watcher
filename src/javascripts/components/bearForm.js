import renderToDOM from '../helpers/renderToDom';

const bearForm = () => {
  const domString = `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Enter a New Bear</h3>
        <div id="nameErrorMessage"></div>
        <div id="urlErrorMessage"></div>
        <form id="bear-form">
          <div class="mb-3">
            <label for="inputBearName" class="form-label">Bear Name</label>
            <input type="text" class="form-control" id="inputBearName">
          </div>
          <div class="mb-3">
            <label for="inputBearUrl" class="form-label">Image URL</label>
            <input type="text" class="form-control" id="inputBearUrl">
          </div>
          <button type="button" class="btn btn-primary" id="submitBtn">Submit</button>
        </form>
      </div>
    </div>
  `;

  renderToDOM('#bearForm', domString);
};

export default bearForm;
