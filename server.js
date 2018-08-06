const { validateString, validateUri, validateInteger, validateInput } = require('./validation');

const request = require('request-promise');

const input = validateInput(process.argv.slice(2));
const printNo = parseInt(input[2]);
const hackerNewsAPI = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const hackerNewsSingle = storyId => 'https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json?print=pretty';

// get all top stories from hackerNews
const getAllStories = () => {
  return new Promise( (resolve, reject) => {
    request(hackerNewsAPI)
    .then( (body) => {
      resolve(JSON.parse(body)); // return an array of IDs with all the top stories
    })
    .catch( (error) => {
      reject(error);
    });
  });
};

// constructor for objects to match api output requirements
const storyConstructor = (story, i) => {
  story = JSON.parse(story);
  return object = {
    title: validateString(story.title),
    uri: validateUri(story.url),
    author: validateString(story.by),
    points: validateInteger(story.score),
    comments: validateInteger(story.kids),
    rank: i + 1
  }
};

// get 'prettified' stories matching IDs to print requirements from cmd line
const getSingleStories = () => {
  return new Promise( (resolve, reject) => {
    getAllStories()
    .then( storyId => {
      let promiseArray = [];
      if(storyId.length < 0){
        throw new Error('No news found');
      } else if(storyId.length > 100) {
        storyId = storyId.splice(0,printNo);
      }

      // create a promise array to ensure we return all stories when called
      for (let i = 0; i < printNo; i++) {
        promiseArray.push(request(hackerNewsSingle(storyId[i])));
      }

      resolve(Promise.all(promiseArray));
    })
    .catch( error => {
      reject(error);
    });
  });
};

// get single stories and use the construcor to build an object to return to the console
const returnStories = () => {
  getSingleStories()
  .then(results => {
    let storyArray = [];
    for (let i = 0; i < results.length; i++) {
      storyArray.push(storyConstructor(results[i], i));
    }

    console.log(storyArray);
  })
};

returnStories();

module.exports = {
  getAllStories,
  storyConstructor,
  getSingleStories,
  returnStories
}
