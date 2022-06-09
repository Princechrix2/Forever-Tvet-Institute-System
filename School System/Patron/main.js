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
        "phone" : phone,
        "trade" : trade,
        "year" : year,
    });
    return false
};

