function hello (){
  alert('hello');
}


function getShortDate(){
  var str = '';
  var date = new Date();
  str = date.getFullYear() + "년 " + twoDigit(date.getMonth()+1) +
   "월 " + twoDigit(date.getDate() + "일 ");
  return str;
}


function getFullDate(){
  var str = '';
  var date = new Date();
  str = date.getFullYear() + "-" + twoDigit(date.getMonth()+1) +
   "-" + twoDigit(date.getDate()) + " " + getWeek(date.getDay()) + " "
   + twoDigit(date.getHours()) + ":" + twoDigit(date.getMinutes()) + ":"
  + twoDigit(date.getSeconds());
  return str;
}

  function twoDigit(num){
    return num < 10 ? "0" + num : num ; //삼항연산자
  }

  function getWeek(num){
    var arr = ['일','월','화','수','목','금','토']
    return arr[num];
  }
