import river from '../../components/river';
import { nameErrorMessage, urlErrorMessage } from '../errorMessage';
import { getDate, getTime } from '../date';
import compareCatches from '../compareCatches';
import bears from './bears';

const addBearToArray = (e) => {
  if (e.target.id === 'submitBtn') {
    const bearName = document.querySelector('#inputBearName');
    const bearUrl = document.querySelector('#inputBearUrl');

    if (bearName.value && bearUrl.value) {
      bears.push({
        id: bears.length + 1,
        name: bearName.value,
        url: bearUrl.value,
        attempts: 0,
        catches: 0,
        attemptDate: 'No data',
        attemptTime: ' this time',
        catchDate: 'No data',
        catchTime: ' this time'
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
      // eslint-disable-next-line no-param-reassign
      bear.attemptDate = getDate();
      // eslint-disable-next-line no-param-reassign
      bear.attemptTime = getTime();
      river(bears);
      compareCatches(bears);
    }
  });
};

const addSuccessfulCatch = (e) => {
  bears.forEach((bear) => {
    if (e.target.id === `successfulCatchBtn-${bear.id}`) {
      // eslint-disable-next-line no-param-reassign
      bear.catches += 1;
      // eslint-disable-next-line no-param-reassign
      bear.catchDate = getDate();
      // eslint-disable-next-line no-param-reassign
      bear.catchTime = getTime();
      river(bears);
      compareCatches(bears);
    }
  });
};

export {
  addBearToArray, addCatchAttempt, addSuccessfulCatch
};
