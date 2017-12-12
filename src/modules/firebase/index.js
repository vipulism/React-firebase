import React, { Component } from 'react';
import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyD4WxCioOFRIfFTQc5A0VVPwTqFHvw-KFY",
    authDomain: "test-4887a.firebaseapp.com",
    databaseURL: "https://test-4887a.firebaseio.com/", 
    storageBucket: "",
};

firebase.initializeApp(config);

const db = firebase.database();
const initFirebase = () => console.log(firebase, config);


const onlineStatus = () => {
    const connectedRef = db.ref(".info/connected");
    return connectedRef.on("value", function (snap) {
        return snap.val() === true;
    });
}

const valetData = (vID) => {
    return db.ref(`valet`).child(vID)
}
export {valetData, onlineStatus};



