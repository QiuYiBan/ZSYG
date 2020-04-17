import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Recharge from '@/components/Recharge'
import RechargeRecord from '@/components/RechargeRecord'
import Register from '@/components/Register'
import Summary from '@/components/Summary'
import Pickup from '@/components/Pickup'
import PickupDetail from '@/components/PickupDetail'
import PhoneBind from '@/components/PhoneBind'
import Deposit from '@/components/Deposit'
import DepositConfirm from '@/components/DepositConfirm'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {title: '首页'}
    },
    {
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge,
      meta: {title: '充值'}
    },
    {
      path: '/RechargeRecord',
      name: 'RechargeRecord',
      component: RechargeRecord,
      meta: {title: '充值记录'}
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {title: '注册'}
    },
    {
      path: '/Summary',
      name: 'Summary',
      component: Summary,
      meta: {title: '统计'}
    },
    {
      path: '/Pickup',
      name: 'Pickup',
      component: Pickup,
      meta: {title: '取件'}
    },
    {
      path: '/PickupDetail',
      name: 'PickupDetail',
      component: PickupDetail,
      meta: {title: '取件详情'}
    },
    {
      path: '/PhoneBind',
      name: 'PhoneBind',
      component: PhoneBind,
      meta: {title: '绑定电话'}
    },
    {
      path: '/Deposit',
      name: 'Deposit',
      component: Deposit,
      meta: {title: '存件'}
    },
    {
      path: '/DepositConfirm',
      name: 'DepositConfirm',
      component: DepositConfirm,
      meta: {title: '存件'}
    },
  ]
})
