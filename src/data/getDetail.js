let detail = {
  "id": 0,
  "name": "", // 菜谱名称
  "img": "", // 图片描述
  "times": 0, // 做过的次数
  "评分": 0, // 吃完后对于菜的评分
  "createTime": "", // 创建菜谱的时间
  "modifyTime": "", // 菜谱更新时间
  "material": [{  // 用料（包含做菜的所有原材料）
    "id": 0,
    "name": "",
    "unit": "", // 单位
    "amount": "",
    "price": "" // 单价，可以根据选择的数量计算中总价
  }],
  "progress": [{
    "description": "",
    "img": ""
  }],
  "tips": "" // 备注信息
}

export default detail;