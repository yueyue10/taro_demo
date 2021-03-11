export default {
  pages: [
    'pages/home/index',
    'pages/home/movie/list',
    'pages/develop/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "assets/ic_improve.png",
        selectedIconPath: "assets/ic_improve_sel.png"
      },
      {
        pagePath: "pages/develop/index",
        text: "开发",
        iconPath: "assets/ic_learn.png",
        selectedIconPath: "assets/ic_learn_sel.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "assets/ic_mine.png",
        selectedIconPath: "assets/ic_mine_sel.png"
      }
    ],
    'color': '#000',
    'selectedColor': '#007aff',
    'backgroundColor': '#F8F8F8',
    'borderStyle': 'white'
  }
}
