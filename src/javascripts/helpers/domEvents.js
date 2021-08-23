import bearForm from '../components/bearForm';
import jumbotron from '../components/jumbotron';
import { addBearToArray, addCatchAttempt, addSuccessfulCatch } from './data/bearData';

const domEvents = () => {
  jumbotron();
  bearForm();
  document.querySelector('#bearForm').addEventListener('click', addBearToArray);
  document.querySelector('#river').addEventListener('click', addCatchAttempt);
  document.querySelector('#river').addEventListener('click', addSuccessfulCatch);
};

export default domEvents;
