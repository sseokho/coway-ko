$(function () {
  mainTab();

})

function mainTab() {
  $(".tab ul li.item").click(function(){ 
    $(".tab ul li.item").removeClass('on');
    $(".tab .conBox").removeClass('on');
    $(this).addClass('on');
    $("#"+$(this).data('id')).addClass('on');
  });
}