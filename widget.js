const articles = [
  {
    source: {
      id: "rbc",
      name: "RBC",
    },
    author: null,
    title: "Путин отправил в отставку посла России в Белоруссии - РБК",
    description:
      "Президент России Владимир Путин освободил от должности российского посла в Белоруссии Дмитрия Мезенцева, говорится в указе, опубликованном на официальном интернет-портале правовой информации. ...",
    url: "https://www.rbc.ru/rbcfreenews/6054cc449a79470ab0b872a3",
    urlToImage:
      "https://s0.rbk.ru/v6_top_pics/media/img/6/87/756161702975876.jpg",
    publishedAt: "2021-03-19T16:11:00Z",
    content: "",
  },
  {
    source: {
      id: null,
      name: "Sportrbc.ru",
    },
    author: null,
    title:
      "«Монако» запретил Головину играть за сборную против Словении - РБК Спорт",
    description:
      "Россиянин не сможет участвовать в матчах за пределами Евросоюза",
    url: "https://sportrbc.ru/news/6054bc899a794703a642469f",
    urlToImage:
      "https://s0.rbk.ru/v6_top_pics/media/img/0/92/756161684766920.jpg",
    publishedAt: "2021-03-19T15:37:06Z",
    content:
      "«» , , . .\r\n , . , , .\r\n , , , .\r\n 23 «» — -, 22 , (24 ). 27 , . , , 30 .\r\n, , , , . , «» , , «», - , .\r\n H . -2022 . , , .\r\n 2022 21 18 . , . - . , , . . 32 .\r\nTelegram-.",
  },
  {
    source: {
      id: null,
      name: "Tass.ru",
    },
    author: "ТАСС",
    title:
      '"На каком-то этапе переговорим". Байден ответил на предложение Путина о диалоге - ТАСС',
    description:
      "Российский лидер ранее предложил президенту США провести открытый диалог в прямом эфире",
    url: "https://tass.ru/mezhdunarodnaya-panorama/10950363",
    urlToImage:
      "https://phototass1.cdnvideo.ru/width/1200_4ce85301/tass/m2/uploads/i/20210319/6038957.jpg",
    publishedAt: "2021-03-19T15:23:13Z",
    content:
      ', 19 . //. , - .", - ", - , .\r\n . " , , , , , ", - "-24" . ", , , ", - . , " , , , , ".',
  },
  {
    source: {
      id: "rbc",
      name: "RBC",
    },
    author: null,
    title:
      "Финляндия не стала следовать рекомендации регулятора ЕС по AstraZeneca - РБК",
    description:
      "Мера последовала после двух зарегистрированных случаев тромбоза у вакцинированных данным препаратом. Вакцинацию остановили как минимум на неделю",
    url: "https://www.rbc.ru/society/19/03/2021/6054bb849a7947027d9c8515",
    urlToImage:
      "https://s0.rbk.ru/v6_top_pics/media/img/1/60/756161707411601.jpg",
    publishedAt: "2021-03-19T15:18:00Z",
    content:
      ", - AstraZeneca. (THL). .\r\n AstraZeneca, . « THL AstraZeneca , - . », — .\r\n , , AstraZeneca, .\r\n, () AstraZeneca. , , , , , . , AstraZeneca.",
  },
  {
    source: {
      id: "rbc",
      name: "RBC",
    },
    author: null,
    title: "Летевший из Турции в Москву самолет вынужденно сел в Ростове - РБК",
    description:
      "На борту Airbus A321 находились 194 пассажира. Посадка прошла благополучно. Сейчас решается вопрос, нужен ли резервный борт для доставки пассажиров в российскую столицу",
    url: "https://www.rbc.ru/society/19/03/2021/6054b1f69a7947fd60769956",
    urlToImage:
      "https://s0.rbk.ru/v6_top_pics/media/img/5/96/756161672267965.jpg",
    publishedAt: "2021-03-19T14:22:54Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Взаимные обвинения и час перепалки: США и Китай провели переговоры на Аляске - Би-би-си Русская служба",
    description:
      "Переговоры на высоком уровне в Анкоридже начались со взаимных обвинений, однако потом страны заявили, что хотят оставить напряженность в прошлом.",
    url: "https://www.bbc.com/russian/news-56447664",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_russian/14A2/production/_117628250_066305972.jpg",
    publishedAt: "2021-03-19T13:54:42Z",
    content:
      ', Reuters\r\n, .\r\n , " ", , " ".\r\n , , , - .\r\n, , , , , .\r\n, , , , , .\r\n" , ", - .\r\n .\r\n" , , ", - .\r\n , , "" .\r\n , , : " ".\r\n , , , . .\r\n , . \r\n", ", - .\r\n, , , , .\r\n , , " " .\r\n , , - .\r\n , , , .\r\n -… [+150 chars]',
  },
  {
    source: {
      id: null,
      name: "Sport-express.ru",
    },
    author: "Вячеслав Короткин",
    title:
      "Форвард «Фиорентины» Кокорин отправился на лечение в Рим - Спорт-Экспресс",
    description:
      "Как стало известно «СЭ», российский форвард Александр Кокорин покинул расположение «Фиорентины» и в данный момент проходит курс лечения в римской клинике «Вилла Стюрт».",
    url:
      "https://www.sport-express.ru/football/italy/news/kokorin-mozhet-propustit-iz-za-travmy-tri-matcha-fiorentiny-1769331/",
    urlToImage:
      "https://ss.sport-express.ru/userfiles/materials/166/1660780/large.jpg",
    publishedAt: "2021-03-19T13:30:00Z",
    content:
      "«», «»      « ».\r\n, , 19 , 30 , .   ,       .\r\n 28-   21  «»,  29-,  ,    3  «»,  30- 11   «».\r\n       . «» 26  2021 . «».\r\n( )",
  },
  {
    source: {
      id: "rbc",
      name: "RBC",
    },
    author: null,
    title: "Семьям жертв взрыва в Химках выплатят по 1 млн руб. - РБК",
    description:
      "Семьи погибших при взрыве газа в жилом доме в Химках получат по 1 млн руб., сообщила журналистам министр социального развития Подмосковья Ирина Фаевская, передает ТАСС. Кроме того, пострадавшим, ...",
    url: "https://www.rbc.ru/rbcfreenews/6054a4339a7947f74aef6f65",
    urlToImage:
      "https://s0.rbk.ru/v6_top_pics/media/img/1/89/756161604337891.jpg",
    publishedAt: "2021-03-19T13:27:00Z",
    content:
      "1 ., , .\r\n , , , 500 . ., , , — 300 ., , , — 100 .\r\n 19  16 , . .\r\n , . , , . . , ,   (. 3 . 238 ). .",
  },
  {
    source: {
      id: null,
      name: "Sports.ru",
    },
    author: null,
    title:
      "Олич – главный кандидат на замену Гончаренко, рассматриваются Василий Березуцкий и Шпилевский из «Кайрата» (Но - Sports.ru",
    description:
      "Журналист Нобель Арустамян рассказал о кандидатах на замену тренеру ЦСКА Виктору Гончаренко.",
    url:
      "https://www.sports.ru/football/1095144836-olich-glavnyj-kandidat-na-zamenu-goncharenko-rassmatrivayutsya-vasilij.html",
    urlToImage:
      "https://www.sports.ru/dynamic_images/news/109/514/483/6/share/0c85b5.jpg",
    publishedAt: "2021-03-19T13:21:00Z",
    content:
      ".\r\n« .  : ? , , ? , ? . , .\r\n , . , . , . .\r\n . . , , .\r\n , , , . «», « ».\r\n , . . . -5 », -.\r\n:",
  },
  {
    source: {
      id: null,
      name: "Interfax.ru",
    },
    author: null,
    title:
      "Набиуллина назвала последствия введения санкций на госдолг России - Интерфакс",
    description:
      "Системных рисков финансовой стабильности при возможном введении санкций на российский государственный долг не возникнет, могут быть краткосрочные колебания ликвидности, считает председатель Банка России Эльвира Набиуллина.",
    url: "https://www.interfax.ru/russia/756876",
    urlToImage: "https://www.interfax.ru/aspimg/756876.png",
    publishedAt: "2021-03-19T13:05:00Z",
    content:
      '. 19 . INTERFAX.RU - , , . - 19 , ..\r\n" : , . , , , . , , - - . , ", - .\r\n , , , , .\r\n , , .\r\n" : , , ", - .\r\n" , , . , , . , , , , , , , , , ", - .\r\n" , , . . . . , . . - 1 800 ", - .\r\n, 2021 .\r\n 20… [+66 chars]',
  },
  {
    source: {
      id: null,
      name: "Championat.com",
    },
    author: "Чемпионат",
    title:
      "Ирина Казакевич расплакалась в прямом эфире после 100-го места в спринте - Чемпионат",
    description:
      "Российская биатлонистка Ирина Казакевич расплакалась в прямом эфире после проблем с винтовкой в спринтерской гонке на этапе Кубка мира в Эстерсунде (Швеция). Итоговое место Ирины на финише — 100-е.",
    url:
      "https://www.championat.com/biathlon/news-4298903-irina-kazakevich-rasplakalas-v-pryamom-efire-posle-100-go-mesta-v-sprinte.html",
    urlToImage: "https://img.championat.com/news2/social/8/b0/4298903.jpg",
    publishedAt: "2021-03-19T13:03:53Z",
    content:
      "(). 100-.\r\n 2 «» 5 «».\r\n« , . , . , . . , . , .\r\n, , . , . - , , , . , , - . , , . . - », « ».",
  },
];


