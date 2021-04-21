const axios = require('axios');

const hospitalBeds = require('./hospital_beds.json');

const apiUrl = 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=hospital_beds';

const fillData = async () => {
  for (let i = 0; i < hospitalBeds.length; i++) {
    const hospitalBed = hospitalBeds[i];
    delete hospitalBed.__2;
    hospitalBed.created_at = new Date().toISOString();
    hospitalBed.last_updated = new Date().toISOString();
    try {
      const response = await axios.post(apiUrl, {
        data: hospitalBed
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
};

(async function() {
  await fillData();
}());