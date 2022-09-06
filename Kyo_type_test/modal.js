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

    setTimeout(function () { $('.fit-question.first .fit-msg .fit-msg-item:first-child').addClass('up'); }, 100);
    setTimeout(function () { $('.fit-question.first .fit-msg .fit-msg-item:nth-child(2)').addClass('up'); }, 200);
    setTimeout(function () { $('.fit-question.first .fit-msg .fit-msg-item:last-child').addClass('up'); }, 400);
    setTimeout(function () { $('.fit-choice.first').addClass('up'); }, 800);
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

let a = 0;
let b = 0;
let c = 0;
let recommend = [];

function pluseA(){
    a++;
}
function pluseB(){
    b++;
}
function pluseC(){
    c++;
}

function whatMax(){
    if(a==b && b==c && c==a){
        recommend.push(1);
        recommend.push(2);
        recommend.push(3);
    }else if( a>b && a>c){
        recommend.push(1);
    }else if( b>a && b>c){
        recommend.push(2);
    }else if( c>a && c>b){
        recommend.push(3);
    }else if( a==b && a>c){
        recommend.push(1);
        recommend.push(2);
    }else if( a==c && a>b){
        recommend.push(1);
        recommend.push(3);
    }else if( b==c && b>a){
        recommend.push(2);
        recommend.push(3);
    }
}
// 테스트 코드
// var interest01 = `
// <div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>예전보다 활력(에너지)이 많이 떨어지셨나요?</p></div></div></div><div class="fit-choice sub-first"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseA();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
// <div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>무기력해 보인다는 말을 자주 들으시나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseB();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
// <div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>혈압이 높아지는 일이 잦으신가요?</p></div></div></div><div class="fit-choice last"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseC();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
// `

var interest01 = `
<!--3단계수면부족 타입_코어슬립 글리신 제안-->
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>잠들어도 새벽에 가끔 깬 적이 있으신가요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseA();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>8시간을 자도 아침에 졸리고 피곤함을 느끼나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseA();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>불규칙한 일상으로 생활리듬을<br>정상적으로 되돌리고 싶은가요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseA();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>

<!--스트레스불균형 타입_비포슬립 락투신 제안-->
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>잠에 쉽게 들지 못하는 편인가요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseB();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>잠들기 전 많은 생각과 고민으로 어려움을 느끼나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseB();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>잠이 안와서 스트레스와 우울감을 느낀 적이 있나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseB();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>

<!--체내시계고장 타입_글리신,락투신 세트 제안-->
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>밤낮이 바뀐 올빼미 생활을 하고 있나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseC();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>항상 잠이 부족하다고 느끼나요?</p></div></div></div><div class="fit-choice"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseC();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
<div class="fit-question"><div class="fit-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="fit-msg"><div class="fit-msg-item"><p>점점 취침시간이 늦어지고 새벽에 깨는 현상이 있나요?</p></div></div></div><div class="fit-choice last"><div class="fit-choice-item"><a href="javascript:void(0)" onclick="pluseC();">YES</a></div><div class="fit-choice-item"><a href="javascript:void(0)">NO</a></div></div>
`
$('.fit-content').append(interest01);

$('.fit-content').on('click', '.fit-choice-item', function () {
    var _this = $(this),
        _thisA = $(this).parent(),
        _nextQ = $(this).parent().next(),
        _nextA = $(this).parent().next().next();

    _this.addClass('active');
    _this.siblings('.fit-choice-item').css('display', 'none');

    _nextQ.addClass('active');
    _nextA.addClass('active');
    if (_nextQ.hasClass('active')) {
        qa_up();
    }
    $('.fit-content-wrap .fit-content-inner').animate({ scrollTop: $('.fit-content').outerHeight() }, "slow");

    if (_thisA.hasClass('last')) {

        //끝나따 이놈아
        if (!_nextQ.hasClass('active')) {
            $('.fit-content-wrap').hide();
            $('.fit-result-wrap').show();
            var cnt0 = 0;
            counterFn();

            function counterFn() {
                id0 = setInterval(count0Fn, 300);
                function count0Fn() {
                    cnt0 = cnt0 + 13;
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

    //나이 결과 도출
    $('.age-choice .fit-choice-item').click(function () {
        $('.fit-result-summary .age').html($(this).attr('value') + " | ")
    });

    //성별 결과 도출
    $('.gender-choice .fit-choice-item').click(function () {
        $('.fit-result-summary .gender').html($(this).attr('value'))
    });

    $('.btn-result-show').click(function () {
        $('#fitWrap').removeClass('active');
        //$('#fittestWrap .fittest').removeClass('active');
        $('.fit-result-summary').hide();
        $('#fitresultWrap').addClass('active');
        $('#fittestWrap .fittest').removeClass('active');

        whatMax();
        recommend.forEach(max => {$(".fit-result.type"+max).addClass('active');});

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
        }
    });
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