function CheckImageUploaded(e, fupImage) {
	/*
	var ret = true,
		file,
		file_list = e.target.files;

	// go through the list of files
	for (var i = 0; file = file_list[i]; i++) {
		var sFileName = file.name;
		var sFileExtension = sFileName.split('.')[sFileName.split('.').length - 1].toLowerCase();
		var iFileSize = file.size;

		var fupImage = document.getElementById(fupImage);
		if (fupImage != null) {
			if (!(sFileExtension === "gif" || sFileExtension === "jpg" || sFileExtension === "png")) {
				ret = false;
				fupImage.setAttribute("type", "input");
				fupImage.setAttribute("type", "file");
			}
		}
	}
	ok = ret;
	return ret;
	*/
}
function readURL(input, divName) {
	var divImage = document.getElementById(divName);
	if (divImage !== null) {
		divImage.style.backgroundPosition = "center";
		divImage.style.backgroundRepeat = "no-repeat";

		// Is ok to change the banner
		if (ok) {
			if (input.files != null) {
				if (input.files && input.files[0]) {
					var reader = new FileReader();

					reader.onload = function(e) {
						divImage.style.backgroundImage = "url(" + e.target.result + ")";
					}
				}
				// reader.readAsDataURL(input.files[0]);
			}
		} else {
			divImage.style.backgroundImage = "url('images/login-back.jpg')";
		}
	}
}
/*
function loadText(input, objetive) {
	$(objetive).val(input);
}
*/
function addEventListeners() {
	// Radiobuttons - radUrl
	$('#radUrl1').change(function(){
		var $this = $(this);
		if ($this.is(':checked')) {
			$("#txbUrl").prop('disabled', true);
		}
	});

	$('#radUrl2').change(function(){
		var $this = $(this);
		if ($this.is(':checked')) {
			$("#txbUrl").prop('disabled', false);
		}
	});

	// Radiobuttons - radMultimedia
	$('#radImage').change(function(){
		var $this = $(this);
		if ($this.is(':checked')) {
			$("#txbVideoURL").prop('disabled', true);
			$("#fupStartupImage").prop('disabled', false);
		}
	});

	$('#radVideo').change(function(){
		var $this = $(this);
		if ($this.is(':checked')) {
			$("#txbVideoURL").prop('disabled', false);
			$("#fupStartupImage").prop('disabled', true);
		}
	});

	// Benefit 2 - checkbox action 
	$('#chkBenefit2').click(function() {
		var $this = $(this);
		var checkId = document.getElementById("chkBenefit2");
		if (checkId !== null) {
			if ($this.is(':checked')) {
				$("#divBenefits2").show(200);
				$("#SecondBenefitBorderLine").show();
			} else {
				$("#divBenefits2").hide(200);
				$("#SecondBenefitBorderLine").hide();
			}
		}
	});

	// Benefit 3 - checkbox action 
	$('#chkBenefit3').click(function() {
		var $this = $(this);
		var checkId = document.getElementById("chkBenefit3");
		if (checkId !== null) {
			if ($this.is(':checked')) {
				$("#divBenefits3").show(200);
				$("#ThirdBenefitBorderLine").show();
				$("#LastBenefitBorderLine").show();
			} else {
				$("#divBenefits3").hide(200);
				$("#ThirdBenefitBorderLine").hide();
				$("#LastBenefitBorderLine").hide();
			}
		}
	});

	document.getElementById('fupStartupImage').addEventListener('change', CheckImageUploaded, false);
	$('#fupStartupImage').change(function() {
		readURL(this, "divStartupImage");
	});

	document.getElementById('fupTestimonialFace').addEventListener('change', CheckImageUploaded, false);
	$('#fupTestimonialFace').change(function() {
		readURL(this, "divTestimonialFaceImage");
	});

	// Benefits
	document.getElementById('fupBenefit1').addEventListener('change', CheckImageUploaded, false);
	$('#fupBenefit1').change(function() {
		readURL(this, "divBenefitsImage1");
	});

	document.getElementById('fupBenefit2').addEventListener('change', CheckImageUploaded, false);
	$('#fupBenefit2').change(function() {
		readURL(this, "divBenefitsImage2");
	});

	document.getElementById('fupBenefit3').addEventListener('change', CheckImageUploaded, false);
	$('#fupBenefit3').change(function() {
		readURL(this, "divBenefitsImage3");
	});
}
/*function applyChanges() {
	//Benefits

	// Blink effect on submit
	$("#main").fadeTo(100, 0.1).fadeTo(200, 1.0);
}*/
function addDivsAccordionEffects() {
	$("#accordion1").accordion({
		collapsible: true
	});
	$("#accordion2").accordion({
		collapsible: true
	});
	$("#accordion3").accordion({
		collapsible: true
	});
	$("#accordion4").accordion({
		collapsible: true
	});
	$("#accordion5").accordion({
		collapsible: true
	});
}
function collapseDivs() {
	$("#accordion2").accordion({
		active: false,
		collapsible: true
	});
	$("#accordion3").accordion({
		active: false,
		collapsible: true
	});
	$("#accordion4").accordion({
		active: false,
		collapsible: true
	});
	$("#accordion5").accordion({
		active: false,
		collapsible: true
	});
}
function hideBenefits() {
	$("#divBenefits2").hide();
	$("#divBenefits3").hide();
	$("#SecondBenefitBorderLine").hide();
	$("#ThirdBenefitBorderLine").hide();
	$("#LastBenefitBorderLine").hide();
}
function siteStart() {
	$('.scrollto, .gototop').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		event.preventDefault();
	});

	// Key listeners
	$('#txbStartupName').on('keydown', function () {
		setTimeout(function () {
			$('#lblStartupName').html($('#txbStartupName').val());
	}, 0); // On next loop
	});

	$('#txbElevatorPitch').on('keydown', function () {
		setTimeout(function () {
			$('#lblElevatorPitch').html($('#txbElevatorPitch').val());
	}, 0); // On next loop
	});

	$('#txbDescription').on('keydown', function () {
		setTimeout(function () {
			$('#lblDescription').html($('#txbDescription').val());
	}, 0); // On next loop
	});

	addEventListeners();
	addDivsAccordionEffects();
	hideBenefits();
	collapseDivs();
}

$(document).on('ready', siteStart);