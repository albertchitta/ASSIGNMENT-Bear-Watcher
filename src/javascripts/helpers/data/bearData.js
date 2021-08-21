import river from '../../components/river';
import { nameErrorMessage, urlErrorMessage } from '../errorMessage';

const bears = [];

const addBearToArray = (e) => {
  if (e.target.id === 'submitBtn') {
    const bearName = document.querySelector('#inputBearName');
    const bearUrl = document.querySelector('#inputBearUrl');

    if (bearName.value && bearUrl.value) {
      bears.push({
        name: bearName.value,
        url: bearUrl.value
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

export default addBearToArray;
