function checkTextAreaMaxLength(textBox, e, length) {
    var mLen = textBox["MaxLength"];
    if (null == mLen)
        mLen = length;

    var maxLength = parseInt(mLen);
    if (!checkSpecialKeys(e)) {
        if (textBox.value.length > maxLength - 1) {
            if (window.event)//IE
                e.returnValue = false;
            else//Firefox
                e.preventDefault();
        }
    }
}
function checkSpecialKeys(e) {
    if (e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40)
        return false;
    else
        return true;
}

//closes the popup and refreshes the parent page
function refreshParent() {
    try {
        window.opener.location.href = window.opener.location.href;
        if (window.opener.progressWindow) {
            window.opener.progressWindow.close()
        }
        window.close();
    }
    catch (ex) {
        //for forward candidate, the window.opener is null, so hs put try..catch for just time being
    }
}

//closes the popup and refreshes the parent page
function refreshParentKeepOpenPop() {
    window.opener.location.href = window.opener.location.href;
}
//Returns true if val is a blank string
function IsBlankInput(val) {
    var blankString = trimSpace(val);
    if (blankString.length == 0) {
        return true;
    }

    return false;
}

//Returns true if HTML tags are found in text-box value
function HasHtmlInTextBox(str) {
    //reg expression is: "<" character followed by any case-insensitive alphabetic character    
    var reStartTag = /<+[A-Za-z]/g;
    var matchArray = str.match(reStartTag);
    if (matchArray != null) {
        return true;
    }
    return false;
}

//Displays warning and returns false if user is trying to input html in a text box
//Use this function in the onclick client event of a submit button to validate input before sending to server.
function IsValidTextInput(str) {
    if (!HasHtmlInTextBox(str)) {
        return true;
    }

    alert("Please, do not enter any HTML in the input text box!");
    return false;

}

//returns true if the user input only numbers from 0 to 9 in a text box
function IsWholeNumber(txtBox) {
    re = /[^0-9]/;
    if (txtBox.value.length > 0) {
        if (txtBox.value.match(re)) {
            alert('You must enter whole numbers only.');
            txtBox.focus();
            txtBox.select();
            return false;
        }
    }

    return true;
}

//returns true if the user input only numbers from 0 to 9 in a text box
function IsWholeNumberGreaterZero(txtBox) {
    if (IsWholeNumber(txtBox)) {
        if (parseInt(txtBox.value) == 0) {
            alert('You must enter whole numbers greater than zero (0).');
            txtBox.focus();
            txtBox.select();
            return false;
        }
    }
    return true;
}

//returns true if the user input only numbers from 0 to 9 in a text box
function IsWholeNumberLessThan(txtBox, maxValue) {
    if (IsWholeNumber(txtBox)) {
        if (parseInt(txtBox.value) > maxValue) {
            alert('You must enter whole numbers less than ' + maxValue + '.');
            txtBox.focus();
            txtBox.select();
            return false;
        }
    }
    return true;
}

function IsValidPercentageValue(txtBox) {
    var val = txtBox.value;

    re = /[^0-9]/;

    if (val.replace(".", "").length > 0) {
        if (val.replace(".", "").match(re)) {
            alert('You must enter percentage value only less than or equal to 100.');
            txtBox.focus();
            txtBox.select();
            return false;
        }
    }

    if (val.indexOf(".") > -1) {
        if ((val.indexOf(".")) >= 3 || (parseFloat(val) > 100)) {
            alert("You must enter percentage value only less than or equal to 100.");
            txtBox.focus();
            return false;
        }
        /* else if(val.length - (val.indexOf(".")+1) > 2)
        {
        alert("You must enter percentage value only less than or equal to 100");
        txtBox.focus();
        return false;
        }
        */
    }
    else {
        if (val.length > 3 || (parseInt(val) > 100)) {
            alert("You must enter percentage value only less than or equal to 100.");
            txtBox.focus();
            return false;
        }
    }
    return true;
}

