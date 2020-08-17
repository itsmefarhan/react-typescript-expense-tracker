importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
});

const initMessaging = firebase.messaging();
