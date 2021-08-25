import { QuestionModel } from './QuestionModel'

const question1 = new QuestionModel(
  'What sport does the person practice?',
  'Sports',
  'read',
  [
    {
      point: 'Zlatan Ibrahimovic',
      answer: 'Soccer',
    },
    {
      point: 'Armand Duplantis',
      answer: 'Pole vault',
    },
    {
      point: 'Thomas Morstead',
      answer: 'American Football',
    },
    {
      point: 'Nick Kyrgios',
      answer: 'Tennis',
    },
    {
      point: 'Joe Thornton',
      answer: 'Hockey',
    },
    {
      point: 'Dustin Porier',
      answer: 'Mixed Martial Arts',
    },
    {
      point: 'Simone Biles',
      answer: 'Gymnastics',
    },
    {
      point: 'Carolina Klüft',
      answer: 'Heptathlon',
    },
  ]
)

const question2 = new QuestionModel(
  'From which country is the dish?',
  'Food',
  'read',
  [
    {
      point: 'Feijoada',
      answer: 'Brazil',
    },
    {
      point: 'Risotto',
      answer: 'Italy',
    },
    {
      point: 'Borsjtj',
      answer: 'Russia',
    },
    {
      point: 'Adobo',
      answer: 'The Philippines',
    },
    {
      point: 'Nasi goreng',
      answer: 'Indonesia',
    },
    {
      point: 'Nyama choma',
      answer: 'Kenya',
    },
    {
      point: 'Apfelstrudel',
      answer: 'Austria',
    },
    {
      point: 'Raclette',
      answer: 'Switzerland',
    },
  ]
)

const question3 = new QuestionModel(
  'In which city is the bridge?',
  'Bridges',
  'read',
  [
    {
      point: 'Tower Bridge',
      answer: 'London',
    },
    {
      point: 'Golden Gate Bridge',
      answer: 'San Francisco',
    },
    {
      point: 'Rialto Bridge',
      answer: 'Venice',
    },
    {
      point: 'Charles Bridge',
      answer: 'Prague',
    },
    {
      point: 'Chapel Bridge',
      answer: 'Lucerne',
    },
    {
      point: 'Ponte Vecchio',
      answer: 'Florence',
    },
    {
      point: 'Stari Most',
      answer: 'Mostar',
    },
    {
      point: 'Si-o-se Pol',
      answer: 'Isfahan',
    },
  ]
)

const question4 = new QuestionModel(
  'In which country was the actor born?',
  'Actors',
  'read',
  [
    {
      point: 'Arnold Schwarzenegger',
      answer: 'Austria',
    },
    {
      point: 'Ingrid Bergman',
      answer: 'Sweden',
    },
    {
      point: 'Pierce Brosnan',
      answer: 'Ireland',
    },
    {
      point: 'Russell Crowe',
      answer: 'New Zealand',
    },
    {
      point: 'Izabella Scorupco',
      answer: 'Poland',
    },
    {
      point: 'Sophia Loren',
      answer: 'Italy',
    },
    {
      point: 'Maximilian Schell',
      answer: 'Switzerland',
    },
    {
      point: 'Sidney Poitier',
      answer: 'USA',
    },
  ]
)

const question5 = new QuestionModel()
'Who is the monarch in the country?',
  'Royalty',
  'read',
  [
    {
      point: 'Belgium',
      answer: 'Philippe',
    },
    {
      point: 'Norway',
      answer: 'Harald V',
    },
    {
      point: 'The Netherlands',
      answer: 'Willem-Alexander',
    },
    {
      point: 'Spain',
      answer: 'Felipe VI',
    },
    {
      point: 'Sweden',
      answer: 'Carl XVI Gustaf',
    },
    {
      point: 'Monaco',
      answer: 'Albert II',
    },
    {
      point: 'Denmark',
      answer: 'Margrethe II',
    },
    {
      point: 'Luxemburg',
      answer: 'Henri I',
    },
  ]

