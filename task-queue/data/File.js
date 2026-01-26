import fs from 'fs';

fs.stat(`${process.cwd()}/task-queue/data/data.json`, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.isFile());
});