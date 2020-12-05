var firebaseConfig = {
  apiKey: "AIzaSyDif6lW-4auZoEIGhPP_J9_Ax0amhi8paU",
  authDomain: "hotel-f3b13.firebaseapp.com",
  projectId: "hotel-f3b13",
  storageBucket: "hotel-f3b13.appspot.com",
  messagingSenderId: "1013758362049",
  appId: "1:1013758362049:web:e9c9ec2c4d00458dbb6f40",
  measurementId: "G-9DQE7ZJD0J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code

  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log("submit");

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
