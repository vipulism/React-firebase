import React, { Component } from 'react';
import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCcr1C8vmvkJE3Do-nQQJ9m9O_Gn-v-iSI",
    authDomain: "vallet-32ce2.firebaseapp.com",
    databaseURL: "https://vallet-32ce2.firebaseio.com", 
    storageBucket: "",
};

firebase.initializeApp(config);

const db = firebase.database();
const initFirebase = () => console.log(firebase, config);
/*
console.log(db.ref());
 db.ref(`valet/v01`).on('value', function(snap) {

      var newCars = [];

      Object.keys(snap.val()).map(item => {
        newCars.push(snap.val()[item]);
      });

      newCars.sort(function (a, b) {
        return a.status - b.status
      });
      const totalGreen =  newCars.filter(item => item.status === 2).length;

     console.log(totalGreen);
     });

const valetV1Data = () => {
      db.ref(`valet/v01`).on('value', function(snap) {
      //return snap.val();

      var newCars = [];

      Object.keys(snap.val()).map(item => {
        newCars.push(snap.val()[item]);
      });

      newCars.sort(function (a, b) {
        return a.status - b.status
      });
      const totalGreen =  newCars.filter(item => item.status === 2).length;
      return totalGreen;	
      });
}
*/const valetV1Data = new Promise((resolve, reject) => {
       db.ref(`valet/v01`).on('value', function(snap) {
      //return snap.val();

      var newCars = [];

      Object.keys(snap.val()).map(item => {
        newCars.push(snap.val()[item]);
      });

      newCars.sort(function (a, b) {
        return a.status - b.status
      });
      const totalGreen =  newCars.filter(item => item.status === 2).length;
      resolve(totalGreen);
      });
 });


const onlineStatus = () => {
    const connectedRef = db.ref(".info/connected");
    return connectedRef.on("value", function (snap) {
        return snap.val() === true;
    });
}

const valetData = (vID) => {
    return db.ref(`valet`).child(vID);
}


export {valetData, onlineStatus, valetV1Data, db};
