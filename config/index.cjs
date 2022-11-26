/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd8903516303f82a5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '133adb385a288cca45c9dfca149cc87c',

  PROVINCE: '江苏',
  CITY: '无锡',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老公',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onRyt58R1gbk15B1L-lVEwEOx7nc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'xVdiSpICY841ONPsi9RAf7vYA_ls6CtllxhQ39foAO0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-11',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小王', year: '2001', date: '01-11',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小周', year: '2000', date: '12-14',
        }，
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'xVdiSpICY841ONPsi9RAf7vYA_ls6CtllxhQ39foAO0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onRyt58R1gbk15B1L-lVEwEOx7nc',
    }
  ],

}

module.exports = USER_CONFIG

