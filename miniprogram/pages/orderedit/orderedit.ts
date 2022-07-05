// pages/orderedit/orderedit.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputData: [
            { id: 1, nuber: 231545646546 },
            { id: 2, nuber: 215456446455 },
            { id: 3, nuber: 231545646546 },
            { id: 4, nuber: 231545646546 },
            { id: 5, nuber: 231545646546 },
        ],
        ojbk: false
    },
    ishow() {
        this.setData({
            ojbk: true
        })

    },
    addData() {
        let _this = this
    
        wx.showModal({
            title: '是否增加快递单号？',
            content: '增加快递单号后，发往转运中心的快递个数+1。是否要继续？',
            success(res) {
                if (res.confirm == true) {

                    _this.data.inputData.push({ id: 6, nuber: 231545646546 })

                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })


    },
    falifalse(){
        wx.showModal({
            title: '是否取消订单',
            content: '取消订单后，订单将不能进行后续操作是否要继续？',
            success(res) {
                if (res.confirm ) {


                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    // 复制
    copy() {
        wx.setClipboardData({
            data: '13245678977',
            success() {
                wx.getClipboardData({
                    success(res) {
                        console.log(res.data) // data
                    }
                })
            }
        })
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