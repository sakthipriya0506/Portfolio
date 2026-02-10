//$Id$

UI.Announcement.showCustomAnnouncement = function() 
{
	if( $("#ztb-announcement").length === 0) 
	{
		UI.Announcement.showBlogAnnouncement();
	}
};

UI.Announcement.showYearEndCampaignAnnouncement = function(isAnnouncementIconClick ){

	if( $("#ztb-announcement").length === 0)  //NO I18N 
	{
		this.showYearEndCampaignAnnouncementCarousel( isAnnouncementIconClick , UI.Announcement.yearEndData  );
	}
}

UI.Announcement.getBlogAnnouncementData = _ =>
{
	// if( UI.Announcement.isThailandRegion() )
	// {
	// 	return {
	// 		title : `Explore Zohoverse ที่ Zoholics ประเทศไทย`,

	// 		description : `เรากลับมาอีกครั้งกับงาน Zoholics สุดพิเศษ! พบกันวันที่ 6 กุมภาพันธ์ 2026 ที่โรงแรม JW Marriott Bangkok เพื่ออัปเดตฟีเจอร์ใหม่ๆ พบปะผู้ใช้ Zoho คนอื่นๆ และรับคำปรึกษาแบบใกล้ชิดจากทีมผู้เชี่ยวชาญ!`,

	// 		link : UI.Announcement.getBlogDetailsLink(),

	// 		link_text : "บข้อเสนอสุดพิเศษ",  //No I18N	

	// 		ann_id : "zoholics_thai_banner"  //NO I18N
	// 	}
	// }

	return {
		title : `Rethinking collaboration for modern teams`,

		description : `Too many tools slow teams down. Join us on Feb 11, 2026, as we unpack real collaboration challenges and show how Zoho Cliq brings chats, context, and actions together.`,

		link : UI.Announcement.getBlogDetailsLink(),

		link_text : "Register Now",  //No I18N

		ann_id : "cliq_webinar_feb11"  //NO I18N
	}
}

UI.Announcement.getBlogDetailsLink = _ =>
{
	let webinarLink = `https://meeting.zohocorp.com/meeting/register?sessionId=1388452806`;

	// if( UI.Announcement.isThailandRegion() )
	// {
	// 	webinarLink = `https://events.zoho.com/ZoholicsThailand2026#/buyTickets?promoCode=ZCLIQ50`;
	// } 

	return webinarLink;
}

UI.Announcement.showBlogAnnouncement = function()
{
	var forumbanner = $("#forumbanner");

	if(forumbanner.length)
	{
		forumbanner.remove();
	}

	let isWorkPlaceBundle = UI.isWorkPlaceBundle();

	if( UI.Announcement.isValidUser() )
	{
		UI.Announcement.showCustomAnnPopup();

		if(isWorkPlaceBundle)
		{
			WorkPlace.triggerAnnouncement( UI.Announcement.getBlogAnnouncementData() );
		}
	}
};

