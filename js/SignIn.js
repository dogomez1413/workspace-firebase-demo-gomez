var firebaseConfig = {
  apiKey: "AIzaSyDif6lW-4auZoEIGhPP_J9_Ax0amhi8paU",
  authDomain: "hotel-f3b13.firebaseapp.com",
  databaseURL: "https://hotel-f3b13-default-rtdb.firebaseio.com",
  projectId: "hotel-f3b13",
  storageBucket: "hotel-f3b13.appspot.com",
  messagingSenderId: "1013758362049",
  appId: "1:1013758362049:web:393530d4d0a7522bbb6f40",
  measurementId: "G-LBL6WPXF0N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#Login").submit(function(e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = "dogomez@usca.edu";
  var password = "Cartoon12";
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in
      // ...
      console.log("login in");
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
