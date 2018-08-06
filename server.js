const { validateString, validateUri, validateInteger, validateInput } = require('./validation');

const request = require('request-promise');

const input = validateInput(process.argv.slice(2));
const printNo = parseInt(input[2]);
const hackerNewsAPI = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const hackerNewsSingle = storyId => 'https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json?print=pretty';

const getAllStories = () => {
  return new Promise( (resolve, reject) => {
    request(hackerNewsAPI)
    .then( (body) => {
      resolve(JSON.parse(body));
    })
    .catch( (error) => {
      reject(error);
    });
  });
};

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
