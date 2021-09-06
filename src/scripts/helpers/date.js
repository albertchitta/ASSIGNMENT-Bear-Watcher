const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getDate = () => {
  const date = new Date();
  const month = monthArray[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const fullDate = `${month} ${day}, ${year}`;

  return fullDate;
};

const getTime = () => {
  const time = new Date();
  const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const fullTime = `${hour}:${minutes}`;

  return fullTime;
};

export { getDate, getTime };