document.write(`<div class="results">

<div class="results__wrapper">
    <div class="loader"></div>
    <button class="button results__close"></button>

    <div class="results__overlay">
        <div class="results__container"></div>
    </div>

</div>
<button class="button results__open"></button>
</div>`);

document.write('<link rel="stylesheet" type="text/css" href="widget.css" />');

const section = document.querySelector(".results");
const resultsButton = document.querySelector('.results__open');
const closeButton = document.querySelector('.results__close');
const resultsContainer = document.querySelector('.results__container');
const resultOverlay = document.querySelector('.results__overlay');
const resultWrapper = document.querySelector('.results__wrapper');
const loader = document.querySelector('.loader');

//Имитируем загрузку с api
class API {
  _i = 0;

  resetCounter() {
    _i = 0;
  }

  getArticlesCount() {
    try {
      let articlesNumber = new Promise((resolve) => {
        setTimeout(() =>resolve(articles.length), 2000)});
      return articlesNumber;
    } catch (err) {
      console.log(err);
    }
  }

   async getArticles() {
     try {
      //  Выдача по частям
      const bulkSize = 4;
      const edge = this._i * bulkSize;
      let result = new Promise((resolve) => 
        setTimeout(() =>resolve(articles.slice(edge, edge + bulkSize)), 1500));
      this._i++;
      return result;
     } catch (err) {
      console.log(err);
    }  
  }
}

