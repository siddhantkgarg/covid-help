const axios = require('axios');

const oxygenData = require('./oxygen.json');

const apiUrl = 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=oxygen';

const fillData = async () => {
  for (let i = 0; i < oxygenData.length; i++) {
    const oxygen = oxygenData[i];
    delete oxygen.Item;
    oxygen.contact = `${oxygen.contact}`;
    oxygen.person_name = '';
    oxygen.link = '';
    oxygen.created_at = new Date().toISOString();
    oxygen.last_updated = new Date().toISOString();
    try {
      const response = await axios.post(apiUrl, {
        data: oxygen
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