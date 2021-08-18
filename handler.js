'use strict';
const moment = require('moment');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v2.0! Your function executed successfully!',
        input: event,
        version: 'v1.0',
        timestamp: moment().unix(),
      },
      null,
      2
    ),
  };
};
