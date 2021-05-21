// JavaScript source code
// JavaScript source code
var queryString = decodeURIComponent(window.location.search).substring(1).split("&");
var status = "non";
var typ = queryString[0].split("=");
var text = typ[1];
var typ2 = queryString[1].split("=");
var id = typ2[1];
var typ3 = queryString[2].split("=");
var type = typ3[1];
var typ4 = queryString[3].split("=");
var uid = typ4[1];

//Firebase configurations

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();
//SETTING NAME
var docref = db.collection(type).doc(id);

docref.get().then(function (doc) {
    const name = document.getElementById("name");
    const con = document.getElementById("cont");
    const loc = document.getElementById("loc");
    name.innerHTML = doc.data().name;
    con.innerHTML = doc.data().mail_ph;
    loc.innerHTML = doc.data().location;
});
var itemList=[];
var priceList=[];
var price=[250,320,250,320,250,320];
// Create a reference under which you want to list
//var listRef = storageRef.child('3B2Bhmv0fln9YT1v1GAu');
//var listRef = storageRef.child('VzmLOWoDVLZK6F0doSrX');
var listRef = storageRef.child(id);
// Find all the prefixes and items.
listRef.listAll().then(function (res) {
    var arr = [];

    res.items.forEach(function (imageRef) {
        // All the items under listRef.
        arr.push(imageRef);


    });
    //RENDER IMAGE
    console.log(arr);
    console.log(arr.length);
    if (arr.length == 0) {
        const nodat = document.createElement('h3');
        nodat.innerHTML = "No images";
        nodat.style = "text-align:center";
        document.body.appendChild(nodat);
    }
    else {
        var i;
        for (i = 0; i < arr.length;) {

            const elem = document.createElement('div');
            elem.className = "w3-row";
            elem.style = "margin-bottom:128px display:flex align-items: stretch align-content: flex-start margin-start:7px padding: 0 6px";
            var j;
            for (j = 0; j < 3; ++j) {
                if (i >= arr.length) break;
                const elem2 = document.createElement('div');
                elem2.className = "w3-third";
                elem2.style = "padding: 0 4px";
                const img1 = document.createElement('img');
                const box=document.createElement('div');
                box.className='block-div';
                const itemName=document.createElement('i');
                const itemPrice=document.createElement('i');
                const iP=document.createElement('i');
                var a;
                arr[i].getDownloadURL().then(function (url) {
                    console.log(url);
                    img1.src = url;
                    console.log(url);
                    var txt=url.split("-");
                   itemName.innerText=txt[2]+"\n";
                   a=price[Math.floor(Math.random()*price.length)];
                   iP.innerText="Rs. ";
                   itemPrice.innerText=a;
                });
                img1.style = "width:100%";
                //itemName.style="color:white;";
                const btn = document.createElement('p');
                        const btn2 = document.createElement('a');
                        btn2.className = "btn btn-default";
                        btn2.innerHTML = "Add to cart";
                        
                        btn2.addEventListener('click', function () {
                            //document.location.href = "reviewspage.html" + "?name=" + n + "&id=" + j + "&type=" + "serv_user" + "&uid=" + uid;
                            itemList.push(itemName.innerText);
                            priceList.push(itemPrice.innerText);
                            //priceList.push(itemPrice.innerText);
                            alert(itemName.innerText+"\nPrice : "+itemPrice.innerText+" added to cart!");
                            console.log(itemList,priceList);
                            var p=priceList.su
                        });
                        btn.append(btn2);
                        btn.style="margin-bottom=55px;";
                //itemName.innerText="Rs. 450";
                //img1.addEventListener("click", onClick(img1.src));
                box.append(img1);
                box.append(itemName);
                box.append(iP);
                box.append(itemPrice);
                box.append(btn);
                elem2.append(box);
                elem.append(elem2);
                
                ++i;
                console.log(elem);

                //TRYIIIIIIIIIIIIIIIIIIIIIIIIIIIIIING

                
            }
            document.body.appendChild(elem);
        }
    }

}).catch(function (error) {
    // Uh-oh, an error occurred!
    console.log(error);
});



// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
// Modal Image Gallery
/*function onClick(element) {
    document.getElementById("img01").src = element;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}*/

