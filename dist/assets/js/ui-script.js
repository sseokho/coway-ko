$(function () {






    const userCheckSwiper = new Swiper(".user-check", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: '.swiper-pagination',
        //centeredSlides: true,
        //centeredSlidesBounds: true,
        //initialSlide: 0,
        paginationType: "bullets",
        //watchOverflow: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: ".user-check .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            720: {
                spaceBetween: 30,
            },
        },
        on: {
            slideChangeTransitionStart: function () {
                if (userCheckSwiper.isBeginning || userCheckSwiper.isEnd) {
                    userCheckSwiper.params.centeredSlides = false;
               }
               else {
                    userCheckSwiper.params.centeredSlides = true;
               }
               userCheckSwiper.update();
            }
        }

    });

    var $scrItem = $('.user-check-item');
    var scrIWidth = 0;
    for (var i = 0; i < $scrItem.length; i++) {
        scrIWidth += $scrItem.eq(i).outerWidth();
    }
    $('.user-check__inner').css('width', scrIWidth)
    $scrItem.click(function () {
        //var target = $(this); 
        $scrItem.removeClass('on')
        target.addClass('on');
        muCenter(target);
    })

    function muCenter(target) {
        var box = $('.user-check');
        var boxItem = box.find('.user-check-item');
        var boxHarf = box.width() / 2;
        var pos;
        var listWidth = 0;
        var targetLeft = 0;

        boxItem.each(function () {
            listWidth += $(this).outerWidth();
        })

        for (var i = 0; i < target.index(); i++) targetLeft += boxItem.eq(i).outerWidth(); // 선택요소 까지 길이

        var selectTargetPos = (targetLeft + target.outerWidth() / 2);
        if (selectTargetPos <= boxHarf) { // left
            pos = 0;
        } else if (listWidth - selectTargetPos <= boxHarf) { //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
            pos = listWidth - box.width();
        } else {
            pos = selectTargetPos - boxHarf; // 중앙정렬
        }

        setTimeout(function () {
            box.animate({
                scrollLeft: pos
            }, 300)
        }, 200);
    }



    //bannerSwiper
    var bannerSwiper = new Swiper(".bannerSwiper", {
        slidesPerView: 'auto',
        pagination: {
            el: ".banner-zone .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".banner-zone .swiper-button-next",
            prevEl: ".banner-zone .swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })
    $('.banner-zone  .swiper-button-pause').click(function () {
        if ($(this).hasClass('off')) {
            $(this).removeClass('off');
            bannerSwiper.autoplay.start();
        } else {
            $(this).addClass('off');
            bannerSwiper.autoplay.stop();
        }
    });

    var width = $(window).width();
    if (width <= 1024) {
        $(".gnb-sitemap__button").click(function () {
            $(this).toggleClass("is-active");
            $("header").toggleClass("is-open");
            $('body, html').toggleClass("is-hidden");
        });
        $(".gnb-menu__link").click(function(){
            $(this).parents(".gnb-menu__list").toggleClass("is-open");
            $(this).next().slideToggle();
            $(this).parents().siblings().children(".depth-2").slideUp();
            $(this).parents().siblings().removeClass("is-open");
        })

    } else {
        //header open
        $(".gnb-menu__list").mouseover(function () {
            $(this).addClass("is-active");
            $(this).siblings().removeClass("is-active");
            $(this).children(".depth-2").show();
            $(this).siblings().children(".depth-2").hide();
            $("header").addClass("is-open");
        });
        $(".gnb-sitemap__button").click(function () {
            const gnbMenuList = $(".gnb-menu__list");
            const gnbMenuListFirst = $(".gnb-menu__list").first();

            $(this).toggleClass("is-active");
            $(gnbMenuListFirst).toggleClass("is-active");
            $(gnbMenuListFirst).siblings().removeClass("is-active");
            $(gnbMenuListFirst).children(".depth-2").show();
            $(gnbMenuListFirst).siblings().children(".depth-2").hide();
            $("header").toggleClass("is-open");
            $(".gnb__inner").mouseleave(function () {
                $("header").removeClass("is-open");
                if (($("header").hasClass("is-open") === true)) {} else {
                    $(".gnb-menu__list").removeClass("is-active");
                    $(".gnb-sitemap__button").removeClass("is-active");
                }
            })
        })
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



})


//resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
$(window).resize(function () {
    var width = $(window).width();
    if (width <= 1024) {
        // $(".gnb-sitemap__button").click(function () {
        //     $(this).toggleClass("is-active");
        //     $("header").toggleClass("is-open");
        //     $('body').toggleClass("is-hidden");
        // });
        // $(".gnb-menu__link").click(function(){
        //     $(this).parents(".gnb-menu__list").toggleClass("is-open");
        //     $(this).next().slideToggle();
        //     $(this).parents().siblings().children(".depth-2").slideUp();
        //     $(this).parents().siblings().removeClass("is-open");
        // })

    } else {
        //header open
        $(".gnb-menu__list").mouseover(function () {
            $(this).addClass("is-active");
            $(this).siblings().removeClass("is-active");
            $(this).children(".depth-2").show();
            $(this).siblings().children(".depth-2").hide();
            $("header").addClass("is-open");
        });
        $(".gnb-sitemap__button").click(function () {
            const gnbMenuList = $(".gnb-menu__list");
            const gnbMenuListFirst = $(".gnb-menu__list").first();

            $(this).toggleClass("is-active");
            $(gnbMenuListFirst).toggleClass("is-active");
            $(gnbMenuListFirst).siblings().removeClass("is-active");
            $(gnbMenuListFirst).children(".depth-2").show();
            $(gnbMenuListFirst).siblings().children(".depth-2").hide();
            $("header").toggleClass("is-open");
            $(".gnb__inner").mouseleave(function () {
                $("header").removeClass("is-open");
                if (($("header").hasClass("is-open") === true)) {} else {
                    $(".gnb-menu__list").removeClass("is-active");
                    $(".gnb-sitemap__button").removeClass("is-active");
                }
            })
        })
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

