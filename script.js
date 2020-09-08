document.querySelector('.img-btn').addEventListener('click', function()
	{
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
    const typeText = document.getElementById("type").value;
    const servtypText = document.getElementById("serv_typ").value;
    const mailphText = document.getElementById("mail_ph").value;
    const locationText = document.getElementById("location").value;

    db.collection("serv_user").add(
        {
            name: nameText,
            password: passText,
            type: typeText,
            serv_type: servtypText,
            mail_ph: mailphText,
            location: locationText
        }).then(function (docRef) {
            console.log("Document written eith ID : ", docRef.id);
            sleep(2000);
            document.location.href = "homepagebasic.html";
        })
        .catch(function (error) {
            console.log("ERROR : ", error);
        });
}

function auth() {
    const mailPh = document.getElementById("loginid").value;
    const pass = document.getElementById("loginpass").value;

    db.collection("serv_user").where('mail_ph', '==', mailPh).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().password == pass) {
                    console.log(doc.data());
                    sleep(2000);
                    document.location.href = "homepagebasic.html";
                }
                else
                    console.log("Icorrect credentials!");
            });
        }).catch(function (error) {
            console.log("Error : ", error);
        });
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}