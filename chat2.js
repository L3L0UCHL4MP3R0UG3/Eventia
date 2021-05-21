$( '.friend-drawer--onhover' ).on( 'click',  function() {

  $( '.chat-bubble' ).hide('slow').show('slow');

});
// Your web app's Firebase configuration

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