UI.Announcement.showCustomAnnPopup = function()
{
	const { title, description, link, link_text } = UI.Announcement.getBlogAnnouncementData();

	const webinar_tag = `${$zcg._IMGDEFAULTSTATICURL}/announcement_imgs/webinar_tag.svg`;
	
	// var giph_link = $zcg._IMGDEFAULTSTATICURL+`/announcement_imgs/${imgName}.png`;

	var ann_template = 	
		`<div style="padding: 30px 24px;">
			<div style="position: absolute; top: -33px; left: -22px;">
				<img src="${webinar_tag}" style="height: 130px; width: 130px;">`+
			'</div>'+
			'<span purpose="anncmnt_close" style="position: absolute; right:14px; top:14px;" class="zcf-closeB zcl-icon fshrink zcl-icon--filled2 zcl-round font12"></span>'+
			'<div class="flexC mT15">'+
				`<div class="fshrink" style="margin-top: -46px;margin-left: -6px;">`+
					`<div class="webinar-banner-img"></div>`+
				'</div>'+
				'<div class="flexG pLR20">'+
					`<div class="font14 fontB line24">${title}</div>
					<div class="font14 line22 clr-S mT5" style="white-space: pre-line;">${description}</div>
					<div class="mT25"><div data-qa="goToDoc" purpose="go_to_doc" class="zcl-btn zcl-btn--primary">${link_text}</div></div>
				</div>
			</div>
		</div>`;

	var announcement_html = `<div id="forumbanner" class="anncmnt-popup" style="right: 70px; width: 680px; z-index: 1000; border-radius: 10px; position: fixed; top: 55px; color: var(--color-main); background-color: var(--bg-color-3); border: 1px solid var(--color-divider); box-shadow: 0px 4px 34px var(--box-shadow-color2);" data-qa="forumbanner">
								${ann_template}
							</div>`;

	$("body").append(announcement_html);

	var forumbanner = $("#forumbanner");

	forumbanner.on("click", '[purpose]', function(event)
	{
		var elem = event.target;

		var purpose = elem.getAttribute("purpose");

		if(purpose === "anncmnt_close")
		{
			forumbanner.slideUp(400, function()
			{
				forumbanner.remove();
			});

			Settings.update({"announcementversion" : $zcg._ANNOUNCEMENT.version });    //NO I18N	

			$("#ztb-announcement").remove();
		}
		else if(purpose === "go_to_doc")
		{
			var ann_help_link = link;

			window.open(ann_help_link, "_blank");
		}
	});

	forumbanner.fadeIn(600);
};

UI.Announcement.showTourAnnouncement = function( isAnnouncementIconClick  )
{
	if(!UI.Announcement.isValidUser()){
		return;
	}

	if( !isAnnouncementIconClick && Settings.getFromObj("annnouncementversion" , true ) ==="v9"){

		if( $("#ztb-announcement").length === 0) 
		{
			UI.Announcement.showCustomAnnIcon(true);
		}

	}else if( !isAnnouncementIconClick && Settings.getFromObj("announcementversion", true) === "v6" )//NO I18N
	{
		if( $("#ztb-announcement").length === 0) 
		{
			UI.Announcement.showCustomAnnIcon();
		}
	}
	else
	{
		this.showOnboardingAnnouncement( isAnnouncementIconClick );
	}
};

