/* home.js */
//获取应用实例
var app = getApp()

Page({

  data: {
    feedName: 'Restaurants',
    locationIcon: '/assets/homepage/location_icon.png',

    backendMsg: '',
    city: 'Singapore',
    bannerList: ['/assets/demo/banner_1.png', '/assets/demo/banner_2.png', '/assets/demo/banner_3.png'],
    feedList: [
      {
        "name": "Balestier Bak Kut Teh",
        "cover_image": "/assets/demo/shop_1.png",
        "brief_info": "主营海鲜，辣椒螃蟹、蛋黄虾、生蚝、竹蛏王、海带",
        "delivery": "$100免运费/$60加$5运费",
        "labels": ["/assets/demo/bought.png", "/assets/demo/recommendation.png", "/assets/demo/limit.png"],
        "pintuan": 53
      },
      {
        "name": "Zhang Jia Dumpling King & this is also a very long name",
        "cover_image": "/assets/demo/shop_2.png",
        "brief_info": "玉米猪肉水饺，韭菜鸡蛋水饺，各种卤味",
        "delivery": "$100免运费(必须满运费才送，疫情期间人力不够)",
        "labels": ["/assets/demo/limit.png"],
        "pintuan": 200
      },
      {
        "name": "Buddy Hoagires Cafe & Grill - this is a very very very very very very long shop name",
        "cover_image": "/assets/demo/shop_3.png",
        "brief_info": "深夜烤翅，烤串，卤味，满足你的味蕾",
        "delivery": "$80免运费",
        "labels": [],
        "pintuan": 19
      },
      {
        "name": "Texas Chicken",
        "cover_image": "/assets/demo/shop_4.png",
        "brief_info": "德州的新鲜大野鸡",
        "delivery": "$100免运费/$60加$5运费",
        "labels": ["/assets/demo/bought.png"],
        "pintuan": 0
      },
      {
        "name": "Balestier Bak Kut Teh",
        "cover_image": "/assets/demo/shop_1.png",
        "brief_info": "主营海鲜，辣椒螃蟹、蛋黄虾、生蚝...",
        "delivery": "$100免运费/$60加$5运费",
        "labels": ["/assets/demo/bought.png", "/assets/demo/recommendation.png", "/assets/demo/limit.png"],
        "pintuan": 53
      },
      {
        "name": "Zhang Jia Dumpling King",
        "cover_image": "/assets/demo/shop_2.png",
        "brief_info": "玉米猪肉水饺，韭菜鸡蛋水饺，各种卤味",
        "delivery": "$100免运费/$60加$5运费",
        "labels": ["/assets/demo/limit.png"],
        "pintuan": 200
      },
      {
        "name": "Buddy Hoagires Cafe & Grill",
        "cover_image": "/assets/demo/shop_3.png",
        "brief_info": "深夜烤翅，烤串，卤味，满足你的味蕾",
        "delivery": "$80免运费/$60加$5运费",
        "labels": [],
        "pintuan": 19
      },
      {
        "name": "Texas Chicken",
        "cover_image": "/assets/demo/shop_4.png",
        "brief_info": "德州的新鲜大野鸡",
        "delivery": "$100免运费/$60加$5运费",
        "labels": ["/assets/demo/bought.png"],
        "pintuan": 0
      },
      {
        "name": "Balestier Bak Kut Teh",
        "cover_image": "/assets/demo/shop_1.png",
        "brief_info": "主营海鲜，辣椒螃蟹、蛋黄虾、生蚝...",
        "delivery": "$100免运费/$60加$5运费",
        "labels": ["/assets/demo/bought.png", "/assets/demo/recommendation.png", "/assets/demo/limit.png"],
        "pintuan": 53
      },
      {
        "name": "Zhang Jia Dumpling King",
        "cover_image": "/assets/demo/shop_2.png",
        "brief_info": "玉米猪肉水饺，韭菜鸡蛋水饺，各种卤味",
        "delivery": "$100免运费/$60加$5运费",
        "labels": ["/assets/demo/limit.png"],
        "pintuan": 200
      },
      {
        "name": "Buddy Hoagires Cafe & Grill",
        "cover_image": "/assets/demo/shop_3.png",
        "brief_info": "深夜烤翅，烤串，卤味，满足你的味蕾",
        "delivery": "$80免运费/$60加$5运费",
        "labels": [],
        "pintuan": 19
      },
      {
        "name": "Texas Chicken",
        "cover_image": "/assets/demo/shop_4.png",
        "brief_info": "德州的新鲜大野鸡",
        "delivery": "$100免运费/$60加$5运费",
        "labels": ["/assets/demo/bought.png"],
        "pintuan": 0
      }
    ]
  },

  onLoad: function () {
    // 获取后端测试信息
    this.getBackendMsg();
    // 获取推广信息
    //this.getBannerList();
  },

  // 获取定位

  // 获取后端测试信息
  getBackendMsg: function() {
    wx.request({
      url: 'https://yotheworld.appspot.com',
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          backendMsg: res.data
        })
      }
    })
  },

  // 获取banner信息
  getBannerList: function() {
    var that = this;
    wx.request({
      url: config.promotion,
      data: {
        latitude: config.latitude,
        longitude: config.longitude,
        templates: ["big_sale_promotion_template"]
      },
      success: function(res) {
        // console.log(res.data)
        res.data.forEach(function(item) {
          item.entries.forEach(function(entry) {
            entry.image_hash = util.formatImage(entry.image_hash);
          })
        })
        that.setData({
          promotion: res.data[0].entries
        })
        // console.log(that.data.promotion)
      }
    })
  },

  // 获取店铺列表
})