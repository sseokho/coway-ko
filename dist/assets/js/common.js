


//resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
$(window).resize(function () {
    var width = $(window).width();
    if (width <= 1024) {
        $(".sitemap-button").click(function () {
            $(this).toggleClass("is-active");
            $("header").toggleClass("is-open");
            $('body, html').toggleClass("is-hidden");
        });
        // $(".sitemap-lists__title").on('click', function(){
        //     //$(this).parents(".gnb-menu__list").toggleClass("is-open");
        //     $(this).parents('.sitemap-list').toggleClass("is-open");
        //     $(this).next().slideToggle();
        //     $(this).parents().siblings().children(".sitemap-list__item").slideUp();
        //     //$(this).parents().siblings().removeClass("is-open");
        // });
        $(".sitemap-close__button").click(function () {
            $('.sitemap-button').removeClass("is-active");
            $("header").removeClass("is-open");
            $('body, html').removeClass("is-hidden");
        });

    } else {
        //header open
        $(".gnb-menu__list").mouseover(function () {
            $(this).addClass("is-active");
            $(this).siblings().removeClass("is-active");
            $(this).children(".depth-2").show();
            $(this).siblings().children(".depth-2").hide();
            $("header").addClass("is-open");
        });

        $(".sitemap-button").click(function () {
            $('.sitemap-content').addClass('is-open');
            $('body').addClass('is-hidden');
        });
        $(".sitemap-close__button").click(function () {
            $('.sitemap-content').removeClass('is-open');
            $('body').removeClass('is-hidden');
        });

        //header close
        $(".gnb-menu").mouseleave(function () {
            $(this).removeClass("is-open");
            $("header").removeClass("is-open");

            if (($("header").hasClass("is-open") === true)) {

            } else {
                $(".gnb-menu__list").removeClass("is-active");
            }
        });
    }
});

$(window).trigger("resize"); //강제로 호출하는 함수


$(function () {
    var width = $(window).width();
    if (width <= 1024) {
        $(".sitemap-button").click(function () {
            $(this).toggleClass("is-active");
            $("header").toggleClass("is-open");
            $('body, html').toggleClass("is-hidden");
        });
        $(".sitemap-lists__title").on('click', function(){
            //$(this).parents(".gnb-menu__list").toggleClass("is-open");
            $(this).parents('.sitemap-list').toggleClass("is-open");
            $(this).parents('.sitemap-list').siblings().removeClass("is-open");
            $(this).next().slideToggle();
            $(this).parents().siblings().children(".sitemap-list__item").slideUp();
            //$(this).parents().siblings().removeClass("is-open");
        });
        $(".sitemap-close__button").click(function () {
            $('.sitemap-button').removeClass("is-active");
            $("header").removeClass("is-open");
            $('body, html').removeClass("is-hidden");
        });

    } else {
        //header open
        $(".gnb-menu__list").mouseover(function () {
            $(this).addClass("is-active");
            $(this).siblings().removeClass("is-active");
            $(this).children(".depth-2").show();
            $(this).siblings().children(".depth-2").hide();
            $("header").addClass("is-open");
        });

        $(".sitemap-button").click(function () {
            $('.sitemap-content').addClass('is-open');
            $('body').addClass('is-hidden');
        });
        $(".sitemap-close__button").click(function () {
            $('.sitemap-content').removeClass('is-open');
            $('body').removeClass('is-hidden');
        });

        //header close
        $(".gnb-menu").mouseleave(function () {
            $(this).removeClass("is-open");
            $("header").removeClass("is-open");

            if (($("header").hasClass("is-open") === true)) {

            } else {
                $(".gnb-menu__list").removeClass("is-active");
            }
        });
    }

    
    $(window).scroll(function() {
        
        if ($(this).scrollTop() > 200) {
            $('.button-top').fadeIn();
        } else {
        	$('.button-top').fadeOut();
        	 
        }
    });
    
    $(".button-top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

})

