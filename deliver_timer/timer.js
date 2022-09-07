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

        const timerWrap = document.querySelector("#timer_wrap");
        console.log(timerWrap);
        var weekday1 = "<span id='delivery_counter'>지금 주문하시면<br><span style='font-weight:500;'>오늘 바로</span> 발송됩니다.</span>"
        let isHolliday = holidays.includes(setToday); // 오늘이 휴일인지 판별 
    
          if((today.getDay() >=1 && today.getDay() <= 5) && (isHolliday === false)){ //월~금이고 휴일이 아닐 때 아래 실행
                //평일마다 일어나는 이벤트
                if (new Date() >= new Date( setToday+' 00:00:00') // 언제부터
                      && new Date() < new Date(setToday+' 16:00:00')) { //언제까지
                        timerWrap.innerHTML = weekday1;
                }else{
                    timerWrap.innerHTML = `<span style='font-weight:500;'>평일 16시까지</span> 주문 완료건 <span style='font-weight:500;'>당일 발송</span><br><span style='font-size:13px;'>( 16시 이후 주문건 익일 발송 / 주말·공휴일 제외 )</span>`;
                }
                // 평일마다 반복되는 이벤트 끝
        }

        if(isHolliday === true){}
    
    }
    
    window.addEventListener('DOMContentLoaded', function(){
        const telBtnMo = document.querySelector("#telBtnMo");
        setInterval(() =>{
            if(telBtnMo){
                TimeEvent();
            }
        },1000); // 1초마다 체크
    });
    /****************** Time event ********************/