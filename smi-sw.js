self.addEventListener("push", function (e) {
     e.waitUntil(self.registration.showNotification("SMIPush Test Notification", {body: "Hello World"}))
});
//
// self.addEventListener("pushsubscriptionchange", function (e) {
//     e.waitUntil(self.registration.pushManager.subscribe({userVisibleOnly: !0}).then(function (e) {
//         window.smiPush.start();
//     }))
// });