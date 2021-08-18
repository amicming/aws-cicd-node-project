'use strict';
const moment = require('moment');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'My SLS Demo!!',
        input: event,
        version: 'v2.0',
        timestamp: moment().unix(),
      },
      null,
      2
    ),
  };
};
