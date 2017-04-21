function tabsCheck() {
    var tabs = $('.third__tab');
    if (tabs.length > 0) {
        if (!tabs.hasClass('active'))  tabs.eq(0).addClass('active');
        var ind=2;

        tabs.each(function () {
            if($(this).hasClass('active')) ind = $(this).index()+2;
        });
        $('.third__td:not(:nth-child(1)):not(:nth-child(2))').css('display','none');
        $('.third__td:nth-child('+ind+')').css('display','flex');
    }
}
function toggleActive(){
    var obj = $('.third__tab');
    if(obj.length > 0){
        obj.click(function(){
            obj.removeClass('active');
            $(this).addClass('active');
            tabsCheck();
        });
    }
}
function tabindex(){
    var tabs = $('.slider__tabindex');
    if(tabs.length > 0){
        tabs.click(function () {
            if($(this).closest('.slider__tab').hasClass('active')){
                $(this).closest('.slider__tab').removeClass('active');
                $(this).next('.slider__dropdown').stop().slideUp();
            } else{
                $('.slider__tab').removeClass('active');
                $('.slider__dropdown').stop().slideUp();
                $(this).closest('.slider__tab').addClass('active');
                $(this).next('.slider__dropdown').stop().slideDown();
            }
        });
    }
}
$(document).ready(function () {
    tabsCheck();
    toggleActive();
    tabindex();
})