// Создаем переменную для хранения некоторого числа в диапазоне от 10000 до 99999
var randomNum = Math.floor((Math.random() * 99999) + 10000);

// Создаем переменную el для записи элемента с идентификатором info
var el = document.getElementById('UniCode');
// Записываем число в элемент
el.innerHTML = '<p>Jm' + randomNum + '</p>';