// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Shahid',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good Morning!',
  greetingAfternoon: 'Good Afternoon,',
  greetingEvening: 'Good Evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '4e6ff4d755a09371889534cfbe3e3b6d', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '22.5726',
  defaultLongitude: '88.3639',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com',
    },
    {
      id: '3',
      name: 'Bookmarks',
      icon: 'bookmark',
      link: '',
    },
    {
      id: '4',
      name: 'LeetCode',
      icon: 'award',
      link: 'https://leetcode.com/problemset/all/',
    },
    {
      id: '5',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '6',
      name: 'Hackathon',
      icon: 'code',
      link: 'https://devpost.com/',
    },
  
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'link',
  secondListIcon: 'trello',

  // Links
  lists: {
    firstList: [
      {
        name: 'Whatsapp Web',
        link: 'https://web.whatsapp.com/',
      }, 
      {
      name: 'Discord',
      link: 'https://discord.com/channels/@me'
      },
       {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/feed/'
      },
       {
      name: 'Twitter',
      link: 'https://twitter.com/home'
      },
      {
      name: 'Instagram',
      link: 'https://instagram.com/'
      },
    ],
    secondList: [
      {
        name: 'Viewcord',
        link: 'https://viewcord.netlify.app/',
      },   
      {
        name: 'QR Code Generator',
        link: 'https://qrcode-generates.netlify.app/',
      },   
    ],
  },
};
