const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC67-0C77PsccxReEPWT5ogvolTvcLLJyo",
  authDomain: "loginform-9bc4b.firebaseapp.com",
  databaseURL: "https://loginform-9bc4b-default-rtdb.firebaseio.com",
  projectId: "loginform-9bc4b",
  storageBucket: "loginform-9bc4b.appspot.com",
  messagingSenderId: "108966555564",
  appId: "1:108966555564:web:ddd1860ae5941bdf321409"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

document.getElementById("submit").onclick = function () { signup() };

const signup = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
      window.location.replace("http://127.0.0.1:3000/loginform/main.html");
      console.log(result)

      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
}


//    document.getElementById("login").onclick = function(){signIn()};

function signIn() {
  const lemail = document.getElementById("lemail").value;
  const lpassword = document.getElementById("lpassword").value;
  console.log(lemail, lpassword);

  firebase.auth().signInWithEmailAndPassword(lemail, lpassword)
    .then((result) => {
      // Signed in
      window.location.replace("http://127.0.0.1:3000/loginform/main.html");
      console.log(result)

      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);

    });

}

// document.getElementById("password").addEventListener("keyup",match);
// document.getElementById("confirmpassword").addEventListener("keyup",match);
// document.getElementById("submit").onclick = function(){signup()};


// let text1 =  document.getElementById("password");

// function match(){
//     let text2 = document.getElementById("confirmpassword");
//     if (text1.value == text2.value) {
//         text1.style.backgroundColor = "lightgreen";
//         text2.style.backgroundColor = "lightgreen";
//     } else {
//         text1.style.backgroundColor = "red";
//         text2.style.backgroundColor = "red";
//     }

// }