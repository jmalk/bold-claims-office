const Twitter = require('twitter');
const config = require('./config.js');

const twitterClient = new Twitter(config);

const searchParameters = {
  q: '#paintingwarhammer -filter:retweets',
  count: 5,
  result_type: 'recent',
  lang: 'en'
};

twitterClient.get('search/tweets', searchParameters, (err, data, response) => {
  if (err) {
    console.error(err);
  } else {
    logTweets(data, response);
  }
});

function logTweets (data, response) {
  console.log(`
    Statuses:
    ${JSON.stringify(data.statuses.map((status) => status.text), null, 2)}
  `)
};
