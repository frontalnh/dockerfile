const winston = require('winston');
const { format } = winston;
const stackReg = /at\s+()(.*):(.*):(\d*):(\d*)/gi;
const stackRegWithMap = /at\s+(.*)\s+\((.*):(.*):(\d*):(\d*)\)/gi;

const uppercase = format(data => {
  data.level = data.level.toUpperCase();
  return data;
});

const formatErrorInfo = (message, ...meta) => {
  const stackList = new Error().stack;

  if (stackList) {
    const stack = stackList.split('\n').slice(3);
    const match = stackRegWithMap.exec(stack[0]) || stackReg.exec(stack[0]);

    if (match) {
      const errorInfo = `[N:${match[1]}] [F:${match[3]}] [L:${match[4]} | P:${
        match[5]
      }] ${message}`;
      return [errorInfo].concat(meta);
    }
  }

  return [message].concat(meta);
};

const env = process.env.NODE_ENV || 'development';
const defaultOptions = {
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    uppercase(),
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.splat(),
    format.printf(data => {
      let defaultPrint = `[${data.timestamp}] [${data.level}] ${data.message}`;

      return defaultPrint;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './log/application/info.log' })
  ]
};

const winstonLogger = winston.createLogger(defaultOptions);

function debug(message, ...meta) {
  winstonLogger.debug.apply(winstonLogger, formatErrorInfo(message, meta));
}

function info(message, ...meta) {
  winstonLogger.info.apply(winstonLogger, [message].concat(meta));
}

function warn(message, ...meta) {
  winstonLogger.warn.apply(winstonLogger, formatErrorInfo(message, meta));
}

function error(message, ...meta) {
  winstonLogger.error.apply(winstonLogger, formatErrorInfo(message, meta));
}

module.exports.logger = {
  debug: debug,
  info: info,
  warn: warn,
  error: error
};
