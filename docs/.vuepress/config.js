// 配置导航栏logo(themeConfig.logo)
// 配置导航栏logo(themeConfig.logo)
module.exports = {
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  title: '陈同学', // 网站的标题
  description: '陈同学测试网页', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  base:'./',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  // host port在本地运行就不配置了
  themeConfig: {
    logo: '/写博客.png',
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      { text: 'Home', link: '/' },
      // 对应blog/fontend/README.md
      { text: '前端', link: '/blog/' },
      { text: '后端', link: '/blog/xnj/' },
      // 对应/guide/guide.md
      { text: '导航', link: '/guide/guide' },
      // 不指定深度，默认深度1-提取h2 最大深度-2，同一标题下最多提取到h3，想要改变深度可以指定sidebarDepth
    ],
    // 禁用导航栏
    // navbar: false,
    // 设置自动生成侧边栏
    sidebar: {
      // 侧边栏在 /foo/ 上
      '/blog/': [
        '',
        ['xnj','虚拟机学习笔记'],
        ['xx','学习笔记']
      ]
    }
  }
}