UI.Announcement.showOnboardingAnnouncement = function( isAnnouncementIconClick )
{
	var self = this;

	let helpdoclink = ''; //NO I18N
	var slides = [
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/rich_composer.png", //No I18n
			title : "Discover a flawless messaging experience", //No I18n
			description : "Say hello to the new rich text composer, where formatting is just a click away. Bold your ideas, italicize for emphasis, and add links effortlessly—no need to memorize complex markdowns.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/conversations/chat-window/articles/how-do-i-format-messages-in-the-text-area",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/reaction_notification.png", //No I18n
			title : "Stay in the loop", //No I18n
			description : "Get instant notifications when your message receives an emoji reaction, enhancing engagement and collaboration in real time.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/profile-and-settings/notifications/articles/how-can-a-user-receive-reaction-notifications-from-messages",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/Branding.png", //No I18n
			title : "Make your meetings truly yours", //No I18n
			description : "Personalize your online meetings with custom logos, background images, and brand colors for a cohesive, professional look. Create a unified virtual space that reflects your brand across all devices.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/calls-and-meetings/meetings/articles/how-can-a-user-set-a-meeting-theme-to-a-meeting",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/Lock_Meeting.png", //No I18n
			title : "Keep your meetings private", //No I18n
			description : "Host secure discussions with the new lock functionality in meetings. Control who enters to ensure focused, confidential conversations without interruptions.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/calls-and-meetings/meetings/articles/how-can-host-and-co-host-lock-a-meeting",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/Custom_Shortcuts.png", //No I18n
			title : "Speed up your workflow", //No I18n
			description : `Unlock efficiency with customizable keyboard shortcuts that let you navigate and accomplish tasks in a flash. Your conversations and custom tools is just a keystroke away.`,
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/conversations/chats/articles/where-can-i-find-a-list-of-keyboard-shortcuts",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/presence.png", //No I18n
			title : "Never miss a beat", //No I18n
			description : "Stay informed with probable presence insights and know who's likely to be available for a collaboration. Set recurring reminders to keep your schedule organized and meetings on track.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/profile-and-settings/general-settings/articles/probable-check-in-out-in-zoho-cliq#For_Admins",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/alert_bot_call.png", //No I18n
			title : "Automated call alerts", //No I18n
			description : "In time-sensitive situations where messages may not suffice, empower your bots to initiate calls with critical alerts.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/bots/articles/how-to-configure-bot-calls-in-zoho-cliq",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/ondemand_summary.png", //No I18n
			title : "Quick insights at your fingertips", //No I18n
			description : "Get instant overviews of conversations with on-demand chat summaries, allowing you to quickly grasp essential points without sifting through lengthy chats.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/conversations/chat-window/articles/chat-summary-in-zoho-cliq",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/Text_Extraction.png", //No I18n
			title : "Copy text from images in an instant", //No I18n
			description : "Easily pull key information from files with our text extraction functionality, ensuring you have the most relevant details at hand whenever you need them.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/user-guides/files-shared-via-cliq/articles/what-are-the-actions-a-user-can-perform-on-an-image#How_to_Extract_Text_from_an_Image",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/Graph_Charts.png", //No I18n
			title : "Transform insights with ease", //No I18n
			description : "Elevate your data analysis with innovative charts and graphs in Zoho Cliq. Track stats and visualize trends with a more engaging approach to data analysis.", //No I18n
			learnMoreLink : "https://www.zoho.com/cliq/help/platform/widget-section-elements/charts.html",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/dlp_policy.png", //No I18n
			title : "Shield confidential information with DLP policies", //No I18n
			description : "Empower admins to create and manage data loss prevention (DLP) policies that guard against data leaks. With advanced monitoring and control, ensure confidentiality and effortless compliance.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/admin-guides/manage-organization/articles/data-loss-prevention-in-zoho-cliq", //NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/client_ip.png", //No I18n
			title : "Restrict access with client-based IP limitations", //No I18n
			description : "Secure your organization by restricting access to trusted IP addresses across web, iOS, and Android, and ensure enhanced security and compliance.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/admin-guides/permissions/allowed-ips/articles/how-to-restrict-users-to-access-my-organizations-in-cliq-only-from-specific-ips", //NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/data_storage_cleanup.png", //No I18n
			title : "Maximize efficiency with data cleanup management", //No I18n
			description : "Optimize your data by identifying and eliminating redundant or outdated information. Strategically streamline processes to enhance storage efficiency.", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/admin-guides/manage-organization/articles/how-can-an-admin-manage-and-clean-up-data-in-an-organization",	//NO I18N
			linkText : "Learn more" //No I18N
		},
		{
			imgSrc : $zcg._JSSTATICURL+"/officechat/images/default/cliq_6.o_onboarding/default_bot_channel.png", //No I18n
			title : "Go-to bots and channels for instant collaboration", //No I18n
			description : "Set default bots and channels to which all users will be automatically subscribed. These built-in tools keep your users updated and enable them to jump into productive workflows from day one!", //No I18n
			learnMoreLink : "https://help.zoho.com/portal/en/kb/zoho-cliq/admin-guides/configurations/articles/how-to-customize-access-for-specific-modules#Default_Channels",	//NO I18N
			linkText : "Learn more" //No I18N
		}
	];
	
	var carouselParams =
	{
		slides : slides,
		avoidCloseButton : false,
		finalSlideCloseCallBack : function()
		{	self.isV4TourOpened = false;
			Settings.update({"announcementversion" : "v6" });    //NO I18N

			if( $("#ztb-announcement").length === 0)
			{
				UI.Announcement.showCustomAnnIcon();
			}
		},
		closeCallBack : function()
		{	
			self.isV4TourOpened  = false;
			Settings.update({"announcementversion" : "v6" }); //NO I18N

			if( $("#ztb-announcement").length === 0)
			{
				UI.Announcement.showCustomAnnIcon();
			}
		},

		customClass : { containerClass : "carus-sidebar-wrap six-o-onboarding" },	//NO I18N

		includeSideNavigation : true,

		avoidCloseButton : true,

		isAnnouncementIconClick : isAnnouncementIconClick,

		sideNaviProp : 
		{
			headerInfo : { text : "What's New", customHtml : `<span class="zcf-newfeature rotate45 zcl-onboard-font-clr font16"></span>` },

			// footerInfo : { btnTxt : "Next", btnClass : "zcl-btn-large " },	//NO I18N

			sectionInfo :
			{
				"Enhanced collaboration" : [ "Compose with ease", "Get notified about reactions", "Brand your meetings", "Lock ongoing meetings"],	//NO I18N

				"Boosted productivity" : [ "Customize keyboard shortcuts", "Keep up to date", "Configure smart alerts", "Receive a summary on demand", "Extract text effortlessly", "Simplify data visualization"],	//NO I18N

				"Advanced admin controls" : [ "Safeguard your data", "Granular access controls", "Clean up your data", "Default bots and channels" ] //NO I18N
			},

			sectionHeaders : [ "Enhanced collaboration", "Boosted productivity", "Advanced admin controls" ]	//NO I18N
		}
	}

	if( !this.isV4TourOpened  )
	{
		this.isV4TourOpened = true;

		// LazyLoader.loadCarouselComponent().then( ()=>
		// {
			var carouselComponent = new CarouselComponent( carouselParams );

			setTimeout( ()=> 
			{
				$('body').append( carouselComponent.render().$el );

				if( isAnnouncementIconClick )
				{
					carouselComponent.onGetStartedClick();
				}

			},450)

		// });
		// });
	}
	
}

