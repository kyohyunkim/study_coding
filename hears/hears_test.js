window.onload = function(){
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

//활력 관련 질문
var interest01 = `
<div class="step-answer type2 pick" step="4">
<div class="fit-question sub-first"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>잠들어도 새벽에 가끔 깬 적이 있으신가요?</p></div></div></div><div class="fit-choice sub-first"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>8시간을 자도 아침에 졸리고 피곤함을 느끼나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="../img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>불규칙한 일상으로 생활리듬을<br>정상적으로 되돌리고 싶은가요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>잠에 쉽게 들지 못하는 편인가요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>잠들기 전 많은 생각과 고민으로 어려움을 느끼나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="../img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>잠이 안와서 스트레스와 우울감을 느낀 적이 있나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>밤낮이 바뀐 올빼미 생활을 하고 있나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>항상 잠이 부족하다고 느끼나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="../img/img_profile_thumb.png" alt=""></p><p class="name">뉴럴냅스</p></div><div class="fit-msg"><div class="fit-msg-item"><p>점점 취침시간이 늦어지고 새벽에 깨는 현상이 있나요?</p></div></div></div><div class="fit-choice last"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
</div>
`
//체중 관련 질문
var interest02 = `<div class="step-answer type3 pick" step="8">
<div class="fit-question sub-first"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>체중 감량 계획이 있으신가요?</p></div></div></div><div class="fit-choice sub-first"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>체중조절을 위해 최소 30분 이상 신체활동(운동)을 하고 계시나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>평소에 군것질(과자, 음료 등)을 좋아하나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>주로 육류(소고기, 돼지고기 등) 위주의 메뉴를 선택하시나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>키와 몸무게를 입력해주세요.</p></div></div></div><div class="fit-choice"><div class="input-wrap"><input type="number" name="height" min="0" id="height" min="10">cm <br> <input type="number" name="weight" min="0" id="weight">kg </div><div class="fit-choice-item bmi-chk"><a href="javascript:void(0)">NEXT</a></div></div></div>`

//음주 관련 질문
var interest03 = `<div class="step-answer type4 pick" step="8">
<div class="fit-question sub-first"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>음주를 좋아하시나요?</p></div></div></div><div class="fit-choice sub-first"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>술자리를 가질 때, 보통 얼마나 섭취 하시나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">1~2잔</a></div><div class="fit-choice-item"><a href="javascript:void(0)">3잔 이상</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>음주 후, 다음 날 숙취 때문에 고생 한 적이 많은가요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>과중한 학업이나 잦은 야근으로 인해 피곤하신가요?</p></div></div></div><div class="fit-choice last"><div class="fit-choice-item"><a href="javascript:void(0)">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div></div>`




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
    if (_thisA.attr('step') == 4) {
        _this.addClass('active');

        // 세개선택가능
        var stepCnt = $('.result-fit .fit-choice-item.active').length;

        var _isCnt = false;
        if (!_isCnt) {
            _isCnt = true;

            //선택 갯수 정하기 ->  일단 1개만 선택할게요
            if (stepCnt >= 1) {
                _nextQ.addClass('active');
                _nextA.addClass('active');

                //세개 이상 클릭 시 클릭 액티브 막기
                $('.result-fit .fit-choice-item').css('pointer-events', 'none')
            } else {
                _nextQ.removeClass('active');
                _nextA.removeClass('active');

            }
            //선택 갯수 정하기
            //한개 이상 클릭 시 클릭 액티브 막기
            if (stepCnt > 1) {
                _this.removeClass('active');
            }
            setTimeout(function () { _isCnt = false; }, 200);
        }

        if (answerPick == 2) { //테스트1번 선택시 활력 관련 질문 나와요
            $('.step-answer.type2').remove();
            $('.fit-content').append(interest01);
            $('.fit-result-list-wrap .fit-result.type1').removeClass('active');
        }
        if (answerPick == 3) { //테스트2번 선택시 체중 관련 질문 나와요
            $('.step-answer.type3').remove();
            $('.fit-content').append(interest02);
            $('.fit-result-list-wrap .fit-result.type1').removeClass('active');
        }
        if (answerPick == 4) { // 테스트3번 선택시 음주관련 질문 나와요
            $('.step-answer.type4').remove();
            $('.fit-content').append(interest03);
            $('.fit-result-list-wrap .fit-result.type1').removeClass('active');
        }
        

        //다시 선택
        $('.reset').click(function () {
            $('.result-fit .fit-choice-item').removeClass('active')
            $('.step-answer').remove();
            $('.result-fit~.fit-question').removeClass('active');
            $('.result-fit~.fit-choice').removeClass('active');
            $('.result-fit~.fit-choice .fit-choice-item').removeClass('active');
            $('.result-fit~.fit-choice .fit-choice-item').css('display', '');
            $('.result-fit~.fit-question .fit-msg .fit-msg-item').removeClass('up');
            $('.result-fit~.fit-choice').removeClass('up')

            $('.fit-result').removeClass('active');

            $('.result-fit .fit-choice-item').css('pointer-events', '')
            $('.count').remove();
            index = 0;
        });
    } else {
        _this.addClass('active');
        _this.siblings('.fit-choice-item').css('display', 'none');

        _nextQ.addClass('active');
        _nextA.addClass('active');

    }

    //기본질문
    if (_thisA.attr('step') >= 7) {
        _nextQ.removeClass('active');
        _nextA.removeClass('active');

        _nextSubQ.addClass('active');
        _nextSubA.addClass('active');

        //끝났어요~
        if (!_nextSubQ.hasClass('active')) {
            $('.fit-content-wrap').hide();
            //$('.fit-result-wrap').show();
            var cnt0 = 0;
            counterFn();

            function counterFn() {
                id0 = setInterval(count0Fn, 300);
                function count0Fn() {
                    cnt0 = cnt0 + 7;
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
                id0 = setInterval(count0Fn, 300);
                function count0Fn() {
                    cnt0 = cnt0 + 7;
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