let api = new API();

//Проверяем на innerHTML
function sanitizeHTML(str) {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
}

//Конвертируем дату
function dateConverter(date) {
  return new Date(date)
    .toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })    
}

// Проверяем, есть ли автор
function checkAuthor(item, source){
  if(!item || item==""){
    return item=`корреспондент ${source}`
  } else {return item}
}

// Создаём карточку
function createNewsCard(item) {
  const resultsCard = document.createElement("div");
  resultsCard.classList.add("results__card");
  const template = `
<a href="${sanitizeHTML(
    item.url
  )}" target="_blank" class="content__link"> 
    <p class="results__date">Опубликовано: ${dateConverter(sanitizeHTML(
      item.publishedAt
    ))}</p>
    <h3 class="results__cardtitle">${sanitizeHTML(
      item.title
    )}
    </h3>
    <p class="results__source"> Автор статьи: ${checkAuthor(sanitizeHTML(
      item.author), item.source.name
    )}</p>
    <span class="done"></span>
    </a>`;
  resultsCard.insertAdjacentHTML("beforeend", template);
  
  return resultsCard;
}

// Рендерим массив новостей
function newsRender(array, container) {
  closeButton.setAttribute('style', `display: block;`);
  array.forEach((item) => {
    const card = createNewsCard(item);
    container.appendChild(card);
  });
  resultOverlay.appendChild(container);
}

// Экземпляр класса апи
api
  .getArticlesCount()
  .then((res) => {
    resultsButton.textContent = `Всего найдено: ${res} статей`;
    loader.setAttribute('style', 'display: none');
    resultsButton.setAttribute('style', 'display: block');
  })
  .catch("no");

  // Слушатели событий
resultsButton.addEventListener('click', async ()=>{
  newsRender(await api.getArticles(), resultsContainer);
  resultOverlay.setAttribute('style', 'display:flex;');
  loader.setAttribute('style', 'display: none');
  resultsButton.setAttribute('style', 'display: none');
});

closeButton.addEventListener('click', ()=>{
  resultOverlay.setAttribute('style', 'display: none');
  closeButton.setAttribute('style', 'display: none');
  resultsButton.setAttribute('style', 'display: block');
});

resultsContainer.addEventListener('click', (ev)=>{
  // Проверяем, прочитана ли новость
  let newsLink = ev.target.closest('.content__link');
  let done = newsLink.querySelector('.done');
  done.setAttribute('style', 'display: block');
})

resultOverlay.addEventListener('scroll', async function() {
  // Скроллер
  if (Math.floor(resultOverlay.scrollTop) + resultOverlay.clientHeight + 5 >= resultOverlay.scrollHeight) {
    newsRender( await api.getArticles(), resultsContainer);
  }
});