// JavaScript source code
document.querySelector('.img-btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s-signup')
}
);
var firebaseConfig = {
    apiKey: "AIzaSyCHzivqlQ-OGvfSGszddzBth3PvZtgoAF4",
    authDomain: "pbl3-d918e.firebaseapp.com",
    databaseURL: "https://pbl3-d918e.firebaseio.com",
    projectId: "pbl3-d918e",
    storageBucket: "pbl3-d918e.appspot.com",
    messagingSenderId: "842287930835",
    appId: "1:842287930835:web:f5eb30f861e64ec78a6326"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
function upload() {
    const nameText = document.getElementById("name").value;
    const passText = document.getElementById("password").value;
    const mailphText = document.getElementById("mail_ph").value;
    const locationText = document.getElementById("location").value;
    if (nameText == "" || passText == "" || servtypText == "" || mailphText == "" || locationText == "")
        alert("Please provide the required fields!!!");
    else {
        db.collection("customer").add(
        {
            name: nameText,
            password: passText,
            mail_ph: mailphText,
            location: locationText
        }).then(function (docRef) {
            let iD = docRef.id;
            document.location.href = "homepageafterloginCust.html" + "?profile=" + nameText + "&id=" + iD;
        })
        .catch(function (error) {
            console.log("ERROR : ", error);
        });
    }
}

function auth() {
    const mailPh = document.getElementById("loginid").value;
    const pass = document.getElementById("loginpass").value;
    if (mailPh == "" || pass == "")
        alert("Please provide the required fields!!!");
    else {
        db.collection("customer").where('mail_ph', '==', mailPh).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().password == pass) {
                    let iD = doc.id;
                    let name = doc.data().name;
                    document.location.href = "homepageafterloginCust.html" + "?profile=" + name + "&id=" + iD;
                }
                else
                    alert("Incorrect credentials!");
            });
        }).catch(function (error) {
            console.log("Error : ", error);
        });
    }
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
