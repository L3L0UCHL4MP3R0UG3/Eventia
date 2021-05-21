// JavaScript source code
document.querySelector('.img-btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s-signup')
}
);

//Firebase configurations

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
function upload() {
    const nameText = document.getElementById("name").value;
    const passText = document.getElementById("password").value;
    const ventypText = document.getElementById("ven_type").value;
    const mailphText = document.getElementById("mail_ph").value;
    const locationText = document.getElementById("location").value;
    const addressText = document.getElementById("address").value;

    db.collection("venw_vendr").add(
        {
            name: nameText,
            password: passText,
            ven_type: ventypText,
            mail_ph: mailphText,
            location: locationText,
            address: addressText
        }).then(function (docRef) {
            console.log("Document written with ID : ", docRef.id);
            document.location.href = "Portfolio.html" + "?profile=" + nameText + "&id=" + docRef.id + "&type=" + "venw_vendr";
        })
        .catch(function (error) {
            console.log("ERROR : ", error);
        });
}

function auth() {
    const mailPh = document.getElementById("loginid").value;
    const pass = document.getElementById("loginpass").value;

    db.collection("venw_vendr").where('mail_ph', '==', mailPh).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().password == pass) {
                    document.location.href = "Portfolio.html" + "?profile=" + doc.data().name + "&id=" + doc.id + "&type=" + "venw_vendr";
                }
                else
                    console.log("Incorrect credentials!");
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
