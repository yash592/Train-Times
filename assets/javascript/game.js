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

  	

  	
     

     var trains = {

     	trainName: trainName,
  		destination: destination,
  		trainTime: trainTime,
  		frequency: frequency,
     //    nextTrain: nextTrain,
	    // nextarrival: nextarrival,
  	

     };

     $("#train-name").val("");
  $("#destination").val("");
  $("#first-train").val("");
  $("#frequency").val("");

  	database.ref().push(trains);

  });

  

  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

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

     var minutestillTrains = frequency - timeremainder;
     console.log(minutestillTrains);

     var minsTillTrain = parseInt(minutestillTrains);
     var nextarrival = minsTillTrain.toString();
     console.log(nextarrival);
     console.log(minsTillTrain);

     var nextTrains = moment().add(minutestillTrains, "minutes");
     
     console.log("arrival time: " + moment(nextTrains).format("hh:mm"));


     var nextTrain = moment(nextTrains).format("hh:mm");

     console.log(nextTrain);

  	// Need a way to get the current time

  	console.log(childSnapshot.val());

  	var nameOfTrain = childSnapshot.val().trainName;
  	var destinationOfTrain = childSnapshot.val().destination;
  	var timeOfTrain = childSnapshot.val().trainTime;
  	var frequencyOfTrain = childSnapshot.val().frequency;
  	var trainNext = childSnapshot.val().nextTrain;
  	var arrivalNext = childSnapshot.val().nextTrain;

  	console.log(trainNext);

    console.log(arrivalNext);


  	// get train times using first train time and frequency
  	// using that calculate the frequency and append all 3 variables below.



     $("#table").append('<tr><td>' + nameOfTrain + '</td><td>' + destinationOfTrain + '</td><td>' + frequencyOfTrain + '</td><td>' + trainNext + '</td><td>' + arrivalNext + ' mins' + '</td></tr>');

  });

