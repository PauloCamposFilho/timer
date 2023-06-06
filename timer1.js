const createTimer = (time) => {
  const timeMilliseconds = parseInt(time) * 1000;
  if (timeMilliseconds >= 0 && !isNaN(timeMilliseconds)) {
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log("beeped! timer = ", time);
    }, timeMilliseconds);
  }
};

if (process.argv.length <= 2) { // time to start implementing correct practices and check if timer can even be run.
  console.log("Cannot start timers, no parameters passed.");
  process.exit();
}

const arrayTimers = process.argv.slice(2);

for (let i = 0; i < arrayTimers.length; i++) {
  createTimer(arrayTimers[i]);
}