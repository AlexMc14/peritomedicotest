// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyARY6o2T21ML33G6DC0r_VwSS6KP13lOE4",
//   authDomain: "informesmedicospericiale-aefa2.firebaseapp.com",
//   projectId: "informesmedicospericiale-aefa2",
//   storageBucket: "informesmedicospericiale-aefa2.appspot.com",
//   messagingSenderId: "478457945260",
//   appId: "1:478457945260:web:a0a17c0cb730c7edeed309"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDo1A7Z0amaZypA2szW_cXPA4LTxpPy9Fo",
    authDomain: "alex-dev-4d19d.firebaseapp.com",
    projectId: "alex-dev-4d19d",
    storageBucket: "alex-dev-4d19d.appspot.com",
    messagingSenderId: "660001871846",
    appId: "1:660001871846:web:cea40dfd92302c3d6aa827"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
