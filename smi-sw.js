self.addEventListener("push", function (event) {
    var data = {};
    if (event.data) {
        data = event.data.json();
    }

    var title = data.title;
    var message = data.text;
    var icon = data.icon;
    event.waitUntil(self.registration.showNotification(title, {
        body: message,
        icon: icon,
        data: data
    }))

});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(self.registration.pushManager.getSubscription().then(function (data) {
        clients.openWindow(event.notification.data.url)
    }));
});

self.addEventListener("pushsubscriptionchange", function (e) {
    console.log(e);
    e.waitUntil(self.registration.pushManager.subscribe({userVisibleOnly: !0}).then(function (e) {
        // window.smiPush.start();
    }))
});
