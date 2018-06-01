self.addEventListener('push', function (event) {
    console.log(event);
    event.waitUntil(self.registration.showNotification('ServiceWorker Cookbook', {
        body: 'Push Notification Subscription Management'
    }));
});

self.addEventListener('pushsubscriptionchange', function (event) {
    var url = 'https://suntegydev.ru/subscriber';
    var sourcePublicKey = 'b0a4376b-7d12-419b-acbc-19f5d63a32a6';

    event.waitUntil(
        self.registration.pushManager.subscribe({userVisibleOnly: true})
            .then(function (subscription) {
                console.log('Subscribed after expiration', subscription.endpoint);
                return fetch(url + '/subscribe', {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        endpoint: subscription.endpoint,
                        data: subscription,
                        sourcePublicKey: sourcePublicKey,
                    })
                });
            })
    );
});
