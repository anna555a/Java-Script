const range = 100; // максимальное значение
let day_ = Number(prompt("Введите число"));
if(day_ < a) // сравниваем время с число 13
 alert('число меньше'); // если время меньше 13
else
 alert('число больше'); // если время равно 13 и больш

 if (day_ = a) 
 alert('вы угадали');
let m = {};
let a = [];
for (let i = 0; i < count; ++i) {
  let r = Math.floor(Math.random() * (range - i));  //????????????
  a.push(((r in m) ? m[r] : r) + 1);
  let l = range - i - 1;
  m[r] = (l in m) ? m[l] : l;
}