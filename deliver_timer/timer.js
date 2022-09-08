timer_wrap.innerHTML = `
<!--평일 16시 이전 & 일요일 16시 이전 안내문구-->
<span class='weekday time_text'><span id='delivery_counter'>지금 주문하시면<br><span class="bold_text">오늘 바로</span> 발송됩니다.</span></span>

<!--평일 16시 이후 & 토요일 & 일요일 16시 이후 안내문구-->
<span class="after time_text"><span>오늘</span> 주문하시면<br><span class="bold_text">내일 바로</span> 발송됩니다.</span>

<!--금요일 16시 이후 안내문구-->
<span class='friday time_text'><span id='delivery_counter'>오늘 주문하시면<br><span class="bold_text">주말 동안 바로</span> 발송됩니다.</span></span>

<!--공휴일 안내문구-->
<span class="holiday time_text"><span class="bold_text">평일 16시까지</span> 주문 완료건 <span class="bold_text">당일 발송</span><br><span style='font-size:13px;'>( 16시 이후 주문건 익일 발송 / 주말·공휴일 제외 )</span></span>
`
/****************** Time event ********************/
Date.prototype.format = function (f) {
    if (!this.valueOf()) return " ";
    let d = this;
    
        return f.replace(/(yyyy|MM|dd)/gi, function (i) {
            switch (i) {
                case "yyyy": return d.getFullYear(); // 년 (4자리)
                case "MM": return (d.getMonth() + 1).zf(2); // 월 (2자리)
                case "dd": return d.getDate().zf(2); // 일 (2자리)
                default: return $1;
            }
        });
    };
    String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
    String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
    Number.prototype.zf = function (len) { return this.toString().zf(len); };
    
    
    function TimeEvent(){
    
        let today = new Date();
        let setToday = today.format('MM/dd/yyyy');
          // 휴일 리스트
        const holidays = [
            "07/17/2022",
            "08/15/2022",
            "09/09/2022",
            "09/10/2022",
            "09/11/2022",
            "09/12/2022",
            "10/03/2022",
            "10/09/2022",
            "10/10/2022",
            "12/25/2022",
            "01/01/2023",
            "01/23/2023",
            "01/24/2023",
        ];

        const weekday = document.querySelector(".weekday");
        const after = document.querySelector(".after");
        const holiday = document.querySelector(".holiday");
        const friday = document.querySelector(".friday");


        //배송문구 카운트
        var deliverycounter = setInterval(function () {
            var now = new Date();
            var hours = 15 - now.getHours();
            var minutes = 59 - now.getMinutes();
            var seconds = 59 - now.getSeconds();
            if (document.getElementById("delivery_counter")) {
                document.getElementById("delivery_counter").innerHTML = "<span class='bold_text'>" + hours + "시간 " + minutes + "분</span>" + " 안에 주문하시면<br><span class='bold_text'>오늘 바로</span> 발송됩니다.";
                if (hours == 0 && minutes > 0) { document.getElementById("delivery_counter").innerHTML = "<span class='bold_text'>" + minutes + "분 " + seconds + "초</span>" + " 안에 주문하시면<br><span class='bold_text'>오늘 바로</span> 발송됩니다."; }
                if (hours == 0 && minutes == 0) { document.getElementById("delivery_counter").innerHTML = "<span class='bold_text'>" + seconds + "초</span>" + " 안에 주문하시면<br><span class='bold_text'>오늘 바로</span> 발송됩니다."; }
                if (hours < 0) { document.getElementById("delivery_counter").innerHTML = "<span class='bold_text'>평일 13시까지</span> 주문 완료건 <span class='bold_text'>당일 발송</span><br><span style='font-size:13px;'>( 13시 이후 주문건 익일 발송 / 주말·공휴일 제외 )</span>"; }
            }
        }, 1000);

        let isHolliday = holidays.includes(setToday); // 오늘이 휴일인지 판별 
    
        if((today.getDay() >=1 && today.getDay() <= 5) && (isHolliday === false)){ //월~금이고 휴일이 아닐 때 아래 실행
                //평일마다 일어나는 이벤트
                if (new Date() >= new Date( setToday+' 00:00:00') // 언제부터
                      && new Date() < new Date(setToday+' 16:00:00')) { //언제까지
                        weekday.classList.add('active');
                }else{
                    after.classList.add('active');
                }
                // 평일마다 반복되는 이벤트 끝
        }

        //금요일 16시 이후
        if((today.getDay() == 5) && (isHolliday === false)){
            if (new Date() >= new Date( setToday + '16:00:00') // 언제부터
                    && new Date() < new Date(setToday + '23:59:59')) { //언제까지
                        friday.classList.add('active');
                        after.classList.remove('active');
            }
        }

        //토요일
        if((today.getDay() == 6) && (isHolliday === false)){
            weekday.classList.remove('active');
            after.classList.add('active');
        }

        //일요일
        if((today.getDay() == 0) && (isHolliday === false)){
            if (new Date() >= new Date( setToday + '00:00:00') // 언제부터
                    && new Date() < new Date(setToday + '16:00:00')) { //언제까지
                        weekday.classList.add('active');
                        after.classList.remove('active');
            }else{
                after.classList.add('active');
            }
        }

        //공휴일
        if(isHolliday === true){
            holiday.classList.add('active');
        }

    
    }
    
    window.addEventListener('DOMContentLoaded', function(){
        setInterval(() =>{
            TimeEvent();
        },1000); // 1초마다 체크
    });
    /****************** Time event ********************/