/* Yolo */
var clarifai;

$(document).ready(function() {
  clarifai = new Clarifai({
    'clientId': 'KzLHU5r8Ug3BJzBewT8wxK5TKsdiII9z6RBRcMrH',
    'clientSecret': 'agXNlye7aTAkKtaZyo48ubUZ6Kd3JGBrgu0j685j'
  });
});

function positive(imgurl) {
  clarifai.positive(imgurl, 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
}

function negative(imgurl) {
  clarifai.negative(imgurl, 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
}

function train() {
  clarifai.train('ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
}

function predict(imgurl) {
  clarifai.predict(imgurl, 'ferrari', callback)
  .then(function(obj) {
      if (obj.score < 0.6) {
        swal({
          title: 'WHAT!',
          text: 'Get that car out of my face.',
          imageUrl: obj.url
        });
      } else {
        swal({
          title: 'Sweet!',
          text: 'This car is worthy.',
          imageUrl: obj.url
        });
      }
    },
    promiseRejected
  );
}

function promiseResolved(obj){
  console.log('Promise resolved', obj);
}

function promiseRejected(obj){
  console.log('Promise rejected', obj);
}

function callback(obj){
  console.log('callback', obj);
}

function carSubmit() {
  predict($("#new-car").val());
}

function samplePositives() {
  clarifai.positive('http://i.imgur.com/HEoT5xR.png', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/It5JRaj.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/A3xtKcS.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/XP4siO4.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/k2XGll5.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/a7rxnje.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/Z0i1R21.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/ZXa7T4z.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/f5lWEEb.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://i.imgur.com/9Knw6RS.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
}

function sampleNegatives() {
  clarifai.negative('http://i.imgur.com/GeMQsiQ.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/eXCE9mf.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/M0QBOo9.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/xzPD0zs.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/wjSZq5L.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/MMapLsi.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/eXCRRzl.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/Q1kSJx9.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/q2Ccwmq.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/EnrVc0B.jpg', 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
}