function IsValidInteger(txtBox) {
    var val = txtBox.value;
    if (val.indexOf(".") > 0 || val.indexOf(",") > 0) {
            alert('You must enter integer numbers.');
            txtBox.focus();
            txtBox.select();
            return false;
        }
        return true;
}

function autoWidthDropDown(obj, width) {
    //alert(obj);
    var maxlength = 0;
    var mySelect = document.getElementById(obj);
    for (var i = 0; i < mySelect.options.length; i++) {
        if (mySelect[i].text.length > maxlength) {
            maxlength = mySelect[i].text.length;
        }
    }
    // alert(maxlength);
    if (((maxlength * 7) + 10) > width) {
        //alert((maxlength * 7)+10);
        mySelect.style.width = (maxlength * 7) + 10;
    }
}


function popup(URL, NAME, WIDTH, HEIGHT, SCROLL) {
    remote = window.open(URL, NAME, "dependent=yes,alwaysraised=yes,toolbar=no,width=" + WIDTH + ",height=" + HEIGHT + ",status=no,scrollbars=" + SCROLL + ",resizable=yes,menubar=no");
}


//** Function migrated to the GlobalContent-Javascript-Common.js **//
function popupOpen(URL, TITLE, NAME, WIDTH, HEIGHT, SCROLL) {
    var savOT = location.protocol + "//" + window.parent.location.host + "/ICM/OpportunityTracker/SaveOpportunity.aspx?oppurl=" + URL + "&title=" + TITLE;
    remote = window.open(savOT, NAME, "dependent=yes,alwaysraised=yes,toolbar=no,width=" + WIDTH + ",height=" + HEIGHT + ",status=yes,scrollbars=" + SCROLL + ",resizable=yes,menubar=no,top=25,left=25");
}
//** Function migrated to the GlobalContent-Javascript-Common.js **//

//to expand/collpase div
function ShowHideDiv(divId, hrefClass) {
    if (document.getElementById(hrefClass).className == "") {
        document.getElementById(divId).style.display = 'block';
        document.getElementById(hrefClass).className = 'close';
    }
    else {
        document.getElementById(divId).style.display = 'none';
        document.getElementById(hrefClass).className = '';
    }
}

function ShowVideoPopup(fileName) {
    window.open("http://vimeo.com/moogaloop.swf?clip_id=" + fileName + "&server=vimeo.com", "blank", "height=321, width=365,scrollbars=no,top=100,left=270")
}
/* COOKIES */

var Cookies = {
    init: function() {
        var allCookies = document.cookie.split('; ');
        for (var i = 0; i < allCookies.length; i++) {
            var cookiePair = allCookies[i].split('=');
            this[cookiePair[0]] = cookiePair[1];
        }
    },
    create: function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
        this[name] = value;
    },
    erase: function(name) {
        this.create(name, '', -1);
        this[name] = undefined;
    }
};
Cookies.init();
Cookies['RSSJobLeadsDefaultCookie'] = 25;

function saveCookieForTask(id, CokieName) {
    Cookies.create(CokieName, document.getElementById(id).value, 7);
}

function saveCookieForGoals(CokieNameGoal, idGoal, CokieNameCycle, idCycle) {
    //debugger;
    Cookies.create(CokieNameGoal, idGoal, 7);
    Cookies.create(CokieNameCycle, idCycle, 7);
    Navigate();
}

function saveCookieForBookMarks(id, CokieName, totalCheckBoxCount) {
    var hideBookmark = "";
    for (var i = 1; i <= totalCheckBoxCount; i++) {
        if (document.getElementById(id + i).checked) {
            if (hideBookmark == "") {
                hideBookmark = id + i; //document.getElementById(id+i).value;
            }
            else {
                hideBookmark = hideBookmark + "," + id + i; //document.getElementById(id+i).value;
            }
        }
    }
    Cookies.create(CokieName, hideBookmark, 7);

}

function saveCookie(id, CokieName) {
    //        Changes done cy VS, ontime ticket 1114836
    for (var i = 1; i <= 5; i++) {
        var created = false;
        if (document.getElementById(id + i).checked) {
            Cookies.create(CokieName, document.getElementById(id + i).value, 7);
            created = true;
            break;
        }
    }
}

