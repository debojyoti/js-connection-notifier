class Theme {

    private currentTheme: string;

    public constructor(themeParams = null) {
        if (themeParams !== null) {
            this.currentTheme = themeParams; 
        } else {
            this.currentTheme = "default";
        }
    }

    public getHtml() {
        switch (this.currentTheme) {
            case 'dark': 
                return ``;

            
            case 'light':

                break;
            
            default:
                return `
                <div id="window-wrapper"></div>
                <div id="connector-parent">
                    <div id="connector-wrapper">
                        <div id="indicator-icon">
                            <div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAl9JREFUeNrsWYtRwzAMbbkOEDboBoQJCBuUDcIG3YBsYDYwG2QEwwRmg3SDdANjH8pdyNmS8jFNwe/Ol7SNbUl+erLTzSYhISEhYSEYY/K/4ERpvnG8ZicK8xOS6rONSInMO+F2+87oqzz9H7G+u5kGu8kK29zkD3DNiD7drTPqZNuHu7dGnmA86RnjmQrAJOMdb21TZlk00MxYWk3hrTS/C8W1b8dxwF5egEJcnG379HyfAf242Dv1srR6m0shyaSEBLnMmWM7Aw+2VQE6+eYopmp4iwzsfhNzC5brT8wzhABBYK1CTUSmXFA0tGeOI8GEBg0gREfHdqA3n8IUCuiHKWM5dokrznLCxCU8r3rNQIC6zyKw6iow7gGx7Tg0oJ2SYNBXMBOWSuZsIuWr/oNDTmpi4CJCQdQUfSF/cDt7zkhiBerIRVBjTOjtisPBxiLCkORucAHPFtD2BM+DUovYcmDJ8MjC2MCS75ExfGrYFVFFBCaLqfVsSQ4EQY3IuXb2SRGWEFeKccmJRhmhr1jyyNlFp5gRBDK6kFM6yjYenNFYHvSMl0RiK1gpTt1Y9izCdHRKURSLJPNCYjC3MLLpGu2dE7M2NOAs9eysTelNZH/dKfHenvDcG5Bbd2/bK5wgh7hb66q0IXHwFFm5hjwpA47kzL5iLcnehPgOK1aBwZdXp5F7KBE4Ac7fakRywreHquG3KqRga3MC3UMRtSVKzbiZ4MTBXoTnhdyTldjz1fzxEpDbnEG7Lk9WsSVRnIpMqdla5FYzj6P9t/byovspQrHqTUJCQkLCf8eXAAMAs31cAB7jS2kAAAAASUVORK5CYII=" id="network-logo">
                                <!-- <div id="loading"></div> -->
                            </div>
                        </div>
                        <div id="notification-wrapper">
                            <h5>No internet connection!<br><span>Retrying in 39 seconds</span></h5>
                        </div>
                        <div id="button-wrapper">
                            <button type="button" id="retry-btn">
                                <!-- Retry Now  -->
                                <div id="loading"></div>
                            </button>
                        </div>
                    </div>
                </div>
                `;
        }
    }

    public getCss() {
        switch (this.currentTheme) {
            case 'dark': 

                break;
            
            case 'light':

                break;
            
            default:
                return `
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
				<style type="text/css">
					#loading {
						margin-top: 2px;
					  display: inline-block;
					  width: 16px;
					  height: 16px;
					  border: 2px solid rgba(255,255,255,.3);
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
					.slide-up, .slide-down {
						overflow:hidden;
					  }
					  .slide-up > div, .slide-down > div {
						transform: translateY(180%);
						transition: .4s ease-in-out;
					  }
					  .slide-down > div {            
						transform: translateY(0);
					  } 
					#retry-btn {
						height:5vh;
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
					#window-wrapper {
						z-index: 9999999999999999998;
						position: fixed; 
						bottom: 0px; 
						left: 0px;
						width: 100vw;
						height: 100vh;
						background-color: #1f1f1f85;
						display: none;
					}
					#connector-parent {
						z-index: 9999999999999999999;
						position: fixed; 
						bottom: 2vh; 
						left: 0px;
						width: 100vw;
						display: flex;
						align-items: center; 
						margin: auto;
					}
					#connector-wrapper {
						min-height: 8vh;
						flex: 5;
						margin: 0px 24%;
						display: flex; 
						background-color: #F11362;
						box-shadow: 0px 10px 25px rgba(0,0,0,0.3);
						padding: 0px 8%;
						align-items: center
					}
					#indicator-icon {
						flex: 1;
						min-height: 5vh;
					}
					#indicator-icon > div {
						flex: 1;
						height: 2vh;
						padding:0% 15%;
					}
					#notification-wrapper {
						flex: 5; 
						min-height: 3vh
					} 
					#notification-wrapper h5 {
						color: white;
						font-family: sans-serif;
					}
					#notification-wrapper h5 span{
						font-size: 77%
					}
					#button-wrapper {
						flex: 4; 
						min-height: 3vh
					}	
					#network-logo {
						width: 30px;
						height: 30px;
					}
					/*	M-devices	*/
					@media (max-width:1024px) {
						#connector-wrapper {
							margin: 0% 10%;
						}
					}

					/*	s-devices	*/
					@media (max-width:767px) {
						#connector-wrapper {
							margin: 0% 0%;
							padding: 0% 2%;
						}
						#notification-wrapper {
							flex: 5; 
							min-height: 3vh;
							padding-left: 10px;
						} 
						#retry-btn {
							height:6vh;
						}
					}
					/*	s-device landscape 	*/
					@media (max-height:412px) {
						#connector-wrapper {
								min-height: 16vh;
						}
						#retry-btn {
							height:10vh;
						}
						#indicator-icon {
							min-height: 8vh;
						}
					}

					.disconnected-bg {
						background-color: #F11362;
					}

					.connected-bg {
						background-color: #94f113;
					}

					.connecting-bg {
						background-color: #FDB344;
					}
				</style>
                `;

        }
    }
}