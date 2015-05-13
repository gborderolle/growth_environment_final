
/****  Close the pop-up pressing ESC on the keyboard  ****/
var divIdtemp, iframeIdtemp;

function ESCkeyBinding() {
    jQuery(document).bind('keyup', function (e) {
        if (e.which == 27) {
            if (divIdtemp != null && divIdtemp != '') {
                $("#" + divIdtemp).find("a[class='pclose']").click()
            }
        }
    });
}
$(document).ready(ESCkeyBinding);

$(document).ready(function () {

    if (!$('#blackout').length) {

        $("body").append("<div id='blackout' style='display: none'> </div>");
    }



    $("#blackout").click(function () {
        if (divIdtemp != null && divIdtemp != '') {
            $("#" + divIdtemp).find("a[class='pclose']").click()
        }
    });

});

function reposition(divid) {

    $("form").append($("#" + divid)[0]);
}



/*************** Spinner to show when loading page inside iFrame *********************************/
; (function ($) {

    /**
    * Displays loading mask over selected element(s). Accepts both single and multiple selectors.
    *
    * @param label Text message that will be displayed on top of the mask besides a spinner (optional). 
    * 				If not provided only mask will be displayed without a label or a spinner.  	
    * @param delay Delay in milliseconds before element is masked (optional). If unmask() is called 
    *              before the delay times out, no mask is displayed. This can be used to prevent unnecessary 
    *              mask display for quick processes.   	
    */

    $.fn.mask = function (label, delay) {
        $(this).each(function () {
            if (delay !== undefined && delay > 0) {
                var element = $(this);
                element.data("_mask_timeout", setTimeout(function () { $.maskElement(element, label) }, delay));
            } else {
                $.maskElement($(this), label);
            }
        });
    };

    /*******************************************************************************
    * Removes mask from the element(s). Accepts both single and multiple selectors.*
    *******************************************************************************/
    $.fn.unmask = function () {
        $(this).each(function () {
            $.unmaskElement($(this));
        });
    };

    /******************************************************************************************
    * Checks if a single element is masked. Returns false if mask is delayed or not displayed.* 
    ******************************************************************************************/
    $.fn.isMasked = function () {
        return this.hasClass("masked");
    };

    $.maskElement = function (element, label) {

        //if this element has delayed mask scheduled then remove it and display the new one
        if (element.data("_mask_timeout") !== undefined) {
            clearTimeout(element.data("_mask_timeout"));
            element.removeData("_mask_timeout");
        }

        if (element.isMasked()) {
            $.unmaskElement(element);
        }

        if (element.css("position") == "static") {
            element.addClass("masked-relative");
        }

        element.addClass("masked");

        var maskDiv = $('<div class="loadmask"></div>');

        //auto height fix for IE
        if (navigator.userAgent.toLowerCase().indexOf("msie") > -1) {
            maskDiv.height(element.height() + parseInt(element.css("padding-top")) + parseInt(element.css("padding-bottom")));
            maskDiv.width(element.width() + parseInt(element.css("padding-left")) + parseInt(element.css("padding-right")));
        }

        //fix for z-index bug with selects in IE6
        if (navigator.userAgent.toLowerCase().indexOf("msie 6") > -1) {
            element.find("select").addClass("masked-hidden");
        }

        element.append(maskDiv);

        var maskMsgDiv = $('<div class="loadmask-msg" style="display:none;"></div>');

        if (label !== undefined) {
            maskMsgDiv.append('<div>' + label + '</div>');
        } else {
            maskMsgDiv.append('<div> &nbsp; </div>');
        }

        element.append(maskMsgDiv);

        //calculate center position
        maskMsgDiv.css("top", Math.round(element.height() / 2 - (maskMsgDiv.height() - parseInt(maskMsgDiv.css("padding-top")) - parseInt(maskMsgDiv.css("padding-bottom"))) / 2) + "px");
        maskMsgDiv.css("left", Math.round(element.width() / 2 - (maskMsgDiv.width() - parseInt(maskMsgDiv.css("padding-left")) - parseInt(maskMsgDiv.css("padding-right"))) / 2) + "px");

        maskMsgDiv.show();
    };

    $.unmaskElement = function (element) {
        //if this element has delayed mask scheduled then remove it
        if (element.data("_mask_timeout") !== undefined) {
            clearTimeout(element.data("_mask_timeout"));
            element.removeData("_mask_timeout");
        }

        element.find(".loadmask-msg,.loadmask").remove();
        element.removeClass("masked");
        element.removeClass("masked-relative");
        element.find("select").removeClass("masked-hidden");
    };

})(jQuery);

