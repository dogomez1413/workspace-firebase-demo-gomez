const firebaseConfig = {
  apiKey: "AIzaSyDiy9nV3De-KF0sEQfRqfuCX02tUlwrpb4",
  authDomain: "hotelres-7b499.firebaseapp.com",
  databaseURL: "https://hotelres-7b499.firebaseio.com",
  projectId: "hotelres-7b499",
  storageBucket: "hotelres-7b499.appspot.com",
  messagingSenderId: "612271708226",
  appId: "1:612271708226:web:872c8d6f40168b20d935db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  /* save the data to database */
  firebase
    .firestore()
    .collection("hoteldata") // use different name
    .add(inputJson);

  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */
/*
firebase
  .firestore()
  .collection("hoteldata")
  .onSnapshot(function(querySnapshot) {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
*/

firebase
  .firestore()
  .collection("hoteldata")
  .onSnapshot(function(querySnapshot) {
    //console.log(querySnapshot);
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      //var roomtype = doc.data().room;
      //if (roomtype == "1 Bedroom Smaller Suite $139") {
      //}
    });
  });
