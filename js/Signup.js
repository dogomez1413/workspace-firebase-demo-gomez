$("#signup-form").submit(function(e) {
  e.preventDefault();
  console.log("click the submit");

  // use the provided sign in
  var email = "yilianz@gmail.com";
  var psw = "aiken";
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, psw)
    .then(user => {
      console.log("success");
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
});
