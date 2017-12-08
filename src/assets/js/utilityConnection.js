 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyCcr1C8vmvkJE3Do-nQQJ9m9O_Gn-v-iSI",
     authDomain: "vallet-32ce2.firebaseapp.com",
     databaseURL: "https://vallet-32ce2.firebaseio.com",
     projectId: "vallet-32ce2",
     storageBucket: "",
     messagingSenderId: "388448181710"
 };
 firebase.initializeApp(config);

 var objectprop = document.getElementById('vallet-32ce2');

 var ref = firebase.database().ref();
 console.log(ref);

 var data;
 ref.on('value', function(snap) {
     console.log(snap);
     data = snap.val();
     for (var cutomer in data) {
         var customerData = data[cutomer];
         var array = [];
         for (var object in customerData) {
             console.log(customerData[object]);
             array.push(customerData[object]);
         }
         $(".content").append("<tr class='values table-parked'><td data-title='Name' class='borderLeft-parked'>" + array[2] + "</td><td data-title='Name'>" + array[1] + "</td><td data-title='Name'>" + array[0] + "</td><td data-title='Name'>" + array[3] + "</td><td data-title='Name'>" + array[4] + "</td><td data-title=''>Called For</td><td><span class='dropdown pmd-dropdown dropup clearfix'><button class='btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary' type='button' id='dropdownMenuTopRight' data-toggle='dropdown' aria-expanded='true'><i class='material-icons pmd-sm'>more_vert</i></button><ul aria-labelledby='dropdownMenu3' role='menu' class='dropdown-menu pmd-dropdown-menu-top-right'><li role='presentation'><a href='javascript:void(0);' tabindex='-1' role='menuitem'>Regular link</a></li></ul></span></td></tr>");
     }
 });
 var x = Math.random().toString(36).substr(2, 5);
 // On click of submitting the entry form this push the values to fireBase
 function pushValues() {
     // extracting the values of input
     var name = document.getElementsByClassName("name")[0].value;
     var phone = document.getElementsByClassName("phone")[0].value;
     var slipNumber = document.getElementsByClassName("slipNumber")[0].value;
     var carNumber = document.getElementsByClassName("carNumber")[0].value;
     var carModel = document.getElementsByClassName("carModel")[0].value;


     firebase.database().ref(x).set({
         name: name,
         phone: phone,
         parkingSlip: slipNumber,
         carNumber: carNumber,
         carModel: carModel
     });
     console.log(x);
 }


 // extracting the values of input
 var userName = document.getElementsByClassName("loginName")[0];
 var password = document.getElementsByClassName("loginPassword")[0];
 var signup = document.getElementsByClassName("loginSignup")[0];
 var login = document.getElementsByClassName("loginButton")[0];

 //Login listener
 function EntryLogin(e) {
     // GET EMAIL AND PASSWORD
     var email = userName.value;
     var pass = password.value;
     var auth = firebase.auth();

     //SIGN IN
     var promise = auth.signInWithEmailAndPassword(email, pass);
     console.log(email, pass);
     promise.catch(e => console.log(e.message));
 }

 //Signup listener
 function EntrySignup(e) {
     // GET EMAIL AND PASSWORD
     var email = userName.value;
     var pass = password.value;
     var auth = firebase.auth();

     //Signup
     var promise = auth.createUserWithEmailAndPassword(email, pass);
     console.log(email, pass);
     promise.catch(e => console.log(e.message));
 }

 //real time listener
 firebase.auth().onAuthStateChanged(firebase => {
     if (firebase) {
         console.log(firebase);
     } else {
         console.log("firebase not logged");
     }
 });