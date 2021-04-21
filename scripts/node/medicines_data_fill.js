const axios = require('axios');

const medicines = require('./remidisvar.json');

const apiUrl = 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=medicines';

const fillData = async () => {
  for (let i = 0; i < medicines.length; i++) {
    const medicine = medicines[i];
    medicine.price = '';
    medicine.createdAt = new Date().toISOString();
    medicine.last_updated = new Date().toISOString();
    try {
      const response = await axios.post(apiUrl, {
        data: medicine
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