function SetEventListFromCookie() {
    for (var i = 1; i <= 4; i++) {
        if (Cookies['name']) {
            if (document.getElementById("test" + i)) {
                if (document.getElementById("test" + i).value == Cookies['name']) {
                    if (document.getElementById("test" + i))
                        document.getElementById("test" + i).checked = true;
                    showFilteredEventsinWidget(i, 'eventDate', 'eventItem', '__HeventCount', '__GeventCount');
                }
            }
        }
        else {
            if (document.getElementById("test3"))
                document.getElementById("test3").checked = true;
            showFilteredEventsinWidget(3, 'eventDate', 'eventItem', '__HeventCount', '__GeventCount');
        }
    }
}

function SetAnnouncementListFromCookie() {
    for (var i = 1; i <= 5; i++) {
        if (Cookies['RadioAnnouncements'] && document.getElementById("Radio" + i)) {
            if (document.getElementById("Radio" + i).value == Cookies['RadioAnnouncements']) {
                document.getElementById("Radio" + i).checked = true;
                showFilteredEvents(i, 'AnnouncementDate', 'AnnouncementsItem', '__HAnnouncementCount');
            }
        }
        else {
            if (document.getElementById("Radio5"))
                document.getElementById("Radio5").checked = true;
            showFilteredEvents(8, 'AnnouncementDate', 'AnnouncementsItem', '__HAnnouncementCount');
        }
    }
}
function SetTaskListFromCookie() {
    if (Cookies['TaskCount']) {
        showFilteredEvents(5, 'TaskItem', Cookies['TaskCount'], '__HTaskCount');
        if (document.getElementById("TaskList"))
            document.getElementById("TaskList").value = Cookies['TaskCount'];
    }
    else {
        showFilteredEvents(5, 'TaskItem', "5", '__HTaskCount');
        if (document.getElementById("TaskList"))
            document.getElementById("TaskList").value = "5";
    }
}
function SetPrivateJobLeadsListFromCookie() {
    if (Cookies['PrivateJobLeadsCountCookie']) {
        showFilteredEvents(5, 'PrivateJobLeadsItem', Cookies['PrivateJobLeadsCountCookie'], '__HPrivateJobLeadsCount');
        if (document.getElementById("PrivateJobLeadsList"))
            document.getElementById("PrivateJobLeadsList").value = Cookies['PrivateJobLeadsCountCookie'];
    }
    else {
        showFilteredEvents(6, 'PrivateJobLeadsItem', "5", '__HPrivateJobLeadsCount');
        if (document.getElementById("PrivateJobLeadsList"))
            document.getElementById("PrivateJobLeadsList").value = "5";
    }
}
function SetRSSJobLeadsListFromCookie() {
    if (Cookies['RSSJobLeadsCountCookie']) {
        showFilteredEvents(5, 'RSSJobLeadsItem', Cookies['RSSJobLeadsCountCookie'], '__HRSSJobLeadsCount');
        if (document.getElementById("RSSJobLeadsList"))
            document.getElementById("RSSJobLeadsList").value = Cookies['RSSJobLeadsCountCookie'];
    }
    else {
        showFilteredEvents(6, 'RSSJobLeadsItem', "5", '__HRSSJobLeadsCount');
        if (document.getElementById("RSSJobLeadsList"))
            document.getElementById("RSSJobLeadsList").value = "5";
    }
}
function SetBookMarkFromCookie() {
    if (document.getElementById("__HBookMarkCount") != null) {
        var totalCount = document.getElementById("__HBookMarkCount").value;
        for (var i = 1; i <= totalCount; i++) {
            if (Cookies['SelectBookmarks'] && document.getElementById("CheckBox" + i)) {
                var cookieData = Cookies['SelectBookmarks'];
                var sSplit = cookieData.split(',');
                for (j = 0; j < sSplit.length; j++) {
                    if (document.getElementById("CheckBox" + i).id == sSplit[j]) {
                        document.getElementById("CheckBox" + i).checked = true;
                        showFilteredEvents(7, 'bodycontdlast', i, '__HBookMarkCount');
                        break;
                    }
                }
            }
            else {
                if (Cookies['SelectBookmarks'] != "") {
                    if (document.getElementById("CheckBox" + i))
                        document.getElementById("CheckBox" + i).checked = true;
                }
                showFilteredEvents(7, 'bodycontdlast', i, '__HBookMarkCount');
            }
        }
    }
}

