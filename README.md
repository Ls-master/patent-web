# patent-web
A library of patent for vue build by teacher-ZHANG !!!

### 导出 word 对象说明, 点击 "导出 word"  按钮时获得
```js
  dataJson: {
    // 页面顶部数据
    topdata: {
      typenumber: '', // 发明名称
      casenumber: ''  // 案号
    },
    // 技术背景 列表数据
    technical: [
      {
        number: 0,  // 技术文献编号
        message: '',  // 现有技术公开内容
        defect: ''   // 缺陷
      }
    ],
    // 具体实施方案 列表数据
    implementation: [
      {
        label: 0,   // 行编号
        claim: '',  // 权利要求说明书
        claim_reg: '',  // 正则匹配后的 claim
        fun: '',    // 功能
        effect: '',  // 效果
        type: ''    // 添加类型, 独立(alone)/从属(sub)
      }
    ],
    // 说明书附图, 上传图片相关参数
    instructions: [
      {
        name: "WX20180607-163127.png"  // 上传图片本地名称
        percentage: 0,
        raw: File,
        size: 373904,
        status: "ready",
        uid: 1530951391118,
        // 图片url, blob对象, 展示图片用
        url: "blob:http://localhost:8080/8555d071-eab3-4ee4-9d41-30cc812cb7a6"  
      }
    ]
  }
```