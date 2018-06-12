self.addEventListener("push", function (e) {
    var data = {};
    if (event.data) {
        data = event.data.json();
    }

    var title = data.title;
    var message = data.message;
    var icon = data.icon;
    var url = data.url;

    var notification = new self.Notification(title, {
        body: message,
        icon: icon,
        url: url,
    });

    notification.addEventListener('click', function() {
        if (clients.openWindow) {
            clients.openWindow(url);
        }
    });

    // e.waitUntil(self.registration.showNotification(title, {
    //     body: 'Buzz! Buzz!',
    //     icon: '../images/touch/chrome-touch-icon-192x192.png',
    //     vibrate: [200, 100, 200, 100, 200, 100, 200],
    //     tag: 'vibration-sample'
    // }))
});
//
// self.addEventListener("pushsubscriptionchange", function (e) {
//     e.waitUntil(self.registration.pushManager.subscribe({userVisibleOnly: !0}).then(function (e) {
//         window.smiPush.start();
//     }))
// });

self.addEventListener('notificationclick', function (event) {

    event.notification.close();
    e.waitUntil(self.registration.pushManager.getSubscription().then(function (data) {
        console.log(data);
        clients.openWindow('' + 'click?url=' + event.notification.data.url + '&sourceKey=' + +'&endPoint' + data.endpoint)
    }));
});