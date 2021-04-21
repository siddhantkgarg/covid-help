const elasticsearch = require('elasticsearch');

const es = new elasticsearch.Client({
  //host: 'https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/',
  host: 'https://vpc-covid-help2-su24eiu7nbh72svrz4eh52od2i.ap-south-1.es.amazonaws.com/',
  log: 'trace',
  apiVersion: '7.x', // use the same version of your Elasticsearch instance
});

const ES_INDEX = {
  HOSPITAL_BEDS: 'hospital_beds',
  MEDICINES: 'medicines',
  OXYGEN: 'oxygen'
};

exports.handler = async (event) => {
  try {
    const response = await es.indices.delete({
      index: [ES_INDEX.HOSPITAL_BEDS, ES_INDEX.MEDICINES, ES_INDEX.OXYGEN]
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};