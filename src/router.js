import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/views/LandingPage';
import CewStepOne from "@/views/CewPage/CewStepOne.vue";


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
            path: '/eligible_patients',
            name: 'EligiblePatients',
            component: () => import('@/views/Reports/EligiblePatients'),
        },
        {
            path: '/completed_claims',
            name: 'CompletedClaims',
            component: () => import('@/views/Reports/CompletedClaims'),
        },
        {
            path: '/cew_form',
            component: () => import('@/views/CewPage'),
            children: [
                {
                    path: 'cew_step_one',
                    name: 'CewStepOne',
                    component: CewStepOne,
                },
                {
                    path: 'cew_step_two',
                    name: 'CewStepTwo',
                    component: () => import('@/views/CewPage/CewStepTwo'),
                },
                {
                    path: 'cew_step_three',
                    name: 'CewStepThree',
                    component: () => import('@/views/CewPage/CewStepThree'),
                }
            ]
        }
    ],
});
