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
/*db.collection("serv_user").doc(id).get().then(function (doc) {
    l = doc.data().like;
    const like = document.getElementById("like");
    like.innerText = "Like : " + l;
    dl =doc.data().dislike;
    const dlike = document.getElementById("dlike");
    dlike.innerHTML = "Dislike : " + dl;
})
*/
const contM = document.createElement('div');
contM.className = "container";
const cont = document.createElement('div');
cont.className = "tab-pane fade active show";
cont.role = "tabpanel";
const prof = document.createElement('div');
prof.className = 'bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews';
const head = document.createElement('h5');
head.className = 'mb-1';
head.innerHTML = "All Reviews";
prof.append(head);
function postrev() {
    var rdat = new Date();

    const review = document.getElementById("review");

    db.collection("serv_user").doc(id).collection("review").add({
        name: text,
        review: review.value,
        dt: rdat.toLocaleString()
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });


    const nReview = document.createElement('div');
    nReview.className = 'reviews-members pt-4 pb-4';
    const med = document.createElement('div');
    med.className = 'media';
    const avt = document.createElement('img');
    avt.className = 'mr-3 rounded-pill';
    // avt.src = "http://bootdey.com/img/Content/avatar/avatar1.png";
    avt.src = "images/user.jpg";
    const revBody = document.createElement('div');
    revBody.className = 'media-body';
    const memHead = document.createElement('div');
    memHead.className = 'reviews-members-header';
    const revname = document.createElement('h6');
    revname.className = 'mb-1';
    revname.innerHTML = text;
    const tim = document.createElement('p');
    tim.className = 'text-gray';
    const memBody = document.createElement('div');
    memBody.className = 'reviews-members-body';
    const rev = document.createElement('p');
    rev.innerHTML = review.value;
    tim.innerHTML = rdat.toLocaleString();
    const sep = document.createElement('divider');
    sep.role = 'separator';

    
    memHead.append(revname);
    memBody.append(rev);
    memHead.append(tim);
    revBody.append(memHead);
    revBody.append(memBody);
    med.append(avt);
    med.append(revBody);
    nReview.append(med);
    prof.append(nReview);
    prof.append(sep);
    cont.append(prof);
    contM.append(cont);
    document.body.appendChild(contM);

    review.value = '';
}
function like(btn) {

    l += 1;
    //const like = document.getElementById("like");
    btn.innerText = "Like : "+l;
    alert(text + " liked your profile.")
}
function dislike(btn) {
    dl += 1;
    //const dlike = document.getElementById("dlike");
    btn.innerHTML = "Dislike : " + dl;
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
/*
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
    });*/
db.collection("serv_user").doc(id).collection("review").get().then(function (querySnapshot) {
    var dat = [];
    
    querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        dat.push(doc.data());
    });
   
    
        for (i = 0; i < dat.length; ++i) {
            

            const nReview = document.createElement('div');
            nReview.className = 'reviews-members pt-4 pb-4';
            const med = document.createElement('div');
            med.className = 'media';
            const avt = document.createElement('img');
            avt.className = 'mr-3 rounded-pill';
            // avt.src = "http://bootdey.com/img/Content/avatar/avatar1.png";
            avt.src = "images/user.jpg";
            const revBody = document.createElement('div');
            revBody.className = 'media-body';
            const memHead = document.createElement('div');
            memHead.className = 'reviews-members-header';
            const revname = document.createElement('h6');
            revname.className = 'mb-1';
            revname.innerHTML = dat[i].name;
            const tim = document.createElement('p');
            tim.className = 'text-gray';
            const memBody = document.createElement('div');
            memBody.className = 'reviews-members-body';
            const rev = document.createElement('p');
            rev.innerHTML = dat[i].review;
            tim.innerHTML = dat[i].dt;
            const sep = document.createElement('div');
            sep.className = 'divider';
            sep.role = 'separator';

            memHead.append(revname);
            memBody.append(rev);
            memHead.append(tim);
            revBody.append(memHead);
            revBody.append(memBody);
            med.append(avt);
            med.append(revBody);
            nReview.append(med);
            prof.append(nReview);
            prof.append(sep);
            cont.append(prof);
            contM.append(cont);
            document.body.appendChild(contM);
            
        }
});
/*
if (status == "like") {
    const like = document.getElementById("like");
    like.style.backgroundColor = 'Green';
    like.style.color = 'white';
}
if (status == "dislike") {
    document.getElementById("dlike").style.backgroundColor='Red';
}*/
function message(){
    document.location.href="C:/Users/liudm/OneDrive/Documents/GitHub/Eventia/chat2.html";
}