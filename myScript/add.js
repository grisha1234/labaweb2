$(document).ready(function() {
	$('button').click(function() {
		var login = $('input[name = login').val();
		var comment = $('textarea[name = comment').val();

		//Если поле имени пусто, вывести предупреждающее сообщение
		if (login == "") {
			$('.alert').remove();
			$('legend').after('<div class="alert alert-error fenix" style="opacity: 0.9; background-color: red;"><a class="close" href="#" data-dismiss="alert">x</a>Введите имя!</div>');
		}
		
		else {
			$('.alert').remove();
			$('.one').addClass('two');
			$('.two').removeClass('one');

			//Удаление комментария
			$('.comment').after('<div class="well one post"><a class="close">x</a><p><strong>' + login + '</strong></p><p style="font-family: Monotype Corsiva; font-size: 20px;">' + comment + '</p></div>');			
			$(document).on('click', '.post', function () {
				$(this).remove();
				console.log("red");
				});

			$('input[name = login').val('');
			$('textarea[name = comment').val('');

		}
		
	});
	
});