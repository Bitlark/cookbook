let listData = {
  code: 200,
  data: {
    category: [{ // 分类：特色菜、荤菜、素菜、甜点、饮料、水果（特色菜里面的东西可以在其他分类中出现）
      type: 1, // 0特色菜、1荤菜、2素菜、3甜点、4饮料、5水果
      list: [{
        id: 0,
        name: ""
      }]
    }]
  }
}

export default listData;