/*JQuery Extention function for listening to mousescroll
Code copied from Internet | OnTime: 1113321 | 7-9-2009*/
(function($) {
var types = ['DOMMouseScroll', 'mousewheel'];
$.event.special.mousewheel = {
	setup: function() {
		if ( this.addEventListener )
			for ( var i=types.length; i; )
				this.addEventListener( types[--i], handler, false );
		else
			this.onmousewheel = handler;
	},
	teardown: function() {
		if ( this.removeEventListener )
			for ( var i=types.length; i; )
				this.removeEventListener( types[--i], handler, false );
		else
			this.onmousewheel = null;
	}
};
$.fn.extend({
	mousewheel: function(fn) {
		return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
	},
	unmousewheel: function(fn) {
		return this.unbind("mousewheel", fn);
	}
});
function handler(event) {
	var args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true;
	event = $.event.fix(event || window.event);
	event.type = "mousewheel";
	if ( event.wheelDelta ) delta = event.wheelDelta/120;
	if ( event.detail     ) delta = -event.detail/3;
	// Add events and delta to the front of the arguments
	args.unshift(event, delta);
	return $.event.handle.apply(this, args);
}
})(jQuery);

/*Function to scroll Left*/
//Praveen Matoria | OnTime: 1113321 | 7-9-2009
function MoveLeft()
{
    if($index > 0)
    {
		$index = $index - 1;
		$ul.animate({left: "-" + $index * $width + "px"}, 200);
        $next.show();
    }
    if($index == 0)
        $prev.hide();
}
/*Function to scroll Right*/
//Praveen Matoria | OnTime: 1113321 | 9-7-2009
function MoveRight()
{
    if($index < $size - $visible)
    {
		$index = $index + 1;
		$ul.animate({left: "-" + $index * $width + "px"}, 200);
        $prev.show();
    }
    if($index == $size - $visible)
        $next.hide();
}
/*Function to Show Hide Scroll Images*/
//Praveen Matoria | OnTime: 1113321 | 8-14-2009
function ShowHideScrollImages()
{
	/*setting the visiblity of previous and next images. 
	Also attaching the mouse scroll if number of tabs is more then visible tabs.*/
    if ($size > $visible) {
        if ($index > 0)
            $prev.show();
        if ($index < $size - $visible)
            $next.show();
    } else { // has not more tabs to show
        /* fix of the rest of menu tabs which do not use this custom menu */
        $tabs.css("width","auto !important");
        $ul.css("width","auto !important");
        /* fix of the rest of menu tabs which do not use this custom menu */
    }
}
//Global variables declaration.
var $index = 0;//total number of tabs hidden from left.
var $size = 0;//number of tabs.
var $visible = 0;//number of tabs visible.
var $prev = null;//previous image.
var $next = null;//next image.
var $width = 0;//width of each tab.
var $ul = null;
var $this = null;//tabblock div.
var $tabs = null;//tabs div.
var $li = null;//li's under $ul.
var $configure = null;//configure link.
var $selected = -1;//tab index of selected tab.
var $ocid = 0 //OCID.
jQuery(document).ready(function()
{
	/*Initialization of global variables*/
	//Praveen Matoria | OnTime: 1113321 | 9-7-2009
	$this = jQuery("#tabblock");//tabblock div.
	$tabs = $this.children("#Tabs");//tabs div.
	$ul = $tabs.find("ul");//ul object.
	$li = $ul.children("li");//li's uner $ul.
	$configure = $this.next();//optional Configure Homepage link.		
		
	if($this != null && $this.length)
	{
		$prev = jQuery("#prevTab");//previous image.
		$next = jQuery("#nextTab");//next image.
		//Calling the tabs function(plugin).
		try
		{
		    $this.Tabs();
		    //Setting the mouse scroll to the tab.
		    $this.mousewheel(function(event, delta)
		    {
			    if(delta > 0 && $index > 0) //left movement.
				    MoveLeft();
			    else if(delta < 0 && $index < $size - $visible) //right movement.
				    MoveRight();
			    //Conditions to show/hide the previous/next images.
			    if($index == 0)
				    $prev.hide();
			    else if($index == $size - $visible)
				    $next.hide();
			    event.stopPropagation();
			    event.preventDefault();
		    });
            }
        catch (ex)
		{ }
		//Binding of previous image click.
		$prev.bind("click", MoveLeft);
		//Binding of next image click.
		$next.bind("click", MoveRight);
	}
	
});
jQuery(window).resize(function() {
    $this = jQuery("#tabblock"); //tabblock div.
    if ($this != null && $ul != null) {
        $ul.stop(false, true);
        try {
            $this.Tabs();
        }
        catch (ex)
		{ }
    }
});

/*Function that has the logic to apply scroll.*/
//Praveen Matoria | OnTime: 1113321 | 7-9-2009
jQuery.fn.Tabs = function()
{
    return this.each(function()
    {
		//Hiding the images initially.
		$prev.hide();
		$next.hide();
		//Resetting the width and size to 0.
		$width = 0;
		$size = 0;
		$ocid = jQuery("#hOCIDTab").val();
		//Iterating through list of tabs and calculating the total width and number of tabs.
		jQuery("#sectiontab > li").each(function(tabIndex)
		{
			$width += jQuery("#sectiontab > li").eq(tabIndex).outerWidth(true);//width of each tab.
			$size += 1;
		});
		
		if($width == 0) //In case the company doesn't have tabs.
			return;
			
		if($ocid == 698)
		{$width = $width + 3;}	
		
		$width = $width / $size; //Calculating average width.
		$this.hide();
		if($configure != null && $configure.length > 0)
			$visible = Math.floor((parseInt(jQuery("#tabcorner_center").outerWidth(true)) - 13 - parseInt($configure.outerWidth(true))) / $width);//number of visible tabs.
		else
			$visible = Math.floor((parseInt(jQuery("#maincontainer").outerWidth(true)) - 13) / $width);//number of visible tabs.
		$this.show();
		
		if($visible > $size)
			$visible = $size
		$this.width(($width * $visible) + 13);//width of the visible area, including the right arrow.
		$tabs.width($width * $visible);//width of the visible are, excluding the right arrow.
		$ul.width($width * $size);//width of all the tabs.
		
		//Retrieving the index of selected tab.
	    jQuery($li + "[id='sectiontab_on']").each(function()
		{
			$selected = $li.index(this);
		});
		if($visible > $selected) //if selected tab is in first $visible tabs.
			$index = 0;
		else if(($size - $visible) >= ($selected + 1)) //if selected tab is in last $visible tabs
			$index = $selected;
		else //otherwise.
			$index = $size - $visible;

		//setting the left css property.
		if($ul.css("left") != "-" + ($index * $width))
		{
			$ul.css("left", "-" + ($index * $width) + "px");
			ShowHideScrollImages();
		}
		else 
			ShowHideScrollImages();
    });
};