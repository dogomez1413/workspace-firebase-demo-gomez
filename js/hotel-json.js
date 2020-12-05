var firebaseConfig = {
  apiKey: "AIzaSyDif6lW-4auZoEIGhPP_J9_Ax0amhi8paU",
  authDomain: "hotel-f3b13.firebaseapp.com",
  databaseURL: "https://hotel-f3b13-default-rtdb.firebaseio.com",
  projectId: "hotel-f3b13",
  storageBucket: "hotel-f3b13.appspot.com",
  messagingSenderId: "1013758362049",
  appId: "1:1013758362049:web:992a201f062c1cb2bb6f40",
  measurementId: "G-1RGZNY84KW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* object examples 
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);
*/

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    //console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  /* save the data to database */
  firebase
    .firestore()
    .collection("hotelResData") // use different name
    .add(inputJson);

  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hotelResData")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
