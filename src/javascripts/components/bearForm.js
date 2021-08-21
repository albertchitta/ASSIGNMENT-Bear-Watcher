import renderToDDOM from '../helpers/renderToDom';

const bearForm = () => {
  const domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Enter a New Bear</h5>
        <form>
          <div class="mb-3">
            <label for="inputBearName" class="form-label">Bear Name</label>
            <input type="text" class="form-control" id="inputBearName">
          </div>
          <div class="mb-3">
            <label for="inputBearURL" class="form-label">Image URL</label>
            <input type="text" class="form-control" id="inputBearURL">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  `;

  renderToDDOM('#app', domString);
};

export default bearForm;
