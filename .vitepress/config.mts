import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "chxxxxxx1",
  description: "记录我的成长之路～",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "学习记录", link: "/docs/nestjs/getting-started" },
      {
        text: "枫叶🍁",
        link: "http://li-chuan.cn/",
        target: "_target",
        rel: "sponsored",
      },
    ],
    sidebar: [
      {
        text: "React",
        items: [
          {
            text: "前言",
            link: "/docs/react/foreword",
          },
          {
            text: "使用react",
            link: "/docs/react/install",
          },
        ],
      },
      {
        text: "TypeScript",
        items: [],
      },
      {
        text: "NestJS",
        collapsed: true,
        base: "/docs/nestjs",
        items: [
          { text: "快速上手", link: "/getting-started" },
          { text: "创建第一个RESTful API", link: "/first-api" },
          {
            text: "控制器",
            collapsed: true,
            items: [
              { text: "路由", link: "/controller/routes" },
              { text: "Request", link: "/controller/request" },
              {
                text: "Resources",
                link: "/controller/resources",
              },
              {
                text: "路由通配符",
                link: "/controller/route-wildcards",
              },
              {
                text: "Http状态码",
                link: "/controller/status-code",
              },
              {
                text: "响应头",
                link: "/controller/headers",
              },
              {
                text: "重定向",
                link: "/controller/redirection",
              },
              {
                text: "动态路由",
                link: "/controller/route-paramters",
              },
            ],
          },
        ],
      },
      {
        text: "Rust",
        collapsed: true,
        base: "/docs/rust",
        items: [
          {
            text: "安装",
            link: "/install",
          },
          {
            text: "快速上手",
            link: "/hello-world",
          },
          {
            text: "猜数游戏",
            link: "/guess-game",
          },
        ],
      },
      {
        text: "Docker",
        items: [],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/chxxxxxx1" }],
    footer: {
      copyright:
        'Copyringht · &copy; · 2024 · <a href="https://github.com/chxxxxxx1" target="_blank" rel="noreferrer">chxxxxxx1</a> · <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">浙ICP备2024070875</a>',
    },
  },
});
