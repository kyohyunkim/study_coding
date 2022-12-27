var deliverycounter = setInterval(function () {
  var now = new Date();
  var hours = 12 - now.getHours();
  var minutes = 59 - now.getMinutes();
  var seconds = 59 - now.getSeconds();
  if(document.getElementById("delivery_counter")){
      document.getElementById("delivery_counter").innerHTML = "<span style='color:var(--delivery-color);font-weight: bolder;'>" + hours + "시간 " + minutes + "분</span>" + " 안에 주문하시면 <span style='color:var(--delivery-color);font-weight: bolder;'>오늘 바로</span> 발송됩니다.";
      if (hours == 0 && minutes > 0) { document.getElementById("delivery_counter").innerHTML = "<span style='color:var(--delivery-color);font-weight: bolder;'>" + minutes + "분 " + seconds + "초</span>" + " 안에 주문하시면 오늘 바로 발송됩니다."; }
      if (hours == 0 && minutes == 0) { document.getElementById("delivery_counter").innerHTML = "<span style='color:var(--delivery-color);font-weight: bolder;'>" + seconds + "초</span>" + " 안에 주문하시면<br>오늘 바로 발송됩니다."; }
      if (hours < 0) { document.getElementById("delivery_counter").innerHTML = "<span style='color:var(--delivery-color);font-weight: bolder;'>평일 오후 2시까지</span> 주문 완료 시 <span style='color:var(--delivery-color);font-weight: bolder;'>당일 발송</span><br><span style='font-size:13px; font-weight:300;'>( 오후 2시 이후 주문 시 익일 발송 / 주말·공휴일 제외 )</span>"; }
  }
}, 1000);

//월~금
if (now.getDay() >= "1" && now.getDay() <= "5" && now.getHours() < "13" && holidays.includes(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate()) == false) { document.write("<span id='delivery_counter'>지금 주문하시면<br><span style='color:var(--delivery-color);font-weight: bolder;'>오늘 바로</span> 발송됩니다.</span>"); }
else if (now.getDay() >= "1" && now.getDay() <= "4" && now.getHours() >= "13" && holidays.includes(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate()) == false) {
  if (holidays.includes(add1.getFullYear() + "/" + (add1.getMonth() + 1) + "/" + add1.getDate()) == false) { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>지금 주문</span>하시면 <span style='color:var(--delivery-color);font-weight: bolder;'>내일 즉시 발송</span>됩니다.<br><span style='font-size:13px; font-weight:300;'>( 평일 오후 2시까지 주문 완료 시 당일 발송 )</span>"); }
  else { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>평일 오후 2시까지</span> 주문 완료 시 <span style='color:var(--delivery-color);font-weight: bolder;'>당일 발송</span><br><span style='font-size:13px; font-weight:300;'>( 오후 2시 이후 주문 시 익일 발송 / 주말·공휴일 제외 )</span>"); }
}
//금~
else if (now.getDay() == "5" && now.getHours() >= "13" && holidays.includes(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate()) == false) { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>평일 오후 2시까지</span> 주문 완료 시 <span style='color:var(--delivery-color);font-weight: bolder;'>당일 발송</span><br><span style='font-size:13px; font-weight:300;'>( 오후 2시 이후 주문 시 익일 발송 / 주말·공휴일 제외 )</span>"); }
//토
else if (now.getDay() == "6" && holidays.includes(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate()) == false) { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>평일 오후 2시까지</span> 주문 완료 시 <span style='color:var(--delivery-color);font-weight: bolder;'>당일 발송</span><br><span style='font-size:13px; font-weight:300;'>( 오후 2시 이후 주문 시 익일 발송 / 주말·공휴일 제외 )</span>"); }
//일
else if (now.getDay() == "0" && holidays.includes(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate()) == false) {
  if (holidays.includes(add1.getFullYear() + "/" + (add1.getMonth() + 1) + "/" + add1.getDate()) == false) { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>지금 주문</span>하시면 <span style='color:var(--delivery-color);font-weight: bolder;'>내일 즉시 발송</span>됩니다.<br><span style='font-size:13px; font-weight:300;'>( 평일 오후 2시까지 주문 완료 시 당일 발송 )</span>"); }
  else { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>평일 오후 2시까지</span> 주문 완료 시 <span style='color:var(--delivery-color);font-weight: bolder;'>당일 발송</span><br><span style='font-size:13px; font-weight:300;'>( 오후 2시 이후 주문 시 익일 발송 / 주말·공휴일 제외 )</span>"); }
}
else if (holidays.includes(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate()) == true) {
  if (add1.getDay() != "0" && add1.getDay() != "6" && holidays.includes(add1.getFullYear() + "/" + (add1.getMonth() + 1) + "/" + add1.getDate()) == false) { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>지금 주문</span>하시면 <span style='color:var(--delivery-color);font-weight: bolder;'>내일 즉시 발송</span>됩니다.<br><span style='font-size:13px; font-weight:300;'>( 평일 오후 2시까지 주문 완료 시 당일 발송 )</span>"); }
  else { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>평일 오후 2시까지</span> 주문 완료 시 <span style='color:var(--delivery-color);font-weight: bolder;'>당일 발송</span><br><span style='font-size:13px; font-weight:300;'>( 오후 2시 이후 주문 시 익일 발송 / 주말·공휴일 제외 )<br></span>"); }
}
else { document.write("<span style='color:var(--delivery-color);font-weight: bolder;'>평일 오후 2시까지</span> 주문 완료 시 <span style='color:var(--delivery-color);font-weight: bolder;'>당일 발송</span><br><span style='font-size:13px; font-weight:300;'>( 오후 2시 이후 주문 시 익일 발송 / 주말·공휴일 제외 )<br></span>"); }