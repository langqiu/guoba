Page({
  data: {
    totalCount: 0,
    totalPrice: 0,
    greyOrderIcon: "/assets/shop_page/order_grey@3x.png",
    redOrderIcon: "/assets/shop_page/order_red@3x.png",
    cartItem: "Item: ",
    cartTotalPrice: "Total Price:",
    deliveryHead: "Delivery information",
  },

  tapPlaceOrder: function() {
    wx.navigateTo({
        url: '/pages/order_info/order_info'
    })
  },

  onLoad: function (options) {
    var cartArray1 = wx.getStorageSync('cart') || [];
    var menu1 = wx.getStorageSync('menu');
    if (cartArray1 != []) {
        var totalPrice = 0;
        var totalCount = 0;
        for (var i = 0; i < cartArray1.length; i++) {
            totalPrice += cartArray1[i].price * cartArray1[i].num;
            totalCount += cartArray1[i].num;
        }
        this.setData({
            totalPrice: totalPrice,
            totalCount: totalCount,
            //payDesc: this.payDesc()
        });
    }
  },
})