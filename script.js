(function (window) {
    var afterSubCallbacks = [];
    var isNeedRequest = true;
    if (localStorage && localStorage.getItem) {
        isNeedRequest = localStorage.getItem('smiPushNeedRequest');
        isNeedRequest = (isNeedRequest === "false") ? false : isNeedRequest;
        isNeedRequest = (isNeedRequest === null) ? true : isNeedRequest;
    }

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
                    var selecor = document.querySelector(".notify_element");
                    if (selecor) {
                        selecor.addEventListener('click', function () {
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
                    elem.setAttribute("id", "smiPushLayout");
                    document.body.appendChild(elem);
                    var closeSelector = document.querySelector(".rt-close-btn");
                    var removeLayout = function () {
                        document.getElementById("smiPushLayout").remove();
                    };
                    if (closeSelector) {
                        closeSelector.addEventListener('click', function () {
                            removeLayout();
                        });
                    }
                    afterSubCallbacks.push(removeLayout);
                    callback(settings);
                }, settings.timeout * 1000);


            })
        },
        panel: function (settings, callback) {
            var el = '<div class="rt-box topbox" style="padding-top:10px;padding-bottom:10px;padding-right:20px;padding-left:20px;max-width:100%;background-color:{{backgroundColor}};font-family:\'Open Sans\',\'Helvetica Neue\',Helvetica,Arial,sans-serif;position:absolute;box-shadow:0 5px 10px rgba(0,0,0,.2);-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,.2);box-sizing:border-box;z-index:9999;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;width:100%;top:0;left:0;" >\n' +
                '        <div class="close-btn" style="width:20px;height:20px;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABkklEQVQ4EYWUWU4EMQxEm30XIG4ICDgU/DDAsElwO7YPqJekIrenxViqJLbLNU46mWEY24rcdYF5mS3lriaF7Md0zmV/cOBIVecCM7ZWp9HIDrBjIXKt0beHyLPwK9wLuwIWRS22p/hcgPskuIFyVCZdNMJHIG5rjSFq4R2tXwTEzKVTrGj5A5wo8ChA/GwzhfuC7UCLVyFyHuSzfcxa/QzZShZ9U2yz4V1zFItH089QnGLeEsUQKfxuM526M8dmim0ImGurF0YnOLs7AdGfNsf1rWJbAuaa6k2MkXCjvDt1Z9ehJnJLeGHfgUzONwBRG9v8r868MvsXuRr+OFNbJsexYK6pXhid4KNwFejqq82cp8/UMT4cXMy11dPoLdCZxeJdJA/8kpxD1J1ao19Gns9MiJ3xrLibNtZZlJrDRhg9vTMFEfNz4u7519kSwIhZ1NzTkklPL/45UOAnZyFqvCZnUebRnwNE75/ElcC7xnxtqldHi8K5FCxmjc7Ngex3ohY5l/3O5VDpqv9r9MziYpL7BydTZW4iHABaAAAAAElFTkSuQmCC\');background-repeat:no-repeat;position:absolute;top:10px;right:20px;cursor:pointer;" ></div>\n' +
                '        <p class="rt-box-text" style="margin-top:0px;margin-bottom:5px;text-align:center;font-size:16px;line-height:22px;color:{{textColor}};" >\n' +
                '            <span class="rt-ring" style="background-image:url(\'data:image/png;base64,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\');background-repeat:no-repeat;background-position:center;margin-right:5px;width:15px;height:15px;display:inline-block;background-size:cover;" ></span>\n' +
                '            {{subject}} \n' +
                '        </p>\n' +
                '        <div class="rt-box-buttons" style="text-align:center;" >\n' +
                '            <button class="rt-box-btn-cancel" style="color:{{buttonColor}};background-color:{{backgroundColor}};display:inline-block;padding-top:3px;padding-bottom:3px;padding-right:12px;padding-left:12px;font-size:16px;font-weight:400;line-height:1.42;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:4px;border-color:transparent;" >\n' +
                '                Запретить\n' +
                '            </button>\n' +
                '            <button class="rt-box-btn-cancel-success" style="margin-left:15px;color:#ffffff;background-color:{{buttonColor}};display:inline-block;padding-top:3px;padding-bottom:3px;padding-right:12px;padding-left:12px;font-size:16px;font-weight:400;line-height:1.42;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:4px;border-color:transparent;" >\n' +
                '                Разрешить\n' +
                '            </button>\n' +
                '        </div>\n' +
                '    </div>';
            el = el.replace(new RegExp('{{subject}}', 'g'), settings.subject)
                .replace(new RegExp('{{backgroundColor}}', 'g'), settings.backgroundColor)
                .replace(new RegExp('{{textColor}}', 'g'), settings.textColor)
                .replace(new RegExp('{{buttonColor}}', 'g'), settings.buttonColor);

            documentReady(function () {
                setTimeout(function () {
                    var elem = document.createElement('div');
                    elem.innerHTML = el;
                    elem.setAttribute("id", "smiPushLayout");
                    document.body.appendChild(elem);
                    var cancelSelector = document.querySelector(".rt-box-btn-cancel");
                    var closeSelector2 = document.querySelector(".close-btn");

                    var openSelector = document.querySelector(".rt-box-btn-cancel-success");
                    var removeLayout = function () {
                        document.getElementById("smiPushLayout").remove();
                    };
                    if (openSelector) {
                        openSelector.addEventListener('click', function () {
                            callback(settings);
                        });
                    }

                    if (closeSelector2 && cancelSelector) {
                        closeSelector2.addEventListener('click', function () {
                            removeLayout();
                        });
                        cancelSelector.addEventListener('click', function () {
                            localStorage.setItem('smiPushNeedRequest', false);
                            removeLayout();
                        });
                    }

                    afterSubCallbacks.push(removeLayout);
                }, settings.timeout * 1000);


            })
        },
        modal: function (settings, callback) {
            var el = ' <div class="rt-box" style="margin-top:-250px;margin-bottom:0;margin-right:0;margin-left:-250px;padding-top:60px;padding-bottom:50px;padding-right:50px;padding-left:50px;width:500px;background-color:{{backgroundColor}};font-family:\'Open Sans\',\'Helvetica Neue\',Helvetica,Arial,sans-serif;position:absolute;top:50%;left:50%;box-shadow:0 5px 10px rgba(0,0,0,.2);-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,.2);z-index:9999;" >\n' +
                '        <div class="close-btn" style="width:20px;height:20px;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABkklEQVQ4EYWUWU4EMQxEm30XIG4ICDgU/DDAsElwO7YPqJekIrenxViqJLbLNU46mWEY24rcdYF5mS3lriaF7Md0zmV/cOBIVecCM7ZWp9HIDrBjIXKt0beHyLPwK9wLuwIWRS22p/hcgPskuIFyVCZdNMJHIG5rjSFq4R2tXwTEzKVTrGj5A5wo8ChA/GwzhfuC7UCLVyFyHuSzfcxa/QzZShZ9U2yz4V1zFItH089QnGLeEsUQKfxuM526M8dmim0ImGurF0YnOLs7AdGfNsf1rWJbAuaa6k2MkXCjvDt1Z9ehJnJLeGHfgUzONwBRG9v8r868MvsXuRr+OFNbJsexYK6pXhid4KNwFejqq82cp8/UMT4cXMy11dPoLdCZxeJdJA/8kpxD1J1ao19Gns9MiJ3xrLibNtZZlJrDRhg9vTMFEfNz4u7519kSwIhZ1NzTkklPL/45UOAnZyFqvCZnUebRnwNE75/ElcC7xnxtqldHi8K5FCxmjc7Ngex3ohY5l/3O5VDpqv9r9MziYpL7BydTZW4iHABaAAAAAElFTkSuQmCC\');background-repeat:no-repeat;position:absolute;top:20px;right:20px;cursor:pointer;" ></div>\n' +
                '        <div class="rt-ring" style="width:100%;height:70px;background-image:url(\'data:image/png;base64,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\');background-repeat:no-repeat;background-position:center;" ></div>\n' +
                '        <h3 class="rt-box-title" style="margin-top:20px;margin-bottom:10px;text-align:center;font-weight:normal;font-size:24px;color:{{textColor}}" >\n' +
                '            {{title}}уведомления\n' +
                '        </h3>\n' +
                '        <p class="rt-box-text" style="text-align:center;font-size:16px;line-height:22px;color:{{textColor}};" >\n' +
                '            {{subject}}\n' +
                '        </p>\n' +
                '        <div class="rt-box-buttons" style="margin-top:30px;text-align:center;" >\n' +
                '            <button class="rt-box-btn-cancel" style="color:{{buttonColor}};background-color:{{backgroundColor}};display:inline-block;padding-top:6px;padding-bottom:6px;padding-right:12px;padding-left:12px;font-size:16px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:4px;border-color:transparent;" >\n' +
                '                Запретить\n' +
                '            </button>\n' +
                '            <button class="rt-box-btn-cancel-success" style="margin-left:15px;color:#ffffff;background-color:{{buttonColor}};display:inline-block;padding-top:6px;padding-bottom:6px;padding-right:12px;padding-left:12px;font-size:16px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:4px;border-color:transparent;" >\n' +
                '                Разрешить\n' +
                '            </button>\n' +
                '        </div>\n' +
                '    </div>';

            el = el.replace(new RegExp('{{subject}}', 'g'), settings.subject)
                .replace(new RegExp('{{backgroundColor}}', 'g'), settings.backgroundColor)
                .replace(new RegExp('{{textColor}}', 'g'), settings.textColor)
                .replace(new RegExp('{{buttonColor}}', 'g'), settings.buttonColor)
                .replace(new RegExp('{{title}}', 'g'), settings.title);

            documentReady(function () {
                setTimeout(function () {
                    var elem = document.createElement('div');
                    elem.innerHTML = el;
                    elem.setAttribute("id", "smiPushLayout");
                    document.body.appendChild(elem);
                    var cancelSelector = document.querySelector(".rt-box-btn-cancel");
                    var closeSelector2 = document.querySelector(".close-btn");

                    var openSelector = document.querySelector(".rt-box-btn-cancel-success");
                    var removeLayout = function () {
                        document.getElementById("smiPushLayout").remove();
                    };
                    if (openSelector) {
                        openSelector.addEventListener('click', function () {
                            callback(settings);
                        });
                    }

                    if (closeSelector2 && cancelSelector) {
                        closeSelector2.addEventListener('click', function () {
                            removeLayout();
                        });
                        cancelSelector.addEventListener('click', function () {
                            localStorage.setItem('smiPushNeedRequest', false);
                            removeLayout();
                        });
                    }

                    afterSubCallbacks.push(removeLayout);
                }, settings.timeout * 1000);


            })
        },
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
                'backdrop-prompt': 'backdrop-prompt',
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
            if (settings.type === types['backdrop-prompt']) {
                window.smiPush.ui.backdropbrompt(settings, function () {
                    subscribe();
                })
            }
            if (settings.type === types.modal) {
                window.smiPush.ui.modal(settings, function () {
                    subscribe();
                })
            }
            if (settings.type === types.panel) {
                window.smiPush.ui.panel(settings, function () {
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
                if (this.readyState == 4) {
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
            if (registrationEvent && isNeedRequest && Notification.permission !== 'denied') {
                window.smiPush.getVapidKeys(registrationEvent, function (vapidKeys) {
                    window.smiPush.doClientSubscribe(window.smiPush.settings, vapidKeys, registrationEvent,
                        function (subscription, afterSubscribeEvent) {
                            window.smiPush.subscribe(subscription, function () {
                                for (var index in afterSubCallbacks) {
                                    var callback = afterSubCallbacks[index];
                                    callback();
                                }
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
            "type": "modal",
            "title": "Подписка на уведомления",
            "subject": "Разрешите сайту  отправлять вам уведомления на рабочий стол",
            "timeout": 3,
            "textColor": "#ffffff",
            "buttonColor": "#d84451",
            "backgroundColor": "#1d0a0a"
        })),
        start: start,
    };

    window.smiPush.start();

})(window);

