dic = {}
fine = {}
money = 1000
count = 2

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {

   const isExist = Object.keys(dic).includes(sender);

   if (msg == "/인증") {
      if (!isExist) {
         replier.reply("새로 생성되었습니다");
         dic[sender] = 1;
      }
      else {
         dic[sender] += 1;
      }

      m = "과제가 제출되었습니다. " + sender + "의 이번주 과제 제출: " + dic[sender] + "개";
      replier.reply(m);
   }
   else if (msg == "/제출초기화") {
      dic = {};
      replier.reply("모든 내용(모든 제출자들의 제출 내역)이 초기화되었습니다.");
   }
  else if(msg=="/벌금초기화"){
  fine={};
  replier.reply("모든 내용(모든 제출자들의 벌금 내역)이 초기화되었습니다.");
  }
   else if (msg == "/과제확인") {
      m = sender + "님의 이번주 과제 제출은 " + dic[sender] + "개 입니다~~";
      replier.reply(m);
   }
   else if (msg.includes("/벌금횟수변경?")) {
      count = msg.split('?')[1];
      m = "일주일 안 벌금 기준이 " + count + "로 바뀌었습니다~";
      replier.reply(m);
   }
   else if (msg.includes("/벌금액수변경?")) {
      money = msg.split('?')[1];
      m = "벌금 금액이 " + money + "로 바뀌었습니다~";
      replier.reply(m);
   }
   else if (msg == "/벌금횟수확인") {
      m = "벌금 기준은 " + count + "개 입니다";
      replier.reply(m);
   }
  else if(msg=="/벌금액수확인"){
  m = "벌금 액수는 " + money + "입니다~";
  replier.reply(m);
  }
   else if (msg == "/이번주벌금확인") {
      for (value in dic) {
         if (dic[value] <= count) {
            m = value + "님의 벌금은 " + money + "입니다.";
            replier.reply(m);
         }
      }
   }
   else if (msg == "/총벌금확인") {
      for (value in fine) {
         m = value + "님의 벌금은" + fine[value] + "입니다.";
         replier.reply(m);
      }
   }
   else if (msg == "/벌금등록") {
      for (value in dic) {
         if (dic[value] <= count) {
            if (Object.keys(fine).includes(value)) {
               fine[value] += parseInt(돈);
            }
            else {
               fine[value] = parseInt(돈);
            }
         }
     
      }
    m = "벌금 등록이 완료되었습니다~한번 확인해보세요~~";
             replier.reply(m);
   }
   
}
