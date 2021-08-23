import river from '../../components/river';
import { nameErrorMessage, urlErrorMessage } from '../errorMessage';
import { getDate } from '../date';

const bears = [];

const addBearToArray = (e) => {
  if (e.target.id === 'submitBtn') {
    const bearName = document.querySelector('#inputBearName');
    const bearUrl = document.querySelector('#inputBearUrl');

    if (bearName.value && bearUrl.value) {
      bears.push({
        id: bears.length,
        name: bearName.value,
        url: bearUrl.value,
        attempts: 0,
        catches: 0
      });

      nameErrorMessage(bearName.value);
      urlErrorMessage(bearUrl.value);
      river(bears);
    } else {
      nameErrorMessage(bearName.value);
      urlErrorMessage(bearUrl.value);
    }
  }
};

const addCatchAttempt = (e) => {
  bears.forEach((bear) => {
    if (e.target.id === `catchAttemptBtn-${bear.id}`) {
      // eslint-disable-next-line no-param-reassign
      bear.attempts += 1;
      getDate();
      river(bears);
    }
  });
};

const addSuccessfulCatch = (e) => {
  bears.forEach((bear) => {
    if (e.target.id === `successfulCatchBtn-${bear.id}`) {
      // eslint-disable-next-line no-param-reassign
      bear.catches += 1;
      river(bears);
    }
  });
};

export { addBearToArray, addCatchAttempt, addSuccessfulCatch };
