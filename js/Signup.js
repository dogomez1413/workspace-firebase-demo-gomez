var firebaseConfig = {
  apiKey: "AIzaSyDif6lW-4auZoEIGhPP_J9_Ax0amhi8paU",
  authDomain: "hotel-f3b13.firebaseapp.com",
  databaseURL: "https://hotel-f3b13-default-rtdb.firebaseio.com",
  projectId: "hotel-f3b13",
  storageBucket: "hotel-f3b13.appspot.com",
  messagingSenderId: "1013758362049",
  appId: "1:1013758362049:web:0faaad887cb524efbb6f40",
  measurementId: "G-89STLL3H5W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = "dogomez@usca.edu";
  var password = "Cartoon12";

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
