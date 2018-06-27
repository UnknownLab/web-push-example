self.addEventListener("push", function (i) {
    var t = {};
    i.data && (t = i.data.json());
    var n = t.title, e = t.text, o = t.icon;
    i.waitUntil(self.registration.showNotification(n, {body: e, icon: o, data: t}))
}), self.addEventListener("notificationclick", function (t) {
    t.notification.close(), t.waitUntil(self.registration.pushManager.getSubscription().then(function (i) {
        clients.openWindow(t.notification.data.url)
    }))
}), self.addEventListener("pushsubscriptionchange", function (i) {
    console.log(i), i.waitUntil(self.registration.pushManager.subscribe({userVisibleOnly: !0}).then(function (i) {
    }))
});