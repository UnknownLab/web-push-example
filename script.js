!function (a) {
    var s = [], e = !0;
    localStorage && localStorage.getItem && (e = null === (e = "false" !== (e = localStorage.getItem("smiPushNeedRequest")) && e) || e);
    var d = function (e) {
        (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
    }, t = {
        element: function (t, n) {
            setTimeout(function () {
                d(function () {
                    var e = document.querySelector(".notify_element");
                    e && e.addEventListener("click", function () {
                        n(t)
                    })
                })
            }, 1e3)
        }, prompt: function (e, t) {
            setTimeout(function () {
                t(e)
            }, 1e3 * e.timeout)
        }, backdropbrompt: function (o, i) {
            d(function () {
                setTimeout(function () {
                    var e = document.createElement("div");
                    e.innerHTML = '<div class="rt-backdrop" style="padding-top:10px;padding-bottom:10px;padding-right:20px;padding-left:20px;color:#ffffff;background-color:rgba(0,0,0,0.65);font-family:\'Open Sans\',\'Helvetica Neue\',Helvetica,Arial,sans-serif;box-sizing:border-box;position:absolute;top:0;bottom:0;right:0;left:0;z-index:9999;" >\n        <div class="rt-close-btn" style="width:40px;height:40px;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAABBJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDozMDMxQUFEQjA2QTcxMUU0OEIwN0Q0Mzc2NjlDQzcyQjwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDozMDMxQUFEQzA2QTcxMUU0OEIwN0Q0Mzc2NjlDQzcyQjwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDozMDMxQUFERTA2QTcxMUU0OEIwN0Q0Mzc2NjlDQzcyQjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDozMDMxQUFERDA2QTcxMUU0OEIwN0Q0Mzc2NjlDQzcyQjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CnSe6mAAAAK/SURBVGgF3VpbTsMwEISCxAcciWsgfpG4GgKV96m4AhIPhZk0u904j25dO06w5Hr92p3xOG7S9OioJ1VVdYJ83NNVvIm4iG8nEDsI9mrnhAkHWDwWZwsCOsi0Bo7yEvmCA1CetgYWqggO4kK+bLCtYLd3jjSgvEJmehfMsIuSsfFhvyIzXTdktkTQKErc1kO2H4+lyQCKLiLs5y202rppyKy4dbilalYoH+vuqvpE+dXYb6XIIH4fCeIiPqaHhshGFTSoPLCFDCcImfXUZBB7iIRgejGYFD+V0RMKtkhoyUymjIOEXVjFLcRaJ9QAGetAV0wdJDAcJHwLmsxRBClH7P0WMrlDBylHTJ8SYaxsjsNAqDti7adEGCN7AB+JOCUiyEQHmmKhWnxyBHT4jF6gFviwkjKww9dh10QIPqynAODwkUeJCDKDQBwk8ioRQaYDyEFicAHC+EnrewI7k+CY13cf1yEu4ycpHWQUIAENkCijRLhCDjJU4Bx5jcxk76iVKNqz3ISGeEfrFgRsu3V+UWf62BQV6/I8MQ8lQmYAqCsKW56rv2ELGZasMz3JfNg6T9qKlwClvzfBvkNm+kEmCZZM9wIUto6Xttiy+3QV66k7r+o2LaAFq6tbBPYyt1ZAYpkX+wgJOZ3mf/w6SOj3BK8OjLdqCdGyx7CDhAU4z1sUBwlVQsZKORtlDgHkmNtZgCwHdgogDh92S+qRnoxQSgAOX3mUyRHY4TOtMjkDOnynUWaKQI4YhymTPYC5eh2x4pTJ5tiAD01HzP2USe4wRDxSd8T2KZPM0QjYXV0ODOPKwIE+ZMEuenPnIGOVUdy8K9WXibCX+TKUJISIIbHY19O1PCAy9z8MvACjTTe85tDQ3V5oXO5fOBpW/+NPNSTDBEX0t6aWZJvuop8Wj8U5CIqDkPUkGxxYoIO4+kj8ARGYnRLMEoPlAAAAAElFTkSuQmCC\');background-repeat:no-repeat;background-size:contain;display:block;position:absolute;top:30px;right:30px;cursor:pointer;" ></div>\n        <h3 class="rt-backdrop-text" style="margin-left:-200px;max-width:400px;line-height:34px;text-align:center;font-weight:normal;font-size:24px;display:block;position:absolute;top:50%;left:50%;transform:translateY(-50%);" >Нажмите на кнопку "Разрешить" чтобы получать главные новости с сайта Бла бла бла</h3>\n    </div>', e.setAttribute("id", "smiPushLayout"), document.body.appendChild(e);
                    var t = document.querySelector(".rt-close-btn"), n = function () {
                        document.getElementById("smiPushLayout").remove()
                    };
                    t && t.addEventListener("click", function () {
                        n()
                    }), s.push(n), i(o)
                }, 1e3 * o.timeout)
            })
        }, panel: function (r, a) {
            var A = '<div class="rt-box topbox" style="padding-top:10px;padding-bottom:10px;padding-right:20px;padding-left:20px;max-width:100%;background-color:{{backgroundColor}};font-family:\'Open Sans\',\'Helvetica Neue\',Helvetica,Arial,sans-serif;position:absolute;box-shadow:0 5px 10px rgba(0,0,0,.2);-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,.2);box-sizing:border-box;z-index:9999;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;width:100%;top:0;left:0;" >\n        <div class="close-btn" style="width:20px;height:20px;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABkklEQVQ4EYWUWU4EMQxEm30XIG4ICDgU/DDAsElwO7YPqJekIrenxViqJLbLNU46mWEY24rcdYF5mS3lriaF7Md0zmV/cOBIVecCM7ZWp9HIDrBjIXKt0beHyLPwK9wLuwIWRS22p/hcgPskuIFyVCZdNMJHIG5rjSFq4R2tXwTEzKVTrGj5A5wo8ChA/GwzhfuC7UCLVyFyHuSzfcxa/QzZShZ9U2yz4V1zFItH089QnGLeEsUQKfxuM526M8dmim0ImGurF0YnOLs7AdGfNsf1rWJbAuaa6k2MkXCjvDt1Z9ehJnJLeGHfgUzONwBRG9v8r868MvsXuRr+OFNbJsexYK6pXhid4KNwFejqq82cp8/UMT4cXMy11dPoLdCZxeJdJA/8kpxD1J1ao19Gns9MiJ3xrLibNtZZlJrDRhg9vTMFEfNz4u7519kSwIhZ1NzTkklPL/45UOAnZyFqvCZnUebRnwNE75/ElcC7xnxtqldHi8K5FCxmjc7Ngex3ohY5l/3O5VDpqv9r9MziYpL7BydTZW4iHABaAAAAAElFTkSuQmCC\');background-repeat:no-repeat;position:absolute;top:10px;right:20px;cursor:pointer;" ></div>\n        <p class="rt-box-text" style="margin-top:0px;margin-bottom:5px;text-align:center;font-size:16px;line-height:22px;color:{{textColor}};" >\n            <span class="rt-ring" style="background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAMdElEQVR4Ae2baYxeZRXH31k6nXY6rVPaTqALUxhqscUNLAQTFRf0g9UgCYEYEYtRPxj9oMaQQDAqMUBcPmiM0SqGlA9NDFGMGqtWBBukoQVESNUI2mILaTtlptNlVn//c8+5uXP7zjt3pvMuU3uSe5/tPGf5P+dZ7vPOlErnqSwCTWVra1spG1pyKkcpj+fq/q+KeUCyzldqy/JVJV/PiGnGo7HFixcvHRwcvK6pqWkd5abx8fG/L1y48I8DAwOHKRtPVTxvUKFyuDR//vwPAMgzPCMUNXXGled5rqWl5YPigYw3yZ7bb5siDsoArgqQWFPSPOAMAs5mh6Ku06oWw2Gj39HR0Y3jLzgop5VSfppnb67uH0yri9ywczpybOSJhI8DQkTHWHNz89dXrVq1AADaW1tb7yZVBFkUzZs375MOzDkdNa1yEiC+QSJgFClPkFo9qRF1j5GxdoD6pldP4PG6qiX1Cs9FGY80lbT4KiIsKgDuVLSPjY11el5AnZOko4EGopWp9EtSOaodaIjp8mnyRuQ/Qd1JCrZTkf9tb2/vfMrqW8/jhdlXjVebhOL4W3H2GFkDRqmAAKxf8Pyc/IlcW/+CBQs2UScSQA1BszFKGmVbH7q7uztw/FeUBcqwp9mtWvV6xjw1HvrsWLp06WLqRJJ1tpET0WsCp/vK7wIzMSYFdsmSJWszoKQHOowKIASCnjxQ6ZTi7NPrTszUsbwPeR9d/OSJdVi2bFknu8J9bW1tH3HW6QgSKEZMn9sBZT8FgZAHJaJkslTRE+C8jKzPmNDklerI1E2WNdsBdzM+3d/V1bXEGQvvdsYIGBtx5lE6aw3YkxFUxJiUhx3mXvqH0zF9ojydNKbVuG/hMfqprskQod54li9fvghbnnSf/gzIb/I+U4JjqLLYXY2AFyWAxxZDHPyWCylsCA7c46BoepwNKAGgTTXJxJ77MvYESF51RmI2Y0+cn8wn5PyHumude1JwrAEUr6RDhL0JoKNG6d4NGzZoZ5GSSoaYHHaYjzkocmq60yeAKJdK1phko2MLedGkTiXNdj6alxkoyQ1w/ovPm5zvDDkRKatR+DeYsh1fcwOyYGTzLtMSk9Pe3r4WOS+6nNmIlDxAMa32s2Zc5gaY7qwxnp9gKyDcim1H3bYAZx829zh/KiftCAAPegcdsLS2HNVXsHcoLVq0aDnl13s5P6UkJ0JW007ODHmad2w2yiYbm7+LDlG5SDZ7sHmdPlwTNj7I2tvfg2+vUpYdBg5ytkc7qWFiCNHwUZhTZ8ifZgG+MZgRdgl1u3j2dnZ2XuD1WXAsT5/L4Qml+a13NgAJGSYbXUfQeYXbk442ZbPndRC+7YZvNwD1hj/kN1NnoFA3RF5T8zZvT+SoMw1PUSml+k7RmnKnM5VQvJ72v3q72r7mbVlgTBiL4t3ON5vrSoCRT00HOu9xexKHkoLZhq13uT2aAc/jywbn1cfsl70trj6ezQy6HdM/5QwWngh4XKdUCdB9SAa0QfEh8CARdLHaIRlgoactHd7dlOVANdaWPDCx1uzVFSk6RemUZnddia37qVM/sx37nqF+tRh7enraKf/B2w0c1qDPqq2knYYQ2uGNUjRK+Sa1iRD8fRIJjnXnIKhriml0DBDPlxidd6MowjOO9XlnZrMsHdqhTqP7evKi2FlkWwu2fpj2A+RTH/BpK2WLKHy9gXYFhEUf+Z12NwRCV1HooyHm7K6IFpRdR1tcCygUjzE33wdvniyE4f8KDTKgFtESAFuUo7vcdLKBI7rfie26XDfbyI8EkAKB8qPepq/9fjC5Rl+7n/dKCyXQvIOyqAk0f0IqYbHufEENkM4zES2WuoLfUG/KPVW+2k+M9O9jQDO2kTVb5efn3BbzBT+3UY4BlV+y0zAAtC+VcP5BrxwGrdOg+w7K2tK0C0UIKlr2aJFWG3TGoktTT4bfog++aoMi+RHph1hnLpNxkDmcZBNb9XWOfU9SZzaRP0T029FDEUJZS4CBDCbbm/kd5w0uQHPzJRheUnl4ePgq2i4kK8Ul6h8+BpGdx6O5PYH4HUhb5koeKY5omsBTpYJ0SWf3qVOn3lhGh2xtPXr0aD8+/MzbR/FtxcjIyNtUJkL2k/yLxwAVJgJmDRXh6EHQO065RP2lJIqMZgSe5NF2LgrepORv+DfyRHvNgZFuHE234gnGJcBpI9mDH/LPdlL6XCI+ZofqDikPCbQ1crqLQjh7vL+/X3NQQrLb33HKr6geMu+T7ITICKOy7c5W9STs3+iaZEN2cMwmfNXBUyBYGz5dIP6+vj75bAFBKt5OQ45MkCpNCKnaglQXyqMu0lHd24Dy+qioVyobuBDLDvQEUwBGPoR/mhXho85mqX/UlzSVUgTp1M6jHUfUnyQmaAF8UijKjoTlibLV1F9krRMB9aqqJ+HgihMnTqxxbVk7rYpfHLR56PcrAwefwsc22lRvBIBDmkovU0oFc9K1Ey/1/3a+MQR00vFyLweviqZ8dHR0LfnYsc4wyPtVM5FOOduFnbJFlLUjFtX1+CI7LTrCRz4w5fMKdYJaqD8gYPZRkBDtPj082olEe2nTLmQKEHizX0jr8BbgWBthuI52Ia7tzupIa0nSqUWzDZvj6z/skK3Dur0DtFvCKPgGsHuPyuzAAmUtjwCjqWmfgLFGKiR4MVveJvJifoHkcZ4AYSV/rtGtNiiUGvIojG0ynb8JW+3f+KAFWPaZbZ4vcZxYjq+r3CJF0C581N1TiYjfRD8tFRpYIfNUfN9oVY4PyEfIGxgcdG6BaRRkf8phaJ06QQGKpTr0wfcY9QLFDkieV7mWj+nG3icyH5QxqGYrPvTiy1Z4xrD5VuwzoqzzjWzV9cMw55r3l3JfxKM09NPwXvXQ1OFL9FqyAYaqg2zeCjD66AwgwXYK9XwtQZEuRYhO6IczVwtmI/UTSD5pQFWJr/qO0rdi9N+TAkvjnTRIuH1HgOYD5EUBiJDPK9FJWXc1N5IEKCbcy/UAxqIGm2ItMRtlp5N8iCiKWfED6mTraaVE1FdJEwLBNaB2gEe3WA9w+o2fFQKQACi6KDXBCLqfvATXcxrFIJgN2PQdGQiZjUk2fcsXAWZtgHgFPm+lrGh7hRlwaXCa0zTexnNzVJKWAyOarc2/qHdRKcNqedUQQORTswEHd2sXcmOn9EN8+H4TAXF7vk++s0KuElk7U/DtGDEAowys5/oSAJkN2HQc297lDhTxJeu/5SPUJFgVEqJUCiqRdWab3sw2p5FRCIesSv2q3SYbRrCpA9s+5MrM1gqKw9fwXVjMiAwATsgXMjI660hQI6wv+aj5Z9ztYl9NBs1WekL1iw5KI6wtAUqkZhOL8B3YKMrvTkntLL51SRU/p+gbS4Y0wtoSgEQaa80h7TqyGWpLktl/Gyj6VYEp9GvEy4hGjJYAJ3aoHdipWwOR+ZBkz/6t+Rmh2EF4PkRZyhtpXQkw8mmca7brzsihSM8wXp5Rkq7o7PH6mUXoS7lCtZ6n3DwAk5VlY0yrnfhwNeWg1LeoKJraSo6wN3P4+RGg6HtCBmgU5gIoAZZstcjBB/3lxo/x6UrqRDParWL6fBsBUpIq8HIoniupwImN4nvkReFjUsq8iyAmgSItZlOdIo2xQV+yPetLRTMnRSzTSxEh0pyMvFXMwVfhdaVIxBQWNoeAmtKnIhETPIoWrTNnS5IzpWHwFOWbjj1hf/g0ad9KDCFkGyv5c0jQRU4RhyZV1gANArudO95n3RYtxjOiuQ5EJacr+lax0aVqHdIjtM+WQtZM5Ej/jEc4o1A+azbEjMg0nc9OiUCRiJlSSAEG6Rnnz2FXcImkexydiYrqHh8aGtL/OPWdPHlyfwFds8JSafGdFQUuRFNolB/ztrDw3UVev5errghp+nTRbxvpFh71q/o0qBUw+ELIjI8f4VlIVk9REgj644Mj3qFopBWVX5av6KiV7TyNSlu4ufX7E9PosPfT8TwWwUqpfjLVn8HtnIa+OcOqUbaRZq3QB5yAsh+4PK9yucd4AOV3+ptceEQ1iZhEVW3e9gHKBfUqHH0elQFORE4WGK0rAcprXBNc4ybO5Y/YiiibY7rjARydpgMMgaM/KtCjvNXD8yp3tjdQFp2zoCTu+R0IfzCwmmvSH+L8IZ4AKADpo+5hAHyLd6rVWhg21m2+avTtFEtEbGQr1rXpxdTpr5n068PT/O3KX9zKmmzPrqshEjlcKRLUVrfp0wgrfDmANKW0hSs9T42EwP8AvLGDmPxnuZIAAAAASUVORK5CYII=\');background-repeat:no-repeat;background-position:center;margin-right:5px;width:15px;height:15px;display:inline-block;background-size:cover;" ></span>\n            {{subject}} \n        </p>\n        <div class="rt-box-buttons" style="text-align:center;" >\n            <button class="rt-box-btn-cancel" style="color:{{buttonColor}};background-color:{{backgroundColor}};display:inline-block;padding-top:3px;padding-bottom:3px;padding-right:12px;padding-left:12px;font-size:16px;font-weight:400;line-height:1.42;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:4px;border-color:transparent;" >\n                Запретить\n            </button>\n            <button class="rt-box-btn-cancel-success" style="margin-left:15px;color:#ffffff;background-color:{{buttonColor}};display:inline-block;padding-top:3px;padding-bottom:3px;padding-right:12px;padding-left:12px;font-size:16px;font-weight:400;line-height:1.42;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:4px;border-color:transparent;" >\n                Разрешить\n            </button>\n        </div>\n    </div>';
            A = A.replace(new RegExp("{{subject}}", "g"), r.subject).replace(new RegExp("{{backgroundColor}}", "g"), r.backgroundColor).replace(new RegExp("{{textColor}}", "g"), r.textColor).replace(new RegExp("{{buttonColor}}", "g"), r.buttonColor), d(function () {
                setTimeout(function () {
                    var e = document.createElement("div");
                    e.innerHTML = A, e.setAttribute("id", "smiPushLayout"), document.body.appendChild(e);
                    var t = document.querySelector(".rt-box-btn-cancel"),
                        n = document.querySelector(".close-btn"),
                        o = document.querySelector(".rt-box-btn-cancel-success"), i = function () {
                            document.getElementById("smiPushLayout").remove()
                        };
                    o && o.addEventListener("click", function () {
                        a(r)
                    }), n && t && (n.addEventListener("click", function () {
                        i()
                    }), t.addEventListener("click", function () {
                        localStorage.setItem("smiPushNeedRequest", !1), i()
                    })), s.push(i)
                }, 1e3 * r.timeout)
            })
        }, modal: function (r, a) {
            var A = ' <div class="rt-box" style="margin-top:-250px;margin-bottom:0;margin-right:0;margin-left:-250px;padding-top:60px;padding-bottom:50px;padding-right:50px;padding-left:50px;width:500px;background-color:{{backgroundColor}};font-family:\'Open Sans\',\'Helvetica Neue\',Helvetica,Arial,sans-serif;position:absolute;top:50%;left:50%;box-shadow:0 5px 10px rgba(0,0,0,.2);-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,.2);z-index:9999;" >\n        <div class="close-btn" style="width:20px;height:20px;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABkklEQVQ4EYWUWU4EMQxEm30XIG4ICDgU/DDAsElwO7YPqJekIrenxViqJLbLNU46mWEY24rcdYF5mS3lriaF7Md0zmV/cOBIVecCM7ZWp9HIDrBjIXKt0beHyLPwK9wLuwIWRS22p/hcgPskuIFyVCZdNMJHIG5rjSFq4R2tXwTEzKVTrGj5A5wo8ChA/GwzhfuC7UCLVyFyHuSzfcxa/QzZShZ9U2yz4V1zFItH089QnGLeEsUQKfxuM526M8dmim0ImGurF0YnOLs7AdGfNsf1rWJbAuaa6k2MkXCjvDt1Z9ehJnJLeGHfgUzONwBRG9v8r868MvsXuRr+OFNbJsexYK6pXhid4KNwFejqq82cp8/UMT4cXMy11dPoLdCZxeJdJA/8kpxD1J1ao19Gns9MiJ3xrLibNtZZlJrDRhg9vTMFEfNz4u7519kSwIhZ1NzTkklPL/45UOAnZyFqvCZnUebRnwNE75/ElcC7xnxtqldHi8K5FCxmjc7Ngex3ohY5l/3O5VDpqv9r9MziYpL7BydTZW4iHABaAAAAAElFTkSuQmCC\');background-repeat:no-repeat;position:absolute;top:20px;right:20px;cursor:pointer;" ></div>\n        <div class="rt-ring" style="width:100%;height:70px;background-image:url(\'data:image/png;base64,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\');background-repeat:no-repeat;background-position:center;" ></div>\n        <h3 class="rt-box-title" style="margin-top:20px;margin-bottom:10px;text-align:center;font-weight:normal;font-size:24px;color:{{textColor}}" >\n            {{title}}уведомления\n        </h3>\n        <p class="rt-box-text" style="text-align:center;font-size:16px;line-height:22px;color:{{textColor}};" >\n            {{subject}}\n        </p>\n        <div class="rt-box-buttons" style="margin-top:30px;text-align:center;" >\n            <button class="rt-box-btn-cancel" style="color:{{buttonColor}};background-color:{{backgroundColor}};display:inline-block;padding-top:6px;padding-bottom:6px;padding-right:12px;padding-left:12px;font-size:16px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:4px;border-color:transparent;" >\n                Запретить\n            </button>\n            <button class="rt-box-btn-cancel-success" style="margin-left:15px;color:#ffffff;background-color:{{buttonColor}};display:inline-block;padding-top:6px;padding-bottom:6px;padding-right:12px;padding-left:12px;font-size:16px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:4px;border-color:transparent;" >\n                Разрешить\n            </button>\n        </div>\n    </div>';
            A = A.replace(new RegExp("{{subject}}", "g"), r.subject).replace(new RegExp("{{backgroundColor}}", "g"), r.backgroundColor).replace(new RegExp("{{textColor}}", "g"), r.textColor).replace(new RegExp("{{buttonColor}}", "g"), r.buttonColor).replace(new RegExp("{{title}}", "g"), r.title), d(function () {
                setTimeout(function () {
                    var e = document.createElement("div");
                    e.innerHTML = A, e.setAttribute("id", "smiPushLayout"), document.body.appendChild(e);
                    var t = document.querySelector(".rt-box-btn-cancel"),
                        n = document.querySelector(".close-btn"),
                        o = document.querySelector(".rt-box-btn-cancel-success"), i = function () {
                            document.getElementById("smiPushLayout").remove()
                        };
                    o && o.addEventListener("click", function () {
                        a(r)
                    }), n && t && (n.addEventListener("click", function () {
                        i()
                    }), t.addEventListener("click", function () {
                        localStorage.setItem("smiPushNeedRequest", !1), i()
                    })), s.push(i)
                }, 1e3 * r.timeout)
            })
        }, safary: function (i, r) {
            var a = '<div class="rt-box safary-style" style="padding-top:12px;padding-bottom:12px;padding-right:20px;padding-left:104px;max-width:100%;background-color:rgba(245,247,249,.97);font-family:\'Open Sans\',\'Helvetica Neue\',Helvetica,Arial,sans-serif;position:absolute;box-sizing:border-box;z-index:9999;width:420px;top:0px;left:50px;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;box-shadow:0 1px 2px rgba(0,0,0,.2);" >\n        <div class="rt-site-image" style="width:64px;height:64px;background-image:url(\'data:image/png;base64,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\');background-repeat:no-repeat;background-position:center;background-size:cover;position:absolute;left:20px;top:12px;" ></div>\n        <h3 class="rt-box-title" style="margin-top:0;margin-bottom:8px;font-size:15px;color:#444444;font-weight:700;text-align:left;" >\n            {{title}}\n        </h3>\n        <p class="rt-box-text" style="margin-top:0px;margin-bottom:12px;text-align:left;font-size:13px;line-height:18px;color:#444444;opacity:.8;min-height:30px;" >\n             {{subject}}\n        </p>\n        <div class="rt-box-buttons" style="text-align:right;" >\n            <button class="rt-box-btn-cancel" style="color:#444444;background-color:#ffffff;border-width:1px;border-style:solid;display:inline-block;padding-top:2px;padding-bottom:3px;padding-right:8px;padding-left:8px;font-size:14px;font-weight:400;line-height:1.42;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:3px;border-color:transparent;" >\n                Запретить\n            </button>\n            <button class="rt-box-btn-cancel-success" style="margin-left:5px;color:#ffffff;background-color:#7abcff;background-image:none;background-repeat:repeat;background-position:bottom;background-attachment:scroll;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#7abcff\', endColorstr=\'#4096ee\', GradientType=0);border-width:1px;border-style:solid;display:inline-block;padding-top:2px;padding-bottom:3px;padding-right:8px;padding-left:8px;font-size:14px;font-weight:400;line-height:1.42;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;outline-style:none;border-radius:3px;border-color:transparent;" >\n                Разрешить\n            </button>\n        </div>\n    </div>';
            a = a.replace(new RegExp("{{subject}}", "g"), i.subject).replace(new RegExp("{{title}}", "g"), i.title), d(function () {
                setTimeout(function () {
                    var e = document.createElement("div");
                    e.innerHTML = a, e.setAttribute("id", "smiPushLayout"), document.body.appendChild(e);
                    var t = document.querySelector(".rt-box-btn-cancel"),
                        n = document.querySelector(".rt-box-btn-cancel-success"), o = function () {
                            document.getElementById("smiPushLayout").remove()
                        };
                    n && n.addEventListener("click", function () {
                        r(i)
                    }), t && t.addEventListener("click", function () {
                        localStorage.setItem("smiPushNeedRequest", !1), o()
                    }), s.push(o)
                }, 1e3 * i.timeout)
            })
        }
    };
    a.smiPush = a.smiPush || {
        url: "https://suntegydev.ru/subscriber",
        sourcePublicKey: "c34633d9-f6e8-4729-9507-19a18638fdcd",
        browserDetect: function () {
            var e = "";
            screen.width && (width = screen.width ? screen.width : "", height = screen.height ? screen.height : "", e += width + " x " + height);
            var t, n, o, i = navigator.appVersion, r = navigator.userAgent, a = navigator.appName,
                A = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10);
            -1 != (n = r.indexOf("Opera")) && (a = "Opera", A = r.substring(n + 6), -1 != (n = r.indexOf("Version")) && (A = r.substring(n + 8))), -1 != (n = r.indexOf("OPR")) ? (a = "Opera", A = r.substring(n + 4)) : -1 != (n = r.indexOf("Edge")) ? (a = "Microsoft Edge", A = r.substring(n + 5)) : -1 != (n = r.indexOf("MSIE")) ? (a = "Microsoft Internet Explorer", A = r.substring(n + 5)) : -1 != (n = r.indexOf("Chrome")) ? (a = "Chrome", A = r.substring(n + 7)) : -1 != (n = r.indexOf("Safari")) ? (a = "Safari", A = r.substring(n + 7), -1 != (n = r.indexOf("Version")) && (A = r.substring(n + 8))) : -1 != (n = r.indexOf("Firefox")) ? (a = "Firefox", A = r.substring(n + 8)) : -1 != r.indexOf("Trident/") ? (a = "Microsoft Internet Explorer", A = r.substring(r.indexOf("rv:") + 3)) : (t = r.lastIndexOf(" ") + 1) < (n = r.lastIndexOf("/")) && (a = r.substring(t, n), A = r.substring(n + 1), a.toLowerCase() == a.toUpperCase() && (a = navigator.appName)), -1 != (o = A.indexOf(";")) && (A = A.substring(0, o)), -1 != (o = A.indexOf(" ")) && (A = A.substring(0, o)), -1 != (o = A.indexOf(")")) && (A = A.substring(0, o)), s = parseInt("" + A, 10), isNaN(s) && (A = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10));
            var d = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(i),
                c = !!navigator.cookieEnabled;
            void 0 !== navigator.cookieEnabled || c || (document.cookie = "testcookie", c = -1 != document.cookie.indexOf("testcookie"));
            var g = "-", p = [{s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/}, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/}, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {s: "Windows Vista", r: /Windows NT 6.0/}, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/}, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/}, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/}, {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {s: "Windows CE", r: /Windows CE/}, {s: "Windows 3.11", r: /Win16/}, {
                s: "Android",
                r: /Android/
            }, {s: "Open BSD", r: /OpenBSD/}, {s: "Sun OS", r: /SunOS/}, {
                s: "Linux",
                r: /(Linux|X11)/
            }, {s: "iOS", r: /(iPhone|iPad|iPod)/}, {s: "Mac OS X", r: /Mac OS X/}, {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {s: "QNX", r: /QNX/}, {s: "UNIX", r: /UNIX/}, {s: "BeOS", r: /BeOS/}, {
                s: "OS/2",
                r: /OS\/2/
            }, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
            for (var l in p) {
                var u = p[l];
                if (u.r.test(r)) {
                    g = u.s;
                    break
                }
            }
            var b = "-";
            switch (/Windows/.test(g) && (b = /Windows (.*)/.exec(g)[1], g = "Windows"), g) {
                case"Mac OS X":
                    b = /Mac OS X (10[\.\_\d]+)/.exec(r)[1];
                    break;
                case"Android":
                    b = /Android ([\.\_\d]+)/.exec(r)[1];
                    break;
                case"iOS":
                    b = (b = /OS (\d+)_(\d+)_?(\d+)?/.exec(i))[1] + "." + b[2] + "." + (0 | b[3])
            }
            var m = "no check";
            if ("undefined" != typeof swfobject) {
                var w = swfobject.getFlashPlayerVersion();
                m = 0 < w.major ? w.major + "." + w.minor + " r" + w.release : "-"
            }
            return {
                screen: e,
                browser: a,
                browserVersion: A,
                browserMajorVersion: s,
                mobile: d,
                os: g,
                languages: navigator.languages,
                osVersion: b,
                cookies: c,
                flashVersion: m
            }
        },
        urlBase64ToUint8Array: function (e) {
            var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
                n = a.atob(t), o = new Uint8Array(n.length), i = 0;
            for (i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
            return o
        },
        subscribe: function (e, t) {
            if (e) {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function (e) {
                    4 == this.readyState && t(this.responseText)
                }, n.open("POST", a.smiPush.url + "subscribe", !0), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify({
                    endpoint: e.endpoint,
                    data: e,
                    browserData: a.smiPush.browserDetect(),
                    sourcePublicKey: a.smiPush.sourcePublicKey
                }))
            }
        },
        getVapidKeys: function (e, n) {
            var t = new XMLHttpRequest;
            t.onreadystatechange = function (e) {
                if (4 == this.readyState && 200 == this.status) {
                    var t = a.smiPush.urlBase64ToUint8Array(this.responseText);
                    n(t, e)
                }
            }, t.open("GET", a.smiPush.url + "vapidPublicKey", !0), t.send()
        },
        registerServiceWorker: function (n) {
            navigator && navigator.serviceWorker && navigator.serviceWorker.register ? (navigator.serviceWorker.register("smi-sw.js"), navigator.serviceWorker.ready.then(function (t) {
                t.pushManager.getSubscription().then(function (e) {
                    e ? console.log("already registred") : n(t)
                })
            })) : n(!1)
        },
        ui: t,
        doClientSubscribe: function (e, t, n, o) {
            var i = function () {
                n.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: t
                }).then(function (t) {
                    n.pushManager.getSubscription().then(function (e) {
                        e ? o(e, t) : o(!1)
                    })
                })
            };
            if (e && e.type) {
                e.type = e.type.toLowerCase();
                var r = {
                    element: "element",
                    prompt: "prompt",
                    "backdrop-prompt": "backdrop-prompt",
                    modal: "modal",
                    panel: "panel",
                    safari: "safari",
                    fab: "fab"
                };
                e.type === r.element && a.smiPush.ui.element(e, function () {
                    i()
                }), e.type === r.safari && a.smiPush.ui.safary(e, function () {
                    i()
                }), e.type === r.prompt && a.smiPush.ui.prompt(e, function () {
                    i()
                }), e.type === r["backdrop-prompt"] && a.smiPush.ui.backdropbrompt(e, function () {
                    i()
                }), e.type === r.modal && a.smiPush.ui.modal(e, function () {
                    i()
                }), e.type === r.panel && a.smiPush.ui.panel(e, function () {
                    i()
                }), r[e.type] || i()
            } else i()
        },
        settings: JSON.parse('{"type":"prompt","timeout":0}'),
        start: function () {
            a.smiPush.registerServiceWorker(function (t) {
                t && e && "denied" !== Notification.permission && a.smiPush.getVapidKeys(t, function (e) {
                    a.smiPush.doClientSubscribe(a.smiPush.settings, e, t, function (e, t) {
                        a.smiPush.subscribe(e, function () {
                            for (var e in s) (0, s[e])()
                        })
                    })
                })
            })
        }
    },
        a.smiPush.start()
}(window);