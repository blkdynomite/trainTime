var config = {
    apiKey:,
    authDomain:,
    databaseURL: "https://traintime-9e2c6.firebaseio.com/",
    storageBucket:"gs://traintime-9e2c6.appspot.com",
    messagingSenderId:
};

firebase.intializeApp(config);

var trainData = firebase.database();

$("#addTrainBtn").on("click", function(){
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstArrival = moment($("#firstArrivalInput").val().trim(),("HH:mm"));
    var waitTime = $("#waitInput").val().trim();
})

trainData.ref().on("child_added", function(snapshot){
    var name = snapshot.val().trainName;
    var destination = snapshot.val().destination;
    var firstArrival = snapshot.val().firstArrival;
    var waitTime = snapshot.val().waitTime;

    $("#trainTable > tBody").append("<tr><td>"+name+"</td><td>"+destination+"</td><td>"+firstArrival+"</td><td>"+waitTime+"</td></tr>");
})