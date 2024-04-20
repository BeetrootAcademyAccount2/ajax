console.log("Hello");

const getLocation = () => {
  const promise = new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (data) => {
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};
const setTimer = (data) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("Timeout");
      //   console.log(data);
      resolve("Timer finished");
    }, 2000);
  });
  return promise;
};

/*
getLocation()
  .catch((error) => console.log("this is the error", error))
  .then((data) => {
    return setTimer(data);
  })
  .then((result) => {
    console.log(result);
    console.log("End");
  });
  */

/*
(async function () {
  const position = await getLocation();
  const timerFinished = await setTimer();
  console.log(position);
  console.log(timerFinished);
  console.log("End");
})();
*/

/*
async function execute() {
  try {
    const position = await getLocation();
    const timerFinished = await setTimer();
    console.log(position);
    console.log(timerFinished);
    console.log("End");
  } catch (error) {
    console.error(error);
  }
}
*/

async function execute() {
  try {
    // const position = await getLocation();
    // const timerFinished = await setTimer();

    // const result = await Promise.all([getLocation(), setTimer()]);
    // const result = await Promise.allSettled([getLocation(), setTimer()]);
    // const race = await Promise.race([getLocation(), setTimer()]);

    // console.log(race);
    // console.log(position);
    // console.log(timerFinished);
    console.log("End");
  } catch (error) {
    console.error(error);
  }
}

execute();
