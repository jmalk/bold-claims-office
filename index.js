const Twitter = require('twitter');
const config = require('./config.js');

const twitterClient = new Twitter(config);

const searchParameters = {
  q: 'idoneth',
  count: 10,
  result_type: 'recent',
  lang: 'en'
};

twitterClient.get('search/tweets', searchParameters, (err, data, response) => {
  if(!err){
    console.log(`Response: ${JSON.stringify(response, null, 2)}`);
    console.log(`Data: ${JSON.stringify(data, null, 2)}`);
  } else {
    console.log(err);
  }
});

