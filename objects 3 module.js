let gameRuleset = {
    diceNumber: 2,
    maxAttempts: 3
  };
  
  let firstCat = {
    name: 'Кекс',
    points: 0
  };
  
  let secondCat = {
    name: 'Рудольф',
    points: 0
  };
  
  let cats = [firstCat, secondCat];
  
  let runGame = function (ruleset, players) {
    for (let currentAttempt = 1; currentAttempt <= ruleset.maxAttempts; currentAttempt++) {
      for (let i = 0; i < players.length; i++) {
        let throwResult = keks.throwDice(ruleset.diceNumber, ruleset.diceNumber * 6);
        players[i].points += throwResult;
        console.log(players[i].name + ' выбросил ' + players[i].points);
      }
    }
    return players;
  };
  
  let getWinners = function (players) {
    let winners = [];
    let max = players[0];
  
    for (let i = 0; i < players.length; i++) {
      let currentPlayer = players[i];
      if (currentPlayer.points > max.points) {
        max = currentPlayer;
        winners = [max];
      } else {
        if (currentPlayer.points === max.points) {
          winners.push(currentPlayer);
        }
      }
    }
    return winners;
  };
  
  let printWinners = function (players, winners) {
    if (players.length === winners.length) {
      console.log('Все коты как на подбор!');
      }
    };
  
  cats = runGame(gameRuleset, cats);
  console.log(cats);
  let tops = getWinners(cats);
  console.log(tops);
  printWinners(cats, tops);  




  let getStatistics = function (players) {
    let goalSum = 0;
    
    for (let i = 0; i<players.length; i++) {
        goalSum += players[i].goals;
        } 
    for (let i=0; i<players.length; i++) {
      players[i].coefficient = players[i].goals*2 + players[i].passes;
      players[i].percent = Math.round(players[i].goals*100 /goalSum); 
      } 
      return players;
  };



  let processorPrice = {
    'i5': 5000,
    'i7': 10000
  };
  
  let displayPrice = {
    13: 5000,
    15: 10000
  };
  
  let memoryPrice = {
    8: 3000,
    16: 4000
  };
  
  let buildComputer = function (memory, display, processor) {
    let computer = {
      basicPrice: 5000,
      processor: processor,
      display: display,
      memory: memory,
  
      getDescription: function () {
        return 'компьютер с процессором ' + computer.processor + ', диагональю ' + computer.display + ', оперативной памятью ' + computer.memory;
      },
  
      getPrice: function () {
        return computer.basicPrice + processorPrice[processor] + displayPrice[display] + memoryPrice[memory];
      }
    };
  
    return computer;
  };
  
  let myComputer = buildComputer(16, 15, 'i7');
  console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());





  const getRandomPositiveInteger = function (min, max) {
    const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
    const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };
  
  const checkStringLength = function (string, length) {
    return string.length <= length;
  };
  
  const AMOUNT_OF_CARDS = 25;
  
  const NAMES = [
    'Вася',
    'Петя',
    'Ира',
    'Дина',
    'Стас',
    'Кекс',
    'Иван Валерьевич',
    'Светка',
    'Дядя Миша',
    'Шарик Михайлович',
    'Бегемот',
  ];
  
  const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  
  const DESCRIPTION = [
    'Природа!',
    'Todays mood',
    '<3',
    'Фото дня',
    'Лучшая поездка',
    'На память',
    'Оцените снимок',
    'Жду в комментах!',
    'фото без обработки',
    'сделаю вам такое же фото, дорого, лс',
    '25.03.2002'
  ];
  
  
  
  
  /*const getId = function () {
    const index = 0;
    const id = index+1;
    return id;
  }; */
  
  
  
  /* функции для создания массива из 25 сгенерированных объектов. 
  
  Каждый объект массива — описание фотографии, опубликованной пользователем.
  
  Структура каждого объекта должна быть следующей:
  
  id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
  
  url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  
  description, строка — описание фотографии. Описание придумайте самостоятельно.
  
  likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  
  comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
  
  {
    id: 135,
    avatar: 'img/avatar-6.svg',
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Артём',
  }
  У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.
  
  Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
  */
  
  