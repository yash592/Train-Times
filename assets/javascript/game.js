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

  	database.ref().push({
  		trainName: trainName,
  		destination: destination,
  		trainTime: trainTime,
  		frequency: frequency,
  	});
  	



  });

  database.ref().on("child_added", function(trainAdded) {

  	// Need a way to get the current time
  	// get train times using first train time and frequency
  	// using that calculate the frequency and append all 3 variables below.

     $("#table").append('<tr><td>' + trainName + '</td><td>' + destination + '</td><td>' + frequency + '</td></tr>')

  });

