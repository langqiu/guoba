//app.js

App({

  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var messages = wx.getStorageSync('messages') || []
    messages.unshift(Date.now())
    wx.setStorageSync('messages', messages)
    this.checkIsIPhoneX();
  },

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  // 检测IPX
  checkIsIPhoneX: function() {
    const self = this
    wx.getSystemInfo({
      success: function (res) {
        // 根据 model 进行判断
        if (res.model.search('iPhone X') != -1 || res.model.search('11') != -1) {
          self.globalData.isIPX = true
        }
      }
    })
  },

  globalData:{
    userInfo: null,
    isIPX: null
  }
})