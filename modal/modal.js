window.onload = function(){
    
//modal// 
    const modalNavBtn =  document.querySelector('.modal_nav_btn');
const modalNav =  document.querySelector('.modal_nav');
const modalPop =  document.querySelector('.modal_nav_btn_pop');
modalNavBtn.addEventListener('click',function(){
    modalNavBtn.classList.toggle('active');
    modalNav.classList.toggle('active');
});
modalPop.addEventListener('click',function(){
    new_fixed.classList.add('active');
})
for(let m=0; m<modal_close.length; m++){
modal_close[m].addEventListener('click',function(){new_fixed.classList.remove('active');})
}
//modal// 

$('.btn-start').click(function () {
    $('#fitstartWrap .fit-start').hide();
    $('#fittestWrap .fittest').addClass('active');
});

// 질문 답변 순차적으로 보여지기
$('#fittestWrap .fittest').addClass('active');
setTimeout(function () { $('.fit-question.first .fit-msg .fit-msg-item:first-child').addClass('up'); }, 100);
setTimeout(function () { $('.fit-question.first .fit-msg .fit-msg-item:last-child').addClass('up'); }, 400);
setTimeout(function () { $('.fit-choice.first').addClass('up'); }, 800);

function qa_up() {
    setTimeout(function () { $('.fit-question.active .fit-msg-item:first-child').addClass('up'); }, 100);
    setTimeout(function () { $('.fit-question.active .fit-msg-item:last-child').addClass('up'); }, 400);
    setTimeout(function () { $('.fit-choice.active').addClass('up'); }, 800);
}
function pick_up() {
    setTimeout(function () { $('.pick .fit-question.active .fit-msg-item:first-child').addClass('up'); }, 100);
    setTimeout(function () { $('.pick .fit-question.active .fit-msg-item:last-child').addClass('up'); }, 400);
    setTimeout(function () { $('.pick .fit-choice.active').addClass('up'); }, 800);
}


//순위매기기
var index = 0;
$('.result-fit .fit-choice-item').click(function () {
    if(!$(this).hasClass('active')){
        index = index + 1;
        $(this).append('<div class="count">' + (index) + '</div>');
    }
});



$('.fit-content').on('click', '.fit-choice-item', function () {
    var _this = $(this),
        _thisA = $(this).parent(),
        _nextQ = $(this).parent().next(),
        _nextA = $(this).parent().next().next(),
        _nextSubQ = $(this).parent().next().children('.fit-question.sub-first'),
        _nextSubQ02 = $(this).parent().parent().next().children('.fit-question.sub-first'),
        _nextSubA = $(this).parent().next().children('.fit-choice.sub-first'),
        _nextSubA02 = $(this).parent().parent().next().children('.fit-choice.sub-first'),
        answerPick = _this.attr('answer'),
        resultPick = $('.fit-result').attr('result');

        
    //스텝4번 => 선택의 기로
    if (_thisA.attr('step') == 13) {
        _this.addClass('active');
        
        $('.fit-content').append(interest01);
        _nextQ.removeClass('active');
        _nextA.removeClass('active');

        _nextSubQ.addClass('active');
        _nextSubA.addClass('active');
        
    } else {
        _this.addClass('active');
        _this.siblings('.fit-choice-item').css('display', 'none');

        _nextQ.addClass('active');
        _nextA.addClass('active');

    }
    

    //기본질문
    if (_thisA.attr('step') >= 12) {
        _nextQ.removeClass('active');
        _nextA.removeClass('active');

        _nextSubQ.addClass('active');
        _nextSubA.addClass('active');

        //끝났어요~
        if (!_nextSubQ.hasClass('active')) {
            $('.fit-content-wrap').hide();
            $('.fit-result-wrap').show();
            var cnt0 = 0;
            counterFn();

            function counterFn() {
                id0 = setInterval(count0Fn, 300);
                function count0Fn() {
                    cnt0 = cnt0 + 12;
                    if (cnt0 > 100) {
                        clearInterval(id0);
                        $('.fit-loading').hide();
                    } else {
                        $(".percent").html(cnt0 + "%");
                    }
                }
            }
        }


        pick_up();
    }

    if (_thisA.hasClass('last')) {
        _nextSubQ02.addClass('active');
        _nextSubA02.addClass('active');

        //끝났어요~
        if (!_nextSubQ02.hasClass('active')) {
            $('.fit-content-wrap').hide();
            //$('.fit-result-wrap').show();
            var cnt0 = 0;
            counterFn();

            function counterFn() {
                id0 = setInterval(count0Fn, 100);
                function count0Fn() {
                    cnt0 = cnt0;
                    if (cnt0 > 100) {
                        clearInterval(id0);
                        $('.fit-loading').hide();
                    } else {
                        //결과 도출 전 로딩 퍼센트
                        $(".percent").html(cnt0 + "%");
                    }
                }
            }
        }

        pick_up();
    }

    if (_nextQ.hasClass('active')) {
        qa_up();
    }
    $('.fit-content-wrap .fit-content-inner').animate({ scrollTop: $('.fit-content').outerHeight() }, "slow");


    //결과 도출
    $('.fit-result-list-wrap .fit-result.type' + answerPick).addClass('active');


    //나이 결과 도출
    $('.age-choice .fit-choice-item').click(function () {
        $('.fit-result-summary .age').html($(this).attr('value') + " | ")
    });

    //성별 결과 도출
    $('.gender-choice .fit-choice-item').click(function () {
        $('.fit-result-summary .gender').html($(this).attr('value'))
    });

    if($('#height').val()) {
        $('.fit-result-summary .height').html("  ·  " + $('#height').val() + "cm  ·  ")
    }
    if($('#weight').val()) {
        $('.fit-result-summary .weight').html($('#weight').val() + "kg  ｜  ")
    }
    
    
    $('.btn-result-show').click(function () {
        $('#fitWrap').removeClass('active');
        //$('#fittestWrap .fittest').removeClass('active');
        $('.fit-result-summary').hide();
        $('#fitresultWrap').addClass('active');
        $('#fittestWrap .fittest').removeClass('active');

        if($(".fit-result.type1").hasClass('active')){
            $('#fitresultWrap').addClass('daily');
            $('#fitresultWrap').removeClass('daily2');
        }
        
        if($(".fit-result.type2").hasClass('active')){
            
            $('#fitresultWrap').addClass('daily2');            
            $('#fitresultWrap').removeClass('daily');
        }else if($(".fit-result.type3").hasClass('active')){
            
            $('#fitresultWrap').addClass('daily2');
            $('#fitresultWrap').removeClass('daily');
        }else if($(".fit-result.type4").hasClass('active')){
            
            $('#fitresultWrap').addClass('daily2');
            $('#fitresultWrap').removeClass('daily');
        }else if($(".fit-result.type5").hasClass('active')){
            
            $('#fitresultWrap').addClass('daily2');
            $('#fitresultWrap').removeClass('daily');
        }else if($(".fit-result.type6").hasClass('active')){
            $('#fitresultWrap').addClass('daily2');
            $('#fitresultWrap').removeClass('daily');
            
        }
        

        // if($('.fit-result-list-wrap .fit-result.type2' || '.fit-result-list-wrap .fit-result.type3' || '.fit-result-list-wrap .fit-result.type4'|| '.fit-result-list-wrap .fit-result.type5'|| '.fit-result-list-wrap .fit-result.type6').hasClass('active')){
        //     $('#fitresultWrap').addClass('daily2');
        // }

        console.log(answerPick)
        
    });




});
$('.fit-content').on('keyup', '#height, #weight', function () {
    $(this).parent().parent().addClass('last');
});

// bmi체크
$('.fit-content').on('click', '.bmi-chk', function () {
    
    var _height = $('input[name=height]').val(),
        _weight = $('input[name=weight]').val(),
        height_p = _height / 100,
        bmi = (_weight / (height_p * height_p)).toFixed(2);

    $('.fit-result-summary .bear.type01').hide();
    $('.fit-result-summary .bear.type02').show();

    if(_height=='' || _weight==''){
        alert("키와 몸무게를 입력해주세요!");
        return false;
    }

    if (bmi >= 0 && bmi <= 18.59) {
        $('.fit-result-summary .bmi').html("저체중")
        $('.gauge-wrap .bar, .gauge-wrap .bar div').addClass('w10');
    } else if (bmi >= 18.6 && bmi <= 22.99) {
        $('.fit-result-summary .bmi').html("정상")
        $('.gauge-wrap .bar, .gauge-wrap .bar div').addClass('w50');
    } else if (bmi >= 23 & bmi <= 24.99) {
        $('.fit-result-summary .bmi').html("과체중")
        $('.gauge-wrap .bar, .gauge-wrap .bar div').addClass('w60');
    } else if (bmi >= 25 & bmi <= 29.99) {
        $('.fit-result-summary .bmi').html("1단계비만")
        $('.gauge-wrap .bar, .gauge-wrap .bar div').addClass('w80');
    } else if (bmi >= 30 & bmi <= 34.99) {
        $('.fit-result-summary .bmi').html("2단계비만")
        $('.gauge-wrap .bar, .gauge-wrap .bar div').addClass('w90');
    } else if (bmi >= 35) {
        $('.fit-result-summary .bmi').html("고도비만")
        $('.gauge-wrap .bar, .gauge-wrap .bar div').addClass('w100');
    }


    $('.fit-result-summary .desc').append('<span class="bmi-num">BMI 결과 : ' +bmi+ '</span>')

    
    // $(".summary-info").each(function(){
    //     var str = $(this).find(".weight").text();
    //     var first = str.charAt(0);

    //     console.log(str , first)
    //     if (first == "0"){
    //         alert( 'z!' );
    //         first.replace("0"," ");
    //     }
        
    // })

});





var ww = $(window).width();
var swiper_result = undefined;

function initSwiper() {

    if (ww > 991 && swiper_result == undefined) {
        swiper_result = new Swiper('.fit-result-list-wrap', {
            slidesPerView: 'auto',
            spaceBetween: 135,
            pagination: {
                el: ".fit-result-pagination",
                type: "progressbar",
            }
        });
    } else if (ww <= 991 && swiper_result != undefined) {
        swiper_result.destroy();
        swiper_result = undefined;
    }
}

initSwiper();

$(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
});

}