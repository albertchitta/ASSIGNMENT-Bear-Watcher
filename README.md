# Bear Watcher  [![Netlify Status](https://api.netlify.com/api/v1/badges/b56344c7-89d5-473e-ac77-e45eb7953062/deploy-status)](https://app.netlify.com/sites/awc-bear-watcher/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

Each year between July and September brown bears in the Katmai National Park congregate along the Brooks River. This river is one of the main rivers that Sockeye Salmon swim up to spawn. The brown bears wait in the shallows of the river and catch the salmon as they jump over rocks.

[View App](https://awc-bear-watcher.netlify.app/)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
```
$ git clone git@github.com:albertchitta/ASSIGNMENT-Bear-Watcher.git
$ cd ASSIGNMENT-Bear-Watcher
```
## About the User <!-- This is a scaled down user persona -->
- The ideal users for this site are scientists and park rangers who can use it to track these bears.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- The DOM will populate a welcome message, followed by a form to enter a bear name and image url for a new bear.
- The DOM will then populate with a card of bears from the array.
- Catch Attempt: A button is used to track the number of catch attempts with a time stamp.
- Successful Catches: A button is used to track the number of successful catches with a time stamp.
- Fattest Bear Award: Each year in early september one bear is awarded the Fattest Bear award. This award goes to the bear who gains the most weight between July and September.

## Video Walkthrough of Bear Watcher <!-- A loom link is sufficient -->
https://www.loom.com/share/ee9a427632d64b2c925d6337baf486d4

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://awc-bear-watcher.netlify.app/)
- [Wireframes](https://docs.google.com/presentation/d/1xfyJoZR861Rw7ccNEUxngXu3uQCGCHBLfsZA_yL6W2U/edit?usp=sharing)
- [Project Board](https://github.com/albertchitta/ASSIGNMENT-Bear-Watcher/projects/1)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
This function compares the number of successfully caught fishes between the bears, sorting them from highest to lowest.
```
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
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
![Bear_Watcher_Overview](https://user-images.githubusercontent.com/83558122/132269631-32e3bf2f-ca14-4c15-b97b-efc7c2b86306.PNG)
![Bear_Watcher_River](https://user-images.githubusercontent.com/83558122/132269658-d1a57fad-ea85-4f96-a429-2d6676e50447.PNG)

## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
