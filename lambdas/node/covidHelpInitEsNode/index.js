const elasticsearch = require('elasticsearch');

const es = new elasticsearch.Client({
  host: 'https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/',
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
    const promises = [];
    
    const hospitalBedsIndexPromise = es.indices.exists({
      index: ES_INDEX.HOSPITAL_BEDS
    });
    
    const medicinesIndexPromise = es.indices.exists({
      index: ES_INDEX.MEDICINES
    });
    
    const oxygenIndexPromise = es.indices.exists({
      index: ES_INDEX.OXYGEN
    });
    
    promises.push(hospitalBedsIndexPromise, medicinesIndexPromise, oxygenIndexPromise);
    
    const [hospitalBedsIndex, medicinesIndex, oxygenIndex] = await Promise.all(promises);
    
    
    if (hospitalBedsIndex) {
      console.log(`${ES_INDEX.HOSPITAL_BEDS} exists`);
    } else {
      await es.indices.create({
        index: ES_INDEX.HOSPITAL_BEDS
      });
      console.log(`${ES_INDEX.HOSPITAL_BEDS} created`);
    }
    
    if (medicinesIndex) {
      console.log(`${ES_INDEX.MEDICINES} exists`);
    } else {
      await es.indices.create({
        index: ES_INDEX.MEDICINES
      });
      console.log(`${ES_INDEX.MEDICINES} created`);
    }
    
    if (oxygenIndex) {
      console.log(`${ES_INDEX.OXYGEN} exists`);
    } else {
      await es.indices.create({
        index: ES_INDEX.OXYGEN
      });
      console.log(`${ES_INDEX.OXYGEN} created`);
    }
  } catch (error) {
    console.error(error);
  }
};