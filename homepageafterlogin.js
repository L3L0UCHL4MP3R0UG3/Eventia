var loc = "all";

/*var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("=");
*/
var queryString = decodeURIComponent(window.location.search).substring(1).split("&");

var typ = queryString[0].split("=");
var text = typ[1];
var typ2 = queryString[1].split("=");
var id = typ2[1];

document.getElementById("profile").text = text;
document.getElementById("test").text = "Location : "+loc;

function al() {
    loc = "all";
    document.getElementById("test").text = "Location : " + loc;
}
function dlh() {
    loc = "Delhi";
    document.getElementById("test").text = "Location : " + loc;
}
function noida() {
    loc = "Noida";
    document.getElementById("test").text = "Location : " + loc;
}
function far() {
    loc = "Faridabad"
    document.getElementById("test").text = "Location : " + loc;
}
function gn() {
    loc = "Greater Noida";
    document.getElementById("test").text = "Location : " + loc;
}
function gur() {
    loc = "Gurugram";
    document.getElementById("test").text = "Location : " + loc;
}
function gaz() {
    loc = "Gaziabad";
    document.getElementById("test").text = "Location : " + loc;
}
var type;
var typeDisp;
function plan() {
    type = "Planner";
    typeDisp = "Event Planners";
    document.location.href = "service.html" + "?type=" + type + "&typeDisp=" + typeDisp + "&location="+ loc + "&name=" + text+"&uid="+id;
}
function deco() {
    type = "Decorator";
    typeDisp = "Decorators";
    document.location.href = "service.html" + "?type=" + type + "&typeDisp=" + typeDisp + "&location=" + loc + "&name=" + text + "&uid=" + id;
}
function cat() {
    type = "Caterer";
    typeDisp = "Caterers";
    document.location.href = "service.html" + "?type=" + type + "&typeDisp=" + typeDisp + "&location=" + loc + "&name=" + text + "&uid=" + id;
}
function photo() {
    type = "Photographer";
    typeDisp = "Photographers";
    document.location.href = "service.html" + "?type=" + type + "&typeDisp=" + typeDisp + "&location=" + loc + "&name=" + text + "&uid=" + id;
}
function venue() {
    type = "venue";
    typeDisp = "Venues";
    document.location.href = "service.html" + "?type=" + type + "&typeDisp=" + typeDisp + "&location=" + loc + "&name=" + text + "&uid=" + id;
}
function stor() {
    type = "store";
    typeDisp = "Stores";
    document.location.href = "service.html" + "?type=" + type + "&typeDisp=" + typeDisp + "&location=" + loc + "&name=" + text + "&uid=" + id;
}
function myProfile() {
    document.location.href = "Myprofile.html" + "?name=" + text + "&id=" + id + "&type=" + "serv_user" + "&uid=" +id;
}