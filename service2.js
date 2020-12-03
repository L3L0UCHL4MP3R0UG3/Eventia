// JavaScript source code
var queryString = decodeURIComponent(window.location.search).substring(1).split("&");

var typ = queryString[0].split("=");
var text = typ[1];
var typDis = queryString[1].split("=");
var t = typDis[1];
var loc = queryString[2].split("=");
var l = loc[1];
var name2 = queryString[3].split("=");
var n = name2[1];
var id = queryString[4].split("=");
var uid = id[1];

document.getElementById("test").text = "Location : " + l;
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
const type = document.createElement('div');
type.className = 'block';
const typeChild = document.createElement('div');
typeChild.className = 'additional-text';
typeChild.innerText = t;
type.append(typeChild);
document.body.appendChild(type);
const userRef = []
//---------------------------------------------------------------Retrieve venues--------------------------------------------------------------------------------
function venfunc() {
    if (l != "all") {
        db.collection("venw_vendr").where("location", "==", l)
            .onSnapshot(function (querySnapshot) {
                var user = [];
                querySnapshot.forEach(function (doc) {
                    user.push(doc.data());
                    userRef.push(doc.id);
                });
                console.log(user);
                console.log(userRef);
                var i;
                console.log(user.length);
                if (user.length == 0) {
                    const message = document.createElement('h3');
                    message.innerText = "No data";
                    message.align = "center";
                    message.color = "white";
                    document.body.appendChild(message);
                }
                for (i = 0; i < user.length;) {
                    const elem = document.createElement('div');
                    elem.className = "row";

                    var j;
                    for (j = 0; j < 3; j++) {
                        if (i >= user.length) break;
                        const elem2 = document.createElement('div');
                        elem2.className = "col-sm-6 col-md-4";
                        const thum = document.createElement('div');
                        thum.className = "thumbnail";
                        const img1 = document.createElement('img');
                        img1.src = "images/ven.jpg";
                        img1.alt = user[i].name;
                        const cap = document.createElement('div');
                        cap.className = "caption";
                        const h = document.createElement('h3');
                        h.innerText = user[i].name;
                        const hi = document.createElement('h3');
                        hi.innerText = user[i].mail_ph;
                        const ji = document.createElement('h3');
                        ji.innerText = user[i].ven_type;
                        const pi = document.createElement('h3');
                        pi.innerText = user[i].address;
                        const btn = document.createElement('p');
                        const btn2 = document.createElement('a');
                        btn2.className = "btn btn-default";
                        btn2.innerHTML = "View";
                        const j = userRef[i];
                        btn2.addEventListener("click", function () {
                            console.log(i);
                            console.log(j);
                            profile(j, "venw_vendr");
                        });
                        btn.append(btn2);
                        cap.append(h);
                        cap.append(hi);
                        cap.append(ji);
                        cap.append(pi);
                        cap.append(btn);
                        thum.append(img1);
                        thum.append(cap);
                        elem2.append(thum);
                        elem.append(elem2);
                        i++;
                        console.log(elem);
                    }
                    document.body.appendChild(elem);

                }
            });
    }
    else {
        db.collection("venw_vendr")
            .onSnapshot(function (querySnapshot) {
                var user = [];
                querySnapshot.forEach(function (doc) {
                    user.push(doc.data());
                    userRef.push(doc.id);
                });
                console.log(user);
                console.log(userRef);
                var i;
                console.log(user.length);
                if (user.length == 0) {
                    const message = document.createElement('h3');
                    message.innerText = "No data";
                    message.align = "center";
                    message.color = "white";
                    document.body.appendChild(message);
                }
                for (i = 0; i < user.length;) {
                    const elem = document.createElement('div');
                    elem.className = "row";

                    var j;
                    for (j = 0; j < 3; j++) {
                        if (i >= user.length) break;
                        const elem2 = document.createElement('div');
                        elem2.className = "col-sm-6 col-md-4";
                        const thum = document.createElement('div');
                        thum.className = "thumbnail";
                        const img1 = document.createElement('img');
                        img1.src = "images/ven.jpg";
                        img1.alt = user[i].name;
                        const cap = document.createElement('div');
                        cap.className = "caption";
                        const h = document.createElement('h3');
                        h.innerText = user[i].name;
                        const hi = document.createElement('h3');
                        hi.innerText = user[i].mail_ph;
                        const ji = document.createElement('h3');
                        ji.innerText = user[i].ven_type;
                        const pi = document.createElement('h3');
                        pi.innerText = user[i].address;
                        const btn = document.createElement('p');
                        const btn2 = document.createElement('a');
                        btn2.className = "btn btn-default";
                        btn2.innerHTML = "View";
                        const j = userRef[i];
                        btn2.addEventListener("click", function () { profile(j, "venw_vendr"); });
                        btn.append(btn2);
                        cap.append(h);
                        cap.append(hi);
                        cap.append(ji);

                        cap.append(pi);
                        cap.append(btn);
                        thum.append(img1);
                        thum.append(cap);
                        elem2.append(thum);
                        elem.append(elem2);
                        i++;
                        console.log(elem);
                    }
                    document.body.appendChild(elem);

                }
            });
    }
}
//---------------------------------------------------------Retrieve Stores-------------------------------------------------------------------------------------
function storfunc() {
    if (l != "all") {
        db.collection("vendor").where("location", "==", l)
            .onSnapshot(function (querySnapshot) {
                var user = [];
                querySnapshot.forEach(function (doc) {
                    user.push(doc.data());
                    userRef.push(doc.id);
                });
                console.log(user);
                console.log(userRef);
                var i;
                console.log(user.length);
                if (user.length == 0) {
                    const message = document.createElement('h3');
                    message.innerText = "No data";
                    message.align = "center";
                    message.color = "white";
                    document.body.appendChild(message);
                }
                for (i = 0; i < user.length;) {
                    const elem = document.createElement('div');
                    elem.className = "row";

                    var j;
                    for (j = 0; j < 3; j++) {
                        if (i >= user.length) break;
                        const elem2 = document.createElement('div');
                        elem2.className = "col-sm-6 col-md-4";
                        const thum = document.createElement('div');
                        thum.className = "thumbnail";
                        const img1 = document.createElement('img');
                        img1.src = "images/stor.jpg";
                        img1.alt = user[i].name;
                        const cap = document.createElement('div');
                        cap.className = "caption";
                        const h = document.createElement('h3');
                        h.innerText = user[i].name;
                        const hi = document.createElement('h3');
                        hi.innerText = user[i].mail_ph;
                        const pi = document.createElement('h3');
                        pi.innerText = user[i].address;
                        const btn = document.createElement('p');
                        const btn2 = document.createElement('a');
                        btn2.className = "btn btn-default";
                        btn2.innerHTML = "View";
                        const j = userRef[i];
                        btn2.addEventListener("click", function () { profile(j, "vendor"); });
                        btn.append(btn2);
                        cap.append(h);
                        cap.append(hi);
                        cap.append(pi);
                        cap.append(btn);
                        thum.append(img1);
                        thum.append(cap);
                        elem2.append(thum);
                        elem.append(elem2);
                        i++;
                        console.log(elem);
                    }
                    document.body.appendChild(elem);

                }
            });
    }
    else {
        db.collection("vendor")
            .onSnapshot(function (querySnapshot) {
                var user = [];
                querySnapshot.forEach(function (doc) {
                    user.push(doc.data());
                    userRef.push(doc.id);
                });
                console.log(user);
                console.log(userRef);
                var i;
                console.log(user.length);
                if (user.length == 0) {
                    const message = document.createElement('h3');
                    message.innerText = "No data";
                    message.align = "center";
                    message.color = "white";
                    document.body.appendChild(message);
                }
                for (i = 0; i < user.length;) {
                    const elem = document.createElement('div');
                    elem.className = "row";

                    var j;
                    for (j = 0; j < 3; j++) {
                        if (i >= user.length) break;
                        const elem2 = document.createElement('div');
                        elem2.className = "col-sm-6 col-md-4";
                        const thum = document.createElement('div');
                        thum.className = "thumbnail";
                        const img1 = document.createElement('img');
                        img1.src = "images/stor.jpg";
                        img1.alt = user[i].name;
                        const cap = document.createElement('div');
                        cap.className = "caption";
                        const h = document.createElement('h3');
                        h.innerText = user[i].name;
                        const hi = document.createElement('h3');
                        hi.innerText = user[i].mail_ph;
                        const pi = document.createElement('h3');
                        pi.innerText = user[i].address;
                        const btn = document.createElement('p');
                        const btn2 = document.createElement('a');
                        btn2.className = "btn btn-default";
                        btn2.innerHTML = "View";
                        const j = userRef[i];
                        btn2.addEventListener("click", function () { profile(j, "vendor"); });
                        btn.append(btn2);
                        cap.append(h);
                        cap.append(hi);
                        cap.append(pi);
                        cap.append(btn);
                        thum.append(img1);
                        thum.append(cap);
                        elem2.append(thum);
                        elem.append(elem2);
                        i++;
                        console.log(elem);
                    }
                    document.body.appendChild(elem);

                }
            });
    }
}
//--------------------------------------------------------Retrieve others---------------------------------------------------------------------------------------------------------
function func() {
    if (l != "all") {
        db.collection("serv_user").where("serv_type", "==", text).where("location", "==", l)
            .onSnapshot(function (querySnapshot) {
                var user = [];
                querySnapshot.forEach(function (doc) {
                    user.push(doc.data());
                    userRef.push(doc.id);
                });
                console.log(user);
                console.log(userRef);
                var i;
                console.log(user.length);
                if (user.length == 0) {
                    const message = document.createElement('h3');
                    message.innerText = "No data";
                    message.align = "center";
                    message.color = "white";
                    document.body.appendChild(message);
                }
                for (i = 0; i < user.length;) {
                    const elem = document.createElement('div');
                    elem.className = "row";

                    var j;
                    for (j = 0; j < 3; j++) {
                        if (i >= user.length) break;
                        const elem2 = document.createElement('div');
                        elem2.className = "col-sm-6 col-md-4";
                        const thum = document.createElement('div');
                        thum.className = "thumbnail";
                        const img1 = document.createElement('img');
                        img1.src = "images/user.jpg";
                        img1.alt = user[i].name;
                        const cap = document.createElement('div');
                        cap.className = "caption";
                        const h = document.createElement('h3');
                        h.innerText = user[i].name;
                        const hi = document.createElement('h3');
                        hi.innerText = user[i].mail_ph;
                        const ji = document.createElement('h3');
                        ji.innerText = user[i].location;
                        const btn = document.createElement('p');
                        const btn2 = document.createElement('a');
                        btn2.className = "btn btn-default";
                        btn2.innerHTML = "View";
                        const j = userRef[i];
                        btn2.addEventListener("click", function () {
                            document.location.href = "Portfolio.html" + "?name=" + n + "&id=" + j + "&type=" + "serv_user" + "&uid=" + uid;
                        });
                        btn.append(btn2);
                        cap.append(h);
                        cap.append(hi);
                        cap.append(ji);
                        cap.append(btn);
                        thum.append(img1);
                        thum.append(cap);
                        elem2.append(thum);
                        elem.append(elem2);
                        i++;
                        console.log(elem);
                    }
                    document.body.appendChild(elem);

                }
            });
    }
    else {
        db.collection("serv_user").where("serv_type", "==", text)
            .onSnapshot(function (querySnapshot) {
                var user = [];
                querySnapshot.forEach(function (doc) {
                    user.push(doc.data());
                    userRef.push(doc.id);
                });
                console.log(user);
                console.log(userRef);
                var i;
                console.log(user.length);
                if (user.length == 0) {
                    const message = document.createElement('h3');
                    message.innerText = "No data";
                    message.align = "center";
                    message.color = "white";
                    document.body.appendChild(message);
                }
                for (i = 0; i < user.length;) {
                    const elem = document.createElement('div');
                    elem.className = "row";

                    var j;
                    for (j = 0; j < 3; j++) {
                        if (i >= user.length) break;
                        const elem2 = document.createElement('div');
                        elem2.className = "col-sm-6 col-md-4";
                        const thum = document.createElement('div');
                        thum.className = "thumbnail";
                        const img1 = document.createElement('img');
                        img1.src = "images/user.jpg";
                        img1.alt = user[i].name;
                        const cap = document.createElement('div');
                        cap.className = "caption";
                        const h = document.createElement('h3');
                        h.innerText = user[i].name;
                        const hi = document.createElement('h3');
                        hi.innerText = user[i].mail_ph;
                        const ji = document.createElement('h3');
                        ji.innerText = user[i].location;
                        const btn = document.createElement('p');
                        const btn2 = document.createElement('a');
                        btn2.className = "btn btn-default";
                        btn2.innerHTML = "View";
                        const j = userRef[i];
                        btn2.addEventListener('click', function () {
                            document.location.href = "reviewspage.html" + "?name=" + n + "&id=" + j + "&type=" + "serv_user" + "&uid=" + uid;
                        });
                        btn.append(btn2);
                        cap.append(h);
                        cap.append(hi);
                        cap.append(ji);
                        cap.append(btn);
                        thum.append(img1);
                        thum.append(cap);
                        elem2.append(thum);
                        elem.append(elem2);
                        i++;
                        console.log(elem);
                    }
                    document.body.appendChild(elem);

                }
            });
    }
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
function al() {
    l = "all";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function dlh() {
    l = "Delhi";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function noida() {
    l = "Noida";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function far() {
    l = "Faridabad";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function gn() {
    l = "Greater Noida";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function gur() {
    l = "Gurugram";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function gaz() {
    l = "Gaziabad";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;

}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function plan() {
    text = "Planner";
    t = "Event Planners";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function deco() {
    text = "Decorator";
    t = "Decorators";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function cat() {
    text = "Caterer";
    t = "Caterers";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function photo() {
    text = "Photographer";
    t = "Photographers";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function venue() {
    text = "venue";
    t = "Venues";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function stor() {
    text = "store";
    t = "Stores";
    document.location.href = "service.html" + "?type=" + text + "&typeDisp=" + t + "&location=" + l + "&name=" + n + "&id=" + uid;
}
function home() {
    document.location.href = "homepageafterlogin.html" + "?profile=" + n + "&id=" + uid;
}
switch (text) {
    case "venue": venfunc(); break;
    case "store": storfunc(); break;
    default: func();
}
function profile(name, col) {
    document.location.href = "portfolioCust.html" + "?name=" + n + "&id=" + name + "&type=" + col + "&uid=" + uid;

}