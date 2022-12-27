//test btn//
close_btn.addEventListener('click',function(){
    typing_text.classList.add('active');
})
test_btn.addEventListener('click',function(){
    new_fixed.classList.add('active');
})
//test btn//

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
    $('#neuralstartWrap .neural-start').hide();
    $('#neuraltestWrap .neural_test').addClass('active');

    setTimeout(function () { $('.neural-question.first .neural-msg .neural-msg-item:first-child').addClass('up'); }, 100);
    setTimeout(function () { $('.neural-question.first .neural-msg .neural-msg-item:nth-child(2)').addClass('up'); }, 200);
    setTimeout(function () { $('.neural-question.first .neural-msg .neural-msg-item:last-child').addClass('up'); }, 400);
    setTimeout(function () { $('.neural-choice.first').addClass('up'); }, 800);
});

// 질문 답변 순차적으로 보여지기
$('#neuraltestWrap .neural_test').addClass('active');
setTimeout(function () { $('.neural-question.first .neural-msg .neural-msg-item:first-child').addClass('up'); }, 100);
setTimeout(function () { $('.neural-question.first .neural-msg .neural-msg-item:last-child').addClass('up'); }, 400);
setTimeout(function () { $('.neural-choice.first').addClass('up'); }, 800);

function qa_up() {
    setTimeout(function () { $('.neural-question.active .neural-msg-item:first-child').addClass('up'); }, 100);
    setTimeout(function () { $('.neural-question.active .neural-msg-item:last-child').addClass('up'); }, 400);
    setTimeout(function () { $('.neural-choice.active').addClass('up'); }, 800);
}
function pick_up() {
    setTimeout(function () { $('.pick .neural-question.active .neural-msg-item:first-child').addClass('up'); }, 100);
    setTimeout(function () { $('.pick .neural-question.active .neural-msg-item:last-child').addClass('up'); }, 400);
    setTimeout(function () { $('.pick .neural-choice.active').addClass('up'); }, 800);
}

//질문 랜덤 출력
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

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

//yes 버튼에 pluseA,B,C 함수 넣어서 값을 넘겨줌 
//3단계수면부족 타입_코어슬립 글리신 제안
let coreSleep1 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>잠들어도 새벽에 가끔 깬 적이 있으신가요?</p></div></div></div><div class="neural-choice"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseA();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`
let coreSleep2 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>8시간을 자도 아침에 졸리고 피곤함을 느끼나요?</p></div></div></div><div class="neural-choice"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseA();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`
let coreSleep3 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="../img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>불규칙한 일상으로 생활리듬을<br>정상적으로 되돌리고 싶은가요?</p></div></div></div><div class="neural-choice"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseA();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`

//스트레스불균형 타입_비포슬립 락투신 제안
let beforeSleep1 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>잠에 쉽게 들지 못하는 편인가요?</p></div></div></div><div class="neural-choice"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseB();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`
let beforeSleep2 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>잠들기 전 많은 생각과 고민으로 어려움을 느끼나요?</p></div></div></div><div class="neural-choice"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseB();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`
let beforeSleep3 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="../img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>잠이 안와서 스트레스와 우울감을 느낀 적이 있나요?</p></div></div></div><div class="neural-choice"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseB();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`

//체내시계고장 타입_글리신,락투신 세트 제안
let set1 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>밤낮이 바뀐 올빼미 생활을 하고 있나요?</p></div></div></div><div class="neural-choice"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseC();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`
let set2 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>항상 잠이 부족하다고 느끼나요?</p></div></div></div><div class="neural-choice"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseC();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`
let set3 = `<div class="neural-question"><div class="neural-profile"><p class="thumb"><img src="../img/img_profile_thumb.png" alt=""></p><p class="name">히이즈</p></div><div class="neural-msg"><div class="neural-msg-item"><p>점점 취침시간이 늦어지고 새벽에 깨는 현상이 있나요?</p></div></div></div><div class="neural-choice last"><div class="neural-choice-item"><a href="javascript:void(0)" onclick="pluseC();">YES</a></div><div class="neural-choice-item"><a href="javascript:void(0)">NO</a></div></div>`

let jindan = [coreSleep1, coreSleep2, coreSleep3, beforeSleep1, beforeSleep2, beforeSleep3, set1, set2];
shuffleArray(jindan);


$('.neural-content').append(jindan);
$('.neural-content').append(set3); //set3이 last 클래스를 가지고 있기때문에 항상 마지막에!


// neural-choice-item (YES , NO)누르면 다음 질문 실행
$('.neural-content').on('click', '.neural-choice-item', function () {
    var this_ = $(this),
        this_a = $(this).parent(),
        next_q = $(this).parent().next(),
        next_a = $(this).parent().next().next();

    this_.addClass('active');
    this_.siblings('.neural-choice-item').css('display', 'none');

    next_q.addClass('active');
    next_a.addClass('active');
    if (next_q.hasClass('active')) {
        qa_up();
    }
    $('.neural-content-wrap .neural-content-inner').animate({ scrollTop: $('.neural-content').outerHeight() }, "slow");

    if (this_a.hasClass('last')) {

        //질문 끝나면 실행하는 함수
        if (!next_q.hasClass('active')) {
            $('.neural-content-wrap').hide();
            $('.neural-result-wrap').show();
            var cnt0 = 0;
            counterFn();

            function counterFn() {
                id0 = setInterval(count0Fn, 300);
                function count0Fn() {
                    cnt0 = cnt0 + 13; // 13만큼 증가하기
                    if (cnt0 > 100) {
                        clearInterval(id0);
                        $('.neural-loading').hide();
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
    $('.age-choice .neural-choice-item').click(function () {
        $('.neural-result-summary .age').html($(this).attr('value') + " | ")
    });

    //성별 결과 도출
    $('.gender-choice .neural-choice-item').click(function () {
        $('.neural-result-summary .gender').html($(this).attr('value'))
    });

    $('.btn-result-show').click(function () {
        $('#neuralWrap').removeClass('active');
        $('.neural-result-summary').hide();
        $('#neuralresultWrap').addClass('active');
        $('#neuraltestWrap .neural_test').removeClass('active');

        //마지막 결과 도출 함수
        whatMax();
        recommend.forEach(max => {$(".neural-result.type"+max).addClass('active');}); 

        if($(".neural-result.type1").hasClass('active')){
            $('#neuralresultWrap').addClass('daily');
            $('#neuralresultWrap').removeClass('daily2');
        }
        if($(".neural-result.type2").hasClass('active')){
            $('#neuralresultWrap').addClass('daily2');            
            $('#neuralresultWrap').removeClass('daily');
        }else if($(".neural-result.type3").hasClass('active')){
            $('#neuralresultWrap').addClass('daily2');
            $('#neuralresultWrap').removeClass('daily');
        }
    });
});
