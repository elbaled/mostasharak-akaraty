importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBnyFEgU-LQggS5kKceH3_WeAaBsYzwqLo",
  authDomain: "mostasharak-akaraty.firebaseapp.com",
  databaseURL: "https://mostasharak-akaraty-default-rtdb.firebaseio.com",
  projectId: "mostasharak-akaraty",
  storageBucket: "mostasharak-akaraty.firebasestorage.app",
  messagingSenderId: "287363939919",
  appId: "1:287363939919:web:e53f13b518c6273043f43a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title || 'مستشارك العقاري';
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/602/602175.png',
    dir: 'rtl'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
