// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Dictionary, List } from "lodash"
import type {AnalyticsConfig} from "./types/analyticsTypes"
/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * baseUrl {string} When using GitHubPages, you must enter the repository name, startWith '/', e.g. /repo_name
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * asideTagsMaxSize {number}
 *    0: disable,
 *    > 0: display the limited number of tags in the sidebar
 *    All tags will be displayed in single page "/tags".
 */
export const site = {
  title: 'Luke Aschenbrenner', // required
  favicon: '/favicon.svg', // required
  description: 'Kicking it like it\'s 2010.',
  author: "Luke", // required
  avatar: '/avatar.jpg', // required
  url: 'https://luke.su', // required
  baseUrl: '', // When using GitHubPages, you must enter the repository name startWith '/'. e.g. '/astro-blog'
  motto: 'This is a motto',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  asideTagsMaxSize: 0,
}

/**
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 */
export const config = {
  lang: 'en', // en | zh-cn | zh-Hant | cs
  codeFoldingStartLines: 30, // Need to re-run the project to take effect
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories: Dictionary<any> = [
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  // {
  //   name: "Feed",
  //   iconClass: "ri-lightbulb-flash-line",
  //   href: "/feed/1",
  // },
  // {
  //   name: "Memos",
  //   iconClass: "ri-quill-pen-line",
  //   href: "/memos",
  // },
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "Message",
    iconClass: "ri-chat-1-line",
    href: "/message",
  },
  {
    name: "Search",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: 'About',
    iconClass: 'ri-information-line',
    href: '/about',
  },
  {
    name: "Cool Sites",
    iconClass: 'ri-ie',
    href: '/links',
  }
  
]

/**
 * Personal link address
 */
export const infoLinks = [
  // {
  //   icon: 'ri-telegram-fill',
  //   name: 'telegram',
  //   outlink: '',
  // },
  // {
  //   icon: 'ri-twitter-fill',
  //   name: 'twitter',
  //   outlink: '',
  // },
  // {
  //   icon: 'ri-instagram-fill',
  //   name: 'instagram',
  //   outlink: '',
  // },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/cirry/astro-yi',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: '',
  }
]

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
// export const donate = {
//   enable: false,
//   tip: "Thanks for the coffee !!!☕",
//   wechatQRCode: "/WeChatQR.png",
//   alipayQRCode: "/AliPayQR.png",
//   paypalUrl: "https://paypal.me/xxxxxxxxxx",
// }

/**
 * Friendship Links Page (Other cool pages)
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    {
      name: "Cirry's Blog",
      url: 'https://cirry.cn',
      avatar: "https://cirry.cn/avatar.png",
      description: 'Placeholder for their nice Astro theme'
    },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * walineConfig.serverUrl {string} server link
 * walineConfig.lang {string} link: https://waline.js.org/guide/features/i18n.html
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 * walineConfig.whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: true,
  type: 'giscus', // waline | giscus,
  walineConfig: {
    serverUrl: "",
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    // whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "lukeaschenbrenner/blog",
    'data-repo-id': "R_kgDOO348rA",
    'data-category': "Announcements",
    'data-category-id': "DIC_kwDOO348rM4CrLA0",
    'data-mapping': "pathname",
    'data-strict': "0",
    'data-reactions-enabled': "1",
    'data-emit-metadata': "0",
    'data-input-position': "top",
    'data-theme': "preferred_color_scheme", //getPreferTheme?
    'data-lang': "en",
    'crossorigin': "anonymous",
  }

  //
}

/**
 * Analytics Feature Configuration
 *
 * This file centralizes the analytics configuration for the application.
 * It defines and exports the default settings for Umami and Google Analytics.
 */
export const analytics: AnalyticsConfig = {
  enable: false,
  umamiConfig: {
    enable: false,
    id: "",
    url: ""
  },
  gaConfig: {
    enable: false,
    id: ""
  },
  busuanzi: false,
};
