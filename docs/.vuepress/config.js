module.exports = {
  title: "VuePress ",
  description: "VuePress Project Documentation System",
  base: "/vuepress-theme/",
  dest: "public ",
  theme: "gaurav",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      { text: 'Dropdown', items: [
        { text: "Chinese", link: '/chinese/' }, 
        { text: 'Japanese', link: '/japanese/' }
      ]}
    ]
  }
};

