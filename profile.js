// JavaScript source code
var l = 0;
var dl = 0;
var queryString = decodeURIComponent(window.location.search).substring(1).split("&");
var status="non";
var typ = queryString[0].split("=");
var text = typ[1];
var typ2 = queryString[1].split("=");
var id = typ2[1];
var typ3 = queryString[2].split("=");
var type = typ3[1];
var typ4 = queryString[3].split("=");
var uid = typ4[1];
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
db.collection("serv_user").doc(id).get().then(function (doc) {
    l = doc.data().like;
    const like = document.getElementById("like");
    like.innerText = "Like : " + l;
    dl =doc.data().dislike;
    const dlike = document.getElementById("dlike");
    dlike.innerHTML = "Dislike : " + dl;
})

function postrev() {
    var rdat = new Date();

    const review = document.getElementById("review").value;
    const prof = document.createElement('div');
    prof.className = 'block';
    const revname = document.createElement('h4');
    revname.innerHTML = text;
    const rev = document.createElement('p');
    rev.innerHTML = review;
    const tim = document.createElement('h6');
    tim.innerHTML = rdat.toLocaleString();
    prof.append(revname);
    prof.append(rev);
    prof.append(tim);
    document.body.appendChild(prof);
}
function like() {

    l += 1;
    const like = document.getElementById("like");
    like.innerText = "Like : "+l;
    alert(text + " liked your profile.")
}
function dislike() {
    dl += 1;
    const dlike = document.getElementById("dlike");
    dlike.innerHTML = "Dislike : " + dl;
    alert(text + " disliked your profile.")
}
var docref = db.collection(type).doc(id);

docref.get().then(function (doc) {
    const name = document.getElementById("name");
    const con = document.getElementById("con");
    const loc = document.getElementById("loc");
    name.innerHTML = doc.data().name;
    con.innerHTML = doc.data().mail_ph;
    loc.innerHTML = doc.data().location;
})

//IF REVIEW AND LIKE/DISLIKE STATUS EXISTS

db.collection("review").where("uid", "==", uid).where("sid", "==", id)
    .onSnapshot(function (querysnapshot) {
        var dat = [];
        querysnapshot.forEach(function (doc) {
            dat.push(doc);
            
            
        });
        console.log(dat);
        if (dat.length = 1) {
            document.getElementById("post").disabled = true;

        }
        else {
            document.getElementById("post").disabled = false;
        }
        for (i = 0; i < dat.length; ++i) {
            status = dat[i].data().status;
        }
    });
db.collection("serv_user").doc(id).collection("review").get().then(function (querySnapshot) {
    var dat = [];
    querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        dat.push(doc.data());
    });

    
        for (i = 0; i < dat.length; ++i) {
            const prof = document.createElement('div');
            prof.className = 'block';
            const revname = document.createElement('h4');
            revname.innerHTML = dat[i].name;
            const rev = document.createElement('p');
            rev.innerHTML = dat[i].review;
            const tim = document.createElement('h6');
            tim.innerHTML = dat[i].dt;
            prof.append(revname);
            prof.append(rev);
            prof.append(tim);
            document.body.appendChild(prof);
        }
});
if (status == "like") {
    const like = document.getElementById("like");
    like.style.backgroundColor = 'Green';
    like.style.color = 'white';
}
if (status == "dislike") {
    document.getElementById("dlike").style.backgroundColor='Red';
}