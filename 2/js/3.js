let date = new Date(); // получаем текущую дату
let time = date.getHours(); 
let day_ = Number(prompt("Введите день недели")); //если добавить строку с date то все пропадает
let day;
switch(day_){
 case 0 : 
 day='понедельник';
 break;
 case 1 : 
 day='вторник';
 break;
}
alert ("Сегодня: "+day+", сейчас "+time+" часов");