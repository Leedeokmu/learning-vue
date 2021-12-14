import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "@/pages/TeamsList";
import TeamsFooter from "@/pages/TeamsFooter";
import TeamMembers from "@/pages/TeamMembers";
import UsersList from "@/pages/UsersList";
import NotFound from "@/pages/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
      meta: { needsAuth: true}
    },
    {
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter},
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        },
      ],

    },
    {
      path: '/users',
      component: UsersList,
      beforeEnter(to, from, next) {

      }
    },

    {
      path: '/:notFound(.*)',
      component: NotFound,

    },

  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {left: 0, top: 0};
  }
});

router.beforeEach((to, from, next) => {
  next();
})
router.afterEach((to, from) => {
  // 주로 분석 데이터 처리와 같은 일을 할 수 있음
})
export default router;