UI.Announcement.showYearEndCampaignAnnouncementCarousel = function(isAnnouncementIconClick ){
	

	if( !isAnnouncementIconClick && Settings.getFromObj("announcementversion" , true ) ==="v9"){

		if( $("#ztb-announcement").length === 0) 
		{
			UI.Announcement.showCustomAnnIcon(true);
			return ;
		}

	}

	if(!$zcg._IS_YEAR_END_CAMPAIGN){
		return ;
	}

	var self = this;

	var carouselParams =
	{
		slides : [],
		isYearEndCampaign : true ,
		avoidCloseButton : false,
		yearEndData  : UI.Announcement.yearEndData  ,
		finalSlideCloseCallBack : function()
		{	
			self.isV4TourOpened = false;
			Settings.update({"announcementversion" : "v9" });    //NO I18N

			$(document).off('focusin.yearEndCampaign keyup.yearEndCampaign mouseup.yearEndCampaign focus.yearEndCampaign keydown.yearEndCampaign') ; //NO I18N


			if( $("#ztb-announcement").length === 0)
			{
				UI.Announcement.showCustomAnnIcon(true);
			}
		},
		closeCallBack : function()
		{	
			self.isV4TourOpened  = false;
			Settings.update({"announcementversion" : "v9" }); //NO I18N

			$(document).off('focusin.yearEndCampaign keyup.yearEndCampaign mouseup.yearEndCampaign focus.yearEndCampaign keydown.yearEndCampaign'); //NO I18N

			if( $("#ztb-announcement").length === 0)
			{
				UI.Announcement.showCustomAnnIcon(true);
			}
		},

		customClass : { containerClass : "year-end-campaign" },	//NO I18N

		avoidCloseButton : true,

		isAnnouncementIconClick : isAnnouncementIconClick
	}

	if( !this.isV4TourOpened  )
	{
		this.isV4TourOpened = true;

		//to update carrousel fingerprint 

		LazyLoaderFiles.carousel.js.minified = "/officechat/js/carousel-component-min."+$zcg._ANNOUNCEMENT.msg+".js" ; //NO I18N

		LazyLoader.loadCarouselComponent().then( ()=>
		{
			LazyLoader.loadZohoChartsFiles1().then( () =>{

				LazyLoader.loadZohoChartsFiles2().then( () => {

					var carouselComponent = new CarouselComponent( carouselParams );
     
					setTimeout( ()=> 
					{
						$('body').append( carouselComponent.render().$el );

					},450)
				
				 })
			})
		});
	}
}

