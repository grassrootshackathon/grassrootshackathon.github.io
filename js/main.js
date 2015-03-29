$(function() {
  $('.control-btn').on('click',function(e){
    var next = $(this).closest('.dm-template').next();
    e.preventDefault();
    $.scrollTo(next,{axis:'y',duration:500});
  });
});
