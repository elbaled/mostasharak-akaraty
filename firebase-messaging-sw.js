importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "ضع_API_KEY_الخاص_بك",
  authDomain: "mostasharak-akaraty.firebaseapp.com",
  projectId: "mostasharak-akaraty",
  storageBucket: "mostasharak-akaraty.appspot.com",
  messagingSenderId: "ضع_SENDER_ID",
  appId: "ضع_APP_ID"
});

const messaging = firebase.messaging();

// إظهار الإشعار حتى والموقع/التطبيق مغلق
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://elbaled.github.io/mostasharak-akaraty/icon.png', // رابط لوجو موقعك
    vibrate: [200, 100, 200]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
