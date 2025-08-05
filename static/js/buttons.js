var block = document.getElementById('buttons_container');

var colors = [
  '#FF5252', // Ярко-красный
  '#651FFF', // Ярко-фиолетовый
  '#00E676', // Ярко-зеленый
  '#FF4081', // Розовый
  '#536DFE', // Ярко-синий
  '#FFD740', // Ярко-желтый
  '#7C4DFF', // Фиолетовый
  '#64FFDA', // Бирюзовый
  '#FF1744', // Алый
  '#304FFE', // Кобальтовый
  '#FF9100', // Оранжевый
  '#D500F9', // Пурпурный
  '#00BFA5', // Морской волны
  '#FF3D00', // Красно-оранжевый
  '#2962FF', // Ярко-голубой
  '#FFAB00', // Янтарный
  '#6200EA', // Темно-фиолетовый
  '#00C853', // Изумрудный
  '#FF6D00', // Тыквенный
  '#0091EA', // Лазурный
  '#C6FF00'  // Лаймовый
];

var desire = [
    "ПУСТО<br>Никакого желания не будет",
    "Подсказка<br>Самое жесткое желание под номером 1",
    "С тебя мороженное",
    "Ulala 18+ желание",
    "Расцеловать все тело",
    "шуд в мёдИ",
    "Ну, конечно, семь ахаха",
    "Подсказка<br>Это не номер Ямаля в сезоне 24/25",
    "Прям сейчас поешь любую песню",
    "+контент в сикрет чат",
    "Одно любое желание от меня",
    "Вместе идем в аквапарк",
    "С тебя шоколадка",
    "Учишь стих про бравл старс",
    ";",
    "С тебя пачка презиков:)",
    "Подсказка<br>Правильный номер содержит цифру 1",
    "Можешь отменить любое из желаний",
    "Даёшь админа в тг канале",
    "Загадываешь мне одно желание",
    "Да, именно столько лет тебе исполнилось"

];


function addButton(i) {
    var cover = document.createElement('div');
    cover.className = "cover";
    var button = document.createElement('button');
    button.style.background = `${colors[i-1]}`;
    cover.style.color = `${colors[i-1]}`;
    cover.style.border = `1px solid ${colors[i-1]}`;
    button.innerHTML = `${i}`;
    if (i != 15){
        button.onclick = function() {
            button.style.display = "none";
            cover.innerHTML = `${desire[i-1]}`;
        }
    } else {
        button.addEventListener('click', function() {
            window.location.href = '/congratulations';
});
    }
    cover.appendChild(button);
    block.appendChild(cover);
}

for (let i=0; i < 21; i++){
    addButton(i+1)
}

