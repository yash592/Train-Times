// Initialize Firebase


  var config = {
    apiKey: "AIzaSyAq5uKIPBFQ4gtnYRy0ckJM0VBi2Zn-sOY",
    authDomain: "yash-s-project.firebaseapp.com",
    databaseURL: "https://yash-s-project.firebaseio.com",
    projectId: "yash-s-project",
    storageBucket: "yash-s-project.appspot.com",
    messagingSenderId: "200190043664"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var frequency = "";
  var nextArrival = "";
  var minAway = "";
  var trainTime = "";

  $("#submit").on("click", function(){
  	event.preventDefault();
  	trainName = $("#train-name").val().trim();
  	destination = $("#destination").val().trim();
  	trainTime = $("#first-train").val().trim();
  	frequency = $("#frequency").val().trim();

  	// console.log(trainName);
  	// console.log(destination);
  	// console.log(trainTime);
  	// console.log(frequency);
  	// // console.log(trainName);
     var firstTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");

     console.log(firstTimeConverted);

     var currentTime = moment('hhmm');
     console.log(currentTime);
     var currentTimehhmm = moment(currentTime).format("hh:mm")
     console.log(currentTimehhmm);

     var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
     console.log(timeDiff);
     var timeremainder = timeDiff % frequency;
     console.log(timeremainder);

     var miunutesTillTrain = frequency - timeremainder;
     console.log(miunutesTillTrain);

     var nextTrain = moment().add(miunutesTillTrain, "minutes");
     console.log("arrival time: " + moment(nextTrain).format("hh:mm"));

  	database.ref().push({
  		trainName: trainName,
  		destination: destination,
  		trainTime: trainTime,
  		frequency: frequency,
      // nextTrain: nextTrain,
      // miunutesTillTrain: miunutesTillTrain,
  	});
  	



  });

  // var firstTime = "03:30"

 

  // var now = moment();

  // console.log(now);

  // console.log(moment().format());

//   var time = new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

  database.ref().on("child_added", function(trainAdded) {

  	// Need a way to get the current time

//   var time = new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

  	// get train times using first train time and frequency
  	// using that calculate the frequency and append all 3 variables below.



     $("#table").append('<tr><td>' + trainName + '</td><td>' + destination + '</td><td>' + frequency + '</td></tr>')

  });

