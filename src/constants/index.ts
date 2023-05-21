const aboutMeTexts = {
  firstParagraph: `I'm a self-taught front-end developer. I started learning with Udemy courses and now I'm practicing my skills in my free time, I love it and I do it for
  myself. I would like to find a place where I could practicing my skills.`,
  secondParagraph: ` I'm searching for work where I could keep practicing my programming skills. I want to learning not only during my free time. I'm hungry for knowledge. I
  have well-developed interpersonal skills. And I am passionate about sports. I love going to the gym. Thanks to this I built up my confidence.`,
  popupText: `I'm 23 year old. Currently I'm working in the caffee. In my previous job I was a manager there for almost a year. I believe that thanks to this I have
  a high level of communication with people. I also have a high level of preparation a delicious coffee. I learned many other skills in this place such
  as the fact that the most important thing in working with clients is to understand the client's needs. If we care about them, they will come back.`,
}
const projects = {
  weatherAppProject: {
    text: `My very first project in JS was a weatherApp. It's responsive and had a few shortcomings, but I'm proud of myself, that I made it. While I was
    creating this project, I was using flexbox, API from openweather. The entire project was published on netlify.`,
    href: 'https://weatherap-plication.netlify.app/',
    src: '/img/portfolio/weather-app.png',
    title: 'Weather App',
    alt: 'weatherApp screenshoot',
  },
  pigGameProject: {
    text: 'This game I made during Udemy course. I recreate these project by myself. During building these application I learned a strong foundation of JS. My friends says that this app gave them a lot of fun.',
    href: 'https://gm-pig.netlify.app/',
    src: '/img/portfolio/pig-game.png',
    title: 'Pig Game',
    alt: 'pig game screenshoot',
  },
  appLab: {
    text: 'It\'s just a landing page project. Created during studying with Devmentor',
    href: 'https://tourmaline-platypus-f58f16.netlify.app/',
    src: '/img/portfolio/app-lab.png',
    title: 'AppLab',
    alt: 'App lab screenshoot',
  },
  gymApp: {
    text: 'It\'s my app made with nuxt. Currently there is only version for mobile',
    href: 'https://gymexperts.netlify.app/home',
    src: '/img/portfolio/gym-app.png',
    title: 'Gym Experts',
    alt: 'Gym app screenshoot',
  },

}
const contacts = {
  git: {
    icon: 'fa-brands fa-github',
    href: 'https://github.com/czarsbenemoriendi',
    title: 'GitHub',
  },
  linkedIn: {
    icon: 'fa-brands fa-linkedin',
    href: 'https://www.linkedin.com/in/pawel-nieduzak/',
    title: 'LinkedIn',
  },
  phoneNumber: {
    icon: 'fa-phone fa-solid contact-icon',
    href: 'tel:795108705',
    title: '+48 795-108-705',
  },
  mail: {
    icon: 'fa-at fa-solid contact-icon',
    href: 'mailto:pa.nieduzak@gmail.com',
    title: 'pa.nieduzak@gmail.com',
  },
}
const navigation = {
  href: {
    home: '#home',
    aboutMe: '#about-me',
    portfolio: '#portfolio',
    contact: '#contact',
    timeline: '#timeline',
  },
  title: {
    home: 'p4w3l',
    aboutMe: 'About me',
    portfolio: 'Portfolio',
    contact: 'Contact',
    timeline: 'Timeline',
  },
}

