
self.addEventListener('push', function (event) {
    console.log(event);
    event.waitUntil(self.registration.showNotification('ServiceWorker Cookbook', {
        body: 'Push Notification Subscription Management'
    }));
});

self.addEventListener('pushsubscriptionchange', function (event) {
    var url = 'https://suntegydev.ru/subscriber';
    var sourcePublicKey = 'e6bf5c49-7c90-49f6-a87c-17ef76dcd9b6';

    event.waitUntil(
        self.registration.pushManager.subscribe({userVisibleOnly: true})
            .then(function (subscription) {
                console.log('Subscribed after expiration', subscription.endpoint);
                return fetch(url, {
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
