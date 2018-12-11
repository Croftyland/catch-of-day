import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhTLn9uGqjU-WTiTTkaptwYSkMMvwMy24",
    authDomain: "catch-of-the-day-198fd.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-198fd.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

//This is named export
export {firebaseApp};

//this is a default export
export default base;