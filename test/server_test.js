const expect = require('chai').expect;

const { getAllStories, storyConstructor, getSingleStories, returnStories } = require('../server');

// the below is not the best testing. struggled testing promises which is something I'm actively seeking to improve on

describe('storyConstructor()', function () {

  it('should return constructed object for api response', function () {

    let object = '{\n  "by" : "elfakyn",\n  "descendants" : 30,\n  "id" : 17697366,\n  "kids" : [ 17697500, 17697699, 17697763, 17697662, 17697733, 17697794, 17697769, 17697565, 17697609, 17697780, 17697752, 17697576, 17697663, 17697534, 17697666, 17697515, 17697677, 17697543 ],\n  "score" : 124,\n  "time" : 1533562545,\n  "title" : "AWS has terrible icons: the quiz (results will be sent to AWS)",\n  "type" : "story",\n  "url" : "https://docs.google.com/forms/d/e/1FAIpQLSdnEEo0o2JgnIt8VOGffhkcYj-C2h9m5_NFzM0Q1AU-P8d0zA/viewform"\n}\n';

    let returnObject = {
      title: 'AWS has terrible icons: the quiz (results will be sent to AWS)',
      uri: 'Invalid URI',
      author: 'elfakyn',
      points: 124,
      comments: 18,
      rank: 1
    };

    let story = storyConstructor(object, 0);

    // Reason for deep: Chai needs to know that it must traverse the objects and compare nested properties.
    expect(story).to.deep.equal(returnObject);
  });

});

describe('getAllStories()', function () {

  it('should return an array from hackerNews', function () {

    getAllStories()
    .then( res => {
      expect(res).to.be.an('array')
    });

  });
});

describe('getSingleStories()', function () {

  it('should return an array of Promises', function () {

    getSingleStories()
    .then( res => {
      expect(res).to.be.an('array')
    });

  });
});
