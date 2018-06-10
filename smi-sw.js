self.addEventListener("push", function (e) {
    alert(2);
    console.log(e), e.waitUntil(self.registration.showNotification("SMIPush Test Notification", {body: "Hello World"}))
})

self.addEventListener("pushsubscriptionchange", function (e) {
    alert(1);
    e.waitUntil(self.registration.pushManager.subscribe({userVisibleOnly: !0}).then(function (e) {
        return console.log("Subscribed after expiration", e.endpoint), fetch('https://suntegydev.ru/subscriber' + '/subscribe', {
            method: "post",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                endpoint: e.endpoint,
                data: e,
                sourcePublicKey: '106fde60-aff6-45c3-a592-806ed55e7877'
            })
        })
    }))
});