UI.Announcement.isValidUser = function()
{
	// const PEOPLE_PLUS_USERS_PLANIDS = [9,39,41,42,-6,-26];

	let isConfigObjAvailable = (typeof Config != "undefined");	//NO I18N

	if( isConfigObjAvailable && Config.isKalviBundle() )
	{
		return false;
	}

	var validIds = !$zcg._ISZOHOORZYLKER && !( isConfigObjAvailable && Config.isLocalDC() );

	// let callPermissionIds = ["47249529","54107593","642212548","644801754","644802329","680095418","681430294","682304481","706910366","778186322" ,"38381471" ,"26221703" ,"63119718" ,"643754917" ,"684805401" ,"651903443" ,"641829343" ,"661081841" ,"712262497" ,"663749512" ,"47424859" ,"706111095" ,"740112301" ,"634161829" ,"667383113" ,"684479825" ,"669118606" ,"31406602" ,"669964901" ,"7401314" ,"647775557" ,"688858222" ,"678856025" ,"680335781" ,"681010490" ,"699510132" ,"692999810" ,"681725708" ,"681936362" ,"693358503" ,"41761688" ,"642998297" ,"643048232" ,"3085657" ,"690727349" ,"686760474" ,"30672906" ,"635721469" ,"705258225" ,"27118238" ,"699382719" ,"709490218" ,"709883107" ,"709993910" ,"704853137" ,"711571004" ,"687777289" ,"696782181" ,"714156483" ,"662169725" ,"713122892" ,"676815422" ,"722036373" ,"721842811" ,"805910337" ,"776335080" ,"727778749" ,"659391548" ,"686050214" ,"736414707" ,"739404053" ,"741805632" ,"750954752" ,"698637489" ,"746393457" ,"760176683" ,"750118740" ,"746631788" ,"756366210" ,"734177378" ,"654416864" ,"o-CT-767795820-663749512" ,"770288059" ,"771123589" ,"772067773" ,"774116843" ,"775034939" ,"778502058" ,"779700867" ,"782302648" ,"784310024" ,"789693378" ,"o-CT-789839478-663749512" ,"692397641" ,"699586447" ,"643528322" ,"644072619" ,"800336970" ,"o-CT-801364954-801252206" ,"801973040" ,"777697201" ,"743810284" ,"o-CT-803707811-803703770" ,"803580740" ,"800625672" ,"730715439" ,"o-CT-810033757-810029597" ,"764752684" ,"811895598" ,"o-CT-812263093-812265632" ,"o-CT-813913082-695051004" ,"o-CT-814422707-814420717" ,"o-CT-814499984-814293070" ,"816131395" ,"o-CT-817135048-678567316" ,"o-CT-818335638-816729898" ,"o-CT-821736444-821737809" ,"733042252" ,"18737487" ,"822523269" ,"827163075" ,"731308922" ,"831536414" ,"o-CT-834411950-663749512" ,"839200534" ,"840672047" ,"o-CT-846561111-743810284" ,"805839910" ,"848582326" ,"849882047" ,"851298514" ,"680703580" ,"852971877" ,"854548943"];	//NO I18N

	// let isValidId = callPermissionIds.includes($zcg._ZUID);

	var cliqUserIds = '60040402943,60040403544,60040408042,60040412257,60040394211,60040406691,60040390828,60040393581,58355719,11564192';

	return (cliqUserIds.split(',').indexOf($zcg._ZUID) >= 0) || validIds;
}

