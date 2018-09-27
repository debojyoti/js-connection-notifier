
class Connector {
	private config: any;
	private connectorElem: any;
	private notifierEvent: any;
	private currentTheme: any;
	private offlineDuration: number;	//	In seconds
	private timerObject: any;
	private timerElem: any;

	constructor(configParams = null) {
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
	public disableNotifierUI() {
		// Timeout to keep the animation stage propers
		this.hide();
		setTimeout(()=>{
			this.connectorElem.style.display = "none";
		},1000);
	}
	public enableNotifierUI() {
		// Timeouts to keep the animation stage propers
		this.hide();
		setTimeout(()=>{
			this.connectorElem.style.display = "block";
		},100);
		setTimeout(()=>{
			this.show();
		},1000);
	}
	public subscribe() {

	}
	public disableWindowActions() {
		this.setCss({
			"id": "window-wrapper"
		}, {
			"display": "inline"
		});
	}
	/*			Public methods (Start)		 */

	private configureDom() {
		//	Unset body padding and margin
		this.setCss({
				"name":"body"
			}, {
				"margin":"0%",
				"padding":"0%"
			}
		);	
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
		if (selectBy === "id") {
			for (var key in styles) {
				selectors.style[key] = styles[key];
			}
		} else {
			for (var selector of selectors) {
				for (var key in styles) {
					selector.style[key] = styles[key];
				}
			}
		}
	}

	private initPlugin() {
		document.getElementsByTagName("body")[0].innerHTML += this.currentTheme.getHtml();
	}

	private watchNetworkChanges() {
		if (window.navigator.onLine) {
			this.hide();
		} else {
			this.show();
		}
		window.addEventListener("offline", e => {
			this.show();
			this.addTimer();
		});
		window.addEventListener("online", e => {
			this.hide();
			this.clearTimer();
		})
	}

	private addTimer() {
		if (this.timerObject === undefined || this.timerObject === null) {
			this.timerObject = setInterval(() => {
				this.offlineDuration++;
				console.log(this.offlineDuration);
				this.timerElem.innerHTML = this.offlineDuration+" secs";
			}, 1000);
		}
	}

	private clearTimer() {
		if(this.timerObject !== undefined && this.timerObject !== null) {
			clearInterval(this.timerObject);
			this.timerObject = null;
			this.offlineDuration = 0;
		}
	}

	private show() {
		if (this.connectorElem.classList.contains('slide-up')) {
			this.connectorElem.classList.toggle('slide-up');
		}
		if (!this.connectorElem.classList.contains('slide-down')) {
			this.connectorElem.classList.toggle('slide-down');
		}
	}

	private hide() {
		if (this.connectorElem.classList.contains('slide-down')) {
			this.connectorElem.classList.toggle('slide-down');
		}
		if (!this.connectorElem.classList.contains('slide-up')) {
			this.connectorElem.classList.toggle('slide-up');
		}
	}

	private loadCss() {
		document.getElementsByTagName("head")[0].innerHTML += this.currentTheme.getCss();	
	}
}