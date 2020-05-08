export default [
  {
    name: '项目',
    url: '/project',
    show: () => true,
    children: [
      {
        name: '我的项目',
        url: '/project/mine'
      },
      {
        name: '公共项目',
        url: '/project/public'
      }
    ]
  },
  {
    name: '工作台',
    url: '/workbench',
    show: () => true,
    children: []
  },
  {
    name: '数据',
    url: '/data',
    show: () => true,
    children: []
  }
]
