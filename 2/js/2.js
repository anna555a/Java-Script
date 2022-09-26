
 function tableCreate(c1,r1) { //значение c1 r1 - локальные, они принимают значение c и r в основ. части программы
  const body = document.body,
        tbl = document.createElement('table');
  tbl.style.width = '1px';
  tbl.style.border = '1px solid black';
  for (let c = 1; c <= c1; c++) { 
    const tr = tbl.insertRow(); //вставка строки tr в эл-т tbl
    for (let r = 1; r <= r1; r++) { //
      if (c === c1 && r === r1) {
        break;
      } else {
        const td = tr.insertCell(); //вставка столбца
        td.appendChild(document.createTextNode(`${c},${r}`)); //вывод номеров строки столбца внутри ячейки
        td.style.border = '1px solid black';
        if (c === c1 && r === r1) {
          td.setAttribute('rowSpan', '2');
        }
      }
    }
  }
  body.appendChild(tbl);
}
let c = prompt("Введите значение переменной:");     //осн часть программы п.24-26
let r = prompt("Введите значение переменной:");              
tableCreate(c,r); 