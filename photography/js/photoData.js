const PHOTO_NAMES = ['japan', 'arizona', 'smoke', 'architecture', 'other']; //must be in same order as PHOTO_DATA array (for "all" pictures gallery)
const PHOTO_DATA = [
  [
    //"japan",
    {
      id: 1,
      img: "1.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 2,
      img: "2.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 3,
      img: "3.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 4,
      img: "4.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 5,
      img: "5.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 6,
      img: "6.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 7,
      img: "7.jpg",
      location: "Ueno",
      date: "06-2018"
    },
    {
      id: 8,
      img: "8.jpg",
      location: "Ueno",
      date: "06-2018"
    },
    {
      id: 9,
      img: "9.jpg",
      location: "Akihabara",
      date: "06-2018"
    },
    {
      id: 10,
      img: "10.jpg",
      location: "Akihabara",
      date: "06-2018"
    },
    {
      id: 11,
      img: "11.jpg",
      location: "Shimbashi",
      date: "06-2018"
    },
    {
      id: 12,
      img: "12.jpg",
      location: "Shimbashi",
      date: "06-2018"
    },
    {
      id: 13,
      img: "13.jpg",
      location: "Odaiba",
      date: "06-2018"
    },
    {
      id: 14,
      img: "14.jpg",
      location: "Tokyu Plaza Omotesando Harajuku",
      date: "06-2018"
    },
    {
      id: 15,
      img: "15.jpg",
      location: "Shibuya Crossing",
      date: "06-2018"
    },
    {
      id: 16,
      img: "16.jpg",
      location: "Shibuya",
      date: "06-2018"
    },
    {
      id: 17,
      img: "17.jpg",
      location: "Shibuya",
      date: "06-2018"
    },
    {
      id: 18,
      img: "18.jpg",
      location: "Tsukiji",
      date: "06-2018"
    },
    {
      id: 19,
      img: "19.jpg",
      location: "Tsukiji",
      date: "06-2018"
    },
    {
      id: 20,
      img: "20.jpg",
      location: "Tsukiji",
      date: "06-2018"
    },
    {
      id: 21,
      img: "21.jpg",
      location: "Tsukiji",
      date: "06-2018"
    },
    {
      id: 22,
      img: "22.jpg",
      location: "Ginza",
      date: "06-2018"
    },
    {
      id: 23,
      img: "23.jpg",
      location: "Ginza",
      date: "06-2018"
    },
    {
      id: 24,
      img: "24.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 25,
      img: "25.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 26,
      img: "26.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 27,
      img: "27.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 28,
      img: "28.jpg",
      location: "Senso-Ji Temple",
      date: "06-2018"
    },
    {
      id: 29,
      img: "29.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 30,
      img: "30.jpg",
      location: "Tokyo Tower",
      date: "06-2018"
    },
    {
      id: 31,
      img: "31.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 32,
      img: "32.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 33,
      img: "33.jpg",
      location: "Tokyo Tower",
      date: "06-2018"
    },
    {
      id: 34,
      img: "34.jpg",
      location: "Tokyo Tower",
      date: "06-2018"
    },
    {
      id: 35,
      img: "35.jpg",
      location: "Shinjuku",
      date: "06-2018"
    },
    {
      id: 36,
      img: "36.jpg",
      location: "Shinjuku",
      date: "06-2018"
    },
    {
      id: 37,
      img: "37.jpg",
      location: "Shinjuku",
      date: "06-2018"
    },
    {
      id: 38,
      img: "38.jpg",
      location: "Shinjuku",
      date: "06-2018"
    },
    {
      id: 39,
      img: "39.jpg",
      location: "Shinjuku",
      date: "06-2018"
    },
    {
      id: 40,
      img: "40.jpg",
      location: "Shinjuku",
      date: "06-2018"
    },
    {
      id: 41,
      img: "41.jpg",
      location: "Shinjuku",
      date: "06-2018"
    },
    {
      id: 42,
      img: "42.jpg",
      location: "Shinjuku",
      date: "06-2018"
    },
    {
      id: 43,
      img: "43.jpg",
      location: "JR Line",
      date: "06-2018"
    },
    {
      id: 44,
      img: "44.jpg",
      location: "Yokohama",
      date: "06-2018"
    },
    {
      id: 45,
      img: "45.jpg",
      location: "Yokohama",
      date: "06-2018"
    },
    {
      id: 46,
      img: "46.jpg",
      location: "Senso-Ji Temple",
      date: "06-2018"
    },
    {
      id: 47,
      img: "47.jpg",
      location: "Senso-Ji Temple",
      date: "06-2018"
    },
    {
      id: 48,
      img: "48.jpg",
      location: "Senso-Ji Temple",
      date: "06-2018"
    },
    {
      id: 49,
      img: "49.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 50,
      img: "50.jpg",
      location: "Ueno",
      date: "06-2018"
    },
    {
      id: 51,
      img: "51.jpg",
      location: "Ueno",
      date: "06-2018"
    },
    {
      id: 52,
      img: "52.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 53,
      img: "53.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 54,
      img: "54.jpg",
      location: "Diver City",
      date: "06-2018"
    },
    {
      id: 55,
      img: "55.jpg",
      location: "Harajuku",
      date: "06-2018"
    },
    {
      id: 56,
      img: "56.jpg",
      location: "Golden Gai",
      date: "06-2018"
    },
    {
      id: 57,
      img: "57.jpg",
      location: "Senso-Ji Temple",
      date: "06-2018"
    },
    {
      id: 58,
      img: "58.jpg",
      location: "Senso-Ji Temple",
      date: "06-2018"
    },
    {
      id: 59,
      img: "59.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 60,
      img: "60.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 61,
      img: "61.jpg",
      location: "Nezu Shrine",
      date: "06-2018"
    },
    {
      id: 62,
      img: "62.jpg",
      location: "Ueno",
      date: "06-2018"
    },
    {
      id: 63,
      img: "63.jpg",
      location: "Odaiba",
      date: "06-2018"
    },
    {
      id: 64,
      img: "64.jpg",
      location: "Yokohama",
      date: "06-2018"
    },
    {
      id: 65,
      img: "65.jpg",
      location: "Yokohama",
      date: "06-2018"
    },
    {
      id: 66,
      img: "66.jpg",
      location: "Senso-Ji Temple",
      date: "06-2018"
    },
    {
      id: 67,
      img: "67.jpg",
      location: "Senso-Ji Temple",
      date: "06-2018"
    },

  ],

  [
    //"arizona",
    {
      id: 1,
      img: "AZ1.jpg",
      location: "Sedona",
      date: "07-2018"
    },
    {
      id: 2,
      img: "AZ2.jpg",
      location: "Sedona",
      date: "07-2018"
    },
    {
      id: 3,
      img: "AZ3.jpg",
      location: "Bell Rock",
      date: "07-2018"
    },
    {
      id: 4,
      img: "AZ4.jpg",
      location: "Sedona",
      date: "07-2018"
    },
    {
      id: 5,
      img: "AZ5.jpg",
      location: "Sedona",
      date: "07-2018"
    },
    {
      id: 6,
      img: "AZ6.jpg",
      location: "Chapel Of The Holy Cross",
      date: "07-2018"
    },
    {
      id: 7,
      img: "AZ7.jpg",
      location: "Chapel Of The Holy Cross",
      date: "07-2018"
    },
    {
      id: 8,
      img: "AZ8.jpg",
      location: "Chapel Of The Holy Cross",
      date: "07-2018"
    },
    {
      id: 9,
      img: "AZ9.jpg",
      location: "Papago Park",
      date: "10-2018"
    },
    {
      id: 10,
      img: "AZ10.jpg",
      location: "Papago Park",
      date: "10-2018"
    },
    {
      id: 11,
      img: "AZ11.jpg",
      location: "Papago Park",
      date: "10-2018"
    },{
      id: 12,
      img: "AZ12.jpg",
      location: "Papago Park",
      date: "10-2018"
    },{
      id: 13,
      img: "AZ13.jpg",
      location: "Papago Park",
      date: "10-2018"
    },{
      id: 14,
      img: "AZ14.jpg",
      location: "Papago Park",
      date: "10-2018"
    },{
      id: 15,
      img: "AZ15.jpg",
      location: "Papago Park",
      date: "10-2018"
    },
  ],

  [
    //"smoke bombs",
    {
      id: 1,
      img: "SB1.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 2,
      img: "SB2.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 3,
      img: "SB3.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 4,
      img: "SB4.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 5,
      img: "SB5.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 6,
      img: "SB6.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 7,
      img: "SB7.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 8,
      img: "SB8.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 9,
      img: "SB9.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 10,
      img: "SB10.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 11,
      img: "SB11.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 12,
      img: "SB12.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 13,
      img: "SB13.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 14,
      img: "SB14.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 15,
      img: "SB15.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 16,
      img: "SB16.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 17,
      img: "SB17.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 18,
      img: "SB18.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 19,
      img: "SB19.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 20,
      img: "SB20.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 21,
      img: "SB21.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 22,
      img: "SB22.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 23,
      img: "SB23.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 24,
      img: "SB24.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 25,
      img: "SB25.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 26,
      img: "SB26.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 27,
      img: "SB27.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 28,
      img: "SB28.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 29,
      img: "SB29.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 30,
      img: "SB30.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 31,
      img: "SB31.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 32,
      img: "SB32.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 33,
      img: "SB33.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 34,
      img: "SB34.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 35,
      img: "SB35.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 36,
      img: "SB36.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 37,
      img: "SB37.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 38,
      img: "SB38.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 39,
      img: "SB39.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 40,
      img: "SB40.jpg",
      location: "Kunia, Hawaii",
      date: "01-2018"
    },
    {
      id: 41,
      img: "SB41.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 42,
      img: "SB42.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 43,
      img: "SB43.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 44,
      img: "SB44.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 45,
      img: "SB45.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
    {
      id: 46,
      img: "SB46.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 47,
      img: "SB47.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 48,
      img: "SB48.jpg",
      location: "Kunia, Hawaii",
      date: "11-2017"
    },
  ],

  [
    //"architecture",
    {
      id: 1,
      img: "A1.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 2,
      img: "A2.jpg",
      location: "UDUB",
      date: "12-2017"
    },
    {
      id: 3,
      img: "A3.jpg",
      location: "Ginza",
      date: "06-2018"
    },
    {
      id: 4,
      img: "A4.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 5,
      img: "A5.jpg",
      location: "UCSD",
      date: "12-2017"
    },
    {
      id: 6,
      img: "A6.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 7,
      img: "A7.jpg",
      location: "Mori Tower",
      date: "06-2018"
    },
    {
      id: 8,
      img: "A8.jpg",
      location: "UCSD",
      date: "12-2017"
    },
    {
      id: 9,
      img: "A9.jpg",
      location: "Mori Tower",
      date: "12-2017"
    },
    {
      id: 10,
      img: "A10.jpg",
      location: "Hawaii",
      date: "04-2018"
    },
    {
      id: 11,
      img: "A11.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 12,
      img: "A12.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 13,
      img: "A13.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 14,
      img: "A14.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 15,
      img: "A15.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 16,
      img: "A16.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 17,
      img: "A17.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 18,
      img: "A18.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
    {
      id: 19,
      img: "A19.jpg",
      location: "Tokyo",
      date: "06-2018"
    },
  ],
  [
    //"other"
    {
      id: 1,
      img: "1.jpg",
      location: "Hilo, Hawaii",
      date: "07-2017"
    },
    {
      id: 2,
      img: "2.jpg",
      location: "Hawaii",
      date: "06-2017"
    },
    {
      id: 3,
      img: "3.jpg",
      location: "Hawaii",
      date: "06-2017"
    },
    {
      id: 4,
      img: "4.jpg",
      location: "Hawaii",
      date: "06-2017"
    },
    {
      id: 5,
      img: "5.jpg",
      location: "Hawaii",
      date: "06-2017"
    },
    {
      id: 6,
      img: "6.jpg",
      location: "Hawaii",
      date: "06-2017"
    },
    {
      id: 7,
      img: "7.jpg",
      location: "Kunia, Hawaii",
      date: "06-2017"
    },
    {
      id: 8,
      img: "8.jpg",
      location: "Kunia, Hawaii",
      date: "06-2017"
    },
    {
      id: 9,
      img: "9.jpg",
      location: "Pike Place",
      date: "12-2017"
    },
    {
      id: 10,
      img: "10.jpg",
      location: "Sonic Runway",
      date: "12-2017"
    },
    {
      id: 11,
      img: "11.jpg",
      location: "Santa Clara",
      date: "12-2017"
    },
    {
      id: 12,
      img: "12.jpg",
      location: "Santa Clara",
      date: "12-2017"
    },
    {
      id: 13,
      img: "13.jpg",
      location: "Santa Clara",
      date: "12-2017"
    },
    {
      id: 14,
      img: "14.jpg",
      location: "Stanford",
      date: "12-2017"
    },
    {
      id: 15,
      img: "15.jpg",
      location: "Space Needle",
      date: "12-2017"
    },
    {
      id: 16,
      img: "16.jpg",
      location: "Stanford",
      date: "12-2017"
    },
    {
      id: 17,
      img: "17.jpg",
      location: "UDUB",
      date: "12-2017"
    },
    {
      id: 18,
      img: "18.jpg",
      location: "Stanford",
      date: "12-2017"
    },
    {
      id: 19,
      img: "19.jpg",
      location: "Stanford",
      date: "12-2017"
    },
    {
      id: 20,
      img: "20.jpg",
      location: "Hawaii",
      date: "12-2017"
    },
    {
      id: 21,
      img: "21.jpg",
      location: "Seattle",
      date: "12-2017"
    },
    {
      id: 22,
      img: "22.jpg",
      location: "UDUB",
      date: "12-2017"
    },
    {
      id: 23,
      img: "23.jpg",
      location: "UDUB",
      date: "12-2017"
    },
    {
      id: 24,
      img: "24.jpg",
      location: "UDUB",
      date: "12-2017"
    },
    {
      id: 25,
      img: "25.jpg",
      location: "UDUB",
      date: "12-2017"
    },
    {
      id: 26,
      img: "26.jpg",
      location: "UDUB",
      date: "12-2017"
    },
    {
      id: 27,
      img: "27.jpg",
      location: "UDUB",
      date: "12-2017"
    },
    {
      id: 28,
      img: "28.jpg",
      location: "Kunia, Hawaii",
      date: "10-2017"
    },
    {
      id: 29,
      img: "29.jpg",
      location: "Moanalua, Hawaii",
      date: "11-2014"
    },
    {
      id: 30,
      img: "30.jpg",
      location: "Hawaii",
      date: "08-2015"
    },
    {
      id: 31,
      img: "31.jpg",
      location: "Hawaii",
      date: "03-2015"
    },
    {
      id: 32,
      img: "32.jpg",
      location: "Hawaii",
      date: "07-2017"
    },
    {
      id: 33,
      img: "33.jpg",
      location: "Seattle",
      date: "12-2018"
    },
  ]
]