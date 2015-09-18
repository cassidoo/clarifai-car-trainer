/* Yolo */
var clarifai;

$(document).ready(
  clarifai = new Clarifai(
    {
      'accessToken': 'BXFprsmurYcMyhThys79a8ITTUPK96'
    }
  );
);


function positive(){
    clarifai.positive('ferrari/1.jpg', 'phish', callback).then(
        promiseResolved,
        promiseRejected
    );
}

function negative(){
    clarifai.negative('http://www.mediaspin.com/joel/grateful_dead230582_15-52.jpg', 'phish', callback).then(
        promiseResolved,
        promiseRejected
    );
}

// explicitly train our concept
function train(){
    clarifai.train('phish', callback).then(
        promiseResolved,
        promiseRejected
    );
}

// make a prediction on a url with our concept
function predict(){
    clarifai.predict('http://farm3.static.flickr.com/2161/2141620332_2b741028b3.jpg', 'phish', callback)
      .then(
        promiseResolved,
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

