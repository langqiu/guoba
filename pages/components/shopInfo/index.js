Component({
  properties: {
    feedList: {
      type: Array,
      value: null
    }
  },
  data: {
    hotIcon: "/assets/homepage/hot_icon@3x.png"
  },
  methods: {
    tapShop: function() {
      wx.navigateTo({
        url: '/pages/shop/shop'
      })
    }
  }
})