const elasticsearch = require('elasticsearch');

const es = new elasticsearch.Client({
  host: 'https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/',
  log: 'trace',
  apiVersion: '7.x', // use the same version of your Elasticsearch instance
});

exports.handler = async (event) => {
  try {
    const response = await es.ping({
      // ping usually has a 3000ms timeout
      requestTimeout: 3000
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};