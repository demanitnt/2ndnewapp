import firebase from 'firebase';

const config = {
apiKey: "AIzaSyCUPjvOZOqnnQxHhYOmY-nxBh3mZK69wRM",
authDomain: "protuturial.firebaseapp.com",
databaseURL: "https://protuturial-default-rtdb.europe-west1.firebasedatabase.app/"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();