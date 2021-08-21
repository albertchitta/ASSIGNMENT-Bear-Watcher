import bearForm from '../components/bearForm';
import jumbotron from '../components/jumbotron';
import addBearToArray from './data/bearData';

const domEvents = () => {
  jumbotron();
  bearForm();
  document.querySelector('#bearForm').addEventListener('click', addBearToArray);
};

export default domEvents;
