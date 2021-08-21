const renderToDDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

export default renderToDDOM;
