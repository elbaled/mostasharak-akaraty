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
    body: payload.notification?.body || "إشعار جديد متاح الآن",
    // الأيقونة الملونة الكبيرة (بتظهر لما تسحب الستارة)
    icon: "https://i.ibb.co/1JGjZNQ0/1792600720890.jpg",
    // الأيقونة الصغيرة المفرغة (بتحل مشكلة المربع الأبيض جنب الساعة)
    badge: "https://cdn-icons-png.flaticon.com/512/25/25694.png", 
    vibrate: [200, 100, 200]
  };


  self.registration.showNotification(notificationTitle, notificationOptions);
});
