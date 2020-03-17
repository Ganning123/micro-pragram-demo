//index.js
//获取应用实例
const app = getApp()
const basicPath = '../../images/';

Page({
  data: {
    banners: [
      basicPath + 'banner_02.jpg',
      basicPath + 'banner_03.jpg',
      basicPath + 'banner_04.jpg',
    ],
    menus: [{
        image: basicPath + 'icon_01.png',
        txt: '众创空间',
        url: 'space'
      },
      {
        image: basicPath + 'icon_03.png',
        txt: '服务集市',
        url: 'service'
      },
      {
        image: basicPath + 'icon_05.png',
        txt: '会议室预订',
        url: 'conference'
      },
      {
        image: basicPath + 'icon_07.png',
        txt: '云资源申请',
        url: 'resource'
      },
      {
        image: basicPath + 'icon_09.png',
        txt: '园区问问',
        url: 'question'
      },
      {
        image: basicPath + 'icon_11.png',
        txt: '物业服务',
        url: 'property'
      },
      {
        image: basicPath + 'icon_13.png',
        txt: '入驻申请',
        url: 'apply'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    
  }
})