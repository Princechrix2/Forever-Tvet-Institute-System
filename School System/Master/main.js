const firebaseConfig = {
    apiKey: "AIzaSyAz4l0NelkNIt22lnktqeAacYt_lmpgQAE",
    authDomain: "forever-system.firebaseapp.com",
    databaseURL: "https://forever-system-default-rtdb.firebaseio.com/",
    projectId: "forever-system",
    storageBucket: "forever-system.appspot.com",
    messagingSenderId: "445987315824",
    appId: "1:445987315824:web:086da28fcd243b110494b5"
};



firebase.initializeApp(firebaseConfig)

var db = firebase.database()  

function Send(){
    var fname = document.getElementById("fname").value 
    var lname = document.getElementById("lname").value 
    var province = document.getElementById("province").value 
    var district = document.getElementById("district").value 
    var sector = document.getElementById("sector").value 
    var village = document.getElementById("village").value 
    var gender = document.getElementById("gender").value 
    var level = document.getElementById("level").value 
    var phone = document.getElementById("phone").value 
    var trade = document.getElementById("trade").value 
    var year = document.getElementById("year").value 
    db.ref("Students").push().set({
        "firstName" : fname,
        "lastName" : lname,
        "province" : province,
        "district" : district,
        "sector" : sector,
        "village" : village,
        "phone" : phone,
        "gender" : gender,
        "level" : level,
        "trade" : trade,
        "year" : year,
    });
    return false
};

db.ref("Students").on("child_added", function(snapshot){
    
    var tbl = ""
    tbl += "<tr>"
    tbl += "<td>"
        tbl += snapshot.val().firstName
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().lastName
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().province
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().district
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().sector
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().village
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().phone
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().gender
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().level
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().trade
    tbl += "</td>"
    tbl += "<td>"
        tbl += snapshot.val().year
    tbl += "</td>"
    tbl += "</tr>"

document.getElementById("tble").innerHTML += tbl;    
})

