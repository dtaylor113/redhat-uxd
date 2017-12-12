function remoteMathService(cb) {
  var one, two;

  Promise.all([
    callOneService(),
    callTwoService(),
  ]).then(res => cb(undefined, res[0] + res[1]));

  // return setTimeout(() => {
  //   cb(undefined, one + two);
  // }, 1500);
}

function callOneService() {
  // setTimeout(function() {
  //   return cb(undefined, 1);
  // }, 1000);

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        return resolve(1);
    }, 1000);
  });
}

function callTwoService(cb) {
  // setTimeout(function() {
  //   return cb(undefined, 2);
  // }, 1500);

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        return resolve(2);
    }, 1500);
  });
}
remoteMathService(function(err, answer) {
  if (err) console.log("error ", err);
  if (answer !== 3) {
    console.log("wrong answer", answer);
  } else {
    console.log("correct");
  }
});
