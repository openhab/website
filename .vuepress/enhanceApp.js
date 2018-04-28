const Admin = () => import("./Admin")

export default ({ Vue, options, router }) => {
  router.addRoutes([
    {
      path: "/admin",
      component: Admin
    }
  ])
}
