import StartPage from "../views/StartPage.vue";
import Bolsistas from "../views/Bolsistas.vue";
import Computadores from "../views/Computadores.vue";
import Home from "../views/Home.vue";
import Projetos from "../views/Projetos.vue";
import Pesquisa from "../views/Pesquisa.vue";
import ProjetosConcluidos from "../views/ProjetosC.vue";
import Perfil from "../views/Perfil.vue";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/Blank.vue"),
    children: [
      {
        path: "",
        name: "StartPage",
        component: StartPage,
      },
    ],
  },
  {
    path: "/",
    component: () => import("../layouts/Default.vue"),
    children: [
      {
        path: "/bolsistas",
        name: "Bolsistas",
        component: Bolsistas,
      },
      {
        path: "/computadores",
        name: "Computadores",
        component: Computadores,
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/pesquisa",
        name: "Pesquisa",
        component: Pesquisa,
      },
      {
        path: "/projetos",
        name: "Projetos",
        component: Projetos,
      },
      {
        path: "/projetosc",
        name: "ProjetosC",
        component: ProjetosConcluidos,
      },
      {
        path: "/perfil",
        name: "Perfil",
        component: Perfil,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/ErrorNotFound.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];

export default routes;
