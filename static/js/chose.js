var main_container = document.getElementById('main_container');
var i = 0;
var trigger = 32;

var phraze = [
    "Каток 15 декабря",
    "Солнцево 22 января",
    "Солнцево 24 декабря",
    "Повторение трейлера из GTA",
    "Чертаново 5 января",
    "Поездка в Тулу",
    "Поездка в Ярославль",
    "20 января",
    "Второй Гринби",
    "Корпоратив с КвизПлиз",
    "Покатушки по городу ночью 1 февраля",
    "Прогулка по ВДНХ",
    "Полянка + поездка на дачу",
    "Поездка в Питер с папой + алые паруса",
    "Поездка в Беларусь",
    "Первая летняя поездка в Питер",
    "Моменты, связанные с мастерской",
    "Летняя поездка на море",
    "Знакомство с челиком в серых спортивках",
    "ОРЕХ",
    "8 марта",
    "Идеально закрытая зимняя сессия",
    "Идеально закрытая летняя сессия",
    "Идеальная фотка на паспорт",
    "Прогулка ночью 19 апреля",
    "Прогулка у дома музыки",
    "24 января",
    "14 февраля",
    "Новый год",
    "Новый телефон",
    "Взаимная поддержка с Василисой",
    "Воссоединение 28 мая"
]

var numbers = Array.from({length: 32}, (_, i) => i + 1);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers);

function set_blocks() {
    var stage = document.getElementById('stage');
    var len = numbers.length;
    if (len == 2){
        stage.innerHTML = "ФИНАЛ";
        //stage.style.width = "auto"
    } else if (numbers.length % trigger == 0){
        stage.innerHTML = `1/${len/2}`;
        trigger /= 2;
    }
    addBlock();
    addBlock();
}


function createConfetti() {
  const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE',
                 '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE',
                 '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];

  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';

      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const posX = Math.random() * window.innerWidth;
      const rotation = Math.random() * 360;
      const duration = Math.random() * 3 + 2;

      confetti.style.left = `${posX}px`;
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = color;
      confetti.style.animationDuration = `${duration}s`;
      confetti.style.borderRadius = `${Math.random() * 50}%`;

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, duration * 1000);
    }, Math.random() * 1000);
  }
}

function addBlock(){
    var num = numbers[0];

    var block = document.createElement('div');
    block.className = "block";
    block.id = `${num}`
    block.onclick = function() {
        numbers.push(num)

        var blocks = main_container.querySelectorAll('.block');

        blocks.forEach(block => {
        block.remove();
});
    if (numbers.length > 1){
        set_blocks();
    } else {

        main_container.style.justifyContent = 'center';
        addBlock();
        winner = document.getElementById(`${num}`);
        winner.className = 'winner';
        winner.onclick = null;
        createConfetti();

        var main_title = document.getElementById('main_title');
        main_title.innerHTML = `
        <p>Поздравляю, ты потренировалась делать выбор!</p>
        <p>Самое запоминающееся событие за последний год</p>
        `;


        var or = document.getElementById('or');
        var stage = document.getElementById('stage');

        or.style.display = "none";
        stage.style.display = "none";

        var end = document.createElement('button');
        end.id = 'end';
        end.innerHTML = `Итоги`;
        end.addEventListener('click', function() {
            window.location.href = '/end_page';
        });

        main = document.getElementById('main');
        main.appendChild(end);



    }

  };
    block.innerHTML = `
    <div class="title"><p>${phraze[num-1]}</p></div>
    <div class="photo_container">
        <img class="photo" src="static/images/${num}.jpg">
    </div>
    `
    main_container.appendChild(block)
    numbers.shift();
    console.log(numbers);
}

set_blocks();

//    border: 3px solid #2c3e50;