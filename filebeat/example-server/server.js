const express = require('express');
const logger = require('./logger').logger;

let app = express();
app.get('/', (req, res, next) => {
  console.log('called!');
  logger.info('called');
  res.send(200);
});
app.listen(3001, () => {
  console.log(logger);
  logger.info('listen');
});
