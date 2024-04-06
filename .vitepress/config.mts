import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "chxxxxxx1",
  description: "还不知道写什么",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '学习记录', link: '/docs/nestjs/getting-started' },
      {
        text: '枫叶🍁',
        link: 'http://li-chuan.cn/',
        target: "_target",
        rel: 'sponsored'
      }
    ],

    sidebar: [
      {
        text: 'NestJS',
        items: [
          { text: '快速上手', link: '/docs/nestjs/getting-started' },
          {text:"创建第一个API",link:"/docs/nestjs/first-api"}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chxxxxxx1' }
    ],
    footer:{
      copyright:"Copyringht · &copy; · 2024 · <a href=\"https://github.com/chxxxxxx1\" target=\"_blank\" rel=\"noreferrer\">chxxxxxx1</a> · <a href=\"https://beian.miit.gov.cn\" target=\"_blank\" rel=\"noreferrer\">浙ICP备2024070875</a>",
    }
  }

})
