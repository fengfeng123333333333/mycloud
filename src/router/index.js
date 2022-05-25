import Vue from 'vue'
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
import group from '@/components/group/group.vue'
import project from '@/components/project/project.vue'
const index = r => require.ensure([], () => r(require('@/pages/index/index/index.vue'), 'index'))
const teamscan_index= r => require.ensure([], () => r(require('@/pages/teamscan/index.vue'), 'teamscan_index'))
const group_index = r => require.ensure([], () => r(require('@/pages/group/index/group_index.vue'), 'group_index'))
const group_add = r => require.ensure([], () => r(require('@/pages/group/index/group_add.vue'), 'group_add'))
const overview = r => require.ensure([], () => r(require('@/pages/group/overview/overview.vue'), 'overview'))
const detail = r => require.ensure([], () => r(require('@/pages/group/overview/detail.vue'), 'detail'))
const activity = r => require.ensure([], () => r(require('@/pages/group/overview/activity.vue'), 'activity'))
const members = r => require.ensure([], () => r(require('@/pages/group/members/members.vue'), 'members'))
const setting = r => require.ensure([], () => r(require('@/pages/group/setting/setting.vue'), 'setting'))
const user_index = r => require.ensure([], () => r(require('@/pages/user/user_index.vue'), 'user_index'))
const project_index = r => require.ensure([], () => r(require('@/pages/project/index/project_index.vue'), 'project_index'))
const project_add= r => require.ensure([], () => r(require('@/pages/project/index/project_add.vue'), 'project_add'))

const projectoverview = r => require.ensure([], () => r(require('@/pages/project/overview/projectoverview.vue'), 'projectoverview'))
const branches = r => require.ensure([], () => r(require('@/pages/project/overview/branches.vue'), 'branches'))
const commits = r => require.ensure([], () => r(require('@/pages/project/overview/commits.vue'), 'commits'))

const projectcanisters = r => require.ensure([], () => r(require('@/pages/project/canisters/canisters.vue'), 'canisters'))
const projectinterface = r => require.ensure([], () => r(require('@/pages/project/canisters/interface.vue'), 'interface'))
const activities = r => require.ensure([], () => r(require('@/pages/project/canisters/activities.vue'), 'activities'))
const metric = r => require.ensure([], () => r(require('@/pages/project/canisters/metric.vue'), 'metric'))

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: 'chain-cloud Home',
      },
      component: index
    },
    {
      path: '/teamscan',
      name: 'teamscan_index',
      meta: {
        title: 'chain-cloud teamscan',
      },
      component: teamscan_index
    },
    {
      path: '/group',
      name: 'group_index',
      meta: {
        title: 'chain-cloud groups',
      },
      component: group_index
    },
    {
      path: '/group/add',
      name: 'group_add',
      meta: {
        title: 'chain-cloud group_add',
      },
      component: group_add
    },
    {
      path: '/group',
      name: 'group',
      component: group,
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: overview,
          meta: {
            title: 'overview',
            keepAlive: false
          },
        },
        {
          path: 'overview/detail',
          name: 'detail',
          component: detail,
          meta: {
            title: 'overview-detail',
            keepAlive: false
          },
        },
        {
          path: 'overview/activity',
          name: 'activity',
          component: activity,
          meta: {
            title: 'overview-activity',
            keepAlive: false
          },
        },
        {
          path: 'members',
          name: 'members',
          component: members,
          meta: {
            title: 'members',
            keepAlive: false
          },
        },
        {
          path: 'setting',
          name: 'setting',
          component: setting,
          meta: {
            title: 'setting',
            keepAlive: false
          },
        },
      ]
    },
    {
      path: '/user',
      name: 'user_index',
      meta: {
        title: 'chain-cloud person',
      },
      component: user_index
    },
    {
      path: '/project',
      name: 'project_index',
      meta: {
        title: 'chain-cloud project',
      },
      component: project_index
    },
    {
      path: '/project/add',
      name: 'project_add',
      meta: {
        title: 'chain-cloud project',
      },
      component: project_add
    },
    {
      path: '/project',
      name: 'project',
      component: project,
      children: [
        {
          path: 'projectoverview',
          name: 'projectoverview',
          component: projectoverview,
          meta: {
            title: 'projectoverview',
            keepAlive: false
          },
        },
        {
          path: 'projectoverview/branches',
          name: 'branches',
          component: branches,
          meta: {
            title: 'projectoverview-branches',
            keepAlive: false
          },
        },
        {
          path: 'projectoverview/commits',
          name: 'commits',
          component: commits,
          meta: {
            title: 'overview-commits',
            keepAlive: false
          },
        },
        {
          path: 'projectcanisters',
          name: 'projectcanisters',
          component: projectcanisters,
          meta: {
            title: 'projectcanisters',
            keepAlive: false
          },
        },
        {
          path: 'projectoverview/interface',
          name: 'interface',
          component: projectinterface,
          meta: {
            title: 'projectoverview-interface',
            keepAlive: false
          },
        },
        {
          path: 'projectoverview/activities',
          name: 'activities',
          component: activities,
          meta: {
            title: 'projectoverview-activities',
            keepAlive: false
          },
        },
        {
          path: 'projectoverview/metric',
          name: 'metric',
          component: metric,
          meta: {
            title: 'projectoverview-metric',
            keepAlive: false
          },
        },
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});
export default router;
