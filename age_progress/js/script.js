$(function(){
  var birthDay = "1999/1/22"; // safari対策で "/" に

  var age = calcAge(birthDay);
  var progress = calcProgress(birthDay);

  $(".js-calc-age").html(age + "歳");
  $(".js-calc-progress").css("width", progress + "%");
});

function calcAge(day){
  var birthDate = new Date(day);

  var currentDate = new Date();

  var age = currentDate.getFullYear() - birthDate.getFullYear();

  // 誕生日がまだ来ていない場合は、1歳引く
  if (currentDate.getMonth() < birthDate.getMonth() ||
     (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
    age -= 1;
  };

  return age;
};

function calcProgress(day){
  var days = day.split("/");
  var month = days[1];
  var day = days[2];

  // 現在の日時
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  // 誕生日の日時
  var birthDate = new Date(currentYear, month, day);

  var timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
  if(currentDate.getTime() > birthDate.getTime()){
    timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
  }else{
    birthDate = new Date(currentYear - 1, month, day);
    timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
  }
  
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return Math.ceil((daysDiff / 365) * 100);
};
