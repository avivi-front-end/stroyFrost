function tabsCheck() {
    var tabs = $('.third__tab');
    if (tabs.length > 0) {
        if (!tabs.hasClass('active'))  tabs.eq(0).addClass('active');
        var ind=0;
        tabs.each(function () {
            if($(this).hasClass('active')) ind = $(this).index()-1;
        });

        console.log(ind);
        $('.third__table').css('display','none');
        $('.third__table').eq(ind).css('display','block');
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
    photo.html('<img src="'+img+'" alt="" data-object-fit>');
    setTimeout(function () {
        checkScrollButton();
    },300);
    slides.click(function () {
        slides.removeClass('active');
        $(this).addClass('active');
        var thisText = $(this).find('.garage__slide-hidden').html();
        var src = $(this).attr('data-img');
        photo.html('<img src="'+src+'" alt="">');
        text.html(thisText);
        setTimeout(function () {
            checkScrollButton();
        },300)
    });

}
function checkScrollButton() {
    var screenHeight = $('.garage__text-container').height();
    var text = $('.garage__text-container .garage__scroll-text');
    var totalHeight = text.height();
    if(screenHeight > totalHeight){
        $('.scrolle-the-text').closest('div').hide();
    }else{
        $('.scrolle-the-text').closest('div').show()
    }
}
function garageScrollText() {
    var butt = $('.scrolle-the-text');
    butt.click(function (e) {
        e.preventDefault();
        var screenHeight = $('.garage__text-container').height();
        var text = $('.garage__text-container .garage__scroll-text')
        var totalHeight = text.height();
        var lastPosition = text.attr('data-last');
        if(typeof lastPosition == 'undefined'){
            text.attr('data-last', 0);
            lastPosition = 0;
        }
        var target = parseInt(lastPosition) + screenHeight;
        text.attr('data-last', target);
        if($('.garage__text-container').scrollTop() + screenHeight < totalHeight ){
            $('.garage__text-container').animate({scrollTop:target},500, function(){
                if(totalHeight - $('.garage__text-container').scrollTop() < screenHeight ){
                    butt.text('В начало кейса');
                    butt.closest('.garage__button--down').addClass('up');
                }
            });


        }else{
            $('.garage__text-container').animate({scrollTop:0},500);
            text.attr('data-last', 0);
            butt.text('Читать дальше');
            butt.closest('.garage__button--down').removeClass('up');
        }

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
    $(window).click(function(e) {

        var div= $('.colorpicker>li');
        if (!div.is(event.target) && div.has(event.target).length === 0 ){
            $('.colorpicker>li').removeClass('active');
        }

    });

    $('#menucontainer').click(function(event){
        event.stopPropagation();
    });
}
function checkGate(){
    $('input[name=size]').on('change', function(){
       var val = parseInt($(this).val());
       var it = $('.constructor__col .disabled-item');
       if(val == 0){
           it.css('display','block');
       }else if(val == 2){
           it.css('display','none');
           $('input[name=roof]').eq(0).prop('checked','true');
       }
    });

}
function initConstructorView(){
    var container = $('.constructor__img');
    container.empty();
    var params = {
        size:parseInt($('input[name=size]:checked').val()),
        roof:parseInt($('input[name=roof]:checked').val()),
        colWall:$('input[name=wall-col]:checked').val(),
        colRoof:$('input[name=roof-col]:checked').val(),
        colElem:$('input[name=elem-col]:checked').val(),
        colGate:$('input[name=gate-col]:checked').val()
    }
    var folder = params.size+params.roof;
    var under = $(document.createElement('img'));
    var gateImg = $(document.createElement('img'));
    var elemImg = $(document.createElement('img'));
    var roofImg = $(document.createElement('img'));
    var wallImg = $(document.createElement('img'));
    var over = $(document.createElement('img'));


    under.attr('src','images/garage/'+folder+'/under.jpg');
    container.append(under);
    if(typeof params.colGate != 'undefined'){
        gateImg.attr('src','images/garage/'+folder+'/gate/'+params.colGate);
        container.append(gateImg);
    }
    if(typeof params.colElem != 'undefined'){
        elemImg.attr('src','images/garage/'+folder+'/panels/'+params.colElem);
        container.append(elemImg);
    }
    if(typeof params.colRoof != 'undefined'){
        roofImg.attr('src','images/garage/'+folder+'/roof/'+params.colRoof);
        container.append(roofImg);
    }
    if(typeof params.colWall != 'undefined'){
        wallImg.attr('src','images/garage/'+folder+'/wall/'+params.colWall);
        container.append(wallImg);
    }
    over.attr('src','images/garage/'+folder+'/over.png');
    container.append(over);




    console.log(params);
}
function reinitConstructorsEvents(){
    $('input[name=size]').on('change', function(){initConstructorView()});
    $('input[name=roof]').on('change', function(){initConstructorView()});
}
function colorPickInputEvent(){
    $('input[name=wall-col]').on('change', function(){
        var color = $('input[name=wall-col]:checked + span').attr('style');
        $(this).closest('li.active').find('.colorpicker__ttl span').attr('style', color);
        initConstructorView();
    });
    $('input[name=gate-col]').on('change', function(){
        var color = $('input[name=gate-col]:checked + span').attr('style');
        $(this).closest('li.active').find('.colorpicker__ttl span').attr('style', color);
        initConstructorView();
    });
    $('input[name=roof-col]').on('change', function(){
        var color = $('input[name=roof-col]:checked + span').attr('style');
        $(this).closest('li.active').find('.colorpicker__ttl span').attr('style', color);
        initConstructorView();
    });
    $('input[name=elem-col]').on('change', function(){
        var color = $('input[name=elem-col]:checked + span').attr('style');
        $(this).closest('li.active').find('.colorpicker__ttl span').attr('style', color);
        initConstructorView();
    });
}
function colorInit() {
    var color = $('input[name=wall-col]:checked + span').attr('style');
    $('input[name=wall-col]').closest('.colorpicker__list').closest('li').find('.colorpicker__ttl span').attr('style', color);
    var color2 = $('input[name=gate-col]:checked + span').attr('style');
    $('input[name=gate-col]').closest('.colorpicker__list').closest('li').find('.colorpicker__ttl span').attr('style', color2);
    var color3 = $('input[name=roof-col]:checked + span').attr('style');
    $('input[name=roof-col]').closest('.colorpicker__list').closest('li').find('.colorpicker__ttl span').attr('style', color3);
    var color4 = $('input[name=elem-col]:checked + span').attr('style');
    $('input[name=elem-col]').closest('.colorpicker__list').closest('li').find('.colorpicker__ttl span').attr('style', color4);
}
function accordeon(){
    $('.accordeon__dropdown').eq(0).stop().slideDown();
    $('.accordeon__dropdown').eq(0).prev('h5').addClass('active');
    $('.accordeon__left h5').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next('.accordeon__dropdown').stop().slideUp();
        }else{
            $('.accordeon__left h5').removeClass('active');
            $('.accordeon__dropdown').stop().slideUp();
            $(this).addClass('active');
            $(this).next('.accordeon__dropdown').stop().slideDown();
        }
    });
}
function feedbacks(){
    var slider1 = $('.feedbacks--mobile .feedbacks__slider');
    slider1.slick({
        dots:false,
        arrows:true,
        infinity:false,
        speed: 300,
        slidesToShow: 1
    });
    var slider2 = $('.feedbacks--desctop .feedbacks__slider');
    slider2.slick({
        dots:false,
        arrows:true,
        infinity:true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true
    });
}
function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: zoom,
            center: myLatlng,
            scrollwheel: false,
            draggable: false,
            zoomControl: false,
            disableDoubleClickZoom: true,
            disableDefaultUI: true, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,

        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        var contentString = '<div class="marker-test">'+googleText+'</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
          // иконка картинкой

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP // анимация при загрузке карты
        });
        for (var j =0; j < markers.length; j++) {
            addMarker(j);
        }
        function addMarker(i) {
            setTimeout(function() {
                var coords = new google.maps.LatLng(markers[i].cordX,markers[i].cordY);
                var string = '<div class="marker-test">'+markers[i].googleText+'</div>';
                var info = new google.maps.InfoWindow({
                    content: string
                });
                var newMarker = new google.maps.Marker({
                    position: coords,
                    map: map,
                    icon: imageMarker,
                    animation: google.maps.Animation.DROP // анимация при загрузке карты
                });
                newMarker.addListener('click', function() {
                    info.open(map, newMarker);
                });
            }, i * 200);
        }
        /*анимация при клике на маркер*/
        marker.addListener('click', toggleBounce);
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        /*/анимация при клике на маркер*/

        /*По клику открываеться инфоблок*/
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

    }
    initialize();
}
function seemoreServices(){
    var butt = $('.seemore-button span');
    butt.click(function () {
        if(butt.hasClass('hide')){
            butt.text('Показать еще');
            butt.removeClass('hide');
            $('.services__row-wrap:not(.showed)').stop().slideUp();
        }else{
            $('.services__row-wrap:not(.showed)').stop().slideDown();
            butt.text('Скрыть');
            butt.addClass('hide');
        }


    });
}
function technoSliderInit() {
    var slider = $('.techno');
    slider.on('init', function(slick){
        var current = $('.slick-current').attr('data-slide');
        $('.slider__tabs li[data-slide='+current+']').addClass('active');
        checkTabsTechno();
    });
    slider.slick({
        dots:false,
        arrows:true,
        infinity:true,
        speed: 300,
        slidesToShow: 1
    });

    slider.on('afterChange', function(){
        $('.slider__tabs li').removeClass('active');
        $('.slider__tab').removeClass('active');
        $('.slider__dropdown').stop().slideUp();
        var current = $('.slick-current').attr('data-slide');
        $('.slider__tabs li[data-slide='+current+']').addClass('active');
        checkTabsTechno();
    });
    clickOnTechnoTabs();
}
function clickOnTechnoTabs(){
    $('.slider__tabs li').click(function(){
        if(!$(this).hasClass('active')){
            $('.slider__tabs li').removeClass('active');
            $('.slider__tab').removeClass('active');
            $('.slider__dropdown').stop().slideUp();
            $(this).addClass('active');
            var ind = parseInt($(this).attr('data-slide'));
            $(this).closest('.slider__tab').addClass('active');
            $(this).closest('.slider__tab').find('.slider__dropdown').stop().slideDown();
            $('.techno').slick('slickGoTo',ind-1);
        }
    });

}
function checkTabsTechno(){
    $('.slider__tabs li').each(function () {
        if($(this).hasClass('active')){
            $(this).closest('.slider__tab').addClass('active');
            $(this).closest('.slider__tab').find('.slider__dropdown').stop().slideDown();
        }
    });
}
function butter(){
    var butt = $('.butter');
    var cont = $('.header__nav ul');
    if($('.butter').css('display') == "block") cont.stop().slideUp();
    butt.click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            cont.stop().slideDown();
        }else{
            cont.stop().slideUp();
        }
    });
}
function scrollProgress() {
    var line = $('.green-line');
    var total = $('body').height() - $(window).height();
    var scroll = $(window).scrollTop();
    var x = (scroll * 100)/total;
    line.css('width',x+'%');
}
function butterResize() {
    var butt = $('.butter');
    if(butt.css('display') == 'block' && !butt.hasClass('active')){
        butt.next('ul').css('display', 'none');
    }else{
        butt.next('ul').css('display', 'flex');
    }
}
$(window).on('resize',function(){
   butterResize();
});
$(window).on('scroll',function () {
    scrollProgress();
});

$(document).ready(function () {
    butter();
    tabsCheck();
    toggleActive();
    tabindex();
    garageSlider();
    showHideGarage();
    garSlide();
    closeColorpicker();
    checkGate();
    initConstructorView();
    reinitConstructorsEvents();
    colorPickInputEvent();
    garageScrollText();
    accordeon();
    feedbacks();
    googleMap('map');
    seemoreServices();
    technoSliderInit();
    colorInit();
    $('img').bind('contextmenu', function(e) {
        return false;
    });
})