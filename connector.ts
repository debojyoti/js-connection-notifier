
class Connector {
	private config;
	constructor(config = null) {
		if (config !== null) {
			this.config = config;
		}
		//	DOM primary setup
		this.configureDom();
	}

	private configureDom() {
		//	Set body padding, margin to 0
		this.setCss(
			{
				"name":"body"
			},
			{
				"margin":"0%",
				"padding":"0%"
			}
		);	
		//	Create the banner with default structure
		// this.initPlugin();
		// this.loadDeafultCss();
	}

	private setCss(elem, styles) {
		let selectBy = Object.keys(elem)[0];
		let identifier = elem[selectBy];
		let selectors;
		switch(selectBy) {
			case "name" : 
				selectors = document.getElementsByTagName(identifier);
				break;
			case "id" : 
				selectors = document.getElementById(identifier);
				break;
			case "class" : 
				selectors = document.getElementsByClassName(identifier);
				break;
		}
		for (var selector of selectors) {
        	console.log(selector);
        	for (var key in styles) {
        	    selector.style[key] = styles[key];
        	}
        }
	}

	private initPlugin() {
		document.getElementsByTagName("body")[0].innerHTML += Connector.getDefaultContent();
	}

	private static getDefaultContent() {
		return `
			<div id="connector-wrapper" style="position: fixed; bottom: 0vh; width: 100vw; background-color: #272440; min-height: 10%; display: flex;align-items: center;box-shadow: 6px 6px 8px rgba(0,0,0,0.3); margin: auto;">
			</div>
		`;
	}

	private loadDeafultCss() {
		document.getElementsByTagName("head")[0].innerHTML += Connector.getDefaultCss();	
	}

	private static getDefaultCss() {
		return `
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<style type="text/css">
				#loading {
				  display: inline-block;
				  width: 20px;
				  height: 20px;
				  border: 3px solid rgba(255,255,255,.3);
				  border-radius: 50%;
				  border-top-color: #fff;
				  animation: spin 1s ease-in-out infinite;
				  -webkit-animation: spin 1s ease-in-out infinite;
				}
				@keyframes spin {
				  to { -webkit-transform: rotate(360deg); }
				}
				@-webkit-keyframes spin {
				  to { -webkit-transform: rotate(360deg); }
				}
				#retry-btn {
					height:4vh;
					width:80%;
					background-color: #403B66;
					color:white;
					border:none;
					transition: 0.3s;
					cursor: pointer;
					box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
				}
				#retry-btn:hover {
					box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
				}
				#connector-parent h5 {
					margin: 0px!important;
					-webkit-margin-before: 0em!important;
    				-webkit-margin-after: 0em!important;
				}
				.hide {
					display:none!important;
				}
				#connector-wrapper {
					border-left: 4px solid #403B66;
				}
			</style>
		`;
	}
}