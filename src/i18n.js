import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18n = i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
  resources: {
    en: {
      translation: {
        start: {
          title: '1. One person chooses a theme',
          descriptionOne: 'Choose an option below',
          descriptionTwo: 'Or create your own theme here',
          titleTwo: '2. Join using the token given to the person starting the game',
          buttonOne: 'Start a new game',
          buttonTwo: 'Join game',
          placeholderOne: 'Your theme',
          placeholderTwo: 'Token',
          dreamVacation: 'Your dream vacation destination and why?',
          perfectDay: 'Describe your perfect day.',
          holidayTradition: 'What is your favorite holiday tradition?',
          famousFor: 'If you were famous, what would you be famous for?',
          karaokeSong: 'What is your go-to karaoke song?',
          superpower: 'What superpower do you wish you had?',
        },
        answer: {
          gameToken: 'Game Token',
          placeholderOne: 'Your answer',
          placeholderTwo: 'Your name',
          button: 'Send Answer',
        },
        waiting: {
          title: 'Number of players finished',
          desc: 'Wait for everyone to finish and then go to the next page!',
          btn: 'Next page',
        },
        guess: {
          title: 'Guess who said:',
        },
        final: {
          btn: 'Refresh results',
          chose: 'chose',
          me: 'My Guess:',
          others: 'Everyone Else:',
          click: 'Click to see your performers💃',
          show: 'Get ready to show off your stuff🎬',
        },
      },
    },
    zh: {
      translation: {
        start: {
          title: '1. 一個人選擇一個主題',
          descriptionOne: '從以下選項中選擇',
          descriptionTwo: '或在此創建您自己的主題',
          titleTwo: '2. 使用由開始遊戲的人提供的代碼加入',
          buttonOne: '開始新遊戲',
          buttonTwo: '加入遊戲',
          placeholderOne: '您的主題',
          placeholderTwo: '代碼',
          dreamVacation: '你夢想的度假勝地是什麼？為什麼？',
          perfectDay: '描述你完美的一天。',
          holidayTradition: '你最喜歡的節日傳統是什麼？',
          famousFor: '如果你出名了，你會因為什麼而出名？',
          karaokeSong: '你的卡拉OK必唱曲目是什麼？',
          superpower: '你希望擁有什麼超能力？',
        },
        answer: {
          gameToken: '遊戲代碼',
          placeholderOne: '你的答案',
          placeholderTwo: '你的名字',
          button: '提交答案',
        },
        waiting: {
          title: '完成的玩家人數',
          desc: '等待所有人完成後，然後進入下一頁！',
          btn: '下一頁',
        },
        guess: {
          title: '猜猜是誰說的：',
        },
        final: {
          btn: '刷新結果',
          chose: '選擇了',
          me: '我的猜測：',
          others: '其他人：',
          click: '點擊查看你的表演者💃',
          show: '準備好展示你的才藝了🎬',
        },
      },
    },
  },
})
export default i18n
