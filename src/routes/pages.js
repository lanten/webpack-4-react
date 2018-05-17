import React from 'react'
import { asyncImport } from '../utils'

const route = {
  path: '/',
  // component: asyncImport(() => import('../views/Home')),
  // params: { name: 'home' },
  children: [
    {
      path: '/',
      component: asyncImport(() => import('../views/Home')),
      params: { name: 'home' }
    },
    {
      path: '/page1',
      component: asyncImport(() => import('../views/Page1')),
      params: { name: 'page1' }
    },
    {
      path: '/page2',
      component: asyncImport(() => import('../views/Home')),
      params: { name: 'page2' }
    },
  ]
}


export default route