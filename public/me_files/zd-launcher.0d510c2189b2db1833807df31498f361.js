(function(){var e={Launcher:{},Util:{},Controller:{},Data:{},serviceClientInfo:{},Constants:{}}
window.ZDLibrary={},window.ZDLibrary.Launcher=e.Launcher,window.ZDLibrary.PageLinks=e.PageLinks,window.ZDLibrary.I18NData=e.I18NData,window.ZDLibrary.__debug=e,e.Constants={LAUNCHER:"LAUNCHER",HTTPMethod:{POST:"POST",GET:"GET",PUT:"PUT",DELETE:"DELETE"},Action:{LAUNCHER_INFO:"LAUNCHER_INFO",MICS_TRACK:"MICS_TRACK",SPACES_WHATS_NEW_INFO:"SPACES_WHATS_NEW_INFO",UPDATE_SPACES_WHATS_NEW:"UPDATE_SPACES_WHATS_NEW"},Time:{FIVE_MINS:3e5},AppCategory:{0:"oz.zdlibrary.recommended",1:"oz.apps.group.email.collaboration",2:"oz.apps.group.sales",3:"oz.apps.group.finance",4:"oz.apps.group.helpdesk",5:"oz.apps.group.hrms",6:"oz.apps.group.business.process",9:"oz.apps.group.marketing"},EscapeChar:{possible:/[&<>"'`]/,badChars:/[&<>"'`]/g,escapeBadChars:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"}},TrackAction:{OPEN_LAUNCHER:"Launcher: Open",CLOSE_LAUNCHER:"Launcher: Close",ACCESS_APP:"Launcher: Access App - ",TRY_NEW_APP:"Launcher: Tried New App - ",OPEN_ADMIN_PANEL:"Launcher: CLK - Admin Panel",OPEN_HOME:"Launcher: CLK - Home"}},e.Launcher.init=function(a){e.serviceClientInfo=a,e.Controller.initLauncher()},e.Launcher.open=function(){e.Controller.openLauncher()},e.Launcher.close=function(){e.Controller.closeLauncher()},e.Launcher.isOpen=function(){return e.Util.isLauncherOpen()},e.Launcher.render=function(a){e.Controller.renderLauncher(a)},e.Data.otherAppsCategoryOrder=[0,1,2,9,3,4,5,6],e.Launcher.setIconTheme=function(a){e.Controller.setIconTheme(a)},e.Controller.initLauncher=function(){var a=e.serviceClientInfo,t=a.icon.element,n=a.icon.theme,o=a.icon.color,r=a.icon.hover_color
if(t){if(e.Util.isDOMObject(t)||(t=document.querySelector(t)),t){if(a.icon.is_product_icon_available)return void(t.onclick=e.Controller.openLauncher)
a.icon.is_hamburger_available&&(t.innerHTML="")
var l=document.createElement("div")
l.className="zod-launcher-icon-wrapper",o||null!=n||e.Util.addClass(l,"zod-launcher-icon-background"),l.onclick=e.Controller.openLauncher,o&&r&&(l.onmouseover=function(){e.Util.setBackgroundColorForIcon(r)},l.onmouseout=function(){e.Util.setBackgroundColorForIcon(o)})
var p=document.createElement("div")
p.className="zod-launcher-icon zod-launcher-icon-dark","dark"===n&&(p.className=p.className.replace(/\bdark\b/g,"light"))
for(var s=document.createElement("span"),i=0;i<9;i++){var c=s.cloneNode(!0)
o&&c.style.setProperty("background-color",o,"important"),1===i?e.Util.addClass(c,"two"):4===i?e.Util.addClass(c,"five"):7===i&&e.Util.addClass(c,"eight"),p.appendChild(c)}l.appendChild(p),t.appendChild(l)}e.Util.addEvent(window,"resize",e.Controller.handleResize)}},e.Controller.handleResize=function(){if(e.Util.isLauncherOpen()){var a=document.querySelector("#zdlibrary"),t=document.querySelector(".zod-launcher-wrapper"),n=t.scrollTop,o=document.querySelector(".zod-launcher-myapps-wrapper"),r=o.querySelector(".zod-launcher-myapps-tab._selected").getAttribute("data-tab-id")
o.innerHTML="",e.Controller.renderMyAppsContent(o)
var l=o.querySelector('[data-tab-id="'+r+'"]')
l?e.Controller.changeMyAppsTab(l):((l=document.createElement("div")).setAttribute("data-id",r),e.Controller.changeMyAppsTabFromDropDown(l)),e.Controller.searchApps(document.querySelector(".zod-launcher-apps-search-box")),e.Controller.afterContentRender(),document.querySelector(".zod-launcher-close-icon").style.left=t.offsetWidth+(a.offsetWidth-t.offsetWidth)/2+15+"px",t.scrollTop=n}},e.Controller.openLauncher=function(){if(!e.Util.isLauncherOpen()){e.Controller.callMicsTrackAPI(e.Constants.TrackAction.OPEN_LAUNCHER,null),e.Data.launcherLoadedNow=!0
var a=document.body,t=document.querySelector("#zdlibrary")
if(t){if(!e.Util.isLauncherExpired())return t.className=t.className.replace(/\bfadeOut\b/g,"fadeIn"),e.Util.makeDisplayBlock(t),setTimeout(e.Controller.showMainContainer,100),e.Controller.handleResize(),void(t.scrollTop=0)
t.innerHTML="",t.className=t.className.replace(/\bfadeOut\b/g,"fadeIn"),e.Util.makeDisplayBlock(t),setTimeout(e.Controller.showMainContainer,100),t.scrollTop=0,e.Controller.buildMenuContainerAndLoadingState(t)}else t=e.Controller.createMainContainer(),e.Controller.buildMenuContainerAndLoadingState(t),a.appendChild(t),setTimeout(e.Controller.showMainContainer,100),document.querySelector(".zod-launcher-apps-search-box").focus()
var n=document.querySelector(".zod-launcher-close-icon"),o=document.querySelector("#zdlibrary-wrapper")
n.style.left=o.offsetWidth+(t.offsetWidth-o.offsetWidth)/2+15+"px",e.Controller.callLauncherInfoAPI()}},e.Controller.showMainContainer=function(){var a=document.querySelector(".zod-launcher-main-container")
e.Util.addClass(a,"_visible")},e.Controller.renderLauncher=function(a){a.className="zod-launcher-cover",a.id="zdlibrary",e.Controller.buildMenuContainerAndLoadingState(a),e.Controller.callLauncherInfoAPI()},e.Controller.createMainContainer=function(){var a=e.serviceClientInfo.productWrapper
e.Util.isDOMObject(a)||(a=document.querySelector(a))
var t=a?a.offsetWidth:document.body.offsetWidth,n=document.createElement("div")
return n.className="zod-launcher-main-container zod-launcher-fadeIn",n.id="zdlibrary",n.style.maxWidth=t+"px",n.onclick=e.Controller.handleOutsideClick,n},e.Controller.buildMenuContainerAndLoadingState=function(a){var t=document.createElement("div")
t.className="zod-launcher-wrapper",t.id="zdlibrary-wrapper",t.onscroll=e.Controller.handleScroll
var n=document.createElement("div")
n.className="zod-launcher-menu-container"
var o=document.createElement("div")
o.className="zod-launcher-menu-container-left"
var r=document.createElement("input")
r.className="zod-launcher-apps-search-box",r.placeholder=e.Util.getI18NMessage("oz.apps.search"),r.setAttribute("type","text"),r.onkeyup=function(){e.Controller.searchApps(this)},o.appendChild(r)
var l=document.createElement("div")
l.className="zod-launcher-close-search-icon",l.onclick=e.Controller.clearSearch,o.appendChild(l)
var p=document.createElement("span")
p.className="zod-icons _icon_search_outline zod-launcher-apps-search-icon _ico-14",o.appendChild(p),n.appendChild(o),t.appendChild(n)
var s=document.createElement("span")
s.className="zod-launcher-close-icon zod-icons _icon_close",s.onclick=e.Controller.closeLauncher,a.offsetWidth&&(s.style.left=t.offsetWidth+(a.offsetWidth-t.offsetWidth)/2+15+"px"),t.appendChild(s)
var i=document.createElement("div")
i.className="zod-launcher-loading-container"
var c=document.createElement("div")
c.className="zod-launcher-apploader-wrapper"
for(var d=0;d<12;d++){var u=document.createElement("div")
u.className="zod-launcher-apploader-block",u.innerHTML='<div class="zod-launcher-myapps-img"><div class="zod-launcher-apploader"></div></div><div class="zod-launcher-myapps-name zod-launcher-apploader"></div>',c.appendChild(u)}i.appendChild(c),t.appendChild(i),a.appendChild(t)},e.Controller.callLauncherInfoAPI=function(){var a={}
a.org_id=window.ZDLibrary.serviceData.org_id,e.Util.callAPI(e.Util.getZDLibraryAPI(),e.Constants.HTTPMethod.POST,e.Constants.Action.LAUNCHER_INFO,a,e.Controller.buildLauncher,e.Util.processError)},e.Controller.fetchSpacesWhatsNewInfo=function(){var a={}
a.org_id=window.ZDLibrary.serviceData.org_id,e.Util.callAPI(e.Util.getZDLibraryAPI(),e.Constants.HTTPMethod.POST,e.Constants.Action.SPACES_WHATS_NEW_INFO,a,e.Controller.renderSpacesWhatsNew,e.Util.processError)},e.Controller.updateSpacesWhatsNewUserAction=function(a){var t={}
t.org_id=window.ZDLibrary.serviceData.org_id,t.zuid=window.ZDLibrary.spaces_whatsnew_props&&window.ZDLibrary.spaces_whatsnew_props.zuid,t.can_enable=a,e.Util.callAPI(e.Util.getZDLibraryAPI(),e.Constants.HTTPMethod.POST,e.Constants.Action.UPDATE_SPACES_WHATS_NEW,t,e.Util.processError,e.Util.processError)},e.Controller.renderSpacesWhatsNew=function(a){window.ZDLibrary.spaces_whatsnew_props=a||{},window.ZDLibrary.spaces_whatsnew_props.can_show_spaces_whats_new_reminder_popup&&e.Controller.renderSpacesWhatsNewPopup()},e.Controller.renderSpacesWhatsNewPopup=function(){const a=window.ZDLibrary.spaces_whatsnew_props
if(!a||a.popupContainer)return
a.popupContainer=document.createElement("div"),a.popupContainer.id="zod-popup-container",document.body.appendChild(a.popupContainer),a.defaultView=document.createElement("div"),a.defaultView.className="zod-feature-popup-container _zod-service-popup"
const t=document.createElement("div")
t.className="zod-video spaces-video-preview",t.onclick=e.Controller.showOrHideSpacesWhatsNewVideo
const n=document.createElement("span")
n.className="zod-icons _icon_play",t.appendChild(n)
const o=e.Controller.createElementWithText("div","oz.spaces.whats.new.popup.title",{class:"zod-feature-popup-title"},a.accountDisplayName),r=e.Controller.createElementWithText("div","oz.spaces.whats.new.popup.desc",{class:"zod-feature-popup-content"}),l=document.createElement("div")
if(l.className="zod-feature-popup-action-container",a.redirect_url){new URL(a.redirect_url)}const p=e.Controller.createElementWithText("button","oz.spaces.whats.new.popup.cta.primary",{class:"primary-btn _zod-try-new"},urlObject?urlObject.hostname:e.Util.getI18NMessage("oz.account.zohoone.display"))
p.onclick=e.Controller.trySpacesNewVersion
const s=document.createElement("span")
s.className="zod-icons _icon_new_window _ico-16",p.appendChild(s)
const i=e.Controller.createElementWithText("button","oz.spaces.whats.new.popup.cta.sec",{class:"primary-btn _zod-dismiss"})
i.onclick=e.Controller.closeSpacesWhatsNewBanner,l.appendChild(p),l.appendChild(i),a.defaultView.appendChild(t),a.defaultView.appendChild(o),a.defaultView.appendChild(r),a.defaultView.appendChild(l),a.popupContainer.appendChild(a.defaultView)},e.Controller.buildSpacesWhatsNewVideoView=function(){const a=window.ZDLibrary.spaces_whatsnew_props
if(a.videoView)return
a.videoView=document.createElement("div"),a.videoView.className="zod-video-container"
const t=document.createElement("div")
t.className="zod-backdrop-mask _zod-animate zod-top-zindex"
const n=document.createElement("span")
n.onclick=e.Controller.showOrHideVideo,n.className="zod-icons zod-feature-popup-iframe _icon_close _ico-action",n.onclick=e.Controller.showOrHideSpacesWhatsNewVideo
const o=document.createElement("div")
o.className="zod-gs-overview-video-cntnr zod-feature-popup-iframe"
const r=document.createElement("div")
r.className="_iframe-container"
const l=document.createElement("iframe")
l.className="_iframe",l.src=a.whatsnew_2025_video_url,l.setAttribute("frameborder","0"),l.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),l.setAttribute("allowfullscreen",""),r.appendChild(l),o.appendChild(r),a.videoView.appendChild(t),a.videoView.appendChild(n),a.videoView.appendChild(o),a.popupContainer.appendChild(a.videoView),a.canShowVideo=!0,document.addEventListener("keydown",e.Controller.handleKeyboardEvent)},e.Controller.handleKeyboardEvent=function(a){const t=window.ZDLibrary.spaces_whatsnew_props
"Escape"===a.key&&t&&t.canShowVideo&&(e.Controller.showOrHideSpacesWhatsNewVideo(),a.stopPropagation())},e.Controller.showOrHideSpacesWhatsNewVideo=function(){const a=window.ZDLibrary.spaces_whatsnew_props
a.canShowVideo=!a.canShowVideo,a.canShowVideo?(a.defaultView.style.display="none",a.videoView?a.videoView.style.display="":e.Controller.buildSpacesWhatsNewVideoView()):(a.defaultView.style.display="",a.videoView&&(a.videoView.style.display="none"))},e.Controller.closeSpacesWhatsNewBanner=function(){const a=window.ZDLibrary.spaces_whatsnew_props
document.removeEventListener("keydown",e.Controller.handleKeyboardEvent),a.popupContainer&&(a.popupContainer.remove(),a.popupContainer=null,a.defaultView=null,a.videoView=null),a.isLoading||e.Controller.updateSpacesWhatsNewUserAction(!1)},e.Controller.trySpacesNewVersion=function(){if(!window.ZDLibrary.spaces_whatsnew_props.isLoading){if(window.ZDLibrary.spaces_whatsnew_props.isLoading=!0,e.Controller.closeSpacesWhatsNewBanner(),window.ZDLibrary.spaces_whatsnew_props.redirect_url){var a=window.ZDLibrary.spaces_whatsnew_props.redirect_url+"/cxapp/"+window.ZDLibrary.serviceData.app_name+window.location.pathname+window.location.search+window.location.hash
window.open(a,"_blank")}e.Controller.updateSpacesWhatsNewUserAction(!0)}}
e.Controller.createElementWithText=function(a,t,n={},o=[]){const r=document.createElement(a),l=e.Util.getI18NMessage(t,o)
r.appendChild(document.createTextNode(l))
for(const e in n)r.setAttribute(e,n[e])
return r},e.Controller.callMicsTrackAPI=function(a,t){var n={}
n.feature=a,t||(t={}),t.Service=window.ZDLibrary.serviceData.app_name,t.Source=e.Constants.LAUNCHER,n.paramsJson=t,n.org_id=window.ZDLibrary.serviceData.org_id,e.Util.callAPI(e.Util.getZDLibraryAPI(),e.Constants.HTTPMethod.POST,e.Constants.Action.MICS_TRACK,n,null,null)},e.Controller.buildLauncher=function(a){e.Data.appsLoadedTime=(new Date).getTime(),e.Data.myApps=a.user_apps,e.Data.allApps=a.all_apps,e.Data.tabs=a.tabs_info,e.Data.permissions=a.permissions,e.Data.tabsVsIDMap={},e.Data.allAppsVsNameMap={},e.Data.myAppsVsNameMap={},e.Data.myAppsVsAppIDMap={},e.Data.allAppsVsTypeMap={},e.Data.allAddedAppsVsTypeMap={},e.Data.addedAppsOpenedTabs=[],e.Data.companyTabs=[],e.Data.personalTabs=[]
for(var t=0;t<e.Data.tabs.length;t++)e.Data.tabsVsIDMap[e.Data.tabs[t].tab_id]=e.Data.tabs[t],e.Data.tabs[t].is_personal?e.Data.personalTabs.push(e.Data.tabs[t]):e.Data.companyTabs.push(e.Data.tabs[t])
e.Data.companyTabs=e.Util.sortObjectsByNextTo(e.Data.companyTabs,"tab_id","next_to"),e.Data.personalTabs=e.Util.sortObjectsByNextTo(e.Data.personalTabs,"tab_id","next_to")
for(t=0;t<e.Data.myApps.length;t++){e.Data.myAppsVsNameMap[e.Data.myApps[t].app_name]=e.Data.myApps[t],e.Data.myAppsVsAppIDMap[e.Data.myApps[t].app_id]=e.Data.myApps[t]
for(var n=e.Data.myApps[t].tabs,o=0;o<n.length;o++){var r={app_id:e.Data.myApps[t].app_id,app_name:e.Data.myApps[t].app_name,next_to:n[o].next_to}
e.Data.tabsVsIDMap[n[o].tab_id].apps||(e.Data.tabsVsIDMap[n[o].tab_id].apps=[]),e.Data.tabsVsIDMap[n[o].tab_id].apps.push(r)}}e.Data.recommendedApps=e.Data.allApps.filter(function(a){return a.is_new&&!e.Util.isAppAdded(a.app_name)}),e.Data.recommendedApps.length>0&&(e.Data.allAppsVsTypeMap[e.Util.getAppCategory(0)]=e.Data.recommendedApps)
for(t=1;t<e.Data.otherAppsCategoryOrder.length;t++)e.Data.allAppsVsTypeMap[e.Util.getAppCategory(e.Data.otherAppsCategoryOrder[t])]=[],e.Data.allAddedAppsVsTypeMap[e.Util.getAppCategory(e.Data.otherAppsCategoryOrder[t])]=[]
for(t=0;t<e.Data.allApps.length;t++)if(e.Data.allApps[t].app_type&&-1!==e.Data.allApps[t].app_type){var l=e.Util.getAppCategory(e.Data.allApps[t].app_type)
e.Data.allAppsVsNameMap[e.Data.allApps[t].app_name]=e.Data.allApps[t],e.Util.isAppAdded(e.Data.allApps[t].app_name)&&e.Data.allAddedAppsVsTypeMap[l]?e.Data.allAddedAppsVsTypeMap[l].push(e.Data.allApps[t]):e.Data.allAppsVsTypeMap[l]&&e.Data.allAppsVsTypeMap[l].push(e.Data.allApps[t])}if(e.Data.allAppsTabs=e.Util.getKeysFromJSON(e.Data.allAppsVsTypeMap),e.Data.allAppsTabsAfterSearch=e.Data.allAppsTabs,e.Data.myApps){e.Data.myApps=a.user_apps.filter(function(a){return!0!==e.Util.isCreatorCustomApp(a)})
var p=a.user_apps.filter(function(a){return!0===e.Util.isCreatorCustomApp(a)})
e.Data.myApps=e.Data.myApps.sort(function(a,t){var n=e.Data.allAppsVsNameMap[a.app_name],o=e.Data.allAppsVsNameMap[t.app_name],r=(n.display_name?n.display_name:n.app_name).toLowerCase(),l=(o.display_name?o.display_name:o.app_name).toLowerCase()
return r<l?-1:r>l?1:0}),p=p.sort(function(e,a){return e.app_name<a.app_name?-1:e.app_name>a.app_name?1:0})
for(t=0;t<p.length;t++)e.Data.myApps.push(p[t])}var s=document.querySelector(".zod-launcher-wrapper"),i=document.querySelector(".zod-launcher-menu-container"),c=document.createElement("div")
c.className="zod-launcher-menu-container-right"
var d=document.createElement("a")
d.className="zod-launcher-menu-options-right",d.href=window.ZDLibrary.PageLinks.home,d.target="_blank",d.rel="noopener",d.onclick=function(){e.Controller.triggerTracking("OPEN_HOME",null)}
var u=document.createTextNode(e.Util.getI18NMessage("oz.general.app.home"))
if(d.appendChild(u),c.appendChild(d),e.Data.permissions.can_show_admin_panel_link){var m=document.createElement("a")
m.className="zod-launcher-menu-options-right",m.href=window.ZDLibrary.PageLinks.adminPanel,m.target="_blank",m.rel="noopener",m.onclick=function(){e.Controller.triggerTracking("OPEN_ADMIN_PANEL",null)}
var h=document.createTextNode(e.Util.getI18NMessage("oz.zdlibrary.link.adminpanel"))
m.appendChild(h),c.appendChild(m)}i.appendChild(c)
var C=document.querySelector(".zod-launcher-loading-container")
s.removeChild(C)
var y=document.createElement("div")
y.className="zod-launcher-content-container"
var f=document.createElement("div")
e.Controller.renderMyApps(f),y.appendChild(f)
var A=document.createElement("div")
A.className="zod-launcher-allapps-container",e.Controller.renderAllApps(A,e.Data.allApps,e.Data.allAppsVsTypeMap,e.Data.allAddedAppsVsTypeMap),y.appendChild(A),s.appendChild(y)
var v=document.createElement("span")
v.className="zod-launcher-goto-top-icon",v.onclick=e.Controller.resetScroll,s.appendChild(v),e.Controller.afterContentRender()},e.Controller.closeLauncher=function(){var a=document.querySelector("#zdlibrary")
a.className=a.className.replace(/\bfadeIn\b/g,"fadeOut"),a.className=a.className.replace(/\b _visible\b/g,""),setTimeout(e.Controller.hideMainContainer,200),window.onZDLibraryClose&&window.onZDLibraryClose(),e.Controller.callMicsTrackAPI(e.Constants.TrackAction.CLOSE_LAUNCHER,null)},e.Controller.hideMainContainer=function(){var a=document.querySelector("#zdlibrary")
e.Util.makeDisplayNone(a)},e.Controller.renderMyApps=function(a){e.Data.myApps
e.Data.renderDropDownAgain=!1,a.className="zod-launcher-myapps-container"
var t=document.createElement("div")
t.className="zod-launcher-myapps-header"
var n=document.querySelector(".zod-launcher-menu-container")
t.style.top=n.offsetHeight+"px"
var o=document.createTextNode(e.Util.getI18NMessage("oz.zdlibrary.my.apps"))
t.appendChild(o),a.appendChild(t)
var r=document.createElement("div")
r.className="zod-launcher-myapps-wrapper",e.Controller.renderMyAppsContent(r),a.appendChild(r)},e.Controller.renderMyAppsContent=function(a){var t=document.createElement("div")
t.className="zod-launcher-myapps-tabs-container"
var n,o,r=e.Util.getPermissibleMyAppstabsCount()
e.Data.personalTabs.length+e.Data.companyTabs.length<=r?n=e.Data.personalTabs.concat(e.Data.companyTabs):e.Data.personalTabs.length<=r?(n=e.Data.personalTabs.concat(e.Data.companyTabs.slice(0,r-e.Data.personalTabs.length)),o=e.Data.companyTabs.slice(r-e.Data.personalTabs.length)):(n=e.Data.personalTabs.slice(0,r),o=e.Data.personalTabs.slice(r,e.Data.personalTabs.length).concat(e.Data.companyTabs))
for(var l=0;l<n.length;l++){var p=document.createElement("div")
if(p.className="zod-launcher-myapps-tab",0===l&&e.Util.addClass(p,"_selected"),p.setAttribute("data-tab-id",n[l].tab_id),p.onclick=e.Controller.changeMyAppsTab,!n[l].is_personal){var s=document.createElement("span")
s.className="zod-icons zod-company-icon _icon_organization_info zod-launcher-company-tab-icon",p.appendChild(s)}p.appendChild(document.createTextNode(n[l].tab_name)),t.appendChild(p)}if(o&&o.length){var i=document.createElement("div")
i.className="zod-launcher-myapps-tab-more",e.Data.dropDownOptionsOfMyAppTabs={idKey:"tab_id",textKey:"tab_name",dropDownClass:"zod-launcher-myapps-tab-more-dropdown",action:e.Controller.changeMyAppsTabFromDropDown,data:o},i.onclick=function(a){e.Util.toggleDropdown(e.Data.dropDownOptionsOfMyAppTabs,this,a)}
var c=document.createElement("div")
c.className="zod-icons _icon_more_horizontal zod-launcher-myapps-tab-more-icon",i.appendChild(c),t.appendChild(i)}a.appendChild(t)
var d=document.createElement("div")
d.className="zod-launcher-myapps-block-container"
var u=t.querySelector("._selected"),m=e.Data.tabsVsIDMap[u.getAttribute("data-tab-id")].apps
e.Data.renderedMyApps=e.Util.sortObjectsByNextTo(m,"app_id","next_to"),e.Controller.renderMyAppsForTabs(d,e.Data.renderedMyApps),a.appendChild(d)},e.Controller.renderMyAppsForTabs=function(a,t){if(t){for(var n=0;n<t.length;n++){var o=e.Data.myAppsVsAppIDMap[t[n].app_id]
e.Controller.renderMyAppsElements(o,a)}if(!t||0===t.length){var r=document.createElement("div")
r.className="zod-launcher-apps-none-icon",a.appendChild(r)
var l=document.createElement("div")
l.className="zod-launcher-apps-none",l.appendChild(document.createTextNode(e.Util.getI18NMessage("oz.apps.not.found"))),a.appendChild(l)}}},e.Controller.renderMyAppsElements=function(a,t){var n=document.createElement("div")
n.className="zod-launcher-myapps-block"
var o,r,l,p=a.app_name,s=a.app_id,i=e.Util.isCreatorCustomApp(a)?"Custom App":e.Util.isThirdPartyApp(a)?"Thirdparty App":e.Data.allAppsVsNameMap[a.app_name].display_name;(n.onclick=function(){e.Controller.openAppHome(p,s,i)},e.Util.isCustomApp(a))?((o=document.createElement("div")).className="zod-launcher-myapps-img zod-launcher-custom-apps-img",(r=document.createElement("div")).className="zod-launcher-customapps-icon",r.appendChild(document.createTextNode(e.Util.getPhotoValueFromString(a.display_name))),o.appendChild(r),n.appendChild(o),(l=document.createElement("div")).className="zod-launcher-myapps-name",l.appendChild(document.createTextNode(e.Util.escapeHTML(a.display_name))),n.appendChild(l)):((o=document.createElement("div")).className="zod-launcher-myapps-img",(r=document.createElement("div")).className="zod-app-logo _logo-x48 _logo-"+p,a.is_requested_app&&e.Util.addClass(r,"zod-launcher-requested-app"),o.appendChild(r),n.appendChild(o),(l=document.createElement("div")).className="zod-launcher-myapps-name",l.appendChild(document.createTextNode(e.Data.allAppsVsNameMap[a.app_name].display_name)),n.appendChild(l))
t.appendChild(n)},e.Controller.renderAllApps=function(a,t,n,o){var r=e.Util.getKeysFromJSON(n),l=e.Util.removeValues(e.Util.getKeysFromJSON(o),r)
r=r.concat(l)
var p=document.createElement("div")
p.className="zod-launcher-allapps-wrapper"
var s=document.createElement("div")
s.className="zod-launcher-allapps-header"
var i=document.querySelector(".zod-launcher-menu-container")
s.style.top=i.offsetHeight+"px"
var c=document.createElement("div")
c.className="zod-launcher-allapps-title"
var d=document.createTextNode(e.Util.getI18NMessage("oz.zdlibrary.other.apps"))
if(c.appendChild(d),s.appendChild(c),r.length>0){var u=document.createElement("div"),m={dropDownClass:"zod-launcher-allapps-tabs-list-dropdown",action:e.Controller.changeAllAppsTab,data:r}
u.className="zod-launcher-allapps-tabs-list"
var h=document.createElement("div")
h.className="zod-icons _icon_chevron_down _ico-8",u.appendChild(h),s.appendChild(u),s.onclick=function(a){e.Util.toggleDropdown(m,this,a)},p.appendChild(s)
for(var C=document.querySelector(".zod-launcher-wrapper").offsetWidth-55,y=0;y<e.Data.otherAppsCategoryOrder.length;y++){var f=e.Util.getAppCategory(e.Data.otherAppsCategoryOrder[y]),A=n[f],v=o[f]
if(A&&!(A.length<=0)||v&&!(v.length<=0)){var b=document.createElement("div")
b.className="zod-launcher-allapps-eachtab-wrapper",b.setAttribute("data-category-name",f)
var w=document.createElement("div")
w.className="zod-launcher-allapps-eachtab-header",w.appendChild(document.createTextNode(f)),b.appendChild(w)
var g=document.createElement("div")
g.className="zod-launcher-allapps-eachtab-appslist"
var _=0,D=0
if(A&&A.length)for(var N=0;N<A.length;N++)e.Controller.createAppBlockInAllApps(A[N],g)
if(v&&v.length){var z=document.createElement("span")
z.className="zod-launcher-allapps-block zod-launcher-allapps-added-note",g.childElementCount&&(D=parseInt(g.lastChild.style.left.replace("px","")),_=parseInt(g.lastChild.style.top.replace("px","")),(D+=305)+285>C&&(D=0,_+=120)),z.style.left=D+"px",z.style.top=_+"px"
var T=document.createElement("div")
T.className="zod-launcher-allapps-block-content",T.appendChild(document.createTextNode(e.Util.getI18NMessage("oz.zdlibrary.added.applications.count",v.length)))
var U=document.createElement("div")
U.className="zod-launcher-allapps-show-added",U.onclick=e.Controller.showAddedAppsInAllApps,U.appendChild(document.createTextNode(e.Util.getI18NMessage("oz.general.show"))),T.appendChild(U),z.appendChild(T),g.appendChild(z)}if(g.childElementCount){_=parseInt(g.lastChild.style.top.replace("px",""))
g.style.height=_+120+"px",b.appendChild(g),p.appendChild(b),a.appendChild(p)}}}}else{p.appendChild(s)
var E=document.createElement("div"),L=document.createElement("div")
L.className="zod-launcher-apps-none-icon",E.appendChild(L)
var S=document.createElement("div")
S.className="zod-launcher-apps-none",S.appendChild(document.createTextNode(e.Util.getI18NMessage("oz.apps.not.found"))),E.appendChild(S),p.appendChild(E),a.appendChild(p)}},e.Controller.showAddedAppsInAllApps=function(){var a=this.closest(".zod-launcher-allapps-eachtab-appslist"),t=a.parentElement.getAttribute("data-category-name"),n=e.Data.allAddedAppsVsTypeMap[t],o=document.querySelector(".zod-launcher-apps-search-box").value
""!==o&&(n=n.filter(function(e){return-1!==e.app_name.toLowerCase().indexOf(o.toLowerCase())||-1!==e.display_name.toLowerCase().indexOf(o.toLowerCase())})),e.Controller.insertInAllAppsList(n,a),e.Data.addedAppsOpenedTabs.push(t)},e.Controller.insertInAllAppsList=function(a,t){if(a&&a.length){for(var n=0;n<a.length;n++)e.Controller.createAppBlockInAllApps(a[n],t)
var o=parseInt(t.lastChild.style.top.replace("px",""))
t.style.height=o+120+"px"}},e.Controller.createAppBlockInAllApps=function(a,t){if(a.can_show_app&&!a.is_third_party_app){var n=document.querySelector(".zod-launcher-wrapper").offsetWidth-55,o=0,r=0
if(t.childElementCount){var l=t.lastChild;-1!==l.className.indexOf("zod-launcher-allapps-added-note")&&(l=t.lastChild.previousSibling),l&&(o=parseInt(l.style.left.replace("px",""))+305,r=parseInt(l.style.top.replace("px",""))),o+285>n&&(o=0,r+=120)}var p=a.app_name,s=a.display_name,i=a.description,c=a.is_new,d=e.Util.isAppAdded(p),u=document.createElement("span")
u.className="zod-launcher-allapps-block",u.style.left=o+"px",u.style.top=r+"px"
var m=document.createElement("div")
if(m.className="zod-launcher-allapps-block-content",d){var h=document.createElement("a")
h.className="zod-launcher-allapps-banner-added",h.appendChild(document.createTextNode(e.Util.getI18NMessage("oz.general.added"))),m.appendChild(h)}var C=document.createElement("div")
C.className="zod-launcher-allapps-img"
var y=document.createElement("div")
y.className="zod-app-logo _logo-x48 _logo-"+p,C.appendChild(y),m.appendChild(C)
var f=document.createElement("div")
f.className="zod-launcher-allapps-content"
var A=document.createElement("div")
if(A.className="zod-launcher-allapps-name",A.appendChild(document.createTextNode(s)),c){var v=document.createElement("span")
v.className="zod-launcher-allapps-new-flag",v.appendChild(document.createTextNode(e.Util.getI18NMessage("oz.general.new"))),A.appendChild(v)}f.appendChild(A)
var b=document.createElement("div")
b.className="zod-launcher-allapps-desc",b.appendChild(document.createTextNode(i)),f.appendChild(b)
var w,g=document.createElement("a")
g.className="zod-launcher-allapps-action"
var _=e.Util.isCreatorCustomApp(a)?"Custom App":e.Util.isThirdPartyApp(a)?"Thirdparty App":e.Data.allAppsVsNameMap[a.app_name].display_name
d?(g.onclick=function(){var a=e.Data.myAppsVsNameMap[p],t=a?a.app_id:-1
e.Controller.openAppHome(p,t,_)},w="oz.general.open"):(g.onclick=function(){e.Controller.openApp(p,_)},w="oz.general.try.now"),g.appendChild(document.createTextNode(e.Util.getI18NMessage(w))),f.appendChild(g),m.appendChild(f),u.appendChild(m),t.appendChild(u)}},e.Controller.afterContentRender=function(){var a=document.querySelector("#zdlibrary"),t=document.querySelector("#zdlibrary-wrapper"),n=e.serviceClientInfo.productWrapper
e.Util.isDOMObject(n)||(n=document.querySelector(n))
var o=n?n.offsetWidth:document.body.offsetWidth
a.style.maxWidth=o+"px"
var r=.8*o
document.querySelector(".zod-launcher-menu-container").style.maxWidth=r+"px",document.querySelector(".zod-launcher-allapps-header").style.maxWidth=.8*o+"px",document.querySelector(".zod-launcher-goto-top-icon").style.left=t.offsetWidth+(a.offsetWidth-t.offsetWidth)/2+15+"px"},e.Controller.handleScroll=function(){var a=document.querySelector("#zdlibrary-wrapper"),t=document.querySelector(".zod-launcher-goto-top-icon")
a.scrollTop>80?-1===t.className.indexOf("_visible")&&e.Util.addClass(t,"_visible"):t.className=t.className.replace(/\b _visible\b/g,"")},e.Controller.changeAllAppsTab=function(){for(var a=e.Data.allAppsTabsAfterSearch.indexOf(this.textContent),t=document.querySelector("#zdlibrary-wrapper"),n=(document.querySelector(".zod-launcher-allapps-header"),document.getElementsByClassName("zod-launcher-allapps-eachtab-wrapper")),o=e.Util.getThresholdScrollTop()+3,r=0;r<a;r++)o+=n[r].offsetHeight
e.Util.scrollTo(t,o,300)},e.Controller.changeMyAppsTab=function(a){e.Util.isDOMObject(a)||(a=this)
var t=document.getElementsByClassName("zod-launcher-myapps-tab _selected")[0]
t.className=t.className.replace(/\b _selected\b/g,""),e.Util.addClass(a,"_selected")
var n=e.Data.tabsVsIDMap[a.getAttribute("data-tab-id")].apps
e.Data.renderedMyApps=e.Util.sortObjectsByNextTo(n,"app_id","next_to")
var o=document.querySelector(".zod-launcher-myapps-block-container")
o.innerHTML=""
var r=document.querySelector(".zod-launcher-apps-search-box")
""!==r.value?e.Controller.searchApps(r):e.Controller.renderMyAppsForTabs(o,e.Data.renderedMyApps)},e.Controller.changeMyAppsTabFromDropDown=function(a){e.Util.isDOMObject(a)||(a=this)
var t,n,o=document.getElementsByClassName("zod-launcher-myapps-tab"),r=o[o.length-1],l=e.Data.tabsVsIDMap[r.getAttribute("data-tab-id")],p=e.Data.tabsVsIDMap[a.getAttribute("data-id")]
if(r.setAttribute("data-tab-id",p.tab_id),r.innerHTML="",!p.is_personal){var s=document.createElement("span")
s.className="zod-icons zod-company-icon _icon_organization_info zod-launcher-company-tab-icon",r.appendChild(s)}r.appendChild(document.createTextNode(p.tab_name)),e.Controller.changeMyAppsTab(r),t=l.is_personal?(n=e.Util.findPosition(e.Data.personalTabs,"tab_id",l.tab_id))?e.Data.personalTabs[n-1].tab_id:-1:(n=e.Util.findPosition(e.Data.companyTabs,"tab_id",l.tab_id))?e.Data.companyTabs[n-1].tab_id:e.Data.personalTabs&&e.Data.personalTabs.length?e.Data.personalTabs[e.Data.personalTabs.length-1].tab_id:-1
var i=e.Data.dropDownOptionsOfMyAppTabs.data,c=e.Util.findPosition(i,"tab_id",t)
i.splice(c+1,0,l)
var d=e.Util.findPosition(i,"tab_id",p.tab_id)
i.splice(d,1),e.Data.dropDownOptionsOfMyAppTabs.renderAgainOnce=!0},e.Controller.resetScroll=function(){var a=document.querySelector("#zdlibrary"),t=document.querySelector("#zdlibrary-wrapper")
e.Util.scrollTo(t,0,300),e.Util.scrollTo(a,0,100)},e.Controller.searchApps=function(a){var t=a.value,n=document.querySelector(".zod-launcher-close-search-icon")
t.length>0?-1===n.className.indexOf("_visible")&&e.Util.addClass(n,"_visible"):n.className=n.className.replace(/\b _visible\b/g,"")
var o=e.Data.renderedMyApps,r=e.Data.allApps,l=e.Data.allAppsTabs,p=e.Data.recommendedApps,s=o.filter(function(a){var n=-1!==a.app_name.toLowerCase().indexOf(t.toLowerCase()),o=e.Data.myAppsVsAppIDMap[a.app_id].display_name&&-1!==e.Data.myAppsVsAppIDMap[a.app_id].display_name.toLowerCase().indexOf(t.toLowerCase()),r=e.Data.allAppsVsNameMap[a.app_name]&&-1!==e.Data.allAppsVsNameMap[a.app_name].display_name.toLowerCase().indexOf(t.toLowerCase())
return n||o||r}),i=r.filter(function(e){return-1!==e.app_name.toLowerCase().indexOf(t.toLowerCase())||-1!==e.display_name.toLowerCase().indexOf(t.toLowerCase())}),c=p.filter(function(e){return-1!==e.app_name.toLowerCase().indexOf(t.toLowerCase())||-1!==e.display_name.toLowerCase().indexOf(t.toLowerCase())}),d={},u={}
c.length>0&&(d[e.Util.getAppCategory(0)]=c)
for(var m=0;m<l.length;m++){var h=i.filter(function(a){return e.Util.getAppCategory(a.app_type)===l[m]&&!e.Util.isAppAdded(a.app_name)}),C=i.filter(function(a){return e.Util.getAppCategory(a.app_type)===l[m]&&e.Util.isAppAdded(a.app_name)})
h.length>0&&(d[l[m]]=h),C.length>0&&(u[l[m]]=C)}e.Data.allAppsTabsAfterSearch=e.Util.getKeysFromJSON(d)
var y=e.Util.removeValues(e.Util.getKeysFromJSON(u),e.Data.allAppsTabsAfterSearch)
e.Data.allAppsTabsAfterSearch=e.Data.allAppsTabsAfterSearch.concat(y)
var f=document.querySelector(".zod-launcher-myapps-block-container")
f.innerHTML="",e.Controller.renderMyAppsForTabs(f,s)
var A=document.querySelector(".zod-launcher-allapps-container")
A.innerHTML="",e.Controller.renderAllApps(A,i,d,u)
var v=document.getElementsByClassName("zod-launcher-allapps-eachtab-wrapper")
for(m=0;m<v.length;m++){var b=v[m].getAttribute("data-category-name")
if(e.Util.isPresent(e.Data.addedAppsOpenedTabs,b)){var w=v[m].getElementsByClassName("zod-launcher-allapps-added-note")[0]
w&&w.parentElement.removeChild(w)
var g=u[b]
g&&g.length&&e.Controller.insertInAllAppsList(g,v[m].getElementsByClassName("zod-launcher-allapps-eachtab-appslist")[0])}}e.Controller.handleScroll()},e.Controller.clearSearch=function(){var a=document.querySelector(".zod-launcher-apps-search-box")
a.value="",e.Controller.searchApps(a)},e.Controller.openAppHome=function(a,t,n){e.Controller.callMicsTrackAPI(e.Constants.TrackAction.ACCESS_APP+n,null),window.ZDLibrary.serviceData.app_name!==a?e.Util.openLinkInNewtab(e.Util.getAppHomeURL(a,t)):e.Controller.closeLauncher()},e.Controller.openApp=function(a,t){e.Controller.callMicsTrackAPI(e.Constants.TrackAction.TRY_NEW_APP+t,null),e.Util.openLinkInNewtab(e.Util.getAppURL(a))},e.Controller.setIconTheme=function(a){if(null!=a){var t=document.querySelector(".zod-launcher-icon"),n=document.querySelector(".zod-launcher-icon-wrapper"),o=a.theme,r=a.color,l=a.hover_color;(o||r)&&(n.className=n.className.replace(/\b zod-launcher-icon-background\b/g,""),"dark"===o?t.className="zod-launcher-icon zod-launcher-icon-light":"light"===o&&(t.className="zod-launcher-icon zod-launcher-icon-dark"),r&&(e.Util.setBackgroundColorForIcon(r),l&&(n.onmouseover=function(){e.Util.setBackgroundColorForIcon(l)},n.onmouseout=function(){e.Util.setBackgroundColorForIcon(r)})))}},e.Controller.triggerTracking=function(a,t){e.Controller.callMicsTrackAPI(e.Constants.TrackAction[a],t)},e.Controller.handleOutsideClick=function(a){if(a.target.closest("#zdlibrary-wrapper")||!e.Util.isLauncherOpen()||e.Data.launcherLoadedNow||e.Controller.closeLauncher(),a.target.closest(".zod-launcher-allapps-added-note")){var t=a.target.closest(".zod-launcher-allapps-added-note")
t.parentElement.removeChild(t)}if(!e.Data.dontCloseDropDown)for(var n=document.getElementsByClassName("zod-launcher-dropdown"),o=0;o<n.length;o++)e.Util.makeDisplayNone(n[o])
e.Data.dontCloseDropDown=!1,e.Data.launcherLoadedNow&&(e.Data.launcherLoadedNow=!1)},document.addEventListener("keydown",function(a){27==(a=a||window.event).keyCode&&e.Util.isLauncherOpen()&&e.Controller.closeLauncher()}),e.Util.callAPI=function(a,t,n,o,r,l){var p;(p=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange=function(){if(4==this.readyState&&200==this.status){if(""!==this.response){var e=JSON.parse(this.response)
r&&r(e)}}else l&&l()},p.open(t,a,!0),p.withCredentials=!0,p.setRequestHeader("Content-type","application/x-www-form-urlencoded")
var s=e.serviceClientInfo.csrfName,i=e.serviceClientInfo.getCsrfValue()
p.setRequestHeader("X-ZCSRF-TOKEN",s+"="+i),null!==o?p.send(encodeURI("action="+n+"&data="+JSON.stringify(o))):p.send()},e.Util.isDOMObject=function(e){return!(!e||!e.nodeType||1!==e.nodeType)},e.Util.getKeysFromJSON=function(e){var a=[]
for(var t in e)e.hasOwnProperty(t)&&a.push(t)
return a}
e.Util.getPhotoValueFromString=function(e){var a=e.trim().indexOf(" ")
return-1===a?e[0].toUpperCase():e[0].toUpperCase()+e[a+1].toUpperCase()},e.Util.processError=function(){},e.Util.isLauncherExpired=function(){return(new Date).getTime()-e.Data.appsLoadedTime>e.Constants.Time.FIVE_MINS},e.Util.getThresholdScrollTop=function(){var e=document.querySelector(".zod-launcher-myapps-container").offsetTop
return document.querySelector(".zod-launcher-allapps-container").offsetTop-e+10},e.Util.getAllAppsTabIndexFromScrollPos=function(a){var t=e.Util.getThresholdScrollTop(),n=-1,o=document.getElementsByClassName("zod-launcher-allapps-eachtab-wrapper")
do{var r=o[++n]
if(!r){n--
break}t+=r.offsetHeight}while(t<=a)
return n},e.Util.scrollTo=function(a,t,n){var o=a.scrollTop,r=t-o,l=0,p=function(){l+=20
var t=e.Util.easeInOutQuad(l,o,r,n)
a.scrollTop=t,l<n&&setTimeout(p,20)}
p()},e.Util.easeInOutQuad=function(e,a,t,n){return(e/=n/2)<1?t/2*e*e+a:-t/2*(--e*(e-2)-1)+a},e.Util.isAppAdded=function(a){return!!e.Data.myAppsVsNameMap[a]},e.Util.isAppNew=function(a){return e.Data.allAppsVsNameMap[a].is_new},e.Util.getAppCategory=function(a){return e.Util.getI18NMessage(e.Constants.AppCategory[a])},e.Util.getAppHomeURL=function(a,t){var n=e.Data.myAppsVsAppIDMap[t],o=e.Data.allAppsVsNameMap[a],r=n.is_portal_required
return e.Util.isCustomApp(n)||e.Util.isThirdPartyApp(n)?n.app_url:n.is_requested_app||!r?o.app_url:o.app_url+n.portal_url},e.Util.getAppURL=function(a){return e.Data.allAppsVsNameMap[a].app_url},e.Util.isLauncherOpen=function(){var e=document.querySelector("#zdlibrary")
return e&&-1!==e.className.indexOf("_visible")},e.Util.getI18NMessage=function(e){var a=window.ZDLibrary.I18NData[e]
if(a){if(arguments.length>1)for(var t=1;t<arguments.length;t++)a=a.replace(new RegExp("\\{"+(t-1)+"\\}","g"),arguments[t])
return a}return e},e.Util.hasI18NMessage=function(e){return!!window.ZDLibrary.I18NData[e]},e.Util.getZDLibraryAPI=function(){return window.location.origin+"/zdlibrary/handler"},e.Util.escapeChar=function(a){return e.Constants.EscapeChar.escapeBadChars[a]},e.Util.escapeHTML=function(a){if(window.Em&&window.Em.Handlebars)return window.Em.Handlebars.Utils.escapeExpression(a)
if("string"!=typeof a){if(!a)return a+""
a+=""}return e.Constants.EscapeChar.possible.test(a)?a.replace(e.Constants.EscapeChar.badChars,e.Util.escapeChar):a},e.Util.addClass=function(e,a){-1===e.className.indexOf(a)&&(e.className+=" "+a)},e.Util.addEvent=function(e,a,t){e.addEventListener?e.addEventListener(a,t,!1):el.attachEvent&&e.attachEvent("on"+a,t)},e.Util.makeDisplayNone=function(e){e.style.display="none"},e.Util.makeDisplayBlock=function(e){e.style.display="block"},e.Util.openLinkInNewtab=function(e){window.open(e,"_blank","noopener")},e.Util.setBackgroundColorForIcon=function(e){for(var a=document.querySelector(".zod-launcher-icon").childNodes,t=0;t<a.length;t++)a[t].style.setProperty("background-color",e,"important")},e.Util.sortObjectsByNextTo=function(a,t,n){if(!a)return[]
var o=a.filter(function(e){return"-1"===e[n]})
if(o.length>1)for(var r=0;r<o.length-1;r++){for(var l=o[r+1][t];e.Util.findBy(a,n,l);)l=e.Util.findBy(a,n,l)[t]
o[r][n]=l}var p={},s=[],i=[],c=[]
for(r=0;r<a.length;r++){var d=a[r][t],u=a[r][n]
p[d]=a[r],s.push(d),i.push(u)}var m=(s=e.Util.removeValues(s,i))[0]
for(r=0;r<a.length;r++)if(m){var h=p[m]
h&&(c.push(h),"-1"!==m&&(m=h[n]))}if(a.length!==c.length)for(r=0;r<a.length;r++)c.some(function(e){return e[t]===a[r][t]})||c.push(a[r])
return c},e.Util.findBy=function(e,a,t){t=t.toLowerCase()
for(var n=0,o=e.length;n<o;n++){var r=e[n]
if(r[a].toLowerCase()===t)return r}return null},e.Util.findPosition=function(e,a,t){t=t.toLowerCase()
for(var n=0,o=e.length;n<o;n++){if(e[n][a].toLowerCase()===t)return n}return-1},e.Util.removeValues=function(e,a){return e.filter(function(e){return!a.some(function(a){return a===e})})},e.Util.getPermissibleMyAppstabsCount=function(){var e=document.querySelector(".zod-launcher-wrapper")
return Math.floor((e.offsetWidth-215)/130)},e.Util.toggleDropdown=function(a,t,n){if(n=window.event||n,!(t.querySelector(".zod-launcher-dropdown")===n.target||t.getElementsByClassName("zod-launcher-dropdown-option").length&&e.Util.isPresent(t.getElementsByClassName("zod-launcher-dropdown-option"),n.target))){var o=t.querySelector(".zod-launcher-dropdown")
if(o&&-1!==o.className.indexOf(a.dropDownClass)&&!a.renderAgainOnce)"block"===o.style.display?e.Util.makeDisplayNone(o):e.Util.makeDisplayBlock(o)
else{var r=a.data
a.renderAgainOnce?(a.renderAgainOnce=!1,o.innerHTML=""):o=document.createElement("ul"),o.className="zod-launcher-dropdown",a.dropDownClass&&e.Util.addClass(o,a.dropDownClass),e.Util.makeDisplayBlock(o)
for(var l=0;l<r.length;l++){var p=document.createElement("li")
p.className="zod-launcher-dropdown-option",p.onclick=a.action,a.idKey&&p.setAttribute("data-id",r[l][a.idKey]),p.appendChild(document.createTextNode(a.textKey?r[l][a.textKey]:r[l])),o.appendChild(p)}t.appendChild(o)}e.Data.dontCloseDropDown=!0}}
e.Util.isPresent=function(e,a){for(var t=0;t<e.length;t++)if(e[t]===a)return!0
return!1},e.Util.isCreatorCustomApp=function(e){return 1===e.app_type},e.Util.isCustomApp=function(e){return 1===e.app_type||3===e.app_type},e.Util.isThirdPartyApp=function(e){return 2===e.app_type||3===e.app_type}})()
