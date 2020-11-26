import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./components/App";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDlwU1SiALFyALZlkFOKcrgl_M1Hu2-Ko8",
  authDomain: "kanban-bb8fe.firebaseapp.com",
  databaseURL: "https://kanban-bb8fe.firebaseio.com",
  projectId: "kanban-bb8fe",
  storageBucket: "kanban-bb8fe.appspot.com",
  messagingSenderId: "704040435179",
  appId: "1:704040435179:web:a54058e393e46a7c64edae",
  measurementId: "G-94KCJ4HTNL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Init VK  Mini App
bridge.send("VKWebAppInit");

const db = firebase.firestore();
db.collection("desks").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(doc.data());
  });
});
ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