function SetListFromCookie() {
    SetEventListFromCookie();
    SetAnnouncementListFromCookie();
    SetPrivateJobLeadsListFromCookie();
    SetRSSJobLeadsListFromCookie();
    SetTaskListFromCookie();
    SetBookMarkFromCookie();
}
function toggleConfigure(id) {
    if (document.getElementById(id).style.display == 'block')
        document.getElementById(id).style.display = 'none';
    else {
        document.getElementById(id).style.display = 'block';
        SetListFromCookie();
    }

}
function toggleConfigureBookmark() {
    var id = 'BookMarkConfigure';
    toggleConfigure(id);
}

function toggleConfigureAnnouncements() {
    //TODO: Paramjeet Hard Coded for this time but need to update
    var id = 'AnnouncementsConfigure';
    toggleConfigure(id);
}
function toggleConfigureTasks() {
    //TODO: Paramjeet Hard Coded for this time but need to update
    var id = 'TaskConfigure';
    toggleConfigure(id);


}
function toggleConfigureUpcoming() {
    //TODO: Paramjeet Hard Coded for this time but need to update
    var id = 'bodycontConfigure';
    toggleConfigure(id);
}
function toggleConfigurePrivateJobLeads() {
    var id = 'PrivateJobLeadsConfigure';
    toggleConfigure(id);
}
function toggleConfigureRSSJobLeads() {
    var id = 'RSSJobLeadsConfigure';
    toggleConfigure(id);
}
function toggleConfigureGoals() {
    var id = 'GoalsConfigure';
    toggleConfigureGoals();
}
function showFilteredEvents(id, dateName, itemName, totalItemCount) {
    var today = new Date();
    var one_day = 1000 * 60 * 60 * 24;
    var dEvent = new Date();
    var pAnnCount = 0;

    if (document.getElementById(totalItemCount)) {
        if (id == 1) {
            for (var i = 1; i <= document.getElementById(totalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                if (dEvent.getDate() != today.getDate() || dEvent.getMonth() != today.getMonth() || dEvent.getFullYear() != today.getFullYear())
                    document.getElementById(itemName + i).style.display = 'none';
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    pAnnCount += 1;
                }
            }
        }
        else if (id == 2) {
            for (var i = 1; i <= document.getElementById(totalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                //Changed by SG/Announcements not saving - Javascript error when radio button selected:1115005/10-19-2009
                // var noOfDays=Math.ceil((dEvent.getTime()-today.getTime())/(one_day));
                var noOfDays = Math.ceil((today.getTime() - dEvent.getTime()) / (one_day));
                if (noOfDays > 7)
                    document.getElementById(itemName + i).style.display = 'none';
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    pAnnCount += 1;
                }
            }
        }
        else if (id == 3) {
            for (var i = 1; i <= document.getElementById(totalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                //Changed by SG/Announcements not saving - Javascript error when radio button selected:1115005/10-19-2009
                //var noOfDays=Math.ceil((dEvent.getTime()-today.getTime())/(one_day));
                var noOfDays = Math.ceil((today.getTime() - dEvent.getTime()) / (one_day));
                if (noOfDays > 30)
                    document.getElementById(itemName + i).style.display = 'none';
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    pAnnCount += 1;
                }
            }
        }
        else if (id == 4) {
            for (var i = 1; i <= document.getElementById(totalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                //Changed by SG/Announcements not saving - Javascript error when radio button selected:1115005/10-19-2009
                //var noOfDays=Math.ceil((dEvent.getTime()-today.getTime())/(one_day));
                var noOfDays = Math.ceil((today.getTime() - dEvent.getTime()) / (one_day));
                if (noOfDays > 90)
                    document.getElementById(itemName + i).style.display = 'none';
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    pAnnCount += 1;
                }
            }
        }
        else if (id == 5 || id == 6) {
            for (var i = 1; i <= document.getElementById(totalItemCount).value; i++) {
                if (i > itemName)
                    document.getElementById(dateName + i).style.display = 'none';
                else
                    document.getElementById(dateName + i).style.display = 'block';
            }
        }
        else if (id == 7) {
            for (var i = 1; i <= document.getElementById(totalItemCount).value; i++) {
                if (i == itemName) {
                    if (document.getElementById('CheckBox' + i) != null) {
                        if (document.getElementById('CheckBox' + i).checked) {
                            document.getElementById(dateName + i).style.display = 'block';
                            document.getElementById('CheckBox' + i).className = 'checked';
                            document.getElementById('chkdiv' + i).className = 'checked';
                        }
                        else {
                            document.getElementById(dateName + i).style.display = 'none';
                            document.getElementById('CheckBox' + i).className = 'unchecked';
                            document.getElementById('chkdiv' + i).className = 'unchecked';
                        }
                    }
                }
            }
        }
        else if (id == 8)  //Added by VS, ontime ticket 1114836.
        {
            for (var i = 1; i <= document.getElementById(totalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                //var noOfDays=Math.ceil((dEvent.getTime()-today.getTime())/(one_day));
                //var noOfDays=Math.ceil((today.getTime() - dEvent.getTime())/(one_day));
                document.getElementById(itemName + i).style.display = 'block';
                pAnnCount += 1;
            }
            if (document.getElementById('NoAnnounItemSconfull') != null) {
                document.getElementById('NoAnnounItemSconfull').style.display = 'none';
            }
        }
    }
    if (id == 1 || id == 2 || id == 3 || id == 4) //for Announcement widget only
    {
        if (pAnnCount == 0 && document.getElementById('NoAnnounItem') == null && document.getElementById('NoAnnounItemSconfull') != null) {
            document.getElementById('NoAnnounItemSconfull').style.display = 'block';
        }
        else if (document.getElementById('NoAnnounItemSconfull') != null) {
            document.getElementById('NoAnnounItemSconfull').style.display = 'none';
        }
    }
}


//Function Added By Harish

function showFilteredEventsinWidget(id, dateName, itemName, pTotalItemCount, gTotalItemCount) {
    var today = new Date();
    var one_day = 1000 * 60 * 60 * 24;
    var dEvent = new Date();
    var pEventCount = 0;
    var gEventCount = 0;
    if (document.getElementById(pTotalItemCount)) {
        if (id == 1) {
            itemName = "peventItem";
            dateName = "peventDate";
            for (var i = 1; i <= document.getElementById(pTotalItemCount).value; i++) {

                dEvent = new Date(document.getElementById(dateName + i).value);
                if (dEvent.getDate() != today.getDate() || dEvent.getMonth() != today.getMonth() || dEvent.getFullYear() != today.getFullYear()) {
                    document.getElementById(itemName + i).style.display = 'none';
                }
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    pEventCount += 1;
                }
            }



            itemName = "geventItem";
            dateName = "geventDate";
            for (var i = 1; i <= document.getElementById(gTotalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                if (dEvent.getDate() != today.getDate() || dEvent.getMonth() != today.getMonth() || dEvent.getFullYear() != today.getFullYear()) {
                    document.getElementById(itemName + i).style.display = 'none';
                }
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    gEventCount += 1;
                }
            }


        }
        else if (id == 2) {


            itemName = "peventItem";
            dateName = "peventDate";
            for (var i = 1; i <= document.getElementById(pTotalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                var noOfDays = Math.ceil((dEvent.getTime() - today.getTime()) / (one_day));
                if (noOfDays > 7) {
                    document.getElementById(itemName + i).style.display = 'none';
                }
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    pEventCount += 1;
                }
            }
            itemName = "geventItem";
            dateName = "geventDate";

            for (var i = 1; i <= document.getElementById(gTotalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                var noOfDays = Math.ceil((dEvent.getTime() - today.getTime()) / (one_day));
                if (noOfDays > 7) {
                    document.getElementById(itemName + i).style.display = 'none';
                }
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    gEventCount += 1;
                }
            }
        }
        else if (id == 3) {
            itemName = "peventItem";
            dateName = "peventDate";

            for (var i = 1; i <= document.getElementById(pTotalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                var noOfDays = Math.ceil((dEvent.getTime() - today.getTime()) / (one_day));
                if (noOfDays > 30) {
                    document.getElementById(itemName + i).style.display = 'none';
                }
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    pEventCount += 1;
                }
            }

            itemName = "geventItem";
            dateName = "geventDate";

            for (var i = 1; i <= document.getElementById(gTotalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                var noOfDays = Math.ceil((dEvent.getTime() - today.getTime()) / (one_day));
                if (noOfDays > 30) {
                    document.getElementById(itemName + i).style.display = 'none';
                }
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    gEventCount += 1;
                }
            }
        }
        else if (id == 4) {
            itemName = "peventItem";
            dateName = "peventDate";

            for (var i = 1; i <= document.getElementById(pTotalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                var noOfDays = Math.ceil((dEvent.getTime() - today.getTime()) / (one_day));
                if (noOfDays > 90) {
                    document.getElementById(itemName + i).style.display = 'none';
                }
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    pEventCount += 1;
                }
            }

            itemName = "geventItem";
            dateName = "geventDate";

            for (var i = 1; i <= document.getElementById(gTotalItemCount).value; i++) {
                dEvent = new Date(document.getElementById(dateName + i).value);
                var noOfDays = Math.ceil((dEvent.getTime() - today.getTime()) / (one_day));
                if (noOfDays > 90) {
                    document.getElementById(itemName + i).style.display = 'none';
                }
                else {
                    document.getElementById(itemName + i).style.display = 'block';
                    gEventCount += 1;
                }
            }
        }
    }
    if (pEventCount == 0 && document.getElementById('nopeventsconfull') == null && document.getElementById('peventsconfull') != null) {
        document.getElementById('peventsconfull').style.display = 'block';
    }
    else if (document.getElementById('peventsconfull') != null) {
        document.getElementById('peventsconfull').style.display = 'none';
    }

    if (gEventCount == 0 && document.getElementById('nogeventsconfull') == null && document.getElementById('geventsconfull') != null) {
        document.getElementById('geventsconfull').style.display = 'block';
    }
    else if (document.getElementById('geventsconfull') != null) {
        document.getElementById('geventsconfull').style.display = 'none';
    }
}
function UpdateRecordUsage(obj, ItemId, url, target) {
    document.getElementById('ItemId').value = ItemId;
    document.getElementById('hUrl').value = url;

    //If Target is blank Then open link is a new tab.
    if (target == "_blank") {
        //var load = window.open(url,'','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
        RecordUsageOfExternalLink(ItemId);
        obj.href = url;
        obj.target = target;
        obj.click();
    } else {
        if (document.getElementById('btnRecordUsage') != null)
            document.getElementById('btnRecordUsage').click();
    }
}

function RecordUsageOfExternalLink(itemId) {
    var oXMLHTTP = null;
    if (window.XMLHttpRequest)
        oXMLHTTP = new XMLHttpRequest();
    else if (window.ActiveXObject)
        oXMLHTTP = new ActiveXObject(Microsoft.XMLHTTP);

    if (oXMLHTTP != null) {
        var sURL = "/ICM/ClientDashboard/CampaignManager/CampaignManager.aspx?ItemId=" + itemId + "";
        oXMLHTTP.open("POST", sURL, false);
        oXMLHTTP.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        oXMLHTTP.send(null);
        var fullResponse = oXMLHTTP.responseText;
        return fullResponse;
    }
}

function OpenComposer(obj) {
    //var subject = document.getElementById(obj).innerHTML;
    window.open('/ICM/ClientTools/MessageCenter/Compose.aspx?sbj=' + obj, '', "dependent=yes,alwaysraised=yes,toolbar=no,width=500,height=350,status=no,resizable=yes,menubar=no");
}