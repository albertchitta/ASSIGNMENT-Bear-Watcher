import bearForm from '../components/bearForm';
import jumbotron from '../components/jumbotron';
import river from '../components/river';
import bears from './data/bears';
import { addBearToArray, addCatchAttempt, addSuccessfulCatch } from './data/bearData';

const domEvents = () => {
  jumbotron();
  bearForm();
  river(bears);
  document.querySelector('#bearForm').addEventListener('click', addBearToArray);
  document.querySelector('#river').addEventListener('click', addCatchAttempt);
  document.querySelector('#river').addEventListener('click', addSuccessfulCatch);
};

export default domEvents;
