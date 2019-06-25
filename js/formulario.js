$(document).ready(function(){
	$("span").hide();

	$("input[type='email'], input[type='password'], input[type='text'], input[type='number']").blur(function(){
		if ($(this).val().length == 0)
		{
			$(this).next().show();
		}
	});

	$("input[type='email'], input[type='password'], input[type='text'], input[type='number']").focus(function(){
		$(this).next().hide();
	});
});