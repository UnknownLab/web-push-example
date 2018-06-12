(function (window) {

    var browserDetect = function () {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 5);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            {s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/},
            {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/},
            {s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/},
            {s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/},
            {s: 'Windows Vista', r: /Windows NT 6.0/},
            {s: 'Windows Server 2003', r: /Windows NT 5.2/},
            {s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/},
            {s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/},
            {s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/},
            {s: 'Windows 98', r: /(Windows 98|Win98)/},
            {s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/},
            {s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s: 'Windows CE', r: /Windows CE/},
            {s: 'Windows 3.11', r: /Win16/},
            {s: 'Android', r: /Android/},
            {s: 'Open BSD', r: /OpenBSD/},
            {s: 'Sun OS', r: /SunOS/},
            {s: 'Linux', r: /(Linux|X11)/},
            {s: 'iOS', r: /(iPhone|iPad|iPod)/},
            {s: 'Mac OS X', r: /Mac OS X/},
            {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s: 'QNX', r: /QNX/},
            {s: 'UNIX', r: /UNIX/},
            {s: 'BeOS', r: /BeOS/},
            {s: 'OS/2', r: /OS\/2/},
            {
                s: 'Search Bot',
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'Android':
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }

        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            }
            else {
                flashVersion = unknown;
            }
        }

        var langs = navigator.languages;

        return {
            screen: screenSize,
            browser: browser,
            browserVersion: version,
            browserMajorVersion: majorVersion,
            mobile: mobile,
            os: os,
            languages: langs,
            osVersion: osVersion,
            cookies: cookieEnabled,
            flashVersion: flashVersion
        };
    };

    var urlBase64ToUint8Array = function (base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        var i = 0;
        for (i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };

    var registerServiceWorker = function (callback) {
        if (navigator && navigator.serviceWorker && navigator.serviceWorker.register) {

            navigator.serviceWorker.register('smi-sw.js');
            navigator.serviceWorker.ready
                .then(function (registrationEvent) {
                    registrationEvent.pushManager.getSubscription().then(function (isExists) {
                        if (isExists) {

                            console.log('already registred');
                        } else {
                            callback(registrationEvent);
                        }
                    })

                })
        } else {
            callback(false);
        }
    };

    var getVapidKeys = function (registrationEvent, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (e) {
            if (this.readyState == 4 && this.status == 200) {
                var vapidKeys = window.smiPush.urlBase64ToUint8Array(this.responseText);
                callback(vapidKeys, e);
            }
        };
        xhttp.open("GET", window.smiPush.url + "vapidPublicKey", true);
        xhttp.send();
    };

    var doClientSubscribe = function (vapidKeys, registrationEvent, callback) {
        registrationEvent.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: vapidKeys
        }).then(function (afterSubscribeEvent) {
            registrationEvent.pushManager.getSubscription().then(function (subscription) {
                if (subscription) {
                    callback(subscription, afterSubscribeEvent);
                } else {
                    callback(false);
                }
            });
        });


    };

    var subscribe = function (subscription, callback) {
        if (subscription) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function (e) {
                if (this.readyState == 4 && this.status == 200) {
                    callback(this.responseText);
                }
            };
            xhttp.open("POST", window.smiPush.url + "subscribe", true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send(JSON.stringify({
                endpoint: subscription.endpoint,
                data: subscription,
                browserData: window.smiPush.browserDetect(),
                sourcePublicKey: window.smiPush.sourcePublicKey
            }));
        }
    };

    var start = function () {
        window.smiPush.registerServiceWorker(function (registrationEvent) {
            if (registrationEvent) {
                window.smiPush.getVapidKeys(registrationEvent, function (vapidKeys) {
                    window.smiPush.doClientSubscribe(vapidKeys, registrationEvent, function (subscription, afterSubscribeEvent) {
                        window.smiPush.subscribe(subscription, function () {

                        });
                    });
                });
            } else {

            }
        });
    };

    window.smiPush = window.smiPush || {
        url: "https://suntegydev.ru/subscriber/",//"{{serverUrl}}",
        sourcePublicKey: "sdaasd",//"{{sourcePublicKey}}",
        browserDetect: browserDetect,
        urlBase64ToUint8Array: urlBase64ToUint8Array,
        subscribe: subscribe,
        getVapidKeys: getVapidKeys,
        registerServiceWorker: registerServiceWorker,
        doClientSubscribe: doClientSubscribe,
        start: start,
    };

    window.smiPush.start();

})(window);