/* Set timeout to spiner (not working because of iframe)
var spinnerTimeout = 10000;  // 20 segundos
var spinnerTimeOutID = null;
var spinnerKill = null;

function StartMask(element) {
    jQuery(element).mask('Loading...');
    spinnerKill = element;
    spinnerTimeOutID = window.setTimeout(KillMask, spinnerTimeout);
}

function CloseMask(element) {
    jQuery(element).unmask();
}

function KillMask() {
    jQuery(spinnerKill).unmask();
    window.clearTimeout(spinnerTimeOutID);
    spinnerKill = null;
}
*/
/**************************************************************************************************/

function openDivAsPopup(divId, width, height, useFixedPositionning) {

    divIdtemp = divId;
    showBlackout();
    reposition(divId);
    document.getElementById(divId).style.display = 'block';
    document.getElementById(divId).style.width = width + 'px';
    document.getElementById(divId).style.height = height + 'px';
    if (useFixedPositionning) setFixedPosition(divId, width, height);
    else setTopLeft(divId, width, height);
    return false;
}

function openDivAsPopupNew(divId, settings) {
    if (Object.prototype.toString.apply(divId) !== "[object String]") throw Error("Invalid Argument. \"divId\" is not a string");
    if (Object.prototype.toString.apply(settings) !== "[object Object]") throw Error("Invalid Argument. \"settings\" is not an object");

    divIdtemp = divId;
    var width = (typeof settings.width === 'undefined' || settings.width <= 0 ? 600 : settings.width);
    var height = (typeof settings.height === 'undefined' || settings.height <= 0 ? 400 : settings.height);
    var showBlackout = (typeof settings.showBlackout === 'undefined' ? true : settings.showBlackout);
    var repositionDivHtml = (typeof settings.repositionDivHtml === 'undefined' ? true : settings.repositionDivHtml);
    var removeScrollBars = (typeof settings.removeScrollBars === 'undefined' ? true : settings.removeScrollBars);

    if (removeScrollBars) RemoveScrollBars();
    if (showBlackout) showBlackout();
    if (repositionDivHtml) reposition(divId);

    document.getElementById(divId).style.display = 'block';
    document.getElementById(divId).style.width = width + 'px';
    document.getElementById(divId).style.height = height + 'px';
    setFixedPosition(divId, width, height);
    return false;
}


function closeDiv(divId, iframeId, refreshPage) {
    hideBlackout();
    document.getElementById(divId).style.display = 'none';
    if (iframeId != null && iframeId != '' && document.getElementById(iframeId) != null)
        document.getElementById(iframeId).src = '';
    if (refreshPage == 1)
        window.location.href = window.location.href;
    divIdtemp = "";
    iframeIdtemp = "";
    //RestoreScrollBars();
    return false;
}
function openDivPopup(divId, iframeId, url, width, height, iframeStyle, scrolling) {
    if (iframeId != null && iframeId != '' && document.getElementById(iframeId) != null) {
        document.getElementById(iframeId).src = url;
        divIdtemp = divId;
        iframeIdtemp = iframeId;
        if (iframeStyle != null)
            jQuery("#" + iframeId).attr('style', iframeStyle);
        if (scrolling != null)
            jQuery("#" + iframeId).attr('scrolling', scrolling);
        else
            jQuery("#" + iframeId).attr('scrolling', 'auto');

        showBlackout();
        reposition(divId);
        document.getElementById(divId).style.display = 'block';
        document.getElementById(divId).style.width = width + 'px';
        document.getElementById(divId).style.height = height + 'px';
        setTopLeft(divId, width, height);
        try {
            jQuery("#" + divId).mask("Loading...");
            jQuery("#" + iframeId).load(function () {
                jQuery("#" + divId).unmask();
            });

            if (iframeId != null && iframeId != "") {
                jQuery("#" + iframeId).load(function () {
                    jQuery("#" + iframeId).contents().bind('keyup', function (ei) {
                        if (ei.which == 27) {
                            //alert('esc pressed on IFRAME');
                            if (iframeIdtemp != null && iframeIdtemp != '') {
                                window.parent.$("#" + iframeIdtemp).parent("div").children("a[class='pclose']").click();
                            }
                        }
                    })
                });
            }
        }
        catch (ex) {
            // Error loading spiner (do nothing)
        }
    }
    return false;
}

