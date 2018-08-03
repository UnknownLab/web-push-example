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
    event.waitUntil(self.registration.pushManager.getSubscription().then(function (data) {
        console.log(data);
        fetch('https://papi.push.exchange/subscriber/' + 'unsubscribe', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({endpoint: data.endpoint})
        }).then(res => res.json())
    }));
});

