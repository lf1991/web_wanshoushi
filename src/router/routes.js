const routes = [
    {
        path: '/',
        redirect: '/Main'
    }, {
        path: '/Main',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', redirect: '/Subject'},
            /*{path: '/home', component: () => import('pages/main/children/Home.vue')},*/
            {path: '/Subject', component: () => import('pages/main/children/Subject.vue')},
            {path: '/Admin', component: () => import('pages/main/children/Admin.vue')}
        ]
    }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        redirect: '/Main',
        //component: () => import('pages/Error404.vue')
    })
}

export default routes
