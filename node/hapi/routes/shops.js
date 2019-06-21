module.exports = [
  {
    method: 'GET',
    path: '/shops',
    handler: async(request, reply) => {
      reply()
    },
    config: {
      tags: ['api', 'shops'],
      description: '获取店铺的列表'
    }
  },
  {
    method: 'GET',
    path: '/shops/{shopId}/goods',
    handler: async(request, reply) => {
      reply();
    },
    config: {
      tags: ['api', 'shops'],
      description: '获取店铺的商品列表'
    }
  }
]