(function (window) {

    var documentReady = function (fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    };

    var ui = {

        element: function (settings, callback) {
            setTimeout(function () {
                documentReady(function () {
                    var m1 = document.querySelector(".notify_element");
                    if (m1) {
                        m1.addEventListener('click', function () {
                            callback(settings)
                        });
                    }
                });
            }, 1000);
        },

        prompt: function (settings, callback) {
            setTimeout(function () {
                callback(settings);
            }, settings.timeout * 1000);
        },

        backdropbrompt: function (settings, callback) {
            var el = '<div class="rt-backdrop" style="padding-top:10px;padding-bottom:10px;padding-right:20px;padding-left:20px;color:#ffffff;background-color:rgba(0,0,0,0.65);font-family:\'Open Sans\',\'Helvetica Neue\',Helvetica,Arial,sans-serif;box-sizing:border-box;position:absolute;top:0;bottom:0;right:0;left:0;z-index:9999;" >\n' +
                '        <div class="rt-close-btn" style="width:40px;height:40px;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAABBJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDozMDMxQUFEQjA2QTcxMUU0OEIwN0Q0Mzc2NjlDQzcyQjwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDozMDMxQUFEQzA2QTcxMUU0OEIwN0Q0Mzc2NjlDQzcyQjwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDozMDMxQUFERTA2QTcxMUU0OEIwN0Q0Mzc2NjlDQzcyQjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDozMDMxQUFERDA2QTcxMUU0OEIwN0Q0Mzc2NjlDQzcyQjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CnSe6mAAAAK/SURBVGgF3VpbTsMwEISCxAcciWsgfpG4GgKV96m4AhIPhZk0u904j25dO06w5Hr92p3xOG7S9OioJ1VVdYJ83NNVvIm4iG8nEDsI9mrnhAkHWDwWZwsCOsi0Bo7yEvmCA1CetgYWqggO4kK+bLCtYLd3jjSgvEJmehfMsIuSsfFhvyIzXTdktkTQKErc1kO2H4+lyQCKLiLs5y202rppyKy4dbilalYoH+vuqvpE+dXYb6XIIH4fCeIiPqaHhshGFTSoPLCFDCcImfXUZBB7iIRgejGYFD+V0RMKtkhoyUymjIOEXVjFLcRaJ9QAGetAV0wdJDAcJHwLmsxRBClH7P0WMrlDBylHTJ8SYaxsjsNAqDti7adEGCN7AB+JOCUiyEQHmmKhWnxyBHT4jF6gFviwkjKww9dh10QIPqynAODwkUeJCDKDQBwk8ioRQaYDyEFicAHC+EnrewI7k+CY13cf1yEu4ycpHWQUIAENkCijRLhCDjJU4Bx5jcxk76iVKNqz3ISGeEfrFgRsu3V+UWf62BQV6/I8MQ8lQmYAqCsKW56rv2ELGZasMz3JfNg6T9qKlwClvzfBvkNm+kEmCZZM9wIUto6Xttiy+3QV66k7r+o2LaAFq6tbBPYyt1ZAYpkX+wgJOZ3mf/w6SOj3BK8OjLdqCdGyx7CDhAU4z1sUBwlVQsZKORtlDgHkmNtZgCwHdgogDh92S+qRnoxQSgAOX3mUyRHY4TOtMjkDOnynUWaKQI4YhymTPYC5eh2x4pTJ5tiAD01HzP2USe4wRDxSd8T2KZPM0QjYXV0ODOPKwIE+ZMEuenPnIGOVUdy8K9WXibCX+TKUJISIIbHY19O1PCAy9z8MvACjTTe85tDQ3V5oXO5fOBpW/+NPNSTDBEX0t6aWZJvuop8Wj8U5CIqDkPUkGxxYoIO4+kj8ARGYnRLMEoPlAAAAAElFTkSuQmCC\');background-repeat:no-repeat;background-size:contain;display:block;position:absolute;top:30px;right:30px;cursor:pointer;" ></div>\n' +
                '        <h3 class="rt-backdrop-text" style="margin-left:-200px;max-width:400px;line-height:34px;text-align:center;font-weight:normal;font-size:24px;display:block;position:absolute;top:50%;left:50%;transform:translateY(-50%);" >Нажмите на кнопку "Разрешить" чтобы получать главные новости с сайта Бла бла бла</h3>\n' +
                '    </div>';

            documentReady(function () {
                setTimeout(function () {
                    var elem = document.createElement('div');
                    elem.innerHTML = el;
                    document.body.appendChild(elem);
                    callback(settings);
                }, settings.timeout * 1000);


            })
        }
    };

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

    var doClientSubscribe = function (settings, vapidKeys, registrationEvent, callback) {
        var subscribe = function () {
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

        if (settings && settings.type) {
            settings.type = settings.type.toLowerCase();
            var types = {
                element: 'element',
                prompt: 'prompt',
                backdropbrompt: 'backdrop-prompt',
                modal: 'modal',
                panel: 'panel',
                safari: 'safari',
                fab: 'fab',
            };
            if (settings.type === types.element) {
                window.smiPush.ui.element(settings, function () {
                    subscribe();
                })
            }
            if (settings.type === types.prompt) {
                window.smiPush.ui.prompt(settings, function () {
                    subscribe();
                })
            }
            if (settings.type === types.backdropbrompt) {
                window.smiPush.ui.backdropbrompt(settings, function () {
                    subscribe();
                })
            }

            if (!types[settings.type]) {
                subscribe();
            }
        } else {
            subscribe();
        }


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
                    window.smiPush.doClientSubscribe(window.smiPush.settings, vapidKeys, registrationEvent,
                        function (subscription, afterSubscribeEvent) {
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
        ui: ui,
        doClientSubscribe: doClientSubscribe,
        settings: JSON.parse(JSON.stringify({
            "hint": "Нажмите на кнопку \"Разрешить\", чтобы получать новости с сайта ",
            "type": "backdrop-prompt",
            "title": "Подписка на уведомления",
            "subject": "Разрешите сайту  отправлять вам уведомления на рабочий стол",
            "timeout": 5,
            "textColor": "#000000",
            "buttonColor": "#536dfe",
            "backgroundColor": "#ffffff"
        })),
        start: start,
    };

    window.smiPush.start();

})(window);

