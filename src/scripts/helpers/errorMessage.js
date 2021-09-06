const nameErrorMessage = (bear) => {
  if (bear) {
    document.querySelector('#nameErrorMessage').innerHTML = '';
  } else {
    document.querySelector('#nameErrorMessage').innerHTML = `
      <h6>Please enter a name</h6>
    `;
  }
};

const urlErrorMessage = (bear) => {
  if (bear) {
    document.querySelector('#urlErrorMessage').innerHTML = '';
  } else {
    document.querySelector('#urlErrorMessage').innerHTML = `
      <h6>Please enter an image URL</h6>
    `;
  }
};

export { nameErrorMessage, urlErrorMessage };