const timeline = {
  2017: 'Mój pierwszy zakład pracy to był magazyn z napojami.  Mimo, że to była praca wyłącznie wakacyjna to zobaczyłem tam czym jest praca fizyczna, która nie daje żadnej radości, zobaczyłem, co to znaczy wstawać codziennie rano do pracy, której się nie lubi i mimo, że to była praca, do której nie musiałem chodzić przepracowałem tam praktycznie całe wakacje',
  2018: 'Następne wakacje pracowałem w sklepie monopolowym, praca tam również nie należała do przyjemnych ze względu na ludzi którzy byli stałymi klientami. Często były sytuacje, które wprawiały mnie w zakłopotanie przez ludzi, którzy byli stałymi klientami, były to osoby często skrajnie uzależnione, wyniszczone przez nałogi i jedynie przychodzili po alkohol, pili po to, aby przetrwać każdy kolejny dzień. To mi pokazało, że chcę czegoś więcej w życiu niż tylko przeżywania każdego kolejnego dnia, chcę spełniać marzenia i stale się rozwijać.',
  2019: 'W następnym roku zdawałem maturę, a na wakacje, przed studiami wyjechałem z przyjacielem nad morze, aby sobie dorobić i spędzić fajnie czas. Początkowo planowaliśmy sprzedawać kukurydzę na plaży, ale zrozumieliśmy, że kiedy pogoda nie będzie dopisywała, to również ludzie niechętnie będą spędzać czas na plaży a my zamiast zarabiać będziemy siedzieć w domu i po tym jak zrezygnowaliśmy z planu sprzedawania kukurydzy to przez długi okres nie mogliśmy znaleźć takiej pracy, która byłaby dla nas korzystna, byliśmy nawet już gotowi się poddać, ale finalnie udało nam się znaleźć pracę na BIO plantacji warzyw',
  2020: 'Stąd też, kolejnym moim miejscem pracy była kawiarnia. W której zatrzymałem się na dłużej niż tylko okres wakacyjny. Przepracowałem tam ponad dwa lata, byłem dwa razy awansowany wewnątrz tej firmy. Poza pyszną kawą, którą wyniosłem w brzuchu zdobyłem tam również dużo doświadczenia. Nauczyłem się pracy w zespole, jako kierownik później menadżer miałem również w obowiązku przeprowadzanie rekrutacji, szkoleń, tworzenia grafików, zajmowania się kawiarnią oraz ekipą. Dodatkowym moim zajęciem były dostawy lodów z racji, że lokal w którym pracowałem był też jednocześnie wytwórnią lodów.',
  2021: 'Stąd też, kolejnym moim miejscem pracy była kawiarnia. W której zatrzymałem się na dłużej niż tylko okres wakacyjny. Przepracowałem tam ponad dwa lata, byłem dwa razy awansowany wewnątrz tej firmy. Poza pyszną kawą, którą wyniosłem w brzuchu zdobyłem tam również dużo doświadczenia. Nauczyłem się pracy w zespole, jako kierownik później menadżer miałem również w obowiązku przeprowadzanie rekrutacji, szkoleń, tworzenia grafików, zajmowania się kawiarnią oraz ekipą. Dodatkowym moim zajęciem były dostawy lodów z racji, że lokal w którym pracowałem był też jednocześnie wytwórnią lodów.',
  2022: 'Stąd też, kolejnym moim miejscem pracy była kawiarnia. W której zatrzymałem się na dłużej niż tylko okres wakacyjny. Przepracowałem tam ponad dwa lata, byłem dwa razy awansowany wewnątrz tej firmy. Poza pyszną kawą, którą wyniosłem w brzuchu zdobyłem tam również dużo doświadczenia. Nauczyłem się pracy w zespole, jako kierownik później menadżer miałem również w obowiązku przeprowadzanie rekrutacji, szkoleń, tworzenia grafików, zajmowania się kawiarnią oraz ekipą. Dodatkowym moim zajęciem były dostawy lodów z racji, że lokal w którym pracowałem był też jednocześnie wytwórnią lodów.',
  2023: 'Kolejna praca, której się podjąłem również była w kawiarni. Natomiast o zupełnie innym profilu. Poprzednia kawiarnia, była bardziej korporacyjna. Pomimo, że w poprzedniej zaszedłem dość wysoko i byłem jej częścią to nigdy się nie czułem, żebym faktycznie tam przynależał. W tym miejscu poczułem, że pracownika można traktować na równi. Bardzo podobało mi się to miejsce, pozwoliło mi przyswoić wiele nowych umiejętności. Zrozumiałem, że uwielbiam parzyć pyszną kawę, co dla mnie jest odprężającym rytuałem.',
}

export { projects, aboutMeTexts, contacts, navigation, timeline }
