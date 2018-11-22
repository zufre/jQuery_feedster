$(document).ready( () => {
$('.menu').on('mouseover', () => {	
	$('.nav-menu').show();
	});
$('.nav-menu').on('mouseleave', () => {	
	$('.nav-menu').hide();
	});
  $('.btn').on('mouseover', event => {	
	$(event.currentTarget).addClass('btn-hover');
	}).on('mouseleave', () => {
    $('.btn').removeClass('btn-hover')
  });
  $('.postText').on('keyup', event => {	
    var post = $(event.currentTarget).val();
    var remaining = 140 - post.length;
    if (remaining <=0) {
      $('.wordcount').addClass('red');
    }else{
      $('.wordcount').removeClass('red');
    }
		$('.characters').html(remaining);
	});
   $('.postText').focus();
}); 
