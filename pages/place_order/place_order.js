Page({
  data: {
    menu: [],
    totalCount: 0,
    totalPrice: 0,
    cartArray1: [],
    addIcon: "/assets/shop_page/add_icon@3x.png",
    decreaseIcon: "/assets/shop_page/less@3x.png",
    greyOrderIcon: "/assets/shop_page/order_grey@3x.png",
    redOrderIcon: "/assets/shop_page/order_red@3x.png",
    cartItem: "Item: ",
    cartTotalPrice: "Total Price:",
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
            cartArray: cartArray1,
            menu: menu1,
            //payDesc: this.payDesc()
        });
    }
  },

    //添加到购物车
    addCart: function (e) {
      console.log(e);
      var index = e.currentTarget.dataset.itemIndex;
      var parentIndex = e.currentTarget.dataset.parentIndex;
      this.data.menu[parentIndex].foods[index].Count++;
      var mark = 'a' + index + 'b' + parentIndex
      var price = this.data.menu[parentIndex].foods[index].price;
      var num = this.data.menu[parentIndex].foods[index].Count;
      var name = this.data.menu[parentIndex].foods[index].name;
      var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
      var cartArray1 = this.data.cartArray.filter(item => item.mark != mark)
      cartArray1.push(obj)
      console.log(cartArray1);
      this.setData({
          cartArray: cartArray1,
          menu: this.data.menu
      })
      try {
          wx.setStorageSync('cart', cartArray1);
          wx.setStorageSync('menu', this.data.menu);
      } catch(e) {
          console.log(e);
      }
      this.calTotalPrice();
      this.setData({
          payDesc: this.payDesc()
      })
    },
  
    //计算总价
    calTotalPrice: function () {
      var cartArray = this.data.cartArray;
      var totalPrice = 0;
      var totalCount = 0;
      for (var i = 0; i < cartArray.length; i++) {
          totalPrice += cartArray[i].price * cartArray[i].num;
          totalCount += cartArray[i].num
      }
      this.setData({
          totalPrice: totalPrice,
          totalCount: totalCount,
          //payDesc: this.payDesc()
      });
    },
  
    //移除商品
    decreaseCart: function (e) {
      console.log(e);
      var index = e.currentTarget.dataset.itemIndex;
      var parentIndex = e.currentTarget.dataset.parentIndex;
      this.data.menu[parentIndex].foods[index].Count--
      var num = this.data.menu[parentIndex].foods[index].Count;
      var name = this.data.menu[parentIndex].foods[index].name;
      var mark = 'a' + index + 'b' + parentIndex
      var price = this.data.menu[parentIndex].foods[index].price;
      var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
      var cartArray1 = this.data.cartArray.filter(item => item.mark != mark);
      cartArray1.push(obj);
      console.log(cartArray1);
      this.setData({
          cartArray: cartArray1,
          menu: this.data.menu
      })
      try {
          wx.setStorageSync('cart', cartArray1);
          wx.setStorageSync('menu', this.data.menu);
      } catch(e) {
          console.log(e);
      }
      this.calTotalPrice()
      this.setData({
          payDesc: this.payDesc(),
      })
      //关闭弹起
      var count1 = 0
      for (let i = 0; i < cartArray1.length; i++) {
          if (cartArray1[i].num == 0) {
              count1++;
          }
      }
      if (count1 == cartArray1.length) {
          if (num == 0) {
              this.setData({
                  cartShow: 'none'
              })
          }
      }
    },
    
})