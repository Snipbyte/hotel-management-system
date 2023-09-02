$(document).ready(function()
{
	$(".login_btn").click(function()
	{
		$('#loginModal').modal('show');
	})
	$(".sign_up_btn").click(function()
	{
		$('#signUpModal').modal('show');
	})
	function whiteMode()
	{
		$("body").removeClass("bg-dark")
		$("body").addClass("bg-white")
		$(".card").removeClass("text-white")
		$(".card").addClass("text-dark")
		$(".card").removeClass("bg-dark")
		$(".cardd").removeClass("text-white")
		$(".cardd").addClass("text-dark")
		$(".cardd").removeClass("bg-dark")
		$(".cardd").removeClass("bg-white")
		$("nav").removeClass("navbar-dark");
		$("nav").addClass("navbar-light");
		$(".main_heading").removeClass("text-white")
		$(".main_heading").addClass("text-primary")
		$("h4").removeClass("text-white")
		$("h4").addClass("text-dark")
		$("h2").removeClass("text-white")
		$("h2").addClass("text-dark")
		$(".contact_heading").removeClass("text-white")
		$(".contact_heading").addClass("text-dark")
		$("#room_details").removeClass("text-white")
		$("#room_details").addClass("text-dark")
		$("#booking").removeClass("text-white")
		$("#booking").addClass("text-dark")
		$(".card-title").addClass("text-dark")
		$(".card-title").removeClass("text-white")

	}
	function darkmode()
	{
		$("body").removeClass("bg-white")
		$("body").addClass("bg-dark")

		$(".card").removeClass("text-dark")
		$(".card").addClass("text-white")
		$(".card").addClass("bg-dark")
		// $(".card").removeClass("text-white")
		// $(".card").addClass("text-dark")
		$(".card").removeClass("bg-white")
		$(".card-title").addClass("text-dark")
		$(".card-title").removeClass("text-white")
		$(".cardd").removeClass("text-dark")
		$(".cardd").addClass("text-white")
		$(".cardd").removeClass("bg-white")
		$(".cardd").removeClass("bg-dark")
		$("nav").removeClass("navbar-white");
		$("nav").addClass("navbar-dark");
		$(".main_heading").removeClass("text-dark")
		$(".main_heading").addClass("text-white")
		$("h4").removeClass("text-dark")
		$("h4").addClass("text-white")
		$("h2").removeClass("text-dark")
		$("h2").addClass("text-white")
		$(".contact_heading").removeClass("text-dark")
		$(".contact_heading").addClass("text-white")
		$("#room_details").removeClass("text-dark")
		$("#room_details").addClass("text-white")
		$("#booking").removeClass("text-dark")
		$("#booking").addClass("text-white")
		$(".card-title").addClass("text-dark")
		$(".card-title").removeClass("text-white")
	}
	if (localStorage.getItem("mode","white")) {
		whiteMode();
		$("#lightSwitch").removeClass("text-primary")

	}
	else
	{
		$("#lightSwitch").addClass("text-primary")
		darkmode();
	}
	$("#lightSwitch").click(function()
	{
		if ($("body").hasClass("bg-dark")) 
		{

			whiteMode()
			$("#lightSwitch").removeClass("text-primary")
			localStorage.setItem("mode", "white");
		}
		else
		{
			darkmode();
			$("#lightSwitch").addClass("text-primary")
			localStorage.setItem("mode", "");
		}

	});
});