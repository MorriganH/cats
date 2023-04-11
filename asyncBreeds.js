const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};

const printOutCatBreed = data => {
  console.log('Return Value: ', data);
};

breedDetailsFromFile("Bombay", printOutCatBreed);