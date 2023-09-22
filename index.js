import jsonfile from 'jsonfile';
import moment from 'moment';
 // Import 'moment' correctly
import simpleGit from 'simple-git';
const FILE_PATH = './data.json';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeCommit = n => {
  if (n === 0) return simpleGit().push();

  const x = getRandomInt(0, 54);
  const y = getRandomInt(0, 6);

  // Create a 'moment' instance
  const DATE = moment()
    .subtract(1, 'y')
    .add(1, 'd')
    .add(x, 'w')
    .add(y, 'd')
    .format();

  const data = {
    date: DATE
  };

  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(1000);
