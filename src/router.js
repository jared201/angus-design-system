import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/views/LandingPage';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: LandingPage,
        },
        {
            path: '/eclaims',
            name: 'EclaimsPage',
            component: () => import('@/views/EclaimsPage'),
        },
        {
            path: '/cew_form',
            component: () => import('@/views/CewPage'),
            children: [
                {
                    path: 'cew_step_one',
                    component: () => import('@/views/CewPage/CewStepOne'),
                },
                {
                    path: 'cew_step_two',
                    component: () => import('@/views/CewPage/CewStepTwo'),
                }
            ]
        }
    ],
});
