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
function garageSlider() {
    var slider = $('.garage__slider');
    if(slider.length > 0){
        slider.slick({
            dots:false,
            arrows:false,
            infinity:false,
            speed: 300,
            slidesToShow: 14,
            swipeToSlide:true,
            responsive: [
                {breakpoint: 1700,settings: {slidesToShow: 13}},
                {breakpoint: 1600,settings: {slidesToShow: 12}},
                {breakpoint: 1500,settings: {slidesToShow: 11}},
                {breakpoint: 1400,settings: {slidesToShow: 10}},
                {breakpoint: 1280,settings: {slidesToShow: 9}},
                {breakpoint: 1100,settings: {slidesToShow: 8}},
                {breakpoint: 992,settings: {slidesToShow: 7}},
                {breakpoint: 860,settings: {slidesToShow: 6}},
                {breakpoint: 740,settings: {slidesToShow: 5}},
                {breakpoint: 620,settings: {slidesToShow: 4}},
                {breakpoint: 500,settings: {slidesToShow: 3}},
                {breakpoint: 380,settings: {slidesToShow: 2}}

            ]

        });
    }
}
function showHideGarage(){
    var wrap = $('.garage__button-wrap');
    var butt = $('.garage__button-wrap a');
    var text = $('.garage__text');
    if(butt.length > 0){
        butt.click(function (e) {
            e.preventDefault();
            if(wrap.hasClass('active')){
                wrap.removeClass('active');
                text.slideDown();
            }else{
                wrap.addClass('active');
                text.slideUp();
            }
            return false;
        });
    }
}
function garSlide(){
    var slides = $('.garage__slide');
    var photo = $('.garage__img');
    var act = $('.slick-active');
    var text = $('.garage__text-container');
    var slideText = act.find('.garage__slide-hidden').html();
    var img = act.find('.garage__slide').attr('data-img');
    text.html(slideText);
    photo.html('<img src="'+img+'" alt="">');
    slides.click(function () {
        slides.removeClass('active');
        $(this).addClass('active');
        var thisText = $(this).find('.garage__slide-hidden').html();
        var src = $(this).attr('data-img');
        photo.html('<img src="'+src+'" alt="">');
        text.html(thisText);
    });

}
function closeColorpicker() {
    $('.colorpicker__close').click(function(){
        $(this).closest('li').removeClass('active');
    });
    $('.colorpicker__ttl').click(function () {
        $('.colorpicker>li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
}
$(document).ready(function () {
    tabsCheck();
    toggleActive();
    tabindex();
    garageSlider();
    showHideGarage();
    garSlide();
    closeColorpicker();
})