UI.Announcement.showCustomAnnIcon = function(isYearEndCampaign){

	if( UI.isZohoOneUnifiedUI() ){

		ZohoOneUnifiedUI.showAnnouncementIcon(true);
		return;

	}

	var announcement_icon_html ="" ;

	if(isYearEndCampaign){

		if(UI.isWorkPlaceBundle() || UI.isKalviBundle() ){
			announcement_icon_html = 
			`<div id="ztb-announcement" data-isyearendcampaign="true" class="new-ann-topicn mR10 flexM curP posrel zc-yec-annicon-celeb">
				<img data-qa=""celebrateimgicon" style="height: 20px;width: 20px;" src="/officechat/images/default/announcement_imgs/year_end_campaign/celebrateImg.svg"/>
				<span class="zcf-star-filed-curved zc-yec-topbar-star zc-yec-topbar-star-top"></span>
				<span class="zcf-star-filed-curved zc-yec-topbar-star"></span>
			</div>`
		}else {
			announcement_icon_html = 
			`<div id="ztb-announcement" data-isyearendcampaign="true" class="new-ann-topicn mR10 flexM curP posrel zc-yec-ann-topicn">
				<span class="font12" data-qa="wrappedtext">24' Wrapped!</span>
				<span class="zcf-star-filed-curved zc-yec-topbar-star zc-yec-topbar-star-top"></span>
				<span class="zcf-star-filed-curved zc-yec-topbar-star"></span>
			</div>`
		}	
	}else{
		announcement_icon_html = 
		`<div id="ztb-announcement" data-isyearendcampaign = "${isYearEndCampaign}" class="new-ann-topicn mR10 flexM curP posrel" style="background: linear-gradient(141.8deg, #d0d0d0 -18.19%, #a7a7a7 130.57%); width: 30px; height: 30px; border-radius: 100%;">
			<span class="zcf-announcement font17 fontB clrW"></span>
			<span id="ztb-announcement-close" class="zcl-abs-close  zcf-closeB fontB flexM clr-icon " style="display:none;"></span>
		</div>`;
	}
	
	$("#ztb-menu-container").prepend( announcement_icon_html );

	$("#ztb-announcement").on("click", function()
	{
		var isYearEndCampaign = $("#ztb-announcement")[0].dataset.isyearendcampaign ; //NO I18N
		if(isYearEndCampaign){
			UI.Announcement.showYearEndCampaignAnnouncementCarousel(true)
		}else{
			UI.Announcement.showTourAnnouncement( true );
		}
		
	});	

	$("#ztb-announcement-close").on("click", function( event )
	{
		event.stopPropagation();

		$("#ztb-announcement").remove();

		Settings.update({"announcementversion" : $zcg._ANNOUNCEMENT.version });  //No I18n 

	});	
};

UI.Announcement.addDynamicCssStyles = function( cssStyles = "" )
{
	if( cssStyles.length )
	{
		$("head").append(`<style>${cssStyles}</style>`);
	}
}

const WEBINAR_IMG_NAME = `modern_teams_collaboration`;

const WEBINAR_IMG_CSS =`.webinar-banner-img { width: 160px; height: 160px; background: url(${$zcg._IMGDEFAULTSTATICURL}/announcement_imgs/${WEBINAR_IMG_NAME}_light.png) no-repeat; background-size: contain; }
.nite-mode .webinar-banner-img { background: url(${$zcg._IMGDEFAULTSTATICURL}/announcement_imgs/${WEBINAR_IMG_NAME}_dark.png) no-repeat; background-size: contain; }
.nite-mode:is(.zc-graydark, .zc-classic) .webinar-banner-img, .zmAppDark .webinar-banner-img { background: url(${$zcg._IMGDEFAULTSTATICURL}/announcement_imgs/${WEBINAR_IMG_NAME}_grey.png) no-repeat; background-size: contain; }`;

UI.Announcement.addDynamicCssStyles( WEBINAR_IMG_CSS );

// UI.Announcement.isAmericanRegion = function()
// {
// 	typeof Intl != "undefined" && typeof Intl.DateTimeFormat === "function" && Intl.DateTimeFormat().resolvedOptions().timeZone.includes("America");	//NO I18N
// }