function setFixedPosition(divId, width, height) {

    // Next, determine the coordinates of the center of browser's window
    var winWidth = 0;
    var winHeight = 0;

    if (window.innerWidth) {
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;
    }
    else if (document.documentElement) {
        winWidth = document.documentElement.offsetWidth;
        winHeight = document.documentElement.offsetHeight;
    }
    else if (document.body) {
        winWidth = document.body.offsetWidth;
        winHeight = document.body.offsetHeight;
    }
    else {
        //should not get in here
        winWidth = -1
        winHeight = -1
    }

    var topOffset = (winHeight - height) / 2;
    var leftOffset = (winWidth - width) / 2;

    if (topOffset <= 0) topOffset = 10;
    if (leftOffset < 0) leftOffset = 0

    document.getElementById(divId).style.top = topOffset + 'px';
    document.getElementById(divId).style.left = leftOffset + 'px';
    document.getElementById(divId).style.position = "fixed";
}

function RemoveScrollBars() {
    if (document.body.scroll) {
        document.body.scroll = "no"; // ie only; // ie only
    }
    else {
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    }
}

function RestoreScrollBars() {
    if (document.body.scroll && document.body.scroll == "no") {
        document.body.scroll = "yes"; // ie only
    }
    else if (document.documentElement.style.overflow == "hidden") {
        document.documentElement.style.overflow = 'auto';  // firefox, chrome
    }
}

function showBlackout() {
    document.getElementById('blackout').style.display = 'block';
    document.getElementById('blackout').style.height = getDocHeight() + 'px';
    document.getElementById('blackout').style.width = jQuery(document).width() + 'px';
}
function hideBlackout() {
    document.getElementById('blackout').style.display = 'none';
}

function getDocHeight() {
    var D = document;
    return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
}

function pageWidth(objId) {
    var parentObj = document.getElementById(objId).offsetParent;
    var maxWidth = window.innerWidth != null ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : 0;
    if (parentObj != null && parentObj.clientWidth == maxWidth) return maxWidth;
    else return parentObj.clientWidth;
}

function pageHeight() {
    return window.innerHeight != null ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body != null ? document.body.clientHeight : 0;
}

function setTopLeft(divId, width, height) {
    // First, determine how much the visitor has scrolled
    var scrolledX, scrolledY;
    if (self.pageYOffset) {
        scrolledX = self.pageXOffset;
        scrolledY = self.pageYOffset;
    }
    else if (document.body) {
        scrolledX = document.body.scrollLeft;
        scrolledY = document.body.scrollTop;
    }
    else if (document.documentElement && document.documentElement.scrollTop) {
        scrolledX = document.documentElement.scrollLeft;
        scrolledY = document.documentElement.scrollTop;
    }

    // Next, determine the coordinates of the center of browser's window
    var topOffset = scrolledY + ((pageHeight() - height) / 2);
    var leftOffset = scrolledX + ((pageWidth(divId) - width) / 2);
    document.getElementById(divId).style.top = topOffset + 'px';
    document.getElementById(divId).style.left = leftOffset + 'px';
}
