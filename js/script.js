$(document).ready(function(){

    $("#navToggle").click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $(".navbar ul").slideToggle( "slow");
    });

    $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
    });

    $( ".maps" ).mouseleave(function() {
      $('.maps iframe').css("pointer-events", "none");
    });

    $(function(){
			var email = $("#email");
			var name = $("#name");

			function validate(field){
				if(field.val().length === 0){
					field.removeClass().addClass("error");
					field.next().removeClass().addClass("icon-warning-sign");
				}else{
					field.removeClass().addClass("success");
					field.next().removeClass().addClass("icon-ok");
				}
				return field;
			}

			$('input').blur(function(){
				validate($(this));
			});

			$("button").on("click" , function(){
				validate(email);
				validate(name);
				if($(email).val().length === 0 || $(name).val().length === 0)
					$(this).removeClass().addClass("submit-error");
				else{
					$(this).removeClass().addClass("submit-success");
				}
				window.setTimeout(function(){
					console.log("done");
					$("button").removeClass();
				}, 3000)
				return false;
			});

		});
});
