// //index.js
// //获取应用实例
const app = getApp()
wx.setNavigationBarTitle({
  title: 'i分钱'
})

Page({
  /**
   * 页面的初始数据
   */
  data: {},
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function() {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  caculate: function() {
    wx.navigateTo({
      url: '/pages/index/index?id=1'
    })
  }
})