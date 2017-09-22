// Создаем переменную для хранения некоторого числа в диапазоне от 10000 до 99999
//var randomNum = Math.floor((Math.random() * 100000));
var min=10000
var max=99999
var randomNum = Math.random() * (max-min+1);
randomNum=Math.floor(randomNum)+min


// Создаем переменную el для записи элемента с идентификатором info
var el = document.getElementById('UniCode');
// Записываем число в элемент
el.innerHTML = '<p>Jm' + randomNum + '</p>';