const question6 = new QuestionModel(
  'In which country is the capital?',
  'Geography',
  'read',
  [
    {
      point: 'Reykjavik',
      answer: 'Iceland',
    },
    {
      point: 'Naipidaw',
      answer: 'Nepal',
    },
    {
      point: 'Lusaka',
      answer: 'Zambia',
    },
    {
      point: 'Maputo',
      answer: 'Mozambique',
    },
    {
      point: 'IChisinau',
      answer: 'Moldavia',
    },
    {
      point: 'Oslo',
      answer: 'Norway',
    },
    {
      point: 'Kiev',
      answer: 'Ukraine',
    },
    {
      point: 'La Paz',
      answer: 'Bolivia',
    },
  ]
)

const question7 = new QuestionModel(
  'Where did the sport start?',
  'Sports',
  'read',
  [
    {
      point: 'Ice hockey',
      answer: 'Canada',
    },
    {
      point: 'Rugby',
      answer: 'England',
    },
    {
      point: 'Handball',
      answer: 'Sweden',
    },
    {
      point: 'Curling',
      answer: 'Scotland',
    },
    {
      point: 'Chess',
      answer: 'India',
    },
    {
      point: 'Bull fighting',
      answer: 'Mexico',
    },
    {
      point: 'Wife carrying',
      answer: 'Finland',
    },
    {
      point: 'Ice stock',
      answer: 'Germany',
    },
  ]
)

const question8 = new QuestionModel(
  'From which country is/was the artist?',
  'Art',
  'read',
  [
    {
      point: 'Vincent van Gogh',
      answer: 'The Netherlands',
    },
    {
      point: 'Frida Kahlo',
      answer: 'Mexico',
    },
    {
      point: 'Paul Gaugin',
      answer: 'France',
    },
    {
      point: 'Banksy',
      answer: 'England',
    },
    {
      point: 'Edvard Munch',
      answer: 'Norway',
    },
    {
      point: 'Joan Miro',
      answer: 'Spain',
    },
    {
      point: 'Tizian',
      answer: 'Italy',
    },
    {
      point: 'Akseli Gallen-Kallela',
      answer: 'Finland',
    },
  ]
)

const question9 = new QuestionModel(
  'Who is the god/goddess?',
  'Greek gods',
  'read',
  [
    {
      point: 'God of the Sky',
      answer: 'Zeus',
    },
    {
      point: 'Goddess of Marriage',
      answer: 'Hera',
    },
    {
      point: 'God of the Sea',
      answer: 'Poseidon',
    },
    {
      point: 'Goddess of Agriculture',
      answer: 'Demeter',
    },
    {
      point: 'God of War',
      answer: 'Ares',
    },
    {
      point: 'Goddess of Wisdom',
      answer: 'Athena',
    },
    {
      point: 'Goddess of Love and Beauty',
      answer: 'Aphrodite',
    },
    {
      point: 'Goddess of Revenge',
      answer: 'Nemesis',
    },
  ]
)

const question10 = new QuestionModel(
  'Who is the god/goddess?',
  'Roman gods',
  'read',
  [
    {
      point: 'God of the Sky',
      answer: 'Jupiter',
    },
    {
      point: 'Goddess of Marriage',
      answer: 'Juno',
    },
    {
      point: 'God of the Sea',
      answer: 'Neptune',
    },
    {
      point: 'Goddess of Agriculture',
      answer: 'Ceres',
    },
    {
      point: 'God of War',
      answer: 'Mars',
    },
    {
      point: 'Goddess of Wisdom',
      answer: 'Minerva',
    },
    {
      point: 'Goddess of Love and Beauty',
      answer: 'Venus',
    },
    {
      point: 'Goddess of Revenge',
      answer: 'Nemesis',
    },
  ]
)

const question11 = new QuestionModel('Which war?', 'History', 'read', [
  {
    point: '1618-1648',
    answer: 'The Thirty Years War',
  },
  {
    point: '1813-1815',
    answer: 'The Napoleonic Wars',
  },
  {
    point: '1861-1865',
    answer: 'The American Civil War',
  },
  {
    point: '1914-1918',
    answer: 'World War I',
  },
  {
    point: '1939-1945',
    answer: 'World War II',
  },
  {
    point: '1950-1953',
    answer: 'The Korean War',
  },
  {
    point: '1917-1922',
    answer: 'The Russian Civil War ',
  },
  {
    point: '1967',
    answer: 'Six-Day War',
  },
])

const question12 = new QuestionModel(
  'Who is the author?',
  'Literature',
  'read',
  [
    {
      point: 'The Grapes of Wrath',
      answer: 'John Steinbeck',
    },
    {
      point: 'To Kill a Mockingbird',
      answer: 'Harper Lee',
    },
    {
      point: 'Beloved',
      answer: 'Toni Morrison',
    },
    {
      point: 'Gulliver’s Travels',
      answer: 'Jonathan Swift',
    },
    {
      point: 'Great Expectations',
      answer: 'Charles Dickens',
    },
    {
      point: 'Catch -22',
      answer: 'Joseph Heller',
    },
    {
      point: 'Jane Eyre',
      answer: 'Charlotte Bronte',
    },
    {
      point: 'To the Lighthouse',
      answer: 'Virginia Wolf',
    },
  ]
)

const question13 = new QuestionModel(
  'In which city is the building?',
  'Architecture',
  'read',
  [
    {
      point: 'Dome of the Rock',
      answer: 'Jerusalem',
    },
    {
      point: 'Space Needle',
      answer: 'Seattle',
    },
    {
      point: 'The Pantheon',
      answer: 'Rome',
    },
    {
      point: 'Flatiron Building',
      answer: 'New York',
    },
    {
      point: 'The Lotus Temple',
      answer: 'New Delhi',
    },
    {
      point: 'The Shard',
      answer: 'London',
    },
    {
      point: 'Forbidden City',
      answer: 'Beijing',
    },
    {
      point: 'La Sagrada Familia',
      answer: 'Barcelona',
    },
  ]
)

// const question14 = new QuestionModel(
//   'Who played the three caracters?',
//   'Film',
//   'read',
//   [
//     {
//       point: 'Oscar Schindler, Qui-Gon Jinn, Bryan Mills',
//       answer: 'Liam Neeson',
//     },
//     {
//       point: 'Edward Scissorhands, Ichabod Crane, Captain Jack Sparrow',
//       answer: 'Johnny Depp',
//     },
//     {
//       point: 'Michael Corleone, Tony Montana, Danny Collins',
//       answer: 'Al Pacino',
//     },
//     {
//       point: 'Clarice Sterling, Laurel Sommersby,Eleanor Arrowway',
//       answer: 'Jody Foster',
//     },
//     {
//       point: 'John Matrix, John Kimble, John Wharton',
//       answer: 'Arnold Schwarzenegger',
//     },
//     {
//       point: 'Celie Johnson, Deloris, Oda Mae Brown',
//       answer: 'Whoopi Goldberg',
//     },
//     {
//       point: 'Kirk Lazarus, Tony Stark, Sherlock Holmes',
//       answer: 'Robert Downey Jr.',
//     },
//     {
//       point: 'Patrick Bateman, Bruce Wayne, Moses',
//       answer: 'Christian Bale',
//     },
//   ]
// )

const question15 = new QuestionModel(
  'Which flavour has the liqueur?',
  'Spirits ',
  'read',
  [
    {
      point: 'Creme de Cassis',
      answer: 'Black currant',
    },
    {
      point: 'Lakka',
      answer: 'Cloudberry',
    },
    {
      point: 'Grand Marnier',
      answer: 'Orange',
    },
    {
      point: 'Midori',
      answer: 'Melon',
    },
    {
      point: 'Pisang Ambon',
      answer: 'Banana',
    },
    {
      point: 'Kahlua',
      answer: 'Coffee',
    },
    {
      point: 'Frangelico',
      answer: 'Hazelnut',
    },
    {
      point: 'Maraschino',
      answer: 'Cherry',
    },
  ]
)

const question16 = new QuestionModel(
  'Which element in the periodic system is named after an astronomical object?',
  'Science ',
  'read',
  [
    {
      point: 'The Sun',
      answer: 'Helium He',
    },
    {
      point: 'The Moon',
      answer: 'Selenium Se',
    },
    {
      point: 'The Earth',
      answer: 'Tellurium Te',
    },
    {
      point: 'Ceres',
      answer: 'Cerium Ce',
    },
    {
      point: 'Pallas',
      answer: 'Palladium Pd',
    },
    {
      point: 'Neptune',
      answer: 'Neptunium Np',
    },
    {
      point: 'Pluto',
      answer: 'Plutonium Pu',
    },
    {
      point: 'Uranus',
      answer: 'Uranium U',
    },
  ]
)

const question17 = new QuestionModel(
  'Which is the first name of the footballer on the Top 50 list?',
  'Sport ',
  'read',
  [
    {
      point: 'Messi',
      answer: 'Lionel',
    },
    {
      point: 'Iniesta',
      answer: 'Andres',
    },
    {
      point: 'Schweinsteiger',
      answer: 'Bastian',
    },
    {
      point: 'Bale',
      answer: 'Gareth',
    },
    {
      point: 'Drogba',
      answer: 'Didier',
    },
    {
      point: 'De Rossi',
      answer: 'Daniele',
    },
    {
      point: 'Rooney',
      answer: 'Wayne',
    },
    {
      point: 'Cech',
      answer: 'Petr',
    },
  ]
)

const question18 = new QuestionModel(
  'In which city in the UK is the football stadium?',
  'Sport ',
  'read',
  [
    {
      point: 'Old Trafford',
      answer: 'Manchester',
    },
    {
      point: 'Anfield',
      answer: 'Liverpool',
    },
    {
      point: 'St. James’ Park',
      answer: 'Newcastle',
    },
    {
      point: 'Stadium of Light',
      answer: 'Sunderland',
    },
    {
      point: 'Goodison Park',
      answer: 'Everton',
    },
    {
      point: 'St. Mary’s Stadium',
      answer: 'Southampton',
    },
    {
      point: 'Molineux',
      answer: 'Wolverhampton',
    },
    {
      point: 'Vicarage Road',
      answer: 'Watford',
    },
  ]
)

const question19 = new QuestionModel(
  'In which country is the waterfall?',
  'Geography ',
  'read',
  [
    {
      point: 'Niagara Horse Shoe Falls',
      answer: 'Canada',
    },
    {
      point: 'Angel Falls',
      answer: 'Venezuela',
    },
    {
      point: 'Tugela Falls',
      answer: 'South Africa',
    },
    {
      point: 'Tres Hermanas Falls',
      answer: 'Peru',
    },
    {
      point: 'Vinnufossen',
      answer: 'Norway',
    },
    {
      point: 'James Bruce Falls',
      answer: 'Canada',
    },
    {
      point: 'Victoria Falls',
      answer: 'Zambia',
    },
    {
      point: 'Yosemite Falls',
      answer: 'USA',
    },
  ]
)

const question20 = new QuestionModel(
  'In which country/countries is the mountain?',
  'Geography ',
  'read',
  [
    {
      point: 'Mount Everest',
      answer: 'Nepal/Tibet',
    },
    {
      point: 'K2',
      answer: 'Pakistan/China',
    },
    {
      point: 'Dhaulagiri',
      answer: 'Nepal',
    },
    {
      point: 'Kilimanjaro',
      answer: 'Tanzania',
    },
    {
      point: 'Pico Bolivar',
      answer: 'Venezuela',
    },
    {
      point: 'Mont Blanc',
      answer: 'France',
    },
    {
      point: 'Mount Ararat',
      answer: 'Turkey',
    },
    {
      point: 'Mount Cook',
      answer: 'New Zealand',
    },
  ]
)

const question21 = new QuestionModel(
  'In which country is/was the person the president/prime minister?',
  'History ',
  'read',
  [
    {
      point: 'Nelson Mandela',
      answer: 'South Africa',
    },
    {
      point: 'Anders Fogh Rasmussen',
      answer: 'Denmark',
    },
    {
      point: 'Pierre Elliott Trudeau',
      answer: 'Canada',
    },
    {
      point: 'Evo Morales',
      answer: 'Bolivia',
    },
    {
      point: 'Goodluck Jonathan',
      answer: 'Nigeria',
    },
    {
      point: 'Manmohan Singh',
      answer: 'India',
    },
    {
      point: 'Helen Clark',
      answer: 'New Zealand',
    },
    {
      point: 'Mount Cook',
      answer: 'New Zealand',
    },
  ]
)

export const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  //question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20,
  question21,
]
