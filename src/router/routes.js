const routes = [
    {
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/Login',
        component: () => import('layouts/LoginLayout.vue'),
    },
    {
        path: '/Main',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', redirect: '/Fill'},
            {path: '/Select', component: () => import('pages/main/children/SubjectSelect.vue')},
            {path: '/Fill', component: () => import('pages/main/children/DayFillIn.vue')},
            {path: '/Admin', component: () => import('pages/main/children/Admin.vue')},
            {path: '/Person', component: () => import('pages/main/children/PersonDetail.vue')}
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
