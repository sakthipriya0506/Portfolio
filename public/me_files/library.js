
(function() { // No I18N





















var docHead = document.head || document.getElementsByTagName("head" )[0] || document.documentElement;

function zdLibraryOnLoadHandler() {
	var jsURLs = [ // No I18N
	    {
	        url:  "https:\/\/static.zohocdn.com\/onezoho\/zo\/assets\/zo\/js\/zd\-launcher.0d510c2189b2db1833807df31498f361.js", // No I18N
	        hash: "sha384-WmF5FM8kallV4DP/GtmZ0TrWMJ+EUjzc2d94b7YExw4+7EfyWKjgb/8fiWgwetlc" // No I18N
	    }
	];
	

	var cssURLs = [ // No I18N
		{
			 url : "https:\/\/static.zohocdn.com\/onezoho\/zo\/assets\/zo\/styles\/app\-zd\-launcher.37f6460eecbd01c366a2f0116ab18d4b.css", // No I18N
			 hash: "sha384-q/0Omg7OCuY+xAYV+D0qgoyEEl9UYTWl6UvyhcEIdtrbYaChwk4mYt2Slu3flOgI" // No I18N
		}
	];

	// Include CSS
	if(cssURLs) {
		for(var i = 0, len = cssURLs.length; i < len; i++) {
			var style = document.createElement("link");
			style.href = cssURLs[i].url; // No I18N
			var integrityHash = cssURLs[i].hash; // No I18N
			if (integrityHash && integrityHash.trim() !== "") { // No I18N
			    style.integrity = integrityHash; // No I18N
			    style.crossOrigin = "anonymous"; // No I18N
			}
			style.rel = "stylesheet";
			docHead.appendChild(style);
		}
	}

	// Synchronously Include Scripts
	if(jsURLs) { // No I18N
		var scriptIdx = 0; // No I18N
		(function _jsOnLoad() { // No I18N
			if (scriptIdx == jsURLs.length) { // Last script, all scripts were loaded. So, call the users handler. // NO I18N
				onZDLibraryScriptLoad(); // No I18N
			} else { // No I18N
				includeScript(jsURLs[scriptIdx++], _jsOnLoad); // No I18N
			}
		})();
	}
};


function includeScript(urlObj, callback) { // No I18N
	var script = document.createElement("script"); // No I18N
	script.src = urlObj.url; // No I18N
	var integrityHash = urlObj.hash; // No I18N
	if (integrityHash && integrityHash.trim() !== "") { // No I18N
		script.integrity = integrityHash; // No I18N
		script.crossOrigin = "anonymous"; // No I18N
	}
	if (callback) { // No I18N
		script.onload = script.onreadystatechange = function() {
			if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
				callback(); // No I18N
				script.onload = script.onreadystatechange = null; // To avoid calling repeatedly in IE // No I18N
			}
		};
	}
	docHead.appendChild(script); // No I18N
};

if(document.readyState == "complete") { // Call the handler if DOM already loaded.
	zdLibraryOnLoadHandler(); 
} else { 
	// Should not use `window.onload` as it might be overridden by service team
	if (window.addEventListener) {
	  window.addEventListener('load', zdLibraryOnLoadHandler, false); 
	} else if (window.attachEvent)  { 
	  window.attachEvent('onload', zdLibraryOnLoadHandler); 
	}
}



	function onZDLibraryScriptLoad() { // No I18N
		
		var serviceData = {}; // No I18N
		serviceData.app_name = "chat"; // No I18N
		serviceData.org_id = "60046476704"; // No I18N
		serviceData.zaaid = "60002085329"; // No I18N
		serviceData.context = ""; // No I18N
		window.ZDLibrary.serviceData = serviceData; // No I18N
		
		
		
		window.ZDLibrary.PageLinks = { // No I18N
			home : "https://one.zoho.in/zohoone/zohocorp/home", // No I18N
			adminPanel : "https://one.zoho.in/zohoone/zohocorp/adminhome" // No I18N
		}
		
		window.ZDLibrary.I18NData = {"oz.apps.not.found":"No applications found","oz.general.show":"Show","oz.apps.group.sales":"Sales","oz.general.new":"New","oz.general.add":"Add","oz.apps.group.marketing":"Marketing","oz.general.added":"Added","oz.account.zohoone.display":"Zoho One","oz.general.loading":"Loading...","oz.zdlibrary.added.applications.count":"{0} more application(s) added","oz.zdlibrary.link.adminpanel":"Admin Panel","oz.spaces.whats.new.popup.cta.primary":"Go to <span style=\"color: #000 !important;>{0}<\/span>","oz.general.open":"Open","oz.apps.search":"Search applications","oz.apps.group.email.collaboration":"Email and Collaboration","oz.zdlibrary.my.apps":"My Apps","oz.zdlibrary.recommended":"Recommended","oz.spaces.whats.new.popup.desc":"<ul><li><b>Spaces & Dashboard 2.0<\/b> \u2013 Work in focused zones with personalized dashboards.<\/li><li><b>ZApp & Zia Search<\/b> \u2013 One bar, instant actions, results from 20+ apps.<\/li><li><b>Admin & Security Upgrades<\/b> \u2013 Unified controls, smart groups, and anomaly detection.<\/li><\/ul>","oz.general.try.now":"Try now","oz.apps.group.business.process":"Business Process","oz.apps.group.finance":"Finance","oz.general.app.home":"Home","oz.zdlibrary.other.apps":"Other Apps","oz.spaces.whats.new.popup.cta.sec":"Dismiss","oz.apps.group.helpdesk":"Help Desk and Customer Support","oz.apps.group.hrms":"Human Resources","oz.spaces.whats.new.popup.title":"Refreshed & Smarter {0} is here!"}

		
		
		
		function enableTracking() { // No I18N
			window.$zoho.salesiq.tracking.on(); // No I18N
			window.$zoho.salesiq.visitor.info(window.ZDLibrary.infoPropertiesJson); // No I18N
		} 
		
		// Service teams must define `onZDLibraryReady` function to initialize their service.	
		if(window.onZDLibraryReady) { // No I18N
			window.onZDLibraryReady(); // No I18N
	 	}
	}
})();