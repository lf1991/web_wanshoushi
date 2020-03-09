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
            {path: '/Person', component: () => import('pages/main/children/PersonDetail.vue')},
            {path: '/Total', component: () => import('pages/main/children/TotalDetail.vue')},
            {path: '/Admin', component: () => import('pages/main/admin/AdminPage.vue')},
            {path: '/subjectHandler', component: () => import('pages/main/admin/children/SubjectHandler.vue')},
            {path: '/returnHandler', component: () => import('pages/main/admin/children/returnHandler.vue')},
            {path: '/staticsHandler', component: () => import('pages/main/admin/children/staticsHandler.vue')},
            {path: '/userHandler', component: () => import('pages/main/admin/children/userHandler.vue')},
            {path: '/packageHandler', component: () => import('pages/main/admin/children/packageHandler.vue')},
            {path: '/messageHandler', component: () => import('pages/main/admin/children/messageHandler.vue')},
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
