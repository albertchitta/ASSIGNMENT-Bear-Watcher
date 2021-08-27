import fattestBear from '../components/fattestBear';

const compareCatches = (array) => {
  // let gold = 'none';
  // let silver = 'none';
  // let bronze = 'none';
  const sortedArray = array.slice().sort((a, b) => b.catches - a.catches);

  const awardedBears = [];

  for (let i = 0; i < sortedArray.length && i < 6; i += 1) {
    if (sortedArray[i].catches > 0) {
      awardedBears.push(sortedArray[i]);
    }
  }

  fattestBear(awardedBears);
};

export default compareCatches;
