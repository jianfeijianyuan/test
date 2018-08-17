import Vue from 'vue'
import Router from 'vue-router'
import UserManagement from '@/components/UserManagement'
import Login from '@/components/Login'
import UserManagementTable from '@/components/UserManagementTable'
import EquipmentVisitTable from '@/components/EquipmentVisitTable'
import EquipmentManagementTable from '@/components/EquipmentmanagementTable'
import UserGroupTable from '@/components/UserGroupTable'
import UserEquipmentTable from '@/components/UserEquipmentTable'

Vue.use(Router)

export default new Router({
  routes: [
	{
    path: '/',
	  redirect:'/login'
  },
	{
		path:'/login',
		component:Login
	},
  {
    path: '/UserManagement',
    name: 'UserManagement',
    component: UserManagement,
    children:[
      { path: '/UserManagement/EquipmentVisitTable', component: EquipmentVisitTable},
      { path: '/UserManagement/UserManagementTable', component: UserManagementTable},
      { path: '/UserManagement/EquipmentManagementTable', component: EquipmentManagementTable},
      { path: '/UserManagement/UserGroupTable', component: UserGroupTable},
      { path: '/UserManagement/UserEquipmentTable', component: UserEquipmentTable},
    ]
  }
  ]
})
