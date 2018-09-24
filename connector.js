var Theme = /** @class */ (function () {
    function Theme(themeParams) {
        if (themeParams === void 0) { themeParams = null; }
        if (themeParams !== null) {
            this.currentTheme = themeParams;
        }
        else {
            this.currentTheme = "default";
        }
    }
    Theme.prototype.getHtml = function () {
        switch (this.currentTheme) {
            case 'dark':
                return "";
            case 'light':
                break;
            default:
                return "\n                <div id=\"window-wrapper\"></div>\n                <div id=\"connector-parent\">\n                    <div id=\"connector-wrapper\">\n                        <div id=\"indicator-icon\">\n                            <div>\n                                <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAl9JREFUeNrsWYtRwzAMbbkOEDboBoQJCBuUDcIG3YBsYDYwG2QEwwRmg3SDdANjH8pdyNmS8jFNwe/Ol7SNbUl+erLTzSYhISEhYSEYY/K/4ERpvnG8ZicK8xOS6rONSInMO+F2+87oqzz9H7G+u5kGu8kK29zkD3DNiD7drTPqZNuHu7dGnmA86RnjmQrAJOMdb21TZlk00MxYWk3hrTS/C8W1b8dxwF5egEJcnG379HyfAf242Dv1srR6m0shyaSEBLnMmWM7Aw+2VQE6+eYopmp4iwzsfhNzC5brT8wzhABBYK1CTUSmXFA0tGeOI8GEBg0gREfHdqA3n8IUCuiHKWM5dokrznLCxCU8r3rNQIC6zyKw6iow7gGx7Tg0oJ2SYNBXMBOWSuZsIuWr/oNDTmpi4CJCQdQUfSF/cDt7zkhiBerIRVBjTOjtisPBxiLCkORucAHPFtD2BM+DUovYcmDJ8MjC2MCS75ExfGrYFVFFBCaLqfVsSQ4EQY3IuXb2SRGWEFeKccmJRhmhr1jyyNlFp5gRBDK6kFM6yjYenNFYHvSMl0RiK1gpTt1Y9izCdHRKURSLJPNCYjC3MLLpGu2dE7M2NOAs9eysTelNZH/dKfHenvDcG5Bbd2/bK5wgh7hb66q0IXHwFFm5hjwpA47kzL5iLcnehPgOK1aBwZdXp5F7KBE4Ac7fakRywreHquG3KqRga3MC3UMRtSVKzbiZ4MTBXoTnhdyTldjz1fzxEpDbnEG7Lk9WsSVRnIpMqdla5FYzj6P9t/byovspQrHqTUJCQkLCf8eXAAMAs31cAB7jS2kAAAAASUVORK5CYII=\" id=\"network-logo\">\n                                <!-- <div id=\"loading\"></div> -->\n                            </div>\n                        </div>\n                        <div id=\"notification-wrapper\">\n                            <h5>No internet connection!<br><span>Since <span id=\"offDuration\">3 mins</span></span></h5>\n                        </div>\n                        <div id=\"button-wrapper\">\n                            <div  id=\"retrying-indicator-wrapper\">\n                                <!-- Retry Now  -->\n                                <div id=\"loading\"></div>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                ";
        }
    };
    Theme.prototype.getCss = function () {
        switch (this.currentTheme) {
            case 'dark':
                break;
            case 'light':
                break;
            default:
                return "\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t\t\t\t<style type=\"text/css\">\n\t\t\t\t\t#loading {\n\t\t\t\t\t\tmargin-top: 2px;\n\t\t\t\t\t  display: inline-block;\n\t\t\t\t\t  width: 16px;\n\t\t\t\t\t  height: 16px;\n\t\t\t\t\t  border: 2px solid rgba(255,255,255,.3);\n\t\t\t\t\t  border-radius: 50%;\n\t\t\t\t\t  border-top-color: #fff;\n\t\t\t\t\t  animation: spin 1s ease-in-out infinite;\n\t\t\t\t\t  -webkit-animation: spin 1s ease-in-out infinite;\n\t\t\t\t\t}\n\t\t\t\t\t@keyframes spin {\n\t\t\t\t\t  to { -webkit-transform: rotate(360deg); }\n\t\t\t\t\t}\n\t\t\t\t\t@-webkit-keyframes spin {\n\t\t\t\t\t  to { -webkit-transform: rotate(360deg); }\n\t\t\t\t\t}\n\t\t\t\t\t.slide-up, .slide-down {\n\t\t\t\t\t\toverflow:hidden;\n\t\t\t\t\t  }\n\t\t\t\t\t  .slide-up > div, .slide-down > div {\n\t\t\t\t\t\ttransform: translateY(180%);\n\t\t\t\t\t\ttransition: .4s ease-in-out;\n\t\t\t\t\t  }\n\t\t\t\t\t  .slide-down > div {            \n\t\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\t  } \n\t\t\t\t\t#retrying-indicator-wrapper {\n\t\t\t\t\t\twidth:80%;\n\t\t\t\t\t\tbackground-color: #ff005d;\n\t\t\t\t\t\tcolor:white;\n\t\t\t\t\t\tborder:none;\n\t\t\t\t\t\ttransition: 0.3s;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\theight:25px;\n\t\t\t\t\t}\n\t\t\t\t\t#connector-parent h5 {\n\t\t\t\t\t\tmargin: 0px!important;\n\t\t\t\t\t\t-webkit-margin-before: 0em!important;\n\t\t\t\t\t\t-webkit-margin-after: 0em!important;\n\t\t\t\t\t}\n\t\t\t\t\t.hide {\n\t\t\t\t\t\tdisplay:none!important;\n\t\t\t\t\t}\n\t\t\t\t\t#connector-wrapper {\n\t\t\t\t\t\tborder-left: 4px solid #403B66;\n\t\t\t\t\t}\n\t\t\t\t\t#window-wrapper {\n\t\t\t\t\t\tz-index: 9999999999999999998;\n\t\t\t\t\t\tposition: fixed; \n\t\t\t\t\t\tbottom: 0px; \n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: 100vw;\n\t\t\t\t\t\theight: 100vh;\n\t\t\t\t\t\tbackground-color: #1f1f1f85;\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t\t#connector-parent {\n\t\t\t\t\t\tz-index: 9999999999999999999;\n\t\t\t\t\t\tposition: fixed; \n\t\t\t\t\t\tbottom: 2vh; \n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: 100vw;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\talign-items: center; \n\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t}\n\t\t\t\t\t#connector-wrapper {\n\t\t\t\t\t\tmin-height: 8vh;\n\t\t\t\t\t\tflex: 5;\n\t\t\t\t\t\tmargin: 0px 24%;\n\t\t\t\t\t\tdisplay: flex; \n\t\t\t\t\t\tbackground-color: #F11362;\n\t\t\t\t\t\tbox-shadow: 0px 10px 25px rgba(0,0,0,0.3);\n\t\t\t\t\t\tpadding: 0px 8%;\n\t\t\t\t\t\talign-items: center\n\t\t\t\t\t}\n\t\t\t\t\t#indicator-icon {\n\t\t\t\t\t\tflex: 1;\n\t\t\t\t\t\tmin-height: 35px;\n\t\t\t\t\t}\n\t\t\t\t\t#indicator-icon > div {\n\t\t\t\t\t\tflex: 1;\n\t\t\t\t\t\theight: 2vh;\n\t\t\t\t\t\tpadding:0% 15%;\n\t\t\t\t\t}\n\t\t\t\t\t#notification-wrapper {\n\t\t\t\t\t\tflex: 5; \n\t\t\t\t\t\tmin-height: 3vh\n\t\t\t\t\t} \n\t\t\t\t\t#notification-wrapper h5 {\n\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\tfont-family: sans-serif;\n\t\t\t\t\t}\n\t\t\t\t\t#notification-wrapper h5 > span{\n\t\t\t\t\t\tfont-size: 77%\n\t\t\t\t\t}\n\t\t\t\t\t#button-wrapper {\n\t\t\t\t\t\tflex: 4; \n\t\t\t\t\t\tmin-height: 3vh\n\t\t\t\t\t}\t\n\t\t\t\t\t#network-logo {\n\t\t\t\t\t\twidth: 30px;\n\t\t\t\t\t\theight: 30px;\n\t\t\t\t\t}\n\t\t\t\t\t/*\tM-devices\t*/\n\t\t\t\t\t@media (max-width:1024px) {\n\t\t\t\t\t\t#connector-wrapper {\n\t\t\t\t\t\t\tmargin: 0% 10%;\n\t\t\t\t\t\t\tpadding: 0% 10%;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t/*\ts-devices\t*/\n\t\t\t\t\t@media (max-width:767px) {\n\t\t\t\t\t\t#connector-wrapper {\n\t\t\t\t\t\t\tmargin: 0% 0%;\n\t\t\t\t\t\t\tpadding: 0% 4%;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#notification-wrapper {\n\t\t\t\t\t\t\tflex: 5; \n\t\t\t\t\t\t\tmin-height: 3vh;\n\t\t\t\t\t\t\tpadding-left: 10px;\n\t\t\t\t\t\t} \n\t\t\t\t\t\t#retrying-indicator-wrapper {\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\theight:25px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t/*\ts-device landscape \t*/\n\t\t\t\t\t@media (max-height:412px) {\n\t\t\t\t\t\t#connector-wrapper {\n\t\t\t\t\t\t\t\tmin-height: 16vh;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#retrying-indicator-wrapper {\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\theight:25px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#indicator-icon {\n\t\t\t\t\t\t\tmin-height: 8vh;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t.disconnected-bg {\n\t\t\t\t\t\tbackground-color: #F11362;\n\t\t\t\t\t}\n\n\t\t\t\t\t.connected-bg {\n\t\t\t\t\t\tbackground-color: #94f113;\n\t\t\t\t\t}\n\n\t\t\t\t\t.connecting-bg {\n\t\t\t\t\t\tbackground-color: #FDB344;\n\t\t\t\t\t}\n\t\t\t\t</style>\n                ";
        }
    };
    return Theme;
}());
var Connector = /** @class */ (function () {
    function Connector(configParams) {
        if (configParams === void 0) { configParams = null; }
        this.offlineDuration = 0;
        if (configParams !== null) {
            // Store external config params
            this.config = configParams;
        }
        //	DOM primary setup
        this.configureDom();
        this.connectorElem = document.getElementById("connector-parent");
        //	Enable network watch
        this.watchNetworkChanges();
    }
    /*			Public methods (Starts)		 */
    Connector.prototype.disableNotifierUI = function () {
        var _this = this;
        // Timeout to keep the animation stage propers
        this.hide();
        setTimeout(function () {
            _this.connectorElem.style.display = "none";
        }, 1000);
    };
    Connector.prototype.enableNotifierUI = function () {
        var _this = this;
        // Timeouts to keep the animation stage propers
        this.hide();
        setTimeout(function () {
            _this.connectorElem.style.display = "block";
        }, 100);
        setTimeout(function () {
            _this.show();
        }, 1000);
    };
    Connector.prototype.subscribe = function () {
    };
    Connector.prototype.disableWindowActions = function () {
        this.setCss({
            "id": "window-wrapper"
        }, {
            "display": "inline"
        });
    };
    /*			Public methods (Start)		 */
    Connector.prototype.configureDom = function () {
        //	Unset body padding and margin
        this.setCss({
            "name": "body"
        }, {
            "margin": "0%",
            "padding": "0%"
        });
        // init the theme object
        this.currentTheme = new Theme();
        //	Check for external config params
        if (this.config !== undefined) {
            // this.currentTheme.setTheme();
        }
        //	Create the banner 
        this.initPlugin();
        this.loadCss();
        // Get timer elem
        this.timerElem = document.getElementById("offDuration");
    };
    Connector.prototype.setCss = function (elem, styles) {
        var selectBy = Object.keys(elem)[0];
        var identifier = elem[selectBy];
        var selectors;
        switch (selectBy) {
            case "name":
                selectors = document.getElementsByTagName(identifier);
                break;
            case "id":
                selectors = document.getElementById(identifier);
                break;
            case "class":
                selectors = document.getElementsByClassName(identifier);
                break;
        }
        if (selectBy === "id") {
            for (var key in styles) {
                selectors.style[key] = styles[key];
            }
        }
        else {
            for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
                var selector = selectors_1[_i];
                for (var key in styles) {
                    selector.style[key] = styles[key];
                }
            }
        }
    };
    Connector.prototype.initPlugin = function () {
        document.getElementsByTagName("body")[0].innerHTML += this.currentTheme.getHtml();
    };
    Connector.prototype.watchNetworkChanges = function () {
        var _this = this;
        if (window.navigator.onLine) {
            this.hide();
        }
        else {
            this.show();
        }
        window.addEventListener("offline", function (e) {
            _this.show();
            _this.addTimer();
        });
        window.addEventListener("online", function (e) {
            _this.hide();
            _this.clearTimer();
        });
    };
    Connector.prototype.addTimer = function () {
        var _this = this;
        if (this.timerObject === undefined || this.timerObject === null) {
            this.timerObject = setInterval(function () {
                _this.offlineDuration++;
                console.log(_this.offlineDuration);
                _this.timerElem.innerHTML = _this.offlineDuration + " secs";
            }, 1000);
        }
    };
    Connector.prototype.clearTimer = function () {
        if (this.timerObject !== undefined && this.timerObject !== null) {
            clearInterval(this.timerObject);
            this.timerObject = null;
            this.offlineDuration = 0;
        }
    };
    Connector.prototype.show = function () {
        if (this.connectorElem.classList.contains('slide-up')) {
            this.connectorElem.classList.toggle('slide-up');
        }
        if (!this.connectorElem.classList.contains('slide-down')) {
            this.connectorElem.classList.toggle('slide-down');
        }
    };
    Connector.prototype.hide = function () {
        if (this.connectorElem.classList.contains('slide-down')) {
            this.connectorElem.classList.toggle('slide-down');
        }
        if (!this.connectorElem.classList.contains('slide-up')) {
            this.connectorElem.classList.toggle('slide-up');
        }
    };
    Connector.prototype.loadCss = function () {
        document.getElementsByTagName("head")[0].innerHTML += this.currentTheme.getCss();
    };
    return Connector;
}());
