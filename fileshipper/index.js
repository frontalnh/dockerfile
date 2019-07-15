const { interval } = require('rxjs');
const { tap } = require('rxjs/operators');
const fs = require('fs');

if (!fs.existsSync('/fileshipper/test/fileshipper')) {
  fs.mkdirSync('/fileshipper/test/fileshipper');
}

interval(1000)
  .pipe(
    tap(v => {
      fs.writeFileSync(`/fileshipper/test/fileshipper/${v}.txt`, v);
    })
  )
  .subscribe();
