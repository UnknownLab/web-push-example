self.addEventListener("push", function (event) {
    var data = {};
    if (event.data) {
        data = event.data.json();
    }

    var title = data.title;
    var message = data.message;
    var icon = data.icon;
    var url = data.url;

    e.waitUntil(self.registration.showNotification(title, {
        body: message,
        icon: icon,
    }))

});

self.addEventListener('notificationclick', function (event) {

    event.notification.close();
    e.waitUntil(self.registration.pushManager.getSubscription().then(function (data) {
        console.log(data);
        console.log(event);

        clients.openWindow('' + 'click?url=' + event.notification.data.url + '&sourceKey=' + +'&endPoint' + data.endpoint)
    }));
});

self.addEventListener("pushsubscriptionchange", function (e) {
    console.log(e);
    e.waitUntil(self.registration.pushManager.subscribe({userVisibleOnly: !0}).then(function (e) {
        window.smiPush.start();
    }))
});
