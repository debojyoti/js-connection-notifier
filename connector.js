var Connector = /** @class */ (function () {
    function Connector(config) {
        if (config === void 0) { config = null; }
        if (config !== null) {
            this.config = config;
        }
        //	DOM primary setup
        this.configureDom();
    }
    Connector.prototype.configureDom = function () {
        //	Set body padding, margin to 0
        this.setCss({
            "name": "body"
        }, {
            "margin": "0%",
            "padding": "0%"
        });
        //	Create the banner with default structure
        // this.initPlugin();
        // this.loadDeafultCss();
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
        for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
            var selector = selectors_1[_i];
            console.log(selector);
            for (var key in styles) {
                selector.style[key] = styles[key];
            }
        }
    };
    Connector.prototype.initPlugin = function () {
        document.getElementsByTagName("body")[0].innerHTML += Connector.getDefaultContent();
    };
    Connector.getDefaultContent = function () {
        return "\n\t\t\t<div id=\"connector-wrapper\" style=\"position: fixed; bottom: 0vh; width: 100vw; background-color: #272440; min-height: 10%; display: flex;align-items: center;box-shadow: 6px 6px 8px rgba(0,0,0,0.3); margin: auto;\">\n\t\t\t</div>\n\t\t";
    };
    Connector.prototype.loadDeafultCss = function () {
        document.getElementsByTagName("head")[0].innerHTML += Connector.getDefaultCss();
    };
    Connector.getDefaultCss = function () {
        return "\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t\t\t<style type=\"text/css\">\n\t\t\t\t#loading {\n\t\t\t\t  display: inline-block;\n\t\t\t\t  width: 20px;\n\t\t\t\t  height: 20px;\n\t\t\t\t  border: 3px solid rgba(255,255,255,.3);\n\t\t\t\t  border-radius: 50%;\n\t\t\t\t  border-top-color: #fff;\n\t\t\t\t  animation: spin 1s ease-in-out infinite;\n\t\t\t\t  -webkit-animation: spin 1s ease-in-out infinite;\n\t\t\t\t}\n\t\t\t\t@keyframes spin {\n\t\t\t\t  to { -webkit-transform: rotate(360deg); }\n\t\t\t\t}\n\t\t\t\t@-webkit-keyframes spin {\n\t\t\t\t  to { -webkit-transform: rotate(360deg); }\n\t\t\t\t}\n\t\t\t\t#retry-btn {\n\t\t\t\t\theight:4vh;\n\t\t\t\t\twidth:80%;\n\t\t\t\t\tbackground-color: #403B66;\n\t\t\t\t\tcolor:white;\n\t\t\t\t\tborder:none;\n\t\t\t\t\ttransition: 0.3s;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tbox-shadow: 5px 5px 10px rgba(0,0,0,0.3);\n\t\t\t\t}\n\t\t\t\t#retry-btn:hover {\n\t\t\t\t\tbox-shadow: 1px 1px 3px rgba(0,0,0,0.3);\n\t\t\t\t}\n\t\t\t\t#connector-parent h5 {\n\t\t\t\t\tmargin: 0px!important;\n\t\t\t\t\t-webkit-margin-before: 0em!important;\n    \t\t\t\t-webkit-margin-after: 0em!important;\n\t\t\t\t}\n\t\t\t\t.hide {\n\t\t\t\t\tdisplay:none!important;\n\t\t\t\t}\n\t\t\t\t#connector-wrapper {\n\t\t\t\t\tborder-left: 4px solid #403B66;\n\t\t\t\t}\n\t\t\t</style>\n\t\t";
    };
    return Connector;
}());
