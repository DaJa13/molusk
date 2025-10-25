export interface Mollusk {
  id: string;
  name: string;
  scientificName: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  habitat: string;
  size: string;
  diet: string;
  interestingFacts: string[];
  conservationStatus: string;
  category: 'gastropod' | 'bivalve' | 'cephalopod' | 'other';
}

export const mollusks: Mollusk[] = [
  {
    id: 'giant-octopus',
    name: 'Гигантский осьминог',
    scientificName: 'Enteroctopus dofleini',
    shortDescription: 'Самый крупный вид осьминогов в мире',
    fullDescription: 'Гигантский осьминог — это удивительное морское существо, известное своим интеллектом и способностью изменять цвет и текстуру кожи. Обитает в северной части Тихого океана и является одним из самых умных беспозвоночных на планете.',
    image: 'https://i.ytimg.com/vi/RNwPa4pgQy8/maxresdefault.jpg',
    habitat: 'Северная часть Тихого океана, от Японии до Калифорнии',
    size: 'До 5 метров в размахе щупалец',
    diet: 'Крабы, моллюски, рыба, креветки',
    interestingFacts: [
      'Имеет 3 сердца и голубую кровь',
      'Может изменять цвет и текстуру кожи за секунды',
      'Один из самых умных беспозвоночных',
      'Может протиснуться через отверстие размером с монету',
      'Использует инструменты для решения задач',
      'Может запоминать решения задач на несколько месяцев',
      'Имеет более 500 миллионов нейронов',
      'Способен к обучению через наблюдение',
      'Может открывать банки и решать головоломки',
      'Использует камни для защиты входа в логово'
    ],
    conservationStatus: 'Не вызывает опасений',
    category: 'cephalopod'
  },
  {
    id: 'nautilus',
    name: 'Наутилус',
    scientificName: 'Nautilus pompilius',
    shortDescription: 'Живое ископаемое с раковиной',
    fullDescription: 'Наутилус — это древний моллюск, который существует уже более 500 миллионов лет. Его спиральная раковина с перламутровым внутренним слоем является одним из самых красивых природных объектов.',
    image: 'https://sun9-32.userapi.com/J6_7b6a9Kg5qaMDFLGIlCjVBjAIO0pEUMLFwgA/lxmh3CLZ5MQ.jpg',
    habitat: 'Тропические воды Индо-Тихоокеанского региона',
    size: 'До 25 см в диаметре раковины',
    diet: 'Мелкие рыбы, креветки, крабы',
    interestingFacts: [
      'Существует более 500 миллионов лет',
      'Имеет до 90 щупалец',
      'Раковина разделена на камеры',
      'Символ совершенства в математике',
      'Использует реактивное движение',
      'Может регулировать плавучесть',
      'Раковина растет по спирали Фибоначчи',
      'Один из древнейших живых организмов',
      'Имеет примитивную камеру-глаз',
      'Может жить на глубине до 600 метров'
    ],
    conservationStatus: 'Уязвимый',
    category: 'cephalopod'
  },
  {
    id: 'giant-clam',
    name: 'Гигантская тридакна',
    scientificName: 'Tridacna gigas',
    shortDescription: 'Самый крупный двустворчатый моллюск',
    fullDescription: 'Гигантская тридакна — это огромный двустворчатый моллюск, который может достигать веса более 200 кг. Живет в симбиозе с водорослями, которые придают его мантии яркие цвета.',
    image: 'https://petzona.ru/wp-content/uploads/2020/09/lovushka-smerti-mollyusk-v-rakovine-dlinoy-1-metr-2.jpg',
    habitat: 'Коралловые рифы Индо-Тихоокеанского региона',
    size: 'До 1.5 метров в длину, вес до 200 кг',
    diet: 'Фотосинтез через симбиотические водоросли',
    interestingFacts: [
      'Может жить более 100 лет',
      'Симбиоз с водорослями зооксантеллами',
      'Мантия может быть разных цветов',
      'Фильтрует до 1000 литров воды в день'
    ],
    conservationStatus: 'Уязвимый',
    category: 'bivalve'
  },
  {
    id: 'cone-snail',
    name: 'Конусная улитка',
    scientificName: 'Conus geographus',
    shortDescription: 'Одна из самых ядовитых улиток',
    fullDescription: 'Конусная улитка — это хищная морская улитка с красивой раковиной и смертельно опасным ядом. Ее яд используется в медицине для создания обезболивающих препаратов.',
    image: 'https://lh4.ggpht.com/LgQ0sTw6wNd29qTT22L8gicZzAJGFxtSPLf9QgCLhLokieuOHaeDvqhNpD1hRX47N2qPlpJSz29NuuCCP-2e=s600',
    habitat: 'Тропические и субтропические воды',
    size: 'До 15 см в длину',
    diet: 'Рыбы, черви, другие моллюски',
    interestingFacts: [
      'Яд может убить человека за 5 минут',
      'Использует гарпун для охоты',
      'Яд используется в медицине',
      'Более 500 видов конусных улиток'
    ],
    conservationStatus: 'Не вызывает опасений',
    category: 'gastropod'
  },
  {
    id: 'cuttlefish',
    name: 'Каракатица',
    scientificName: 'Sepia officinalis',
    shortDescription: 'Мастер камуфляжа и маскировки',
    fullDescription: 'Каракатица — это удивительный моллюск, способный изменять цвет и текстуру кожи для маскировки. Обладает одним из самых сложных глаз среди беспозвоночных.',
    image: 'https://i.pinimg.com/736x/01/82/5d/01825da38110614d36b868e37247d26d.jpg',
    habitat: 'Восточная Атлантика, Средиземное море',
    size: 'До 50 см в длину',
    diet: 'Рыбы, креветки, крабы',
    interestingFacts: [
      'Может изменять цвет за 0.5 секунды',
      'Имеет W-образный зрачок',
      'Выделяет чернила для защиты',
      'Один из самых умных моллюсков'
    ],
    conservationStatus: 'Не вызывает опасений',
    category: 'cephalopod'
  },
  {
    id: 'abalone',
    name: 'Морское ушко',
    scientificName: 'Haliotis rufescens',
    shortDescription: 'Драгоценная раковина с перламутром',
    fullDescription: 'Морское ушко — это съедобный моллюск с красивой раковиной, покрытой перламутром. Его мясо считается деликатесом, а раковина используется в ювелирном деле.',
    image: 'https://i.pinimg.com/736x/27/df/a2/27dfa2c0e7369d960354cee237e35cbf.jpg',
    habitat: 'Тихоокеанское побережье Северной Америки',
    size: 'До 30 см в длину',
    diet: 'Водоросли, морская трава',
    interestingFacts: [
      'Раковина покрыта перламутром',
      'Мясо считается деликатесом',
      'Может жить до 30 лет',
      'Имеет множество глаз на краю раковины'
    ],
    conservationStatus: 'Уязвимый',
    category: 'gastropod'
  }
];

export const categories = [
  { id: 'all', name: 'Все моллюски', count: mollusks.length },
  { id: 'gastropod', name: 'Брюхоногие', count: mollusks.filter(m => m.category === 'gastropod').length },
  { id: 'bivalve', name: 'Двустворчатые', count: mollusks.filter(m => m.category === 'bivalve').length },
  { id: 'cephalopod', name: 'Головоногие', count: mollusks.filter(m => m.category === 'cephalopod').length },
];