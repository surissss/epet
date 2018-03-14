import Mock from 'mockjs'

import msite from './msite.json'

Mock.mock('/headermenus', {code: 0, data: msite.menus})
//Mock.mock('/headermenu', {code: 0, data: msite.datas})
