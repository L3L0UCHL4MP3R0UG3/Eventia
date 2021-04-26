$( '.friend-drawer--onhover' ).on( 'click',  function() {

  $( '.chat-bubble' ).hide('slow').show('slow');

});
// Your web app's Firebase configuration
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

var queryString = decodeURIComponent(window.location.search).substring(1).split("&");
var status="non";
var typ = queryString[0].split("=");
var name = typ[1];
var typ2 = queryString[1].split("=");
var id = typ2[1];
var typ3 = queryString[2].split("=");
var type = typ3[1];
var typ4 = queryString[3].split("=");
var uid = typ4[1];
function send(){
  var txt=document.getElementById('Message').value;
  alert(txt);
}