$(document).ready(function() {
		
	// clear search default text on focus
	$(".clearDefault").focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
	}).blur(function() {
		if( !this.value.length ) {
			this.value = this.defaultValue;
		}
	});
	

	// Smooth scrolling if not mobile

	$navHeight = $('nav').height();
	$headerHeight = $('header').height();
	var screen_width = $(window).width();
	if (screen_width >= 1024) { 
		featuresOffset = -20;
		firstOffset = 140;
		featuresTop = 280;
		resourcesOffset = 150;
    };
	if (screen_width < 1024) { 
		featuresOffset = 110;
		firstOffset = 140;
		featuresTop = 340;
		resourcesOffset = 40;
    };
    if (screen_width < 640) { 
		featuresOffset = 65;
		firstOffset = 140;
		featuresTop = 380;
		resourcesOffset = 30;
    };
	
	$('header').localScroll({ 
   		target: $(window), 
  		axis: 'y',
  		offset: - $headerHeight,
   		duration: 800,
   		easing: 'easeOutQuad',
   		hash: false
	});
	
	$('.orange.features').not('.flat').not(".first").localScroll({ 
   		target: $(window), 
  		axis: 'y',
  		offset: featuresOffset,
   		duration: 800,
   		easing: 'easeOutQuad',
   		hash: false
	});
	
	$('.orange.features li.first').localScroll({ 
   		target: $(window), 
  		axis: 'y',
  		offset: featuresOffset + firstOffset,
   		duration: 800,
   		easing: 'easeOutQuad',
   		hash: false
	});
	
	$('.subnav').localScroll({ 
   		target: $(window), 
  		axis: 'y',
  		offset: - resourcesOffset,
   		duration: 800,
   		easing: 'easeOutQuad',
   		hash: false
	});
	
	$('h3.border-bottom').localScroll({ 
   		target: $(window), 
  		axis: 'y',
  		offset: 0,
   		duration: 800,
   		easing: 'easeOutQuad',
   		hash: false
	});
	
	$('.no-bar').localScroll({ 
   		target: $(window), 
  		axis: 'y',
  		offset: -60,
   		duration: 800,
   		easing: 'easeOutQuad',
   		hash: false
	});
	

	
	// Make nav sticky when scrolled
    getTopOffset = function() {
    	top_offset = 0;
    	icons_offset = 0;
    	sidebar_offset = 0;
    	share_offset = 0;
    	bottom_offset = 0; 
    	
		if ( screen_width < 1024 ) {
			navHieght = 0
		};
		
		if ( screen_width > 1024 ) {
			navHieght = 80
		};
    	
    	if ($("nav.desktop").is('*')) {
  			top_offset = $('nav.desktop').offset().top + 20;
		};
		
		if ($(".orange.features").is('*')) {
  			icons_offset = $('.orange.features').offset().top + featuresTop;
		};
		
		if ($("#sharing").is('*')) {
  			share_offset = $('#sharing').offset().top - 60 - navHieght;
  			bottom_offset = $('footer').offset().top -500;
		};
		
		if ($("#social-sidebar").is('*')) {
  			sidebar_offset = $('#social-sidebar').offset().top - 60 - navHieght;
  			bottom_offset = $('footer').offset().top -600;  
		};  	
    };
    
    $(window).scroll(function() {
      var scroll_top = $(window).scrollTop();

      // Fixed Desktop Nav
      if (scroll_top > top_offset) {
        $('nav.desktop').addClass('fixed');
      } else {
       	$('nav.desktop').removeClass('fixed');
      };
      
       // Fixed Social Sharing
      if (scroll_top > share_offset) {
        $('#sharing').addClass('fixed');
      } else {
       	$('#sharing').removeClass('fixed');
      };
      
      if (screen_width > 640) {
      	if (scroll_top > bottom_offset) {
        	$('#sharing').fadeOut(250);
      	}
      	else {
      		$('#sharing').fadeIn(250);
       	}
      };
      
      // Fixed sidebar Social
      if (scroll_top > sidebar_offset) {
        $('#social-sidebar').addClass('fixed');
        socialWidth = $('#social-sidebar').parent().width();
        $('#social-sidebar').css({"width" : socialWidth});
      } else {
       	$('#social-sidebar').removeClass('fixed');
      };
      
      if (screen_width > 640) {
      	if (scroll_top > bottom_offset) {
        	$('#social-sidebar').fadeOut(250);
      	}
      	else {
       		$('#social-sidebar').fadeIn(250);
       	}
      };
      
      // Fixed Features Nav
      if (scroll_top > icons_offset) {
        $('.orange.features').not('.flat').addClass('fixed');
        $('.orange.features.fixed').not('.flat').fadeIn(300);
        $('#hero.features').addClass('fixed-nav');
      } else {
       	$('.orange.features').not('.flat').removeClass('fixed');
       	$('.orange.features.fixed').not('.flat').hide();
       	$('#hero.features').removeClass('fixed-nav');
      };
     
      //resizeSlides();

    });
    
    // Main Nav
    $(".desktop li.top").hover(function() {
        
    	var activeDrop = $(this).find("ul.sub");
    	$("ul.sub").hide();
    	$(activeDrop).fadeIn(200);
    	
    }); 
    
    // Main Nav
    $("header li.top").hover(function() {
        
    	var activeDrop = $(this).find("ul.sub");
    	$("ul.sub").hide();
    	$(activeDrop).fadeIn(200);
    	
    }); 
    
	// Features Tabs
	$('.tab_group').each( function(i) {
		
		//When page loads...
		var tabContent = $(this).find('.tab_content');
		var tabContainer = $(this).find('.tab_container');
		var firstTabContent = $(this).find('.tab_content:first');
		var tabsList = $(this).find('.orange ul.tabs');
		var tabs = $(this).find(".orange ul.tabs li");
		var firstTab = $(tabsList).find('li:first');
		var sectionHeight = $(firstTabContent).height();
		var navHeight = $(this).find('.orange.nav').height();
		
		$(tabContent).css({
			"height": sectionHeight
		});
		
		$(tabContainer).css({
			"height": sectionHeight,
			"overflow": "hidden"
		});
		
		$(tabContent).hide(); //Hide all content
		
		$(firstTab).addClass("active").show(); //Activate first tab
		$(firstTabContent).show(); //Show first tab content
		
		
		
		//On Click Event
		$(tabs).find('a').hover(function() {
			if(!$(this).parent().hasClass('active')) {
				$(tabContent).stop();
				
				$(tabs).removeClass("active"); //Remove any "active" class
				$(this).parent().addClass("active"); //Add "active" class to selected tab
				$(tabContent).css({
					"position": "absolute",
					"top": "0"
				});
				var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
				$(tabContent.not(activeTab)).fadeOut(450, function() {
					$(activeTab).css({"position": "static"});
				}); //Hide all tab content
				
				$(activeTab).fadeIn(600); //Fade in the active ID content
			}
		}, function(){
        	// do nothing on mouseout
    	});	
		
		$(tabs).find('a').click(function() {
			return false;
		});
	});

    selectStyling = function() {
		$.each($('select'), function () {
        	$(this).selectmenu({ width : $(this).parent().width()})
    	});
    }
    
    // position social sharing
	sharePosition = function() {
		$window = $(window).width();
		if( $window < 1240 ) {
			$('#sharing').addClass('inline');
		} else {
			$('#sharing').removeClass('inline');	
		}
   	};
    
    // On window resize
    $(window).resize(function() {
    	selectStyling();
    	sharePosition(); 
    	//getWidth(); 
    	//resizeSlides();
    	//$('.cycle-slideshow').cycle('reinit');
    });
    
    // Expand Button
    $('#expand').click(function() {
    	if ( $(this).hasClass('closed') ) {
    		$('#expanded-content').slideToggle(800);
    		$('#expand').closest('.blue').addClass('flat');
    		$(this).removeClass('closed');
    		$(this).addClass('open');
    	} else {
    		$('#expanded-content').slideToggle(500, function() {
    			$('#expand').closest('.blue').removeClass('flat');
    		});
    		$(this).removeClass('open');
    		$(this).addClass('closed');
    	}
    
    	return false;
    });
    
    // FAQs
    $('.faq h5 a').click(function() {
    	$parent = $(this).closest('.faq');
    	$content = $parent.find('.answer');
    	$content.slideToggle(250);
    	return false;
    });
    
    
    // On page load
    getTopOffset();
    selectStyling();
    sharePosition(); 
    //getWidth();
    //resizeSlides(); 
 
	
	// Mobile Nav
	$("#nav-open").click(function() {
		$("nav.mobile").animate({top:"0"}, 250);
		$(this).hide();
		$("#nav-close").show();
		return false;
	});
	
	$("#nav-close").click(function() {
		$("nav.mobile").animate({top:"-800"}, 250);
		$(this).hide();
		$("#nav-open").show();
		$("ul.sub").slideUp(100);
		return false;
	});
	
	$("nav.mobile li.top > a").click(function() {
		var activeSub = $(this).parent().find("ul.sub");
    	$(activeSub).slideToggle(200);
    	return false;
	});
	
	// SEO read more
	$(".seo a.expand").click(function() {
		$("#seo").toggle(400);
		return false;
	});
	
	// Resources Show All in Category	
	
	$.fn.toggleText = function(t1, t2){
	  if (this.text() == t1) this.text(t2);
	  else                   this.text(t1);
	  return this;
	};
	
	
	$('.grid.thirds.resources a.all').click(function(){
		var button = $(this);
	    var parent = $(this).closest('.grid.thirds.resources');
		var expanded = $(parent).find('.hidden');
		$(expanded).slideToggle(250, function() {
			$(button).toggleText('View All', 'View Less');
		});
		
		return false;
	})
	
		
});