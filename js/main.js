$(function(){

    $(".select_language").click(function(){
        $(this).toggleClass("show")
    })/* click */


    $(".sub").hide();
    // sub의 플렉스구조 전부다 가려주기 디스플레이 논

    $(".gnb_menu > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $(".gnb_menu").stop().animate({height:"80px"},500)
    },function(){
        $(this).find(".sub").stop().slideUp();
        $(".gnb_menu").stop().animate({height:"50px"},500)
    })//menu hover

    
    //이미지 슬라이드 영역 slick
    $(".visual_wrap").slick({
        autoplay:true,
        autoplaySpeed: 3000,
        dots:true,
        arrow: true
    })





})//