import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "@/views/Home.vue";
import Branch from "@/views/Branch.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Search from "@/views/search/Search";
import Statement from "@/views/statement/Statement.vue";
import NewStatement from "@/views/statement/NewStatement.vue";
import Registration from "@/views/authentication/Registration.vue";
import LogIn from "@/views/authentication/LogIn.vue";
import Bookmarks from "@/views/bookmarks/Bookmarks.vue";
import Notification from "@/views/notification/Notification.vue";
import MoreMenu from "@/views/more-menu/MoreMenu";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
  },
  {
    path: "/branch",
    name: "Branch",
    component: Branch,
    meta: {
      hideBranding: true
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      // auth: {
      //   require_user: true
      // }
    }
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/folder/:logicTreeId/:relationId",
    name: "Statement",
    component: Statement,

  },
  {
    path: "/branch/:relationId",
    name: "Statement",
    component: Statement,
    meta: {
      hideBranding: true
    }
  },
  {
    path: "/new-statement",
    name: "NewStatement",
    component: NewStatement,
    meta: {
      auth: {
        require_user: true
      }
    }
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    component: Bookmarks,
    meta: {
      auth: {
        require_user: true
      }
    }
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notification,
    meta: {
      auth: {
        require_user: true
      }
    }
  },
  {
    path: "/more-menu",
    name: "MoreMenu",
    component: MoreMenu,
    meta: {
      auth: {
        require_user: true
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Registration,

  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,

  },
  
];

// const router = createRouter({
//   mode: 'history',
//   history: createWebHistory(),
//   routes,
// });
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
