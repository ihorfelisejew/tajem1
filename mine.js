$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight:true,
		slidesToShow:3,
		speed:1000,
		autoplay:true,
		autoplaySpeed:1000,
		pauseOnFocus:false,
		pauseOnHover:true,
		swipe:false,
		waitForAnimate:false,
		centerMode:true,
	});
	$('.slider_2').slick({
		arrows: true,
		dots: false,
		adaptiveHeight:true,
		slidesToShow:3,
		speed:1000,
		pauseOnFocus:false,
		pauseOnHover:true,
		swipe:false,
		waitForAnimate:false,
		centerMode:true,
	});
	$('.slider_2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide);
		if(nextSlide==0){
			$('#test_name').text('Jack Adalin');
			$('#test_speciality').text('Ceo Tengkuper');
		}else if(nextSlide==1){
			$('#test_name').text('semf kol');
			$('#test_speciality').text('web-designer');
		}else if(nextSlide==2){
			$('#test_name').text('jane galadriel');
			$('#test_speciality').text('marketing');
		}else if(nextSlide==3){
			$('#test_name').text('amanda finker');
			$('#test_speciality').text('art-director');
		}else {
			$('#test_name').text('dik UCUK');
			$('#test_speciality').text('enginering');
		}
	});
});
$('.video_img').click(function(){
	$('#preview').css('display','none');
	$('#watching').css('display','block');
	$('#video')[0].play()
});
$('.video_stop').click(function(){
	$('#video')[0].pause();
	$('#preview').css('display','block');
	$('#watching').css('display','none');
});
function scamber(){
	$('section, header').css('display','none');
	$('#site_1').css('display','block');
	$('body').css('overflow','hidden');
};
function flat_style(){
	$('section, header').css('display','none');
	$('#site_2').css('display','block');
	$('body').css('overflow','hidden');
};
function golden(){
	$('section, header').css('display','none');
	$('#site_3').css('display','block');
	$('body').css('overflow','hidden');
};
function burning_man(){
	$('section, header').css('display','none');
	$('#site_4').css('display','block');
	$('body').css('overflow','hidden');
};
$('#popup_close_1').click(function(){
	$('section, header').css('display','block');
	$('#site_1').css('display','none');
	$('body').css('overflow','auto');
});
$('#popup_close_2').click(function(){
	$('section, header').css('display','block');
	$('#site_2').css('display','none');
	$('body').css('overflow','auto');
});
$('#popup_close_3').click(function(){
	$('section, header').css('display','block');
	$('#site_3').css('display','none');
	$('body').css('overflow','auto');
});
$('#popup_close_4').click(function(){
	$('section, header').css('display','block');
	$('#site_4').css('display','none');
	$('body').css('overflow','auto');
});


function valid(form){
			var fail = false;
			var name = form.name.value;
			var email = form.email.value;
			var letter = form.letter.value;
			var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;			if (name=="" || name ==" ")
				fail = "Ви не ввели своє ім'я";
			else if (email=="" || email ==" ")
				fail = "Ви не ввели E-mail";
			else if (adr_pattern.test(email) == false)
				fail = "Ви ввели E-mail неправильно";
			else if (letter=="" || letter ==" ")
				fail = "Ви не ввели нічого в листі";
			if(fail)
				alert(fail);
			else{
				$('#form')[0].reset();
			}
};
function valid_2(form){
			var fail = false;
			var send = form.send.value;
			if (send=="" || send ==" ")
				fail = "Ви не ввели нічого";
			if(fail)
				alert(fail);
			else{
				$('#form_2')[0].reset();
			}
};