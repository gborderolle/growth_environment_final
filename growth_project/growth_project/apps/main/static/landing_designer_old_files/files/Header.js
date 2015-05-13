function isGoodBrowser() {
       
    try{
        if (document.documentMode !== undefined && document.documentMode <= 5) {
    
            return false;
        }

    
        return true;
    }
    catch (e) {
    
        return false;
    }
    
}

function focusPassword() {
    $('#spanErrorLogin').hide();
    $('#txtPassword').focus();

	
	return false;
}

$(document).keypress(function(e) {

    if(e.which == 13 && $("#adminPassword").is(':visible')) {
        $('#btnLogin').click();
        e.preventDefault();
    }
});



$(document).ready(function() {

    
   

	$("#btnLogin").click(function(e) {
	 e.preventDefault();
	var username = $("#hidUsername").val();
	var password = $("#txtPassword").val();
	$("#btnLogin").prop('disabled', true);

				$.ajax({
					type: "POST",
					url: '/Services/Security/Authenticator.asmx/GetAuthToken',
					contentType: 'application/json',
					dataType: 'json',
					data: "{'username': '" + username + "', 'password': '" + password + "'}",						
						
						success: function (msg) {
					
							if(msg!= null){
							
								if(msg.d.Valid == true){							
								$("#spanErrorLogin").hide();
								document.location.href = "/ICM/FrmAdminLogin.aspx?tk=" + msg.d.Data;
								
								}
								else{
								$("#btnLogin").prop('disabled', false);
								$("#spanErrorLogin").show();
							
								
								}
								
							}
							else{
							
							$("#btnLogin").prop('disabled', false);
							$("#spanErrorLogin").val("Invalid Password");
						
							}
						},
						 error: function (xhr, msg) { alert('Insala ' +msg + '\n' + xhr.responseText); }
					
				});
	});
});