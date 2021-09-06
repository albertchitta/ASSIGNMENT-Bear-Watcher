import renderToDOM from '../helpers/renderToDom';

const jumbotron = () => {
  const domString = `
    <div class="jumbotron">
      <h1 class="display-4">Bear Watcher</h1>
      <p class="lead">Brown Bears of Brooks Falls - Katmai National Park, Alaska, USA</p>
      <hr class="my-4">
    </div>
  `;

  renderToDOM('#jumbotron', domString);
};

export default jumbotron;
