// pages/home/home.ts
const  Dialog:any = require('../../miniprogram_npm/@vant/weapp/dialog/dialog') ;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    getlunbo:[{img:"../../assets/images/7.jpeg"},{img:"../../assets/images/轮播图@1x.png"}],
    show: true,
    shows:false,
  },

  
 

  onClose() {
    this.setData({ show: false });
  },
  confirm(){
      wx.navigateTo({
          url:"/pages/writeaddress/writeaddress"
      })
  },
  cancel(){
    this.setData({shows:false})
    this.setData({ show: false });
  },
  isshow(){
      this.setData({shows:true})
      this.setData({ show: true });
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})