import fattestBear from '../components/fattestBear';

const compareCatches = (array) => {
  const sortedArray = array.slice().sort((a, b) => b.catches - a.catches);

  const awardedBears = [];

  for (let i = 0; sortedArray[i].catches > 0 && i < 3; i += 1) {
    if (i === 0) {
      sortedArray[i].award = 'gold';
      awardedBears.push(sortedArray[i]);
    }
    if (i === 1) {
      sortedArray[i].award = 'silver';
      if (sortedArray[i].catches === sortedArray[i - 1].catches) {
        sortedArray[i].award = 'gold';
      }
      awardedBears.push(sortedArray[i]);
    }
    if (i === 2) {
      sortedArray[i].award = 'bronze';
      if (sortedArray[i].catches === sortedArray[i - 1].catches || sortedArray[i - 1].award === 'gold') {
        sortedArray[i].award = 'silver';
      }
      awardedBears.push(sortedArray[i]);
    }

    fattestBear(awardedBears);
  }
};

export default compareCatches;
