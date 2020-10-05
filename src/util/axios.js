var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  /* other custom settings */
});

module.exports = axiosInstance;