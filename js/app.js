$('.main-menu').click(function(){
  $(this).toggleClass('active');
  $(this).siblings().removeClass('active');
})
$('.btnmenu').click(function(){
  $(this).toggleClass('active');
  $('.navbar').toggleClass('active');
})