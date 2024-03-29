$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyCUYK26JNWYfLWmDphAacrOscRkHMrpW18",
        authDomain: "bootcamp-work.firebaseapp.com",
        databaseURL: "https://bootcamp-work.firebaseio.com",
        projectId: "bootcamp-work",
        storageBucket: "bootcamp-work.appspot.com",
        messagingSenderId: "922464549797",
        appId: "1:922464549797:web:2dce58ab7f360ef9"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $("#addTrain").on("click", function(event){

        event.preventDefault();

        var trainName = "";
        var destination = "";
        var firstTrain = "";
        var interval = "";

        trainName = $("#trainName").val().trim();
        destination = $("#destination").val().trim();
        firstTrain = $("#firstTrain").val().trim();
        interval = $("#interval").val().trim();

        if (trainName !== "" && destination !== "" && firstTrain !== "" && interval !== "") {

        database.ref().push({
            trainName: trainName,
            destination: destination,
            firstTrain: firstTrain,
            interval: interval,
        });
    } else {
        alert("PLEASE COMPLETE ALL FIELDS");
    }

    });

    database.ref().on("child_added", function(snapshot) {

        var sv = snapshot.val();

        // use moment.js for time
        var startTime = moment(newFirstTrain, "hh:mm").subtract(1, "years");

        var timeNow = moment();

        var timeDifference = moment().diff(moment(startTime), "minutes");

        var timeRemainder = timeDifference % newInterval;

        var minUntilTrain = newInterval - timeRemainder;
        console.log(minUntilTrain);

        var nextTrain = moment().add(minUntilTrain, "minutes");

        var catchTrain = moment(nextTrain).format("HH:mm");
        console.log(catchTrain);

        var newTrainName = $("<td>");
        newTrainName.text(sv.trainName);
        var newDestination = $("<td>");
        newDestination.text(sv.destination);
        var newInterval = $("<td>");
        newInterval.text(moment(sv.interval).format("minutes"));
        console.log(newInterval);
        var newFirstTrain = $("<td>");
        newFirstTrain.text(catchTrain);
        var nextTrain = $("<td>");
        nextTrain.text(minUntilTrain);

        var newRow = $("<tr>");


        newRow.append(newTrainName, newDestination, newInterval, newFirstTrain, nextTrain);
        $("#displayBody").append(newRow);

        $("#trainName").val("");
        $("#destination").val("");
        $("#firstTrain").val("");
        $("#interval").val("");
        return;
    },
    function (errorObject) {
        alert("Please fill out the form " + errorObject.code);
    });

})

/*

initilize firebase
variables for html IDs for new trains
push new input to variables each time
use child_added and snapshot to add new rows to table

*/