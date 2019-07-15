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

    firebase.initilizeApp(config);

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



})

/*

initilize firebase
variables for html IDs for new trains
push new input to variables each time
use child_added and snapshot to add new rows to table

*/