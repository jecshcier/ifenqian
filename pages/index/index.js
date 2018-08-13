// //index.js
// //获取应用实例
const app = getApp()
wx.setNavigationBarTitle({ title: 'i分钱' })

Page({
  /**
   * 页面的初始数据
   */
  data: {
    person:[{
      name:"你的金额:",
      index:0,
      num:null
    },{
      name:"同伴1的金额:",
      index:1,
      num: null
    }],
    superposed: false,
    result:[]
  },
  rule:
  {
    when:null,
    reduce:null
  },
  addPerson:function(){
    let newPerson = this.data.person
    let newIndex = this.data.person[this.data.person.length - 1].index + 1
    newPerson.push({
      name: "同伴" + newIndex + "的金额:",
      index: newIndex,
      num: null
    })
    this.setData({
      person:newPerson
    })
  },
  reducePerson:function(){
    let newPerson = this.data.person
    if (newPerson.length <= 2){
      wx.showModal({
        title: '提示',
        content: '人数最少不能少于2人！',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return false
    }else{
      newPerson.pop()
    }
    this.setData({
      person: newPerson
    })
  },
  inputMoney:function (e){
    let newPerson = this.data.person
    newPerson[e.target.dataset.index].num = e.detail.value
    this.setData({
      person: newPerson
    })
    console.log(this.data.person)
  },
  changeWhen: function (e){
    this.rule.when = e.detail.value
    console.log(this.rule)

  },
  changeReduce: function (e){
    this.rule.reduce = e.detail.value
    console.log(this.rule)

  },
  superPosed:function(e){
    this.setData({
      superposed: e.detail.value[0] === 'false' ? true:false
    })
    console.log(this.data.superposed)
  },
  startCaculate:function(){
    let personDetail = []
    let wholeMoney = 0
    for(let i = 0;i<this.data.person.length;i++){
      wholeMoney += parseInt(this.data.person[i].num)
    }
    let when = parseInt(this.rule.when)
    let reduce = parseInt(this.rule.reduce)

    if(wholeMoney >= when && when > reduce){
      let newWholeMoney
      if (this.data.superposed) {
        let rateNum = parseInt(wholeMoney / when)
        newWholeMoney = wholeMoney - reduce * rateNum
      }
      else{
        newWholeMoney = wholeMoney - reduce
      }
      for (let i = 0; i < this.data.person.length; i++) {
        let rate = (parseInt(this.data.person[i].num) / wholeMoney)
        personDetail[i] = (newWholeMoney * rate).toFixed(2)
      }
    }
    else{
      wx.showModal({
        title: '提示',
        content: '不符合满减的条件',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return false
    }
    let content = []
    for (let i = 0; i < this.data.person.length; i++) {
      if(i === 0){
        content.push('你自己需支付' + personDetail[i] + '元')
      }
      else{
        content.push('同伴' + i + '需支付' + personDetail[i] + '元')
      }
    }
    console.log(content)
    this.setData({
      result:content
    })
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  }
})
