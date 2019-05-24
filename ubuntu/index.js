const fs = require('fs');

fs.writeFileSync('/var/log/app.txt', 'hello world');

setTimeout(() => {
  process.exit(1);
}, 10000);
