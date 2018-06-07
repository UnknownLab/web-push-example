importScripts('https://www.gstatic.com/firebasejs/4.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.9.1/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyAJGaKRIe3fPRUtDziQcfVzjmoDgYjJ84k",
    authDomain: "pushprofit-dd74e.firebaseapp.com",
    databaseURL: "https://pushprofit-dd74e.firebaseio.com",
    projectId: "pushprofit-dd74e",
    storageBucket: "pushprofit-dd74e.appspot.com",
    messagingSenderId: "810494605829"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

self.addEventListener('notificationclick', function(event) {
    const target = event.notification.data.click_action;
    event.notification.close();

    event.waitUntil(clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == target && 'focus' in client) {
                return client.focus();
            }
        }
        return clients.openWindow(target);
    }));
});


messaging.setBackgroundMessageHandler(function (payload) {
    if (payload.data['gcm.notification.image']) {
        payload.data.image = payload.data['gcm.notification.image'];
    }

    payload.data.data = payload.data;

    return self.registration.showNotification(payload.data.title